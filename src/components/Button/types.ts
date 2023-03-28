import type { TouchableOpacityProps } from 'react-native';

export type Variants = 'primary' | 'secondary';

export type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  label?: string;
};

export type ButtonStyleProps = {
  variant?: Variants;
};
