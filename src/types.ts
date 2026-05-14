export type Theme = {
  name: string;
  file: string;
  type: 'dark' | 'light';
  colors: Colors;
  palette: Palette;
  ui: any;
};

export type HexColor = `#${string}`;

export type Colors = {
  accent: HexColor;

  // Background scale — from light to dark (50 = lightest/most elevated, 400 = deepest)
  background: {
    50: HexColor, // selection / active highlight
    100: HexColor, // elevated surfaces, hover
    200: HexColor, // main editor background
    300: HexColor, // panels / sidebars
    350: HexColor, // chrome — activity bar, status bar, title bar
    400: HexColor, // deepest surfaces — inputs, tooltips
  };

  // Foreground scale — from light/prominent to dark/muted (50 = primary text)
  foreground: {
    50: HexColor, // primary text
    100: HexColor, // secondary text
    150: HexColor, // breadcrumbs, code lens, inactive tab text
    200: HexColor, // muted — comments, placeholders
    300: HexColor, // disabled text
  };

  red: HexColor;
  orange: HexColor;
  yellow: HexColor;
  green: HexColor;
  cyan: HexColor;
  blue: HexColor;
  purple: HexColor;
  pink: HexColor;

  white: HexColor;
  black: HexColor;

  transparent: HexColor;
};


type SemanticState = {
  fg: HexColor;
  bg: HexColor;
  border: HexColor;
};

type CtrlVariant = {
  bg: HexColor;
  bgHover: HexColor;
  bgActive: HexColor;
  fg: HexColor;
  border: HexColor;
};

type CtrlVariantThin = {
  bg: HexColor;
  bgHover: HexColor;
  fg: HexColor;
};

export type Palette = {

  bg: {
    base: HexColor; // deepest insets — inputs, tooltips
    chrome: HexColor; // activity bar, status bar, title bar
    workbench: HexColor; // panels, sidebar, tabs strip
    workbenchSticky: HexColor; // sticky scroll background in workbench
    editor: HexColor; // main editor canvas
    editorSticky: HexColor; // sticky scroll background in editor
    raised: HexColor; // elevated cards, inlay hints
    overlay: HexColor; // dropdowns, modals, command palette

    hover: HexColor; // neutral hover (alpha-based)
    active: HexColor; // neutral active / selection

    hoverAccent: HexColor; // accent-tinted hover
    selectedAccent: HexColor; // accent-tinted selection
  };

  fg: {
    default: HexColor; // body text, icons
    subtle: HexColor; // secondary labels, descriptions
    dim: HexColor; // breadcrumbs, code lens, inactive tab text
    muted: HexColor; // placeholders, hints
    disabled: HexColor; // disabled controls, ignored git files
    onAccent: HexColor; // text on filled accent surfaces
    link: HexColor;
    linkHover: HexColor;
  };

  border: {
    faint: HexColor; // dividers, indent guides, sashes
    default: HexColor; // control outlines, panel borders
    strong: HexColor; // kbd bottom shadow border
    window: HexColor; // window borders
    input: HexColor; // input borders
    focus: HexColor; // keyboard focus ring, active tab
  };

  state: {
    error: SemanticState;
    warning: SemanticState;
    success: SemanticState;
    info: SemanticState;
  };

  ctrl: {
    primary: CtrlVariant;
    secondary: CtrlVariant;
  };

  input: {
    bg: HexColor;
    bgDisabled: HexColor;
    fg: HexColor;
    placeholder: HexColor;
  };

  scrollbar: {
    track: HexColor;
    thumb: HexColor;
    thumbHover: HexColor;
  };

  shadow: {
    sm: HexColor;
    md: HexColor;
    lg: HexColor;
  };

  diff: {
    added: HexColor;
    addedHeader: HexColor;
    removed: HexColor;
    removedHeader: HexColor;
    modified: HexColor;
    modifiedHeader: HexColor;
    common: HexColor;
    commonHeader: HexColor;
  };

  syntax: {
    comment: HexColor;
    keyword: HexColor;
    fn: HexColor;
    string: HexColor;
    number: HexColor;
    variable: HexColor;
    type: HexColor;
    tag: HexColor;
    attribute: HexColor;
    constant: HexColor;
    operator: HexColor;
  };

  terminal: {
    black: HexColor;
    red: HexColor;
    green: HexColor;
    yellow: HexColor;
    blue: HexColor;
    magenta: HexColor;
    cyan: HexColor;
    white: HexColor;
    brightBlack: HexColor;
    brightRed: HexColor;
    brightGreen: HexColor;
    brightYellow: HexColor;
    brightBlue: HexColor;
    brightMagenta: HexColor;
    brightCyan: HexColor;
    brightWhite: HexColor;
  };

};
