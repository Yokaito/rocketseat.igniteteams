import * as S from './styles';
import type * as T from './types';

export const Filter = ({
  isActive = false,
  title,
  ...props
}: T.FilterProps) => {
  return (
    <S.Container isActive={isActive} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Filter;
