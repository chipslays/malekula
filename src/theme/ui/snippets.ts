import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const snippets = (theme: Theme) => ({

  /**
   * Highlight background color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBackground': theme.ui['editor.snippetTabstopHighlightBackground'] ?? theme.palette.bg.hoverAccent,

  /**
   * Highlight border color of a snippet tabstop.
   */
  'editor.snippetTabstopHighlightBorder': theme.ui['editor.snippetTabstopHighlightBorder'] ?? theme.palette.border.default,

  /**
   * Highlight background color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBackground': theme.ui['editor.snippetFinalTabstopHighlightBackground'] ?? theme.palette.state.success.bg,

  /**
   * Highlight border color of the final tabstop of a snippet.
   */
  'editor.snippetFinalTabstopHighlightBorder': theme.ui['editor.snippetFinalTabstopHighlightBorder'] ?? theme.palette.state.success.border,

});

export type SnippetsKey = keyof ReturnType<typeof snippets>;
