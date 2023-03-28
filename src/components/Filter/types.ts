import { TouchableOpacityProps } from 'react-native';

export type FilterProps = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};

export type FilterStyleProps = Pick<FilterProps, 'isActive'>;
