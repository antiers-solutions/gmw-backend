import redisHelper from '../../helpers/redis.helper';
import { mongoDBConnection, disconnectMongo } from '../../mongoDB/connection';

export const connect = async () => {
  redisHelper.startRedis();
  await mongoDBConnection();
  return true;
};

export const disconnect = async () => {
  redisHelper.stopRedis();
  await disconnectMongo();
  return true;
};
