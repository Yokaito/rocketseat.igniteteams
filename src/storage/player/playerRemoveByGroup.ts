import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storage.config';
import { playerGetByGroup } from './playerGetByGroup';

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const players = await playerGetByGroup(group);

    const filteredPlayers = players.filter(
      (player) => player.name !== playerName
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(filteredPlayers)
    );
  } catch (error) {
    throw error;
  }
};
