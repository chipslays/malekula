import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const notification = (theme: Theme) => ({

  /**
   * Notification Center border color.
   */
  'notificationCenter.border': theme.ui['notificationCenter.border'] ?? theme.palette.border.default,

  /**
   * Notification Center header foreground color.
   */
  'notificationCenterHeader.foreground': theme.ui['notificationCenterHeader.foreground'] ?? theme.palette.fg.default,

  /**
   * Notification Center header background color.
   */
  'notificationCenterHeader.background': theme.ui['notificationCenterHeader.background'] ?? theme.palette.bg.workbench,

  /**
   * Notification toast border color.
   */
  'notificationToast.border': theme.ui['notificationToast.border'] ?? theme.palette.border.default,

  /**
   * Notification foreground color.
   */
  'notifications.foreground': theme.ui['notifications.foreground'] ?? theme.palette.fg.default,

  /**
   * Notification background color.
   */
  'notifications.background': theme.ui['notifications.background'] ?? theme.palette.bg.overlay,

  /**
   * Notification border color separating from other notifications in the Notification Center.
   */
  'notifications.border': theme.ui['notifications.border'] ?? theme.palette.border.faint,

  /**
   * Notification links foreground color.
   */
  'notificationLink.foreground': theme.ui['notificationLink.foreground'] ?? theme.palette.fg.link,

  /**
   * The color used for the notification error icon.
   */
  'notificationsErrorIcon.foreground': theme.ui['notificationsErrorIcon.foreground'] ?? theme.palette.state.error.fg,

  /**
   * The color used for the notification warning icon.
   */
  'notificationsWarningIcon.foreground': theme.ui['notificationsWarningIcon.foreground'] ?? theme.palette.state.warning.fg,

  /**
   * The color used for the notification info icon.
   */
  'notificationsInfoIcon.foreground': theme.ui['notificationsInfoIcon.foreground'] ?? theme.palette.state.info.fg,

});

export type NotificationKey = keyof ReturnType<typeof notification>;
