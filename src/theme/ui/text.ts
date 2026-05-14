import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const text = (theme: Theme) => ({

  /**
   * Background color for block quotes in text.
   */
  'textBlockQuote.background': theme.ui['textBlockQuote.background'] ?? theme.palette.bg.workbench,

  /**
   * Border color for block quotes in text.
   */
  'textBlockQuote.border': theme.ui['textBlockQuote.border'] ?? theme.palette.border.focus,

  /**
   * Background color for code blocks in text.
   */
  'textCodeBlock.background': theme.ui['textCodeBlock.background'] ?? theme.palette.bg.workbench,

  /**
   * Foreground color for links in text when clicked on and on mouse hover.
   */
  'textLink.activeForeground': theme.ui['textLink.activeForeground'] ?? theme.palette.fg.linkHover,

  /**
   * Foreground color for links in text.
   */
  'textLink.foreground': theme.ui['textLink.foreground'] ?? theme.palette.fg.link,

  /**
   * Foreground color for preformatted text segments.
   */
  'textPreformat.foreground': theme.ui['textPreformat.foreground'] ?? theme.palette.fg.default,

  /**
   * Background color for preformatted text segments.
   */
  'textPreformat.background': theme.ui['textPreformat.background'] ?? theme.palette.bg.workbench,

  /**
   * Border color for preformatted text segments.
   */
  'textPreformat.border': theme.ui['textPreformat.border'] ?? theme.palette.border.default,

  /**
   * Color for text separators.
   */
  'textSeparator.foreground': theme.ui['textSeparator.foreground'] ?? theme.palette.border.default,

});

export type TextKey = keyof ReturnType<typeof text>;
