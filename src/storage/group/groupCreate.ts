import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storage.config';
import { AppError } from '@utils/AppError';
import { groupGetAll } from './groupGetAll';

export const groupCreate = async (groupName: string) => {
  try {
    const storedGroups = await groupGetAll();

    const groupAlreadyExists = storedGroups.includes(groupName);

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.');
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, groupName])
    );
  } catch (error) {
    throw error;
  }
};
