import * as S from './styles';
import type * as T from './types';

export const ListEmpty = ({ message = 'Não há grupos' }: T.ListEmptyProps) => {
  return (
    <S.Container>
      <S.Title>{message}</S.Title>
    </S.Container>
  );
};

export default ListEmpty;
