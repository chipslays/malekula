import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const chat = (theme: Theme) => ({

  /**
   * The border color of a chat request.
   */
  'chat.requestBorder': theme.ui['chat.requestBorder'] ?? theme.palette.border.faint,

  /**
   * The background color of a chat request.
   */
  'chat.requestBackground': theme.ui['chat.requestBackground'] ?? theme.palette.bg.workbench,

  /**
   * The background color of a chat slash command.
   */
  'chat.slashCommandBackground': theme.ui['chat.slashCommandBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * The foreground color of a chat slash command.
   */
  'chat.slashCommandForeground': theme.ui['chat.slashCommandForeground'] ?? theme.palette.fg.link,

  /**
   * The background color of a chat avatar.
   */
  'chat.avatarBackground': theme.ui['chat.avatarBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * The foreground color of a chat avatar.
   */
  'chat.avatarForeground': theme.ui['chat.avatarForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * The foreground color of a chat edited file in the edited file list.
   */
  'chat.editedFileForeground': theme.ui['chat.editedFileForeground'] ?? theme.palette.fg.default,

  /**
   * Foreground color of lines added in chat code block pill.
   */
  'chat.linesAddedForeground': theme.ui['chat.linesAddedForeground'] ?? theme.palette.state.success.fg,

  /**
   * Foreground color of lines removed in chat code block pill.
   */
  'chat.linesRemovedForeground': theme.ui['chat.linesRemovedForeground'] ?? theme.palette.state.error.fg,

  /**
   * Border color of code blocks within the chat request bubble.
   */
  'chat.requestCodeBorder': theme.ui['chat.requestCodeBorder'] ?? theme.palette.border.default,

  /**
   * Background color of the chat request bubble.
   */
  'chat.requestBubbleBackground': theme.ui['chat.requestBubbleBackground'] ?? theme.palette.bg.workbench,

  /**
   * Background color of the chat request bubble on hover.
   */
  'chat.requestBubbleHoverBackground': theme.ui['chat.requestBubbleHoverBackground'] ?? theme.palette.bg.hover,

  /**
   * Chat checkpoint separator color.
   */
  'chat.checkpointSeparator': theme.ui['chat.checkpointSeparator'] ?? theme.palette.border.faint,

  /**
   * Shimmer highlight for thinking/working labels.
   */
  'chat.thinkingShimmer': theme.ui['chat.thinkingShimmer'] ?? theme.palette.fg.muted,

  /**
   * The color of the Chat Management editor splitview sash border.
   */
  'chatManagement.sashBorder': theme.ui['chatManagement.sashBorder'] ?? theme.palette.border.faint,

});

export type ChatKey = keyof ReturnType<typeof chat>;
