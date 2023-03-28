import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Input from '@components/Input';
import * as S from './styles';

export const NewGroup = () => {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subTitle="crie a turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button label="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
};

export default NewGroup;
