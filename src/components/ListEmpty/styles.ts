import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.base.gray[300]};
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;
