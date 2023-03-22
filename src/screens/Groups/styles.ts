import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.base.gray[600]};
  flex: 1;
  padding: 24px;
`;
