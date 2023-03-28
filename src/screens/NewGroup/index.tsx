import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const NewGroup = () => {
  const navigate = useNavigation();
  const [group, setGroup] = useState<string>('');
  const handleNewGroup = () => {
    navigate.navigate('players', { group });
  };

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
