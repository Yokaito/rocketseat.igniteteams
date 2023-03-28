import { MaterialIcons } from '@expo/vector-icons';
import type { TouchableOpacityProps } from 'react-native';

type Variant = 'primary' | 'secondary';

export type ButtonIconProps = TouchableOpacityProps & {
  variant?: Variant;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export type ButtonStyleIconProps = {
  variant: Variant;
};
