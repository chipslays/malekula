import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const titleBar = (theme: Theme) => ({

  /**
   * Title Bar background when the window is active.
   */
  'titleBar.activeBackground': theme.ui['titleBar.activeBackground'] ?? theme.palette.bg.chrome,

  /**
   * Title Bar foreground when the window is active.
   */
  'titleBar.activeForeground': theme.ui['titleBar.activeForeground'] ?? theme.palette.fg.dim,

  /**
   * Title Bar background when the window is inactive.
   */
  'titleBar.inactiveBackground': theme.ui['titleBar.inactiveBackground'] ?? theme.palette.bg.chrome,

  /**
   * Title Bar foreground when the window is inactive.
   */
  'titleBar.inactiveForeground': theme.ui['titleBar.inactiveForeground'] ?? theme.palette.fg.muted,

  /**
   * Title bar border color.
   */
  'titleBar.border': theme.ui['titleBar.border'] ?? theme.palette.border.faint,

});

export type TitleBarKey = keyof ReturnType<typeof titleBar>;
