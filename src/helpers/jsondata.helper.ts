import { log } from '../utils/helper.utils';
import { getGrantData } from '../db-dump';
import mongoDataHelper from './mongo.data.helper';
import { ERROR_MESSAGES } from '../constants';

export const loadDataFromJsonFile = async () => {
  try {
    const grantData: any = getGrantData();

    // if data not found return false
    if (!grantData)
      throw new Error(ERROR_MESSAGES.ERROR_WHILE_READING_DATA_FROM_FILE);

    for (const dataKey in grantData) {
      const dataCount = await mongoDataHelper.getCount(dataKey);
      // check if there is data inside collection or just projects collection
      // is droped due to some issue
      if (!dataCount) {
        const isDataLoaded = await mongoDataHelper.bulkSaveData(
          dataKey,
          grantData[dataKey]
        );
        if (!isDataLoaded)
          throw new Error(ERROR_MESSAGES.ERROR_WHILE_SAVING_DATA_FROM_FILE);
      }
    }
    log.green('Data Successfully Stored to DB from json file');
    return true;
  } catch (err) {
    // clear the collection data that if some data is parsed and inserted into db successfully
    await mongoDataHelper.clearCollectionsData();
    log.red('Error while saving the grant data from json file\n', err.message);
    return false;
  }
};
