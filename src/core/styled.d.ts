import 'styled-components';
import { ColorsType } from './theme/colors';
import { FontsType } from './theme/fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsType;
    Fonts: FontsType;
  }
}
