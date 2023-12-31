import mongoose, { Model } from 'mongoose';
import { DATA_MODELS } from '../constants';
import modelsObejct from '../models/index';
import { log } from '../utils/helper.utils';

//mongodb curd helper
class MongoDataHelper {
  static instance: MongoDataHelper = null;

  static getInstance = () => {
    if (!MongoDataHelper.instance) {
      MongoDataHelper.instance = new MongoDataHelper();
      delete MongoDataHelper.constructor;
    }
    return MongoDataHelper.instance;
  };

  /**
   * get the total document count stored in choosen collection
   * @param name
   * @param query
   * @returns
   */
  public getCount = async (name: string, query?: any) => {
    try {
      this._checkModel(name);

      if (query) {
        // gets count of the number present in the db based on the query
        const result = await this._getModel(name).find(query).count();
        return result;
      } else {
        // gets count of all the data present in the db collection
        const result = await this._getModel(name)?.count();
        return result;
      }
    } catch (err) {
      log.red('Error while getting the document count from mongodb:\n', err);
      return 0;
    }
  };

  /**
   * save the single data object
   * @param name
   * @param data
   * @returns
   */
  public savaData = async (name: string, data: object) => {
    try {
      this._checkModel(name);
      const Model = this._getModel(name);
      const DataObject = new Model(data);
      const result = await DataObject.save();
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * save the data into bulk
   * @param name
   * @param data
   * @returns
   */
  public bulkSaveData = async (name: string, data: any[]) => {
    try {
      this._checkModel(name);
      const Model = this._getModel(name);
      // inserts multiple data in the db collection at a specific time
      const result = await Model.insertMany(data);
      return result;
    } catch (err) {
      log.red('Error while saving data bluk data:\n', err.message);
      return null;
    }
  };

  /**
   * this helper is use to fetch data according to the query provided
   * @param name
   * @param query
   * @returns
   */
  public findAndQueryData = async (name: string, query: any) => {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).find(query);
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * this helper is use to fetch data according to the query provided with selected data
   * @param name
   * @param query
   * @param selectedFields
   * @returns
   */
  public findAndQueryDataWithSelectedColumns = async (
    name: string,
    query: any,
    selectedFields: string[]
  ) => {
    try {
      this._checkModel(name);

      // finds the data based on the query and selected fields provided and then joins them
      const result = await this._getModel(name)
        .find(query)
        .select(selectedFields.join(' '));

      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   *  this helper is use to fetch data according to the query provided with selected data
   * @param name
   * @param query
   * @param selectedFields
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  public findSelectedDataWithPagination = async (
    name: string,
    query: any,
    selectedFields: string[],
    pageNumber: number,
    pageSize: number,
    sortQuery?: any
  ) => {
    try {
      const skipItems = (pageNumber - 1) * pageSize;

      this._checkModel(name);
      // finds the data based on the query and selected fields provided and then joins them in paginated way

      if (sortQuery) {
        const result = await this._getModel(name)
          .find(query)
          .sort(sortQuery)
          .select(selectedFields.join(' '))
          .skip(skipItems)
          .limit(pageSize);

        return result;
      } else {
        const result = await this._getModel(name)
          .find(query)
          .select(selectedFields.join(' '))
          .skip(skipItems)
          .limit(pageSize);

        return result;
      }

      // return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * if data found then this function will update that data otherwise insert that data
   * @param name
   * @param filter
   * @param data
   * @returns
   */
  public findOneAndUpdate = async (
    name: string,
    filter: unknown,
    data: unknown
  ) => {
    try {
      this._checkModel(name);

      // updated the data in the db collection based on the query provided
      const result = await this._getModel(name).findOneAndUpdate(filter, data, {
        upsert: true
      });
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * this helper is use to fetch data according to the query provided and return the paginated data
   * @param name
   * @param query
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  public findAndQueryDataWithPagination = async (
    name: string,
    query: any,
    pageNumber: number,
    pageSize: number
  ) => {
    const skipItems = (pageNumber - 1) * pageSize;

    try {
      this._checkModel(name);
      const result = await this._getModel(name)
        .find(query)
        .skip(skipItems)
        .limit(pageSize);

      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * this helper is use to update any single data field in a collections of mongodb
   * @param name
   * @param id
   * @param update
   * @returns
   */
  public updateData = async (name: string, id: object, update: object) => {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).updateOne(id, update);
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * this helper is use to remove  data field in a collection of mongodb
   * @param name
   * @param deleteObj
   * @returns
   */
  public deleteData = async (name: string, deleteObj: object) => {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).deleteMany(deleteObj);
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * this helper is use to remove single data field in a collection of mongodb
   * @param name
   * @param deleteObj
   * @returns
   */
  public removeSingleData = async (name: string, deleteObj: object) => {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).deleteOne(deleteObj);
      return result;
    } catch (error) {
      return null;
    }
  };

  /**
   * clear the all collections except users collection
   * @returns boolean
   */
  public clearCollectionsData = async () => {
    try {
      for (const modelKey in DATA_MODELS) {
        if (modelKey === DATA_MODELS.User) continue;
        const model = this._getModel(modelKey);
        await model.deleteMany();
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  public dropDB = async () => {
    try {
      const isDroped = await mongoose.connection?.db.dropDatabase();
      return isDroped;
    } catch (err) {
      return false;
    }
  };

  //---------------------------------internal methods -----------------------------------/
  // check if the model exist or not if not then throw error
  _checkModel = (model: string) => {
    if (!Object.keys(DATA_MODELS).includes(model))
      throw new Error('Model is not defined.');
  };

  // get the selected moongose model
  _getModel = (model: string): Model<any> => {
    switch (model) {
      case DATA_MODELS.Milestone:
        return modelsObejct.Milestone;
      case DATA_MODELS.Project:
        return modelsObejct.Project;
      case DATA_MODELS.Team:
        return modelsObejct.Team;
      case DATA_MODELS.User:
        return modelsObejct.User;
      case DATA_MODELS.Proposal:
        return modelsObejct.Proposal;

      default:
        return null;
    }
  };
}

export default MongoDataHelper.getInstance();
