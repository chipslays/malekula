import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const sourceControlGraph = (theme: Theme) => ({

  /**
   * History item hover label foreground color.
   */
  'scmGraph.historyItemHoverLabelForeground': theme.ui['scmGraph.historyItemHoverLabelForeground'] ?? theme.palette.fg.default,

  /**
   * Source control graph foreground color (1).
   */
  'scmGraph.foreground1': theme.ui['scmGraph.foreground1'] ?? theme.colors.blue,

  /**
   * Source control graph foreground color (2).
   */
  'scmGraph.foreground2': theme.ui['scmGraph.foreground2'] ?? theme.colors.green,

  /**
   * Source control graph foreground color (3).
   */
  'scmGraph.foreground3': theme.ui['scmGraph.foreground3'] ?? theme.colors.purple,

  /**
   * Source control graph foreground color (4).
   */
  'scmGraph.foreground4': theme.ui['scmGraph.foreground4'] ?? theme.colors.orange,

  /**
   * Source control graph foreground color (5).
   */
  'scmGraph.foreground5': theme.ui['scmGraph.foreground5'] ?? theme.colors.red,

  /**
   * History item hover additions foreground color.
   */
  'scmGraph.historyItemHoverAdditionsForeground': theme.ui['scmGraph.historyItemHoverAdditionsForeground'] ?? theme.colors.green,

  /**
   * History item hover deletions foreground color.
   */
  'scmGraph.historyItemHoverDeletionsForeground': theme.ui['scmGraph.historyItemHoverDeletionsForeground'] ?? theme.colors.red,

  /**
   * History item reference color.
   */
  'scmGraph.historyItemRefColor': theme.ui['scmGraph.historyItemRefColor'] ?? theme.colors.blue,

  /**
   * History item remote reference color.
   */
  'scmGraph.historyItemRemoteRefColor': theme.ui['scmGraph.historyItemRemoteRefColor'] ?? theme.colors.purple,

  /**
   * History item base reference color.
   */
  'scmGraph.historyItemBaseRefColor': theme.ui['scmGraph.historyItemBaseRefColor'] ?? theme.colors.yellow,

  /**
   * History item hover default label foreground color.
   */
  'scmGraph.historyItemHoverDefaultLabelForeground': theme.ui['scmGraph.historyItemHoverDefaultLabelForeground'] ?? theme.palette.fg.onAccent,

  /**
   * History item hover default label background color.
   */
  'scmGraph.historyItemHoverDefaultLabelBackground': theme.ui['scmGraph.historyItemHoverDefaultLabelBackground'] ?? theme.palette.ctrl.primary.bg,

});

export type SourceControlGraphKey = keyof ReturnType<typeof sourceControlGraph>;
