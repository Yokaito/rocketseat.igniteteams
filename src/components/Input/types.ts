import type { TextInputProps, TextInput } from 'react-native';

export type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};
