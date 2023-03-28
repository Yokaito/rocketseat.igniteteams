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

export const Players = () => {
  const [teams, setTeams] = useState('Time A');
  const [players] = useState([
    'Guilherme',
    'Rodrigo',
    'Diego',
    'Gabriel',
    'Teste',
    'Teste1',
    'Teste2',
    'Teste3',
    'Teste4',
    'Teste5',
  ]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C', 'Time D', 'Time E']}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === teams}
              onPress={() => setTeams(item)}
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
