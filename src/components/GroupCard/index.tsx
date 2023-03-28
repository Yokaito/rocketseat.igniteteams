import * as S from './styles';
import * as T from './types';

export const GroupCard = ({ title, ...props }: T.GroupCardProps) => {
  return (
    <S.Container {...props}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default GroupCard;
