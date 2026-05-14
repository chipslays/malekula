import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const banner = (theme: Theme) => ({

  /**
   * Banner background color.
   */
  'banner.background': theme.ui['banner.background'] ?? theme.palette.state.info.bg,

  /**
   * Banner foreground color.
   */
  'banner.foreground': theme.ui['banner.foreground'] ?? theme.palette.state.info.fg,

  /**
   * Color for the icon in front of the banner text.
   */
  'banner.iconForeground': theme.ui['banner.iconForeground'] ?? theme.palette.state.info.fg,

});

export type BannerKey = keyof ReturnType<typeof banner>;
