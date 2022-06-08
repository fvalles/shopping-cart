import 'styled-components';
import { ColorsType } from './theme/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsType;
  }
}
