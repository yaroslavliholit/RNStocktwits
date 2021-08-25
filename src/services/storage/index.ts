import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  async getData(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error(e);
    }
  },
  async setData<T>(key: string, data: T) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  },
};

export default Storage;
