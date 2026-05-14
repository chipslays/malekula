import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const markdown = (theme: Theme) => ({

  /**
   * Foreground color for note alerts in markdown.
   */
  'markdownAlert.note.foreground': theme.ui['markdownAlert.note.foreground'] ?? theme.palette.state.info.fg,

  /**
   * Foreground color for tip alerts in markdown.
   */
  'markdownAlert.tip.foreground': theme.ui['markdownAlert.tip.foreground'] ?? theme.palette.state.success.fg,

  /**
   * Foreground color for important alerts in markdown.
   */
  'markdownAlert.important.foreground': theme.ui['markdownAlert.important.foreground'] ?? theme.palette.fg.link,

  /**
   * Foreground color for warning alerts in markdown.
   */
  'markdownAlert.warning.foreground': theme.ui['markdownAlert.warning.foreground'] ?? theme.palette.state.warning.fg,

  /**
   * Foreground color for caution alerts in markdown.
   */
  'markdownAlert.caution.foreground': theme.ui['markdownAlert.caution.foreground'] ?? theme.palette.state.error.fg,

});

export type MarkdownKey = keyof ReturnType<typeof markdown>;
