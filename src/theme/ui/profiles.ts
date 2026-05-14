import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const profiles = (theme: Theme) => ({

  /**
   * Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  'profileBadge.background': theme.ui['profileBadge.background'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.
   */
  'profileBadge.foreground': theme.ui['profileBadge.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * The color of the Profiles editor splitview sash border.
   */
  'profiles.sashBorder': theme.ui['profiles.sashBorder'] ?? theme.palette.border.faint,

});

export type ProfilesKey = keyof ReturnType<typeof profiles>;
