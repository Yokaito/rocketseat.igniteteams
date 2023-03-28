import { useState } from 'react';
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
import { useRoute } from '@react-navigation/native';

type RouteParams = {
  group: string;
};

export const Players = () => {
  const [team, setTeam] = useState('');
  const [players] = useState([]);
  const route = useRoute();

  const { group } = route.params as RouteParams;

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="adicione a galera e separe os times" />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        contentContainerStyle={[
          players.length === 0 && { flex: 1 },
          { paddingBottom: 50 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button label="Remove Turma" variant="secondary" />
    </S.Container>
  );
};

export default Players;
