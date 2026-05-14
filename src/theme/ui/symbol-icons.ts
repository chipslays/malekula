import type { Theme } from '@/types';

/** @see https://code.visualstudio.com/api/references/theme-color */
export const symbolIcons = (theme: Theme) => ({

  /**
   * The foreground color for array symbols.
   */
  'symbolIcon.arrayForeground': theme.ui['symbolIcon.arrayForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for boolean symbols.
   */
  'symbolIcon.booleanForeground': theme.ui['symbolIcon.booleanForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for class symbols.
   */
  'symbolIcon.classForeground': theme.ui['symbolIcon.classForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for color symbols.
   */
  'symbolIcon.colorForeground': theme.ui['symbolIcon.colorForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for constant symbols.
   */
  'symbolIcon.constantForeground': theme.ui['symbolIcon.constantForeground'] ?? theme.colors.cyan,

  /**
   * The foreground color for constructor symbols.
   */
  'symbolIcon.constructorForeground': theme.ui['symbolIcon.constructorForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for enumerator symbols.
   */
  'symbolIcon.enumeratorForeground': theme.ui['symbolIcon.enumeratorForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for enumerator member symbols.
   */
  'symbolIcon.enumeratorMemberForeground': theme.ui['symbolIcon.enumeratorMemberForeground'] ?? theme.colors.cyan,

  /**
   * The foreground color for event symbols.
   */
  'symbolIcon.eventForeground': theme.ui['symbolIcon.eventForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for field symbols.
   */
  'symbolIcon.fieldForeground': theme.ui['symbolIcon.fieldForeground'] ?? theme.colors.red,

  /**
   * The foreground color for file symbols.
   */
  'symbolIcon.fileForeground': theme.ui['symbolIcon.fileForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for folder symbols.
   */
  'symbolIcon.folderForeground': theme.ui['symbolIcon.folderForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for function symbols.
   */
  'symbolIcon.functionForeground': theme.ui['symbolIcon.functionForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for interface symbols.
   */
  'symbolIcon.interfaceForeground': theme.ui['symbolIcon.interfaceForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for key symbols.
   */
  'symbolIcon.keyForeground': theme.ui['symbolIcon.keyForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for keyword symbols.
   */
  'symbolIcon.keywordForeground': theme.ui['symbolIcon.keywordForeground'] ?? theme.colors.purple,

  /**
   * The foreground color for method symbols.
   */
  'symbolIcon.methodForeground': theme.ui['symbolIcon.methodForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for module symbols.
   */
  'symbolIcon.moduleForeground': theme.ui['symbolIcon.moduleForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for namespace symbols.
   */
  'symbolIcon.namespaceForeground': theme.ui['symbolIcon.namespaceForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for null symbols.
   */
  'symbolIcon.nullForeground': theme.ui['symbolIcon.nullForeground'] ?? theme.palette.fg.muted,

  /**
   * The foreground color for number symbols.
   */
  'symbolIcon.numberForeground': theme.ui['symbolIcon.numberForeground'] ?? theme.colors.orange,

  /**
   * The foreground color for object symbols.
   */
  'symbolIcon.objectForeground': theme.ui['symbolIcon.objectForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for operator symbols.
   */
  'symbolIcon.operatorForeground': theme.ui['symbolIcon.operatorForeground'] ?? theme.colors.purple,

  /**
   * The foreground color for package symbols.
   */
  'symbolIcon.packageForeground': theme.ui['symbolIcon.packageForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for property symbols.
   */
  'symbolIcon.propertyForeground': theme.ui['symbolIcon.propertyForeground'] ?? theme.colors.red,

  /**
   * The foreground color for reference symbols.
   */
  'symbolIcon.referenceForeground': theme.ui['symbolIcon.referenceForeground'] ?? theme.colors.blue,

  /**
   * The foreground color for snippet symbols.
   */
  'symbolIcon.snippetForeground': theme.ui['symbolIcon.snippetForeground'] ?? theme.palette.fg.subtle,

  /**
   * The foreground color for string symbols.
   */
  'symbolIcon.stringForeground': theme.ui['symbolIcon.stringForeground'] ?? theme.colors.green,

  /**
   * The foreground color for struct symbols.
   */
  'symbolIcon.structForeground': theme.ui['symbolIcon.structForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for text symbols.
   */
  'symbolIcon.textForeground': theme.ui['symbolIcon.textForeground'] ?? theme.palette.fg.default,

  /**
   * The foreground color for type parameter symbols.
   */
  'symbolIcon.typeParameterForeground': theme.ui['symbolIcon.typeParameterForeground'] ?? theme.colors.yellow,

  /**
   * The foreground color for unit symbols.
   */
  'symbolIcon.unitForeground': theme.ui['symbolIcon.unitForeground'] ?? theme.colors.cyan,

  /**
   * The foreground color for variable symbols.
   */
  'symbolIcon.variableForeground': theme.ui['symbolIcon.variableForeground'] ?? theme.colors.red,

});

export type SymbolIconsKey = keyof ReturnType<typeof symbolIcons>;
