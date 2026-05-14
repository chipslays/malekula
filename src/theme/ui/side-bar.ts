import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const sideBar = (theme: Theme) => ({

  /**
   * Side Bar background color.
   */
  'sideBar.background': theme.ui['sideBar.background'] ?? theme.palette.bg.workbench,

  /**
   * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
   */
  'sideBar.foreground': theme.ui['sideBar.foreground'] ?? theme.palette.fg.default,

  /**
   * Side Bar border color on the side separating the editor.
   */
  'sideBar.border': theme.ui['sideBar.border'] ?? theme.palette.border.faint,

  /**
   * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
   */
  'sideBar.dropBackground': theme.ui['sideBar.dropBackground'] ?? theme.palette.bg.selectedAccent,

  /**
   * Side Bar title foreground color.
   */
  'sideBarTitle.foreground': theme.ui['sideBarTitle.foreground'] ?? theme.palette.fg.subtle,

  /**
   * Side Bar section header background color.
   */
  'sideBarSectionHeader.background': theme.ui['sideBarSectionHeader.background'] ?? theme.palette.bg.workbench,

  /**
   * Side Bar section header foreground color.
   */
  'sideBarSectionHeader.foreground': theme.ui['sideBarSectionHeader.foreground'] ?? theme.palette.fg.subtle,

  /**
   * Side bar section header border color.
   */
  'sideBarSectionHeader.border': theme.ui['sideBarSectionHeader.border'] ?? theme.palette.border.faint,

  /**
   * Border color between the activity bar at the top/bottom and the views.
   */
  'sideBarActivityBarTop.border': theme.ui['sideBarActivityBarTop.border'] ?? theme.palette.border.faint,

  /**
   * Side bar title background color. The side bar is the container for views like explorer and search.
   */
  'sideBarTitle.background': theme.ui['sideBarTitle.background'] ?? theme.palette.bg.chrome,

  /**
   * Side bar title border color on the bottom, separating the title from the views. The side bar is the container for views like explorer and search.
   */
  'sideBarTitle.border': theme.ui['sideBarTitle.border'] ?? theme.palette.border.faint,

  /**
   * Background color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.background': theme.ui['sideBarStickyScroll.background'] ?? theme.palette.bg.workbenchSticky,

  /**
   * Border color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.border': theme.ui['sideBarStickyScroll.border'] ?? theme.palette.border.faint,

  /**
   * Shadow color of sticky scroll in the side bar.
   */
  'sideBarStickyScroll.shadow': theme.ui['sideBarStickyScroll.shadow'] ?? theme.palette.shadow.sm,

});

export type SideBarKey = keyof ReturnType<typeof sideBar>;
