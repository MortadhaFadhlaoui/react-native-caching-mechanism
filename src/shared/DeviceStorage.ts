import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value, storage_Key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storage_Key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (storage_Key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storage_Key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};
