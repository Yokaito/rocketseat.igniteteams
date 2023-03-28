import { useState, useCallback, useEffect, useRef } from 'react';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import { FlatList } from 'react-native';
import * as S from './styles';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import { Alert, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { useNavigation } from '@react-navigation/native';

type RouteParams = {
  group: string;
};

export const Players = () => {
  const navigator = useNavigation();
  const inputRef = useRef<TextInput>(null);
  const [playerName, setPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const route = useRoute();

  const { group } = route.params as RouteParams;

  const fetchPlayersByTeam = useCallback(async () => {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.warn(error);
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado'
      );
    }
  }, [team, group]);

  const handleAddPlayer = useCallback(async () => {
    if (!playerName || playerName.trim().length === 0) {
      return Alert.alert(
        'Nova Pessoa',
        'Informe o nome da pessoa para adicionar'
      );
    }

    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      inputRef.current?.blur();
      fetchPlayersByTeam();
      setPlayerName('');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      } else {
        Alert.alert('Nova Pessoa', 'Erro ao criar pessoa');
        console.warn(error);
      }
    }
  }, [playerName, team, fetchPlayersByTeam]);

  const handlePlayerRemove = useCallback(
    async (name: string) => {
      try {
        await playerRemoveByGroup(name, group);
        fetchPlayersByTeam();
      } catch (error) {
        console.warn(error);
        Alert.alert('Pessoas', 'Não foi possível remover a pessoa');
      }
    },
    [group, fetchPlayersByTeam]
  );

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigator.navigate('groups');
    } catch (error) {
      console.warn(error);
      Alert.alert('Remover Grupo', 'Não foi possível remover o grupo');
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert('Remover Turma', 'Deseja remover a turma?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: groupRemove,
      },
    ]);
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [fetchPlayersByTeam]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <S.Form>
        <Input
          inputRef={inputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={playerName}
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        contentContainerStyle={[
          players.length === 0 && { flex: 1 },
          { paddingBottom: 50 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button
        label="Remove Turma"
        variant="secondary"
        onPress={handleGroupRemove}
      />
    </S.Container>
  );
};

export default Players;
