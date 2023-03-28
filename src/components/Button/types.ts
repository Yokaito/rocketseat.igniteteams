import type { TouchableOpacity } from 'react-native';

export type Variants = 'primary' | 'secondary';

export type ButtonProps = Partial<TouchableOpacity> & {
  variant?: Variants;
  label?: string;
};

export type ButtonStyleProps = Pick<ButtonProps, 'variant'>;
