import * as S from './styles';
import type * as T from './types';

export const Highlight = ({ subTitle, title }: T.HighlightProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
};

export default Highlight;
