import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray[600]};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  color: theme.colors.primary.dark,
  size: 52,
  name: 'users',
}))`
  align-self: center;
`;
