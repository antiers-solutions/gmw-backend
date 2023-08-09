import * as redis from 'redis';

class Redis {
  public client: redis.RedisClientType; // this is client variable declared for accessing redis client in the whole class

  // this is startRedis funtion to connect to the redis client
  public async startRedis() {
    // creating the redis client for all the redis operations
    this.client = redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    });

    this.client.on('error', (err: any) => {
      throw new Error(`Hash map '${err}' does not exist.`);
    });
    await this.client.connect();

    console.log('Redis Connected Successfully');
  }
  public async stopRedis() {
    await this.client.disconnect();
  }

  /**
   * this function is use to store cokkies in hash map dataset in redis
  /**
   * @param hashMap 
   * @param data 
   * @param expirationSeconds 
   * @returns 
   */
  public async storeInRedis(
    hashMap: string,
    data: any,
    expirationSeconds?: any
  ) {
    try {
      // creating an hash map for storing data in the redis
      const result = await this.client.hSet(hashMap, data);

      if (expirationSeconds) {
        await this.client.expireAt(hashMap, expirationSeconds);
      }

      return result;
    } catch (error) {
      return null;
    }
  }

  /**
   *  this function is use to get all data stored in hash map dataset in redis
   * @param hashMap
   * @returns
   */

  public async getDataFromRedis(hashMap: string) {
    try {
      // getting all the data present in the redis storage for the specific hashmap
      const userSession = await this.client.hGetAll(hashMap);

      return userSession;
    } catch (error) {
      return null;
    }
  }

  /**
   * this function is use to update data stored in hash map dataset in redis using the cokkie token as key
   * @param hashMap
   * @param data
   * @returns
   */

  public async updateInRedis(hashMap: string, data: any) {
    try {
      // use to update the data in the hashmap
      const exists = await this.client.exists(hashMap);
      if (exists) {
        const result = await this.client.hSet(hashMap, data);

        return result;
      }
    } catch (error) {
      return null;
    }
  }

  /**
   * this function is use to remove data stored in hash map dataset in redis using the cokkie token as key
   * @param hashMap
   * @param keys
   * @returns
   */

  public async removeFromRedis(hashMap: string, keys: string | string[]) {
    try {
      // find is the hashmap is present in the redis storage
      const exists = await this.client.exists(hashMap);
      if (exists) {
        // if exists then delete the data with the key provided of the hash map
        const result = await this.client.hDel(hashMap, keys);

        return result;
      }
    } catch (error) {
      return null;
    }
  }

  /**
   * this function is use to get data stored in hash map dataset in redis using the cokkie token as key
   * @param hashMap
   * @param key
   * @returns
   */

  public async getDataFromRedisKey(hashMap: string, key: string) {
    try {
      const exists = await this.client.exists(hashMap);
      if (exists) {
        // if exists then gets the data from the redis hashmap with a specific key
        const result = await this.client.hGet(hashMap, key);

        return result;
      }
    } catch (error) {
      return null;
    }
  }
}
export default new Redis();
