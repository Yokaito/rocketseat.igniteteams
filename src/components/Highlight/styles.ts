import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.xl}px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.base.white};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  color: ${({ theme }) => theme.colors.base.gray[300]};
`;
