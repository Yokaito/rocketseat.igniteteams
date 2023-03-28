import ButtonIcon from '@components/ButtonIcon';
import * as S from './styles';
import type * as T from './types';

export const PlayerCard = ({ name, onRemove }: T.PlayerCardProps) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" variant="secondary" onPress={onRemove} />
    </S.Container>
  );
};

export default PlayerCard;
