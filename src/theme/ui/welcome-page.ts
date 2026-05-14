import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const welcomePage = (theme: Theme) => ({

  /**
   * Background color for the Welcome page.
   */
  'welcomePage.background': theme.ui['welcomePage.background'] ?? theme.palette.bg.editor,

  /**
   * Foreground color for the Welcome page progress bars.
   */
  'welcomePage.progress.background': theme.ui['welcomePage.progress.background'] ?? theme.palette.bg.workbench,

  /**
   * Background color for the Welcome page progress bars.
   */
  'welcomePage.progress.foreground': theme.ui['welcomePage.progress.foreground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Background color for the tiles on the Welcome page.
   */
  'welcomePage.tileBackground': theme.ui['welcomePage.tileBackground'] ?? theme.palette.bg.raised,

  /**
   * Hover background color for the tiles on the Welcome page.
   */
  'welcomePage.tileHoverBackground': theme.ui['welcomePage.tileHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Border color for the tiles on the Welcome page.
   */
  'welcomePage.tileBorder': theme.ui['welcomePage.tileBorder'] ?? theme.palette.border.faint,

  /**
   * Background color for the embedded editors on the Interactive Playground.
   */
  'walkThrough.embeddedEditorBackground': theme.ui['walkThrough.embeddedEditorBackground'] ?? theme.palette.bg.workbench,

  /**
   * Foreground color of the heading of each walkthrough step.
   */
  'walkthrough.stepTitle.foreground': theme.ui['walkthrough.stepTitle.foreground'] ?? theme.palette.fg.default,

});

export type WelcomePageKey = keyof ReturnType<typeof welcomePage>;
