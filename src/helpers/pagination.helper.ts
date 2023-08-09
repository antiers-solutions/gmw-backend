import modelsObejct from '../models/index';
import MongoDataHelper from './mongo.data.helper';

class PaginationMongo {
  static instance: PaginationMongo = null;
  async fetchDataWithPagination(
    name: string,
    pageNumber: number,
    pageSize: number
  ) {
    try {
      // pageNumber is the page we want to be in e.g 5
      //   pageSize is the number of items we want to get on a single page e.g 15 per page

      const skipItems = (pageNumber - 1) * pageSize;

      if (name === 'Project') {
        const pipeline = [{ $skip: skipItems }, { $limit: pageSize }];

        const result = await modelsObejct.Project.aggregate(pipeline);
        return result;
      }

      if (name === 'Team') {
        const pipeline = [{ $skip: skipItems }, { $limit: pageSize }];

        const result = await modelsObejct.Team.aggregate(pipeline);

        return result;
      }
    } catch (error) {
      return error;
    }
  }
}

export default new PaginationMongo();
