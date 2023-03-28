import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export const Groups = () => {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
    </S.Container>
  );
};

export default Groups;
