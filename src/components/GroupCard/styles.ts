import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.base.gray[500]};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  color: ${({ theme }) => theme.colors.base.gray[200]};
  font-family: ${({ theme }) => theme.fonts.family.regular};
  flex: 1;
`;

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  name: 'users',
  size: 32,
  color: theme.colors.primary.dark,
}))`
  margin-right: 20px;
`;
