import 'styled-components';
import type { theme } from './index';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
