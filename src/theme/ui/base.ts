import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const base = (theme: Theme) => ({

  /**
   * Overall border color for focused elements. This color is only used if not overridden by a component.
   */
  'focusBorder': theme.ui['focusBorder'] ?? theme.palette.border.default,

  /**
   * Overall foreground color. This color is only used if not overridden by a component.
   */
  'foreground': theme.ui['foreground'] ?? theme.palette.fg.default,

  /**
   * Overall foreground for disabled elements. This color is only used if not overridden by a component.
   */
  'disabledForeground': theme.ui['disabledForeground'] ?? theme.palette.fg.disabled,

  /**
   * Border color of widgets such as Find/Replace inside the editor.
   */
  'widget.border': theme.ui['widget.border'] ?? theme.palette.border.faint,

  /**
   * Shadow color of widgets such as Find/Replace inside the editor.
   */
  'widget.shadow': theme.ui['widget.shadow'] ?? theme.palette.shadow.lg,

  /**
   * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
   */
  'selection.background': theme.ui['selection.background'] ?? theme.palette.bg.selectedAccent,

  /**
   * Foreground color for description text providing additional information, for example for a label.
   */
  'descriptionForeground': theme.ui['descriptionForeground'] ?? theme.palette.fg.subtle,

  /**
   * Overall foreground color for error messages (this color is only used if not overridden by a component).
   */
  'errorForeground': theme.ui['errorForeground'] ?? theme.palette.state.error.fg,

  /**
   * The default color for icons in the workbench.
   */
  'icon.foreground': theme.ui['icon.foreground'] ?? theme.palette.fg.default,

  /**
   * The hover border color for draggable sashes.
   */
  'sash.hoverBorder': theme.ui['sash.hoverBorder'] ?? theme.palette.border.focus,

});

export type BaseKey = keyof ReturnType<typeof base>;
