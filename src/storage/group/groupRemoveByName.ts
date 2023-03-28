import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storage.config';
import { groupGetAll } from './groupGetAll';

export const groupRemoveByName = async (groupDeleted: string) => {
  try {
    const storedGroups = await groupGetAll();

    const filteredGroups = storedGroups.filter(
      (group) => group !== groupDeleted
    );

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(filteredGroups)
    );

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
};
