import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const quickPicker = (theme: Theme) => ({

  /**
   * Quick picker (Quick Open) color for grouping borders.
   */
  'pickerGroup.border': theme.ui['pickerGroup.border'] ?? theme.palette.border.faint,

  /**
   * Quick picker (Quick Open) color for grouping labels.
   */
  'pickerGroup.foreground': theme.ui['pickerGroup.foreground'] ?? theme.palette.fg.link,

  /**
   * Quick input background color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.background': theme.ui['quickInput.background'] ?? theme.palette.bg.overlay,

  /**
   * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
   */
  'quickInput.foreground': theme.ui['quickInput.foreground'] ?? theme.palette.fg.default,

  /**
   * Quick picker background color for the focused item.
   */
  'quickInputList.focusBackground': theme.ui['quickInputList.focusBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Quick picker foreground color for the focused item.
   */
  'quickInputList.focusForeground': theme.ui['quickInputList.focusForeground'] ?? theme.palette.fg.default,

  /**
   * Quick picker icon foreground color for the focused item.
   */
  'quickInputList.focusIconForeground': theme.ui['quickInputList.focusIconForeground'] ?? theme.palette.fg.default,

  /**
   * Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
   */
  'quickInputTitle.background': theme.ui['quickInputTitle.background'] ?? theme.palette.bg.workbench,

});

export type QuickPickerKey = keyof ReturnType<typeof quickPicker>;
