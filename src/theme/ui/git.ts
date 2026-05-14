import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const git = (theme: Theme) => ({

  /**
   * Color for added Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.addedResourceForeground': theme.ui['gitDecoration.addedResourceForeground'] ?? theme.colors.green,

  /**
   * Color for modified Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.modifiedResourceForeground': theme.ui['gitDecoration.modifiedResourceForeground'] ?? theme.colors.yellow,

  /**
   * Color for deleted Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.deletedResourceForeground': theme.ui['gitDecoration.deletedResourceForeground'] ?? theme.colors.red,

  /**
   * Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.renamedResourceForeground': theme.ui['gitDecoration.renamedResourceForeground'] ?? theme.colors.yellow,

  /**
   * Color for staged modifications git decorations.  Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageModifiedResourceForeground': theme.ui['gitDecoration.stageModifiedResourceForeground'] ?? theme.colors.yellow,

  /**
   * Color for staged deletions git decorations.  Used for file labels and the SCM viewlet.
   */
  'gitDecoration.stageDeletedResourceForeground': theme.ui['gitDecoration.stageDeletedResourceForeground'] ?? theme.colors.red,

  /**
   * Color for untracked Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.untrackedResourceForeground': theme.ui['gitDecoration.untrackedResourceForeground'] ?? theme.colors.green,

  /**
   * Color for ignored Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.ignoredResourceForeground': theme.ui['gitDecoration.ignoredResourceForeground'] ?? theme.palette.fg.disabled,

  /**
   * Color for conflicting Git resources. Used for file labels and the SCM viewlet.
   */
  'gitDecoration.conflictingResourceForeground': theme.ui['gitDecoration.conflictingResourceForeground'] ?? theme.colors.orange,

  /**
   * Color for submodule resources.
   */
  'gitDecoration.submoduleResourceForeground': theme.ui['gitDecoration.submoduleResourceForeground'] ?? theme.palette.fg.subtle,

  /**
   * Color for the blame editor decoration.
   */
  'git.blame.editorDecorationForeground': theme.ui['git.blame.editorDecorationForeground'] ?? theme.palette.fg.disabled,

});

export type GitKey = keyof ReturnType<typeof git>;
