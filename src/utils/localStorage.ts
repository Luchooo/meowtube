import { TTL_LOCAL_STORAGE } from "../constants";
import { DataToStore } from "../types";

export const localStorage = (key: string) => {
  const setItem = <T>(value: T): void => {
    try {
      const now = new Date();
      const item = {
        value: value,
        expiry: now.getTime() + TTL_LOCAL_STORAGE,
      };
      window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = <T>(): T | null => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return null;
      const itemTemp: DataToStore<T> = JSON.parse(item);
      const now = new Date();
      if (now.getTime() > itemTemp.expiry) {
        window.localStorage.removeItem(key);
        return null;
      }
      return itemTemp.value;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const removeItem = (): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return { setItem, getItem, removeItem };
};
