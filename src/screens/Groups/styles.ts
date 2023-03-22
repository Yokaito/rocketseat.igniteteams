import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 24px;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
