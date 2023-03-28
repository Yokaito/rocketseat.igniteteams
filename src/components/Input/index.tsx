import { useTheme } from 'styled-components/native';
import * as S from './styles';
import type * as T from './types';

export const Input = ({ ...props }: T.InputProps) => {
  const theme = useTheme();

  return (
    <S.Container
      {...props}
      placeholderTextColor={theme.colors.base.gray[300]}
    />
  );
};

export default Input;
