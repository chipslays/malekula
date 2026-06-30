import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const agentSession = (theme: Theme) => ({

  /**
   * Foreground color for the read indicator in an agent session.
   */
  'agentSessionReadIndicator.foreground': theme.ui['agentSessionReadIndicator.foreground'] ?? theme.palette.fg.muted,

  /**
   * Border color for the badges in selected agent session items.
   */
  'agentSessionSelectedBadge.border': theme.ui['agentSessionSelectedBadge.border'] ?? theme.palette.border.focus,

  /**
   * Border color for the badges in selected agent session items when the view is unfocused.
   */
  'agentSessionSelectedUnfocusedBadge.border': theme.ui['agentSessionSelectedUnfocusedBadge.border'] ?? theme.palette.border.default,

  /**
   * Background color of the agent status indicator in the titlebar.
   */
  'agentStatusIndicator.background': theme.ui['agentStatusIndicator.background'] ?? theme.palette.bg.workbench,

  /**
   * The color of the Chat Customization Management editor splitview sash border.
   */
  'aiCustomizationManagement.sashBorder': theme.ui['aiCustomizationManagement.sashBorder'] ?? theme.palette.border.faint,

});

export type AgentSessionKey = keyof ReturnType<typeof agentSession>;
