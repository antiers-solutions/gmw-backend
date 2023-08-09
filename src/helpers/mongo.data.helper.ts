import { Model } from 'mongoose';
import { DATA_MODELS } from '../constants';
import modelsObejct from '../models/index';

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
  async getCount(name: string, query?: any) {
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
    } catch (error) {
      console.log('error from count data in db query', error);
      return null;
    }
  }

  /**
   * save the single data object
   * @param name
   * @param data
   * @returns
   */
  async savaData(name: string, data: object) {
    try {
      this._checkModel(name);
      const Model = this._getModel(name);
      console.log(Model);
      const DataObject = new Model(data);
      const result = await DataObject.save();
      return result;
    } catch (error) {
      console.log('error from save query', error);
      return null;
    }
  }

  /**
   * save the data into bulk
   * @param name
   * @param data
   * @returns
   */
  async bulkSaveData(name: string, data: any[]) {
    try {
      this._checkModel(name);
      const Model = this._getModel(name);
      // inserts multiple data in the db collection at a specific time
      const result = await Model.insertMany(data);
      return result;
    } catch (error) {
      console.log('error from save query', error);
      return null;
    }
  }

  /**
   * this helper is use to fetch data according to the query provided
   * @param name
   * @param query
   * @returns
   */

  async findAndQueryData(name: string, query: any) {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).find(query);
      return result;
    } catch (error) {
      console.log('error from  find query helper', error.message);
      return null;
    }
  }

  /**
   * this helper is use to fetch data according to the query provided with selected data
   * @param name
   * @param query
   * @param selectedFields
   * @returns
   */

  async findAndQueryDataWithSelectedColumns(
    name: string,
    query: any,
    selectedFields: string[]
  ) {
    try {
      this._checkModel(name);

      // finds the data based on the query and selected fields provided and then joins them
      const result = await this._getModel(name)
        .find(query)
        .select(selectedFields.join(' '));

      return result;
    } catch (error) {
      console.log('error from find query helper', error);
      return null;
    }
  }

  /**
   *  this helper is use to fetch data according to the query provided with selected data
   * @param name
   * @param query
   * @param selectedFields
   * @param pageNumber
   * @param pageSize
   * @returns
   */

  async findAndQueryDataWithSelectedColumnsAndPagination(
    name: string,
    query: any,
    selectedFields: string[],
    pageNumber: number,
    pageSize: number
  ) {
    try {
      const skipItems = (pageNumber - 1) * pageSize;

      this._checkModel(name);
      // finds the data based on the query and selected fields provided and then joins them in paginated way

      const result = await this._getModel(name)
        .find(query)
        .select(selectedFields.join(' '))
        .skip(skipItems)
        .limit(pageSize);

      return result;
    } catch (error) {
      console.log('error from find query helper', error);
      return null;
    }
  }

  /**
   * if data found then this function will update that data otherwise insert that data
   * @param name
   * @param filter
   * @param data
   * @returns
   */
  async findOneAndUpdate(name: string, filter: unknown, data: unknown) {
    try {
      this._checkModel(name);

      // updated the data in the db collection based on the query provided
      const result = await this._getModel(name).findOneAndUpdate(filter, data, {
        upsert: true
      });
      return result;
    } catch (error) {
      console.log('error in findOneAndUpdate : ', error);
      return null;
    }
  }

  /**
   * this helper is use to fetch data according to the query provided and return the paginated data
   * @param name
   * @param query
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  async findAndQueryDataWithPagination(
    name: string,
    query: any,
    pageNumber: number,
    pageSize: number
  ) {
    const skipItems = (pageNumber - 1) * pageSize;

    try {
      this._checkModel(name);
      const result = await this._getModel(name)
        .find(query)
        .skip(skipItems)
        .limit(pageSize);

      return result;
    } catch (error) {
      console.log('error from  find query helper', error);
      return null;
    }
  }

  /**
   * this helper is use to update any single data field in a collections of mongodb
   * @param name
   * @param id
   * @param update
   * @returns
   */

  async updateData(name: string, id: object, update: object) {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).updateOne(id, update);
      return result;
    } catch (error) {
      console.log('error from update data helper function', error);
      return null;
    }
  }

  /**
   * this helper is use to remove  data field in a collection of mongodb
   * @param name
   * @param deleteObj
   * @returns
   */

  async deleteData(name: string, deleteObj: object) {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).deleteMany(deleteObj);
      return result;
    } catch (error) {
      console.log('error from update data helper function', error);
      return null;
    }
  }

  /**
   * this helper is use to remove single data field in a collection of mongodb
   * @param name
   * @param deleteObj
   * @returns
   */
  async removeSingleData(name: string, deleteObj: object) {
    try {
      this._checkModel(name);
      const result = await this._getModel(name).deleteOne(deleteObj);
      return result;
    } catch (error) {
      console.log('error from update data helper function', error);
      return null;
    }
  }

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
