import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const panelChat = (theme: Theme) => ({

  /**
   * The border color for the current interactive code cell when the editor has focus.
   */
  'interactive.activeCodeBorder': theme.ui['interactive.activeCodeBorder'] ?? theme.palette.border.focus,

  /**
   * The border color for the current interactive code cell when the editor does not have focus.
   */
  'interactive.inactiveCodeBorder': theme.ui['interactive.inactiveCodeBorder'] ?? theme.palette.border.default,

});

export type PanelChatKey = keyof ReturnType<typeof panelChat>;
