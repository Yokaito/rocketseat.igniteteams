import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
import { PLAYER_COLLECTION } from '@storage/storage.config';
import type { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playerGetByGroup';

export const playerAddByGroup = async (
  player: PlayerStorageDTO,
  group: string
) => {
  try {
    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayers.some(
      (storedPlayer) => storedPlayer.name === player.name
    );

    if (playerAlreadyExists) {
      throw new AppError('Já existe um jogador cadastrado com esse nome.');
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...storedPlayers, player])
    );
  } catch (error) {
    throw error;
  }
};
