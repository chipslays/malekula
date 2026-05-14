import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const inlineChat = (theme: Theme) => ({

  /**
   * Background color of the interactive editor widget.
   */
  'inlineChat.background': theme.ui['inlineChat.background'] ?? theme.palette.bg.overlay,

  /**
   * Foreground color of the interactive editor widget
   */
  'inlineChat.foreground': theme.ui['inlineChat.foreground'] ?? theme.palette.fg.default,

  /**
   * Border color of the interactive editor widget.
   */
  'inlineChat.border': theme.ui['inlineChat.border'] ?? theme.palette.border.default,

  /**
   * Shadow color of the interactive editor widget.
   */
  'inlineChat.shadow': theme.ui['inlineChat.shadow'] ?? theme.palette.shadow.lg,

  /**
   * Border color of the interactive editor input.
   */
  'inlineChatInput.border': theme.ui['inlineChatInput.border'] ?? theme.palette.border.default,

  /**
   * Border color of the interactive editor input when focused.
   */
  'inlineChatInput.focusBorder': theme.ui['inlineChatInput.focusBorder'] ?? theme.palette.border.focus,

  /**
   * Foreground color of the interactive editor input placeholder.
   */
  'inlineChatInput.placeholderForeground': theme.ui['inlineChatInput.placeholderForeground'] ?? theme.palette.input.placeholder,

  /**
   * Background color of the interactive editor input.
   */
  'inlineChatInput.background': theme.ui['inlineChatInput.background'] ?? theme.palette.input.bg,

  /**
   * Background color of inserted text in the interactive editor input.
   */
  'inlineChatDiff.inserted': theme.ui['inlineChatDiff.inserted'] ?? theme.palette.diff.added,

  /**
   * Background color of removed text in the interactive editor input.
   */
  'inlineChatDiff.removed': theme.ui['inlineChatDiff.removed'] ?? theme.palette.diff.removed,

});

export type InlineChatKey = keyof ReturnType<typeof inlineChat>;
