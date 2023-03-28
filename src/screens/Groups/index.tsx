import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import GroupCard from '@components/GroupCard';

export const Groups = () => {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
      <GroupCard title="Turma 1" />
    </S.Container>
  );
};

export default Groups;
