import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const minimap = (theme: Theme) => ({

  /**
   * Highlight color for matches from search within files.
   */
  'minimap.findMatchHighlight': theme.ui['minimap.findMatchHighlight'] ?? theme.colors.orange,

  /**
   * Highlight color for the editor selection.
   */
  'minimap.selectionHighlight': theme.ui['minimap.selectionHighlight'] ?? theme.palette.bg.selectedAccent,

  /**
   * Highlight color for errors within the editor.
   */
  'minimap.errorHighlight': theme.ui['minimap.errorHighlight'] ?? theme.colors.red,

  /**
   * Highlight color for warnings within the editor.
   */
  'minimap.warningHighlight': theme.ui['minimap.warningHighlight'] ?? theme.colors.orange,

  /**
   * Minimap background color.
   */
  'minimap.background': theme.ui['minimap.background'] ?? theme.palette.bg.editor,

  /**
   * Minimap marker color for repeating editor selections.
   */
  'minimap.selectionOccurrenceHighlight': theme.ui['minimap.selectionOccurrenceHighlight'] ?? theme.palette.bg.hoverAccent,

  /**
   * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
   */
  'minimap.foregroundOpacity': theme.ui['minimap.foregroundOpacity'] ?? '#000000ff',

  /**
   * Minimap marker color for infos.
   */
  'minimap.infoHighlight': theme.ui['minimap.infoHighlight'] ?? theme.colors.blue,

  /**
   * Color of pending edit regions in the minimap.
   */
  'minimap.chatEditHighlight': theme.ui['minimap.chatEditHighlight'] ?? theme.colors.blue,

  /**
   * Minimap slider background color.
   */
  'minimapSlider.background': theme.ui['minimapSlider.background'] ?? theme.palette.scrollbar.thumb,

  /**
   * Minimap slider background color when hovering.
   */
  'minimapSlider.hoverBackground': theme.ui['minimapSlider.hoverBackground'] ?? theme.palette.scrollbar.thumbHover,

  /**
   * Minimap slider background color when clicked on.
   */
  'minimapSlider.activeBackground': theme.ui['minimapSlider.activeBackground'] ?? theme.palette.scrollbar.thumbHover,

  /**
   * Minimap gutter color for added content.
   */
  'minimapGutter.addedBackground': theme.ui['minimapGutter.addedBackground'] ?? theme.colors.green,

  /**
   * Minimap gutter color for modified content.
   */
  'minimapGutter.modifiedBackground': theme.ui['minimapGutter.modifiedBackground'] ?? theme.colors.blue,

  /**
   * Minimap gutter color for deleted content.
   */
  'minimapGutter.deletedBackground': theme.ui['minimapGutter.deletedBackground'] ?? theme.colors.red,

  /**
   * Minimap marker color for inline chat inserted content.
   */
  'editorMinimap.inlineChatInserted': theme.ui['editorMinimap.inlineChatInserted'] ?? theme.colors.green,

});

export type MinimapKey = keyof ReturnType<typeof minimap>;
