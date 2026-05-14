import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const badge = (theme: Theme) => ({

  /**
   * Badge foreground color.
   */
  'badge.foreground': theme.ui['badge.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Badge background color.
   */
  'badge.background': theme.ui['badge.background'] ?? theme.palette.ctrl.primary.bg,

});

export type BadgeKey = keyof ReturnType<typeof badge>;
