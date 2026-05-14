import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const ports = (theme: Theme) => ({

  /**
   * The color of the icon for a port that has an associated running process.
   */
  'ports.iconRunningProcessForeground': theme.ui['ports.iconRunningProcessForeground'] ?? theme.colors.green,

});

export type PortsKey = keyof ReturnType<typeof ports>;
