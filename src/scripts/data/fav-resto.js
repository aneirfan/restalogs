/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavRestorandb = {
  // async getResto(id) {
  //   return (await dbPromise).get(OBJECT_STORE_NAME, id);
  // },
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  // async putResto(restaurant) {
  //   return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  // },
  async putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestaurants(query) {
  },
};

export default FavRestorandb;
