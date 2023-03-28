import { useState } from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export const Groups = () => {
  const [groups] = useState<string[]>([
    'Turma 1',
    'Turma 2',
    'Turma 3',
    'Turma 4',
    'Turma 5',
    'Turma 6',
  ]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(_item, idx) => idx.toString()}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button variant="primary" label="Criar nova turma" />
    </S.Container>
  );
};

export default Groups;
