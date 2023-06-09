import { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import * as S from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupGetAll } from '@storage/group/groupGetAll';

export const Groups = () => {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigation.navigate('new');
  };

  const fetchGroups = async () => {
    try {
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(_item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma encontrada" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button
        variant="primary"
        label="Criar nova turma"
        onPress={handleNewGroup}
      />
    </S.Container>
  );
};

export default Groups;
