import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.base.gray[600]};
  flex: 1;
  padding: 24px;
`;
