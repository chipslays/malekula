import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const extensions = (theme: Theme) => ({

  /**
   * Extension view button foreground color (for example **Install** button).
   */
  'extensionButton.prominentForeground': theme.ui['extensionButton.prominentForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Extension view button background color.
   */
  'extensionButton.prominentBackground': theme.ui['extensionButton.prominentBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Extension view button background hover color.
   */
  'extensionButton.prominentHoverBackground': theme.ui['extensionButton.prominentHoverBackground'] ?? theme.palette.ctrl.primary.bgHover,

  /**
   * Button background color for extension actions.
   */
  'extensionButton.background': theme.ui['extensionButton.background'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Button foreground color for extension actions.
   */
  'extensionButton.foreground': theme.ui['extensionButton.foreground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * Button background hover color for extension actions.
   */
  'extensionButton.hoverBackground': theme.ui['extensionButton.hoverBackground'] ?? theme.palette.ctrl.primary.bgHover,

  /**
   * Button separator color for extension actions.
   */
  'extensionButton.separator': theme.ui['extensionButton.separator'] ?? theme.palette.border.default,

  /**
   * Button border color for extension actions.
   */
  'extensionButton.border': theme.ui['extensionButton.border'] ?? theme.palette.ctrl.primary.border,

  /**
   * Background color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteBackground': theme.ui['extensionBadge.remoteBackground'] ?? theme.palette.ctrl.primary.bg,

  /**
   * Foreground color for the remote badge in the extensions view.
   */
  'extensionBadge.remoteForeground': theme.ui['extensionBadge.remoteForeground'] ?? theme.palette.ctrl.primary.fg,

  /**
   * The icon color for extension ratings.
   */
  'extensionIcon.starForeground': theme.ui['extensionIcon.starForeground'] ?? theme.colors.yellow,

  /**
   * The icon color for extension verified publisher.
   */
  'extensionIcon.verifiedForeground': theme.ui['extensionIcon.verifiedForeground'] ?? theme.colors.blue,

  /**
   * The icon color for pre-release extension.
   */
  'extensionIcon.preReleaseForeground': theme.ui['extensionIcon.preReleaseForeground'] ?? theme.colors.orange,

  /**
   * The icon color for extension sponsor.
   */
  'extensionIcon.sponsorForeground': theme.ui['extensionIcon.sponsorForeground'] ?? theme.colors.pink,

  /**
   * The icon color for private extensions.
   */
  'extensionIcon.privateForeground': theme.ui['extensionIcon.privateForeground'] ?? theme.palette.fg.subtle,

  /**
   * The icon color for mcp starred.
   */
  'mcpIcon.starForeground': theme.ui['mcpIcon.starForeground'] ?? theme.colors.yellow,

});

export type ExtensionsKey = keyof ReturnType<typeof extensions>;
