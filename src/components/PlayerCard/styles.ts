import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.base.gray[500]};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.size.md}px;
    color: ${theme.colors.base.gray[200]};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.colors.base.gray[200],
  size: 24,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
