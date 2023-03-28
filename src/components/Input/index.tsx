import { useTheme } from 'styled-components/native';
import * as S from './styles';
import type * as T from './types';

export const Input = ({ inputRef, ...props }: T.InputProps) => {
  const theme = useTheme();

  return (
    <S.Container
      ref={inputRef}
      {...props}
      placeholderTextColor={theme.colors.base.gray[300]}
    />
  );
};

export default Input;
