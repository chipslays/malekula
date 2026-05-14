import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const commentsView = (theme: Theme) => ({

  /**
   * Icon color for resolved comments.
   */
  'commentsView.resolvedIcon': theme.ui['commentsView.resolvedIcon'] ?? theme.palette.fg.muted,

  /**
   * Icon color for unresolved comments.
   */
  'commentsView.unresolvedIcon': theme.ui['commentsView.unresolvedIcon'] ?? theme.palette.state.info.fg,

});

export type CommentsViewKey = keyof ReturnType<typeof commentsView>;
