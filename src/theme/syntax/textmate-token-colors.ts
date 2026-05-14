import type { Theme } from "@/types";

type Rule = { scope: string | string[]; settings: { foreground?: string; fontStyle?: string } };

export default (theme: Theme): Rule[] => [

  // ── General / Embedded ───────────────────────────────────────────────────
  { scope: "meta.embedded", settings: { foreground: theme.palette.fg.default } },

  // ── Comments ─────────────────────────────────────────────────────────────
  { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: theme.palette.syntax.comment } },
  { scope: "comment markup.link", settings: { foreground: theme.palette.syntax.comment } },
  { scope: "markup.quote.markdown", settings: { foreground: theme.palette.syntax.comment } },


  // ── Keywords ─────────────────────────────────────────────────────────────
  { scope: "keyword", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.control", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator", settings: { foreground: theme.palette.fg.default } },
  { scope: "keyword.operator.word", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator.assignment", settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.assignment.compound", settings: { foreground: theme.colors.purple } },
  { scope: ["keyword.operator.assignment.compound.js", "keyword.operator.assignment.compound.ts"], settings: { foreground: theme.colors.cyan } },
  {
    scope: [
      "keyword.operator.arithmetic",
      "keyword.operator.comparison",
      "keyword.operator.decrement",
      "keyword.operator.increment",
      "keyword.operator.relational",
    ],
    settings: { foreground: theme.colors.cyan },
  },
  { scope: "keyword.operator.logical", settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.bitwise", settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.channel", settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.quantifier.regexp", settings: { foreground: theme.colors.orange } },
  {
    scope: [
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.ternary",
      "keyword.operator.optional",
      "keyword.operator.expression.keyof",
    ],
    settings: { foreground: theme.colors.purple },
  },
  {
    scope: [
      "keyword.operator.expression.delete",
      "keyword.operator.expression.in",
      "keyword.operator.expression.of",
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.expression.typeof",
      "keyword.operator.expression.void",
    ],
    settings: { foreground: theme.colors.purple },
  },
  { scope: "keyword.operator.expression.import", settings: { foreground: theme.colors.blue } },
  { scope: "keyword.operator.expression.is", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator.delete", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator.module", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.other.special-method", settings: { foreground: theme.colors.blue } },
  { scope: "keyword.other.unit", settings: { foreground: theme.colors.red } },

  // ── Storage ───────────────────────────────────────────────────────────────
  { scope: "storage", settings: { foreground: theme.colors.purple } },
  { scope: "token.storage", settings: { foreground: theme.colors.purple } },

  // ── Variables ─────────────────────────────────────────────────────────────
  { scope: "variable", settings: { foreground: theme.colors.red } },
  { scope: "variable.c", settings: { foreground: theme.palette.fg.default } },
  { scope: "variable.language", settings: { foreground: theme.colors.yellow } },
  { scope: "variable.parameter.function", settings: { foreground: theme.palette.fg.default } },
  { scope: "variable.other.constant", settings: { foreground: theme.colors.yellow } },
  {
    scope: [
      "variable.other.readwrite",
      "meta.object-literal.key",
      "support.variable.property",
      "support.variable.object.process",
      "support.variable.object.node",
    ],
    settings: { foreground: theme.colors.red },
  },
  { scope: "variable.other.readwrite.c", settings: { foreground: theme.colors.red } },
  { scope: ["variable.other.class.js", "variable.other.class.ts"], settings: { foreground: theme.colors.yellow } },
  { scope: "variable.other.class.php", settings: { foreground: theme.colors.red } },
  { scope: "variable.other.object", settings: { foreground: theme.colors.yellow } },
  { scope: "variable.other.constant.property", settings: { foreground: theme.colors.red } },
  { scope: "variable.parameter.function.js", settings: { foreground: theme.colors.red } },
  { scope: "token.variable.parameter.java", settings: { foreground: theme.palette.fg.default } },
  { scope: ["text.variable", "text.bracketed"], settings: { foreground: theme.colors.red } },

  // ── Functions ─────────────────────────────────────────────────────────────
  {
    scope: ["entity.name.function", "meta.require", "support.function.any-method", "variable.function"],
    settings: { foreground: theme.colors.blue },
  },
  { scope: ["entity.name.function", "support.function.console"], settings: { foreground: theme.colors.blue } },
  { scope: "support.function", settings: { foreground: theme.colors.cyan } },
  { scope: "meta.function-call.generic.python", settings: { foreground: theme.colors.blue } },

  // ── Types / Classes ───────────────────────────────────────────────────────
  { scope: ["support.class", "entity.name.type.class"], settings: { foreground: theme.colors.yellow } },
  { scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"], settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.class.identifier.namespace.type", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.type", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.type.module", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.type.namespace", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.namespace", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.other.inherited-class", settings: { foreground: theme.colors.yellow } },

  // ── Constants / Numbers ───────────────────────────────────────────────────
  { scope: "constant", settings: { foreground: theme.colors.orange } },
  { scope: "constant.numeric", settings: { foreground: theme.colors.orange } },
  { scope: "constant.other.symbol", settings: { foreground: theme.colors.cyan } },
  { scope: "punctuation.definition.constant", settings: { foreground: theme.colors.orange } },

  // ── Strings ───────────────────────────────────────────────────────────────
  { scope: "string", settings: { foreground: theme.colors.green } },
  { scope: "string.regexp", settings: { foreground: theme.colors.red } },
  { scope: "constant.other.character-class.regexp", settings: { foreground: theme.colors.red } },
  { scope: "constant.character.escape", settings: { foreground: theme.colors.cyan } },

  // ── Punctuation ───────────────────────────────────────────────────────────
  { scope: "punctuation.separator.delimiter", settings: { foreground: theme.palette.fg.default } },
  { scope: "punctuation.separator.key-value", settings: { foreground: theme.palette.fg.default } },
  { scope: "punctuation.section.embedded, variable.interpolation", settings: { foreground: theme.colors.red } },
  { scope: ["punctuation.section.embedded.begin", "punctuation.section.embedded.end"], settings: { foreground: theme.colors.purple } },
  {
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: { foreground: theme.colors.purple },
  },
  { scope: "meta.template.expression", settings: { foreground: theme.palette.fg.default } },
  { scope: "meta.brace.square", settings: { foreground: theme.palette.fg.default } },

  // ── HTML / XML / JSX Tags ─────────────────────────────────────────────────
  { scope: "meta.tag", settings: { foreground: theme.palette.fg.default } },
  { scope: "entity.name.tag", settings: { foreground: theme.colors.red } },
  { scope: "entity.other.attribute-name", settings: { foreground: theme.colors.orange } },
  { scope: "entity.other.attribute-name.id", settings: { foreground: theme.colors.blue } },
  { scope: "invalid.illegal.unrecognized-tag.html", settings: { foreground: theme.colors.red } },
  { scope: "invalid.illegal.bad-ampersand.html", settings: { foreground: theme.palette.fg.default } },

  // ── CSS / SCSS / Less ─────────────────────────────────────────────────────
  { scope: "entity.other.attribute-name.class.css", settings: { foreground: theme.colors.orange } },
  { scope: "meta.selector", settings: { foreground: theme.colors.purple } },
  { scope: ["support.constant.property-value.scss", "support.constant.property-value.css"], settings: { foreground: theme.colors.orange } },
  { scope: ["keyword.operator.css", "keyword.operator.scss", "keyword.operator.less"], settings: { foreground: theme.colors.cyan } },
  {
    scope: [
      "support.constant.color.w3c-standard-color-name.css",
      "support.constant.color.w3c-standard-color-name.scss",
    ],
    settings: { foreground: theme.colors.orange },
  },
  { scope: "punctuation.separator.list.comma.css", settings: { foreground: theme.palette.fg.default } },
  { scope: "support.type.vendored.property-name.css", settings: { foreground: theme.colors.cyan } },
  { scope: "selector.sass", settings: { foreground: theme.colors.red } },
  { scope: "control.elements, keyword.operator.less", settings: { foreground: theme.colors.orange } },
  { scope: "rgb-value", settings: { foreground: theme.colors.cyan } },
  { scope: "inline-color-decoration rgb-value", settings: { foreground: theme.colors.orange } },
  { scope: "less rgb-value", settings: { foreground: theme.colors.orange } },

  // ── JavaScript / TypeScript ───────────────────────────────────────────────
  { scope: ["support.module.node", "support.type.object.module"], settings: { foreground: theme.colors.yellow } },
  { scope: "support.type.object.console", settings: { foreground: theme.colors.red } },
  { scope: "support.variable.property.process", settings: { foreground: theme.colors.orange } },
  { scope: "support.type.object.dom", settings: { foreground: theme.colors.cyan } },
  { scope: ["support.variable.dom", "support.variable.property.dom"], settings: { foreground: theme.colors.red } },
  { scope: "support.type.type.flowtype", settings: { foreground: theme.colors.blue } },
  { scope: "support.type.primitive", settings: { foreground: theme.colors.yellow } },
  { scope: ["support.type.primitive.ts", "support.type.builtin.ts", "support.type.primitive.tsx", "support.type.builtin.tsx"], settings: { foreground: theme.colors.yellow } },
  { scope: "meta.property.object", settings: { foreground: theme.colors.red } },
  {
    scope: [
      "keyword.other.template.begin",
      "keyword.other.template.end",
      "keyword.other.substitution.begin",
      "keyword.other.substitution.end",
    ],
    settings: { foreground: theme.colors.green },
  },

  // ── JSON ──────────────────────────────────────────────────────────────────
  { scope: "support.constant.json", settings: { foreground: theme.colors.orange } },
  { scope: "support.type.property-name.json", settings: { foreground: theme.colors.red } },
  { scope: "support.type.property-name.json punctuation", settings: { foreground: theme.colors.red } },
  {
    scope: [
      "source.json meta.structure.dictionary.json > string.quoted.json",
      "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    ],
    settings: { foreground: theme.colors.red },
  },
  {
    scope: [
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
      "source.json meta.structure.array.json > value.json > string.quoted.json",
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation",
      "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    ],
    settings: { foreground: theme.colors.green },
  },
  {
    scope: [
      "source.json meta.structure.dictionary.json > constant.language.json",
      "source.json meta.structure.array.json > constant.language.json",
    ],
    settings: { foreground: theme.colors.cyan },
  },

  // ── TOML ──────────────────────────────────────────────────────────────────
  {
    scope: ["support.type.property-name.toml", "support.type.property-name.table.toml", "support.type.property-name.array.toml"],
    settings: { foreground: theme.colors.red },
  },

  // ── YAML ──────────────────────────────────────────────────────────────────
  { scope: "punctuation.definition.block.sequence.item.yaml", settings: { foreground: theme.palette.fg.default } },

  // ── Java ──────────────────────────────────────────────────────────────────
  { scope: ["storage.type.annotation.java", "storage.type.object.array.java"], settings: { foreground: theme.colors.yellow } },
  { scope: "source.java", settings: { foreground: theme.colors.red } },
  {
    scope: [
      "punctuation.section.block.begin.java",
      "punctuation.section.block.end.java",
      "punctuation.definition.method-parameters.begin.java",
      "punctuation.definition.method-parameters.end.java",
      "meta.method.identifier.java",
      "punctuation.section.method.begin.java",
      "punctuation.section.method.end.java",
      "punctuation.terminator.java",
      "punctuation.section.class.begin.java",
      "punctuation.section.class.end.java",
      "punctuation.section.inner-class.begin.java",
      "punctuation.section.inner-class.end.java",
      "meta.method-call.java",
      "punctuation.section.class.begin.bracket.curly.java",
      "punctuation.section.class.end.bracket.curly.java",
      "punctuation.section.method.begin.bracket.curly.java",
      "punctuation.section.method.end.bracket.curly.java",
      "punctuation.separator.period.java",
      "punctuation.bracket.angle.java",
      "punctuation.definition.annotation.java",
      "meta.method.body.java",
    ],
    settings: { foreground: theme.palette.fg.default },
  },
  { scope: "meta.method.java", settings: { foreground: theme.colors.blue } },
  { scope: ["storage.modifier.import.java", "storage.type.java", "storage.type.generic.java"], settings: { foreground: theme.colors.yellow } },
  { scope: "keyword.operator.instanceof.java", settings: { foreground: theme.colors.purple } },
  { scope: "meta.definition.variable.name.java", settings: { foreground: theme.colors.red } },
  { scope: "token.storage.type.java", settings: { foreground: theme.colors.yellow } },
  { scope: "import.storage.java", settings: { foreground: theme.colors.yellow } },
  { scope: "token.variable.parameter.java", settings: { foreground: theme.palette.fg.default } },
  { scope: "token.package.keyword", settings: { foreground: theme.colors.purple } },
  { scope: "token.package", settings: { foreground: theme.palette.fg.default } },

  // ── C / C++ ───────────────────────────────────────────────────────────────
  { scope: ["meta.function.c", "meta.function.cpp"], settings: { foreground: theme.colors.red } },
  {
    scope: [
      "punctuation.section.block.begin.bracket.curly.cpp",
      "punctuation.section.block.end.bracket.curly.cpp",
      "punctuation.terminator.statement.c",
      "punctuation.section.block.begin.bracket.curly.c",
      "punctuation.section.block.end.bracket.curly.c",
      "punctuation.section.parens.begin.bracket.round.c",
      "punctuation.section.parens.end.bracket.round.c",
      "punctuation.section.parameters.begin.bracket.round.c",
      "punctuation.section.parameters.end.bracket.round.c",
    ],
    settings: { foreground: theme.palette.fg.default },
  },
  {
    scope: [
      "keyword.operator.assignment.c",
      "keyword.operator.comparison.c",
      "keyword.operator.c",
      "keyword.operator.increment.c",
      "keyword.operator.decrement.c",
      "keyword.operator.bitwise.shift.c",
      "keyword.operator.assignment.cpp",
      "keyword.operator.comparison.cpp",
      "keyword.operator.cpp",
      "keyword.operator.increment.cpp",
      "keyword.operator.decrement.cpp",
      "keyword.operator.bitwise.shift.cpp",
    ],
    settings: { foreground: theme.colors.purple },
  },
  { scope: ["punctuation.separator.c", "punctuation.separator.cpp"], settings: { foreground: theme.colors.purple } },
  { scope: ["support.type.posix-reserved.c", "support.type.posix-reserved.cpp"], settings: { foreground: theme.colors.cyan } },
  { scope: ["keyword.operator.sizeof.c", "keyword.operator.sizeof.cpp"], settings: { foreground: theme.colors.purple } },
  { scope: ["keyword.operator.arithmetic.c", "keyword.operator.arithmetic.cpp"], settings: { foreground: theme.colors.purple } },

  // ── Python ────────────────────────────────────────────────────────────────
  { scope: "support.variable.magic.python", settings: { foreground: theme.colors.red } },
  {
    scope: [
      "punctuation.separator.period.python",
      "punctuation.separator.element.python",
      "punctuation.parenthesis.begin.python",
      "punctuation.parenthesis.end.python",
    ],
    settings: { foreground: theme.palette.fg.default },
  },
  { scope: "variable.parameter.function.language.special.self.python", settings: { foreground: theme.colors.yellow } },
  { scope: "variable.parameter.function.language.special.cls.python", settings: { foreground: theme.colors.yellow } },
  { scope: "variable.parameter.function.language.python", settings: { foreground: theme.colors.orange } },
  { scope: "variable.parameter.function.python", settings: { foreground: theme.colors.orange } },
  { scope: "support.type.python", settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.logical.python", settings: { foreground: theme.colors.purple } },
  {
    scope: [
      "punctuation.definition.arguments.begin.python",
      "punctuation.definition.arguments.end.python",
      "punctuation.separator.arguments.python",
      "punctuation.definition.list.begin.python",
      "punctuation.definition.list.end.python",
    ],
    settings: { foreground: theme.palette.fg.default },
  },
  { scope: "constant.character.format.placeholder.other.python", settings: { foreground: theme.colors.orange } },
  { scope: "meta.function.decorator.python", settings: { foreground: theme.colors.blue } },
  { scope: ["support.token.decorator.python", "meta.function.decorator.identifier.python"], settings: { foreground: theme.colors.cyan } },

  // ── Rust ──────────────────────────────────────────────────────────────────
  { scope: "storage.modifier.lifetime.rust", settings: { foreground: theme.palette.fg.default } },
  { scope: "support.function.std.rust", settings: { foreground: theme.colors.blue } },
  { scope: "entity.name.lifetime.rust", settings: { foreground: theme.colors.yellow } },
  { scope: "variable.language.rust", settings: { foreground: theme.colors.red } },
  { scope: "keyword.operator.misc.rust", settings: { foreground: theme.palette.fg.default } },
  { scope: "keyword.operator.sigil.rust", settings: { foreground: theme.colors.purple } },
  { scope: "support.constant.core.rust", settings: { foreground: theme.colors.orange } },

  // ── PHP ───────────────────────────────────────────────────────────────────
  { scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade", settings: { foreground: theme.colors.purple } },
  { scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade", settings: { foreground: theme.colors.purple } },
  { scope: ["support.other.namespace.use.php", "support.other.namespace.use-as.php", "entity.other.alias.php", "meta.interface.php"], settings: { foreground: theme.colors.yellow } },
  { scope: "keyword.operator.error-control.php", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator.type.php", settings: { foreground: theme.colors.purple } },
  { scope: "punctuation.section.array.begin.php", settings: { foreground: theme.palette.fg.default } },
  { scope: "punctuation.section.array.end.php", settings: { foreground: theme.palette.fg.default } },
  { scope: "invalid.illegal.non-null-typehinted.php", settings: { foreground: theme.colors.red } },
  { scope: ["storage.type.php", "meta.other.type.phpdoc.php", "keyword.other.type.php", "keyword.other.array.phpdoc.php"], settings: { foreground: theme.colors.yellow } },
  { scope: ["meta.function-call.php", "meta.function-call.object.php", "meta.function-call.static.php"], settings: { foreground: theme.colors.blue } },
  {
    scope: [
      "punctuation.definition.parameters.begin.bracket.round.php",
      "punctuation.definition.parameters.end.bracket.round.php",
      "punctuation.separator.delimiter.php",
      "punctuation.section.scope.begin.php",
      "punctuation.section.scope.end.php",
      "punctuation.terminator.expression.php",
      "punctuation.definition.arguments.begin.bracket.round.php",
      "punctuation.definition.arguments.end.bracket.round.php",
      "punctuation.definition.storage-type.begin.bracket.round.php",
      "punctuation.definition.storage-type.end.bracket.round.php",
      "punctuation.definition.array.begin.bracket.round.php",
      "punctuation.definition.array.end.bracket.round.php",
      "punctuation.definition.begin.bracket.round.php",
      "punctuation.definition.end.bracket.round.php",
      "punctuation.definition.begin.bracket.curly.php",
      "punctuation.definition.end.bracket.curly.php",
      "punctuation.definition.section.switch-block.end.bracket.curly.php",
      "punctuation.definition.section.switch-block.start.bracket.curly.php",
      "punctuation.definition.section.switch-block.begin.bracket.curly.php",
    ],
    settings: { foreground: theme.palette.fg.default },
  },
  { scope: ["support.constant.ext.php", "support.constant.std.php", "support.constant.core.php", "support.constant.parser-token.php"], settings: { foreground: theme.colors.orange } },
  { scope: ["entity.name.goto-label.php", "support.other.php"], settings: { foreground: theme.colors.blue } },
  { scope: ["keyword.operator.logical.php", "keyword.operator.bitwise.php", "keyword.operator.arithmetic.php"], settings: { foreground: theme.colors.cyan } },
  { scope: "keyword.operator.regexp.php", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.operator.comparison.php", settings: { foreground: theme.colors.cyan } },
  { scope: ["keyword.operator.heredoc.php", "keyword.operator.nowdoc.php"], settings: { foreground: theme.colors.purple } },
  { scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"], settings: { foreground: theme.colors.red } },
  { scope: "support.other.namespace.php", settings: { foreground: theme.palette.fg.default } },
  { scope: ["entity.name.variable.parameter.php", "punctuation.separator.colon.php", "constant.other.php"], settings: { foreground: theme.palette.fg.default } },

  // ── Go ────────────────────────────────────────────────────────────────────
  { scope: "keyword.operator.assignment.go", settings: { foreground: theme.colors.yellow } },
  { scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"], settings: { foreground: theme.colors.purple } },
  { scope: "entity.name.package.go", settings: { foreground: theme.colors.yellow } },

  // ── Ruby ──────────────────────────────────────────────────────────────────
  { scope: "constant.language.symbol.ruby", settings: { foreground: theme.colors.cyan } },
  { scope: "constant.language.symbol.hashkey.ruby", settings: { foreground: theme.colors.cyan } },
  { scope: ["function.parameter.ruby", "function.parameter.cs"], settings: { foreground: theme.palette.fg.default } },

  // ── Elixir ────────────────────────────────────────────────────────────────
  { scope: ["constant.language.symbol.elixir", "constant.language.symbol.double-quoted.elixir"], settings: { foreground: theme.colors.cyan } },

  // ── Haskell ───────────────────────────────────────────────────────────────
  { scope: "variable.other.generic-type.haskell", settings: { foreground: theme.colors.purple } },
  { scope: "storage.type.haskell", settings: { foreground: theme.colors.orange } },

  // ── Elm ───────────────────────────────────────────────────────────────────
  { scope: "support.type.prelude.elm", settings: { foreground: theme.colors.cyan } },
  { scope: "support.constant.elm", settings: { foreground: theme.colors.orange } },

  // ── Clojure ───────────────────────────────────────────────────────────────
  { scope: "entity.global.clojure", settings: { foreground: theme.colors.yellow } },
  { scope: "meta.symbol.clojure", settings: { foreground: theme.colors.red } },
  { scope: "constant.keyword.clojure", settings: { foreground: theme.colors.cyan } },

  // ── Groovy ────────────────────────────────────────────────────────────────
  { scope: "storage.modifier.import.groovy", settings: { foreground: theme.colors.yellow } },
  { scope: "meta.method.groovy", settings: { foreground: theme.colors.blue } },
  { scope: "meta.definition.variable.name.groovy", settings: { foreground: theme.colors.red } },
  { scope: "meta.definition.class.inherited.classes.groovy", settings: { foreground: theme.colors.green } },

  // ── C# ────────────────────────────────────────────────────────────────────
  { scope: "storage.type.cs", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.variable.local.cs", settings: { foreground: theme.colors.red } },
  { scope: ["entity.name.label.cs", "entity.name.scope-resolution.function.call", "entity.name.scope-resolution.function.definition"], settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.variable.parameter.cs", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.variable.field.cs", settings: { foreground: theme.colors.red } },

  // ── HLSL / Shader ─────────────────────────────────────────────────────────
  { scope: "support.variable.semantic.hlsl", settings: { foreground: theme.colors.yellow } },
  { scope: ["support.type.texture.hlsl", "support.type.sampler.hlsl", "support.type.object.hlsl", "support.type.object.rw.hlsl", "support.type.fx.hlsl"], settings: { foreground: theme.colors.purple } },

  // ── Swift / VB ────────────────────────────────────────────────────────────
  { scope: ["support.type.swift", "support.type.vb.asp"], settings: { foreground: theme.colors.yellow } },

  // ── CoffeeScript ──────────────────────────────────────────────────────────
  { scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"], settings: { foreground: theme.colors.red } },

  // ── INI / Makefile ────────────────────────────────────────────────────────
  { scope: "source.ini", settings: { foreground: theme.colors.green } },
  { scope: "meta.scope.prerequisites.makefile", settings: { foreground: theme.colors.red } },
  { scope: "source.makefile", settings: { foreground: theme.colors.yellow } },

  // ── Unison ────────────────────────────────────────────────────────────────
  {
    scope: [
      "punctuation.definition.delayed.unison",
      "punctuation.definition.list.begin.unison",
      "punctuation.definition.list.end.unison",
      "punctuation.definition.ability.begin.unison",
      "punctuation.definition.ability.end.unison",
      "punctuation.operator.assignment.as.unison",
      "punctuation.separator.pipe.unison",
      "punctuation.separator.delimiter.unison",
      "punctuation.definition.hash.unison",
    ],
    settings: { foreground: theme.colors.red },
  },

  // ── Regex ─────────────────────────────────────────────────────────────────
  { scope: "support.constant.edge", settings: { foreground: theme.colors.purple } },
  { scope: "constant.other.character-class.regexp", settings: { foreground: theme.colors.red } },
  { scope: "support.other.parenthesis.regexp", settings: { foreground: theme.colors.orange } },

  // ── Diff ──────────────────────────────────────────────────────────────────
  { scope: "markup.changed.diff", settings: { foreground: theme.colors.yellow } },
  {
    scope: [
      "meta.diff.header.from-file",
      "meta.diff.header.to-file",
      "punctuation.definition.from-file.diff",
      "punctuation.definition.to-file.diff",
    ],
    settings: { foreground: theme.colors.blue },
  },
  { scope: "markup.inserted.diff", settings: { foreground: theme.colors.green } },
  { scope: "markup.deleted.diff", settings: { foreground: theme.colors.red } },

  // ── Markup (Markdown / AsciiDoc) ──────────────────────────────────────────
  { scope: "markup.heading", settings: { foreground: theme.colors.red } },
  { scope: "markup.heading punctuation.definition.heading, entity.name.section", settings: { foreground: theme.colors.blue } },
  { scope: "entity.name.section.markdown", settings: { foreground: theme.colors.red } },
  { scope: "punctuation.definition.heading.markdown", settings: { foreground: theme.colors.red } },
  { scope: "punctuation.definition.list.begin.markdown", settings: { foreground: theme.colors.yellow } },
  { scope: "markup.heading.setext", settings: { foreground: theme.palette.fg.default } },
  { scope: ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"], settings: { foreground: theme.colors.red } },
  { scope: "markup.bold, todo.bold", settings: { foreground: theme.colors.orange } },
  { scope: "punctuation.definition.bold", settings: { foreground: theme.colors.yellow } },
  { scope: "punctuation.definition.bold.markdown", settings: { foreground: theme.colors.orange } },
  { scope: "markup.italic, punctuation.definition.italic, todo.emphasis", settings: { foreground: theme.colors.purple } },
  { scope: "emphasis md", settings: { foreground: theme.colors.purple } },
  { scope: "markup.inline.raw.markdown", settings: { foreground: theme.colors.green } },
  { scope: "markup.inline.raw.string.markdown", settings: { foreground: theme.colors.green } },
  { scope: "punctuation.definition.raw.markdown", settings: { foreground: theme.colors.yellow } },
  { scope: "punctuation.definition.list.markdown", settings: { foreground: theme.colors.yellow } },
  { scope: ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "punctuation.definition.metadata.markdown"], settings: { foreground: theme.colors.red } },
  { scope: "beginning.punctuation.definition.list.markdown", settings: { foreground: theme.colors.red } },
  { scope: "punctuation.definition.metadata.markdown", settings: { foreground: theme.colors.red } },
  { scope: ["markup.underline.link.markdown", "markup.underline.link.image.markdown"], settings: { foreground: theme.colors.purple } },
  { scope: ["string.other.link.title.markdown", "string.other.link.description.markdown"], settings: { foreground: theme.colors.blue } },
  { scope: "markup.raw.monospace.asciidoc", settings: { foreground: theme.colors.green } },
  { scope: "punctuation.definition.asciidoc", settings: { foreground: theme.colors.yellow } },
  { scope: "markup.list.asciidoc", settings: { foreground: theme.colors.yellow } },
  { scope: ["markup.link.asciidoc", "markup.other.url.asciidoc"], settings: { foreground: theme.colors.purple } },
  { scope: ["string.unquoted.asciidoc", "markup.other.url.asciidoc"], settings: { foreground: theme.colors.blue } },
  { scope: "markup.underline", settings: { fontStyle: "underline" } },
  { scope: "markup.italic.markdown", settings: { fontStyle: "italic" } },
  { scope: "markup.deleted", settings: { foreground: theme.colors.red } },
  { scope: "markup.inserted", settings: { foreground: theme.colors.green } },

  // ── Quasi / Template ──────────────────────────────────────────────────────
  { scope: "punctuation.quasi.element", settings: { foreground: theme.colors.purple } },

  // ── Entity / Misc ─────────────────────────────────────────────────────────
  { scope: "constant.character.entity", settings: { foreground: theme.colors.red } },
  { scope: ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"], settings: { foreground: theme.colors.cyan } },
  { scope: "support.type.property-name", settings: { foreground: theme.palette.fg.default } },
  { scope: "support.constant.property-value", settings: { foreground: theme.palette.fg.default } },
  { scope: "support.constant.font-name", settings: { foreground: theme.colors.orange } },
  { scope: "support.constant.math", settings: { foreground: theme.colors.yellow } },
  { scope: "support.constant.property.math", settings: { foreground: theme.colors.orange } },

  // ── LaTeX / Math ──────────────────────────────────────────────────────────
  { scope: "variable.parameter.function.latex", settings: { foreground: theme.colors.red } },
  { scope: ["support.class.math.block.environment.latex", "constant.other.general.math.tex"], settings: { foreground: theme.colors.blue } },
  { scope: "constant.character.math.tex", settings: { foreground: theme.colors.green } },

  // ── ASM ───────────────────────────────────────────────────────────────────
  { scope: "constant.numeric.decimal.asm.x86_64", settings: { foreground: theme.colors.purple } },

  // ── Xi ────────────────────────────────────────────────────────────────────
  { scope: "entity.name.function.xi", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.class.xi", settings: { foreground: theme.colors.cyan } },
  { scope: "constant.character.character-class.regexp.xi", settings: { foreground: theme.colors.red } },
  { scope: "constant.regexp.xi", settings: { foreground: theme.colors.purple } },
  { scope: "keyword.control.xi", settings: { foreground: theme.colors.cyan } },
  { scope: "invalid.xi", settings: { foreground: theme.palette.fg.default } },
  { scope: "beginning.punctuation.definition.quote.markdown.xi", settings: { foreground: theme.colors.green } },
  { scope: "beginning.punctuation.definition.list.markdown.xi", settings: { foreground: theme.palette.syntax.comment } },
  { scope: "constant.character.xi", settings: { foreground: theme.colors.blue } },
  { scope: "accent.xi", settings: { foreground: theme.colors.blue } },
  { scope: "wikiword.xi", settings: { foreground: theme.colors.orange } },
  { scope: "constant.other.color.rgb-value.xi", settings: { foreground: theme.colors.white } },
  { scope: "punctuation.definition.tag.xi", settings: { foreground: theme.palette.syntax.comment } },

  // ── Log output ────────────────────────────────────────────────────────────
  { scope: "log.info", settings: { foreground: theme.colors.green } },
  { scope: "log.warning", settings: { foreground: theme.colors.yellow } },
  { scope: "log.error", settings: { foreground: theme.colors.red } },

  // ── Invalid ───────────────────────────────────────────────────────────────
  { scope: "invalid.illegal", settings: { foreground: theme.colors.white } },
  { scope: "invalid.broken", settings: { foreground: theme.colors.white } },
  { scope: "invalid.deprecated", settings: { foreground: theme.colors.white } },
  { scope: "invalid.deprecated.entity.other.attribute-name.html", settings: { foreground: theme.colors.orange } },
  { scope: "invalid.unimplemented", settings: { foreground: theme.colors.white } },

  // ── Editor tokens ─────────────────────────────────────────────────────────
  { scope: "token.info-token", settings: { foreground: theme.colors.blue } },
  { scope: "token.warn-token", settings: { foreground: theme.colors.orange } },
  { scope: "token.error-token", settings: { foreground: theme.colors.red } },
  { scope: "token.debug-token", settings: { foreground: theme.colors.purple } },

  // ── Misc ──────────────────────────────────────────────────────────────────
  { scope: "support.class, entity.name.type.class", settings: { foreground: theme.colors.yellow } },
  { scope: "entity.name.label", settings: { foreground: theme.colors.red } },
  { scope: "function.parameter", settings: { foreground: theme.palette.fg.default } },
  { scope: "function.brace", settings: { foreground: theme.palette.fg.default } },
  { scope: ["block.scope.end", "block.scope.begin"], settings: { foreground: theme.palette.fg.default } },

  // ── Italic styles ─────────────────────────────────────────────────────────
  {
    scope: [
      "entity.other.attribute-name.js",
      "entity.other.attribute-name.ts",
      "entity.other.attribute-name.jsx",
      "entity.other.attribute-name.tsx",
      "variable.parameter",
      "variable.language.super",
    ],
    settings: { fontStyle: "italic" },
  },
];
