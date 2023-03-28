import * as S from './styles';
import type * as T from './types';

export const ButtonIcon = ({
  variant = 'primary',
  icon,
  ...props
}: T.ButtonIconProps) => {
  return (
    <S.Container variant={variant} {...props}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  );
};

export default ButtonIcon;
