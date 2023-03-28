import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

export const NewGroup = () => {
  const navigate = useNavigation();
  const [group, setGroup] = useState<string>('');

  const handleNewGroup = useCallback(async () => {
    try {
      if (!group || group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma');
      }

      await groupCreate(group);
      navigate.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Erro ao criar grupo');
        console.warn(error);
      }
    }
  }, [group, navigate]);

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subTitle="crie a turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />
        <Button
          label="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
