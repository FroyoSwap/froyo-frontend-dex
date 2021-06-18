// eslint-disable-next-line import/no-unresolved
import { FroyoTheme } from '@pantherswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends FroyoTheme {}
}
