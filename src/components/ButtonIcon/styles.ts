import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as T from './types';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)<T.ButtonStyleIconProps>`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<T.ButtonStyleIconProps>(
  ({ theme, variant }) => ({
    color:
      variant === 'primary'
        ? theme.colors.primary.dark
        : theme.colors.secondary.light,
    size: 24,
  })
)``;
