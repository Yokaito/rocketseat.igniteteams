import type * as T from './types';
import * as S from './styles';

export const Button = ({
  variant = 'primary',
  label = 'Button',
  ...props
}: T.ButtonProps) => {
  return (
    <S.Container variant={variant} {...props}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export default Button;
