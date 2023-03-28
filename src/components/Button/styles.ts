import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import type * as T from './types';

const variantStyles = (variant: T.Variants) => {
  return {
    primary: css`
      background-color: ${({ theme }) => theme.colors.primary.dark};
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors.secondary.dark};
    `,
  }[variant];
};

export const Container = styled(TouchableOpacity)<T.ButtonStyleProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  ${({ variant = 'primary' }) => variantStyles(variant)}
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  color: ${({ theme }) => theme.colors.base.white};
`;
