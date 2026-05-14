import { writeFile } from 'fs/promises';
import { join } from 'path';

type TokenMap = Record<string, { description: string }>;
type ParsedTheme = Record<string, TokenMap>;

interface ParserConfig {
    sourceUrl: string;
    blacklist: Set<string>;
    strip: Set<string>;
    outputDir: string;
}

class ThemeColorParser {
    private config: ParserConfig = {
        sourceUrl: '',
        blacklist: new Set(),
        strip: new Set(),
        outputDir: '',
    };

    source(url: string): this {
        this.config.sourceUrl = url;
        return this;
    }

    blacklist(terms: string[]): this {
        terms.flat().forEach((t) => this.config.blacklist.add(t.toLowerCase()));
        return this;
    }

    strip(words: string[]): this {
        words.flat().forEach((w) => this.config.strip.add(w.toLowerCase()));
        return this;
    }

    output(dir: string): this {
        this.config.outputDir = dir;
        return this;
    }

    async run(): Promise<void> {
        const { sourceUrl } = this.config;
        if (!sourceUrl) throw new Error('Source URL is required. Call .source(url) first.');

        const md = await fetch(sourceUrl).then((r) => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.text();
        });

        const theme = this.parse(md);
        await this.render(theme);
    }

    private headingToKey(heading: string): string {
        const { strip } = this.config;
        return heading
            .toLowerCase()
            .split(/\s+/)
            .filter((w) => !strip.has(w) && w.length > 0 && /^[a-z]/.test(w))
            .join('-');
    }

    private static kebabToCamel(s: string): string {
        return s
            .split('-')
            .map((w, i) => (i === 0 ? w : (w?.[0]?.toUpperCase() ?? '') + w.slice(1)))
            .join('');
    }

    private static parseListItem(line: string): { token: string; desc: string } | null {
        const m = line.match(/^-\s+`([^`]+)`\s*:\s*(.+)$/);
        return m ? { token: m[1]!.trim(), desc: m[2]!.trim() } : null;
    }

    private parse(md: string): ParsedTheme {
        const { blacklist } = this.config;
        const result: ParsedTheme = {};
        let section: string | null = null;
        let skip = false;

        for (const raw of md.split('\n')) {
            const line = raw.trimEnd();

            if (line.startsWith('## ')) {
                const heading = line.slice(3).trim();
                skip = blacklist.has(heading.toLowerCase());
                if (skip) { section = null; continue; }

                section = this.headingToKey(heading);
                result[section] ??= {};
                continue;
            }

            if (skip || !section) continue;

            const item = ThemeColorParser.parseListItem(line);
            if (item) {
                (result[section] ??= {})[item.token] = { description: item.desc };
            }
        }

        return result;
    }

    private async render(theme: ParsedTheme): Promise<void> {
        const { outputDir } = this.config;
        const sections: string[] = [];

        for (const [section, tokens] of Object.entries(theme)) {
            const entries = Object.entries(tokens);
            if (entries.length === 0) continue;

            const varName = ThemeColorParser.kebabToCamel(section);
            const typeName = varName.charAt(0).toUpperCase() + varName.slice(1);

            const lines: string[] = [
                `import type { Theme } from '@/types';`,
                ``,
                `/** @see https://code.visualstudio.com/api/references/theme-color */`,
                `export const ${varName} = (theme: Theme) => ({`,
                ``,
            ];

            for (const [token, { description }] of entries) {
                lines.push(`  /**`);
                lines.push(`   * ${description}`);
                lines.push(`   */`);
                lines.push(`  '${token}': theme.ui['${token}'],`);
                lines.push(``);
            }

            lines.push(`});`);
            lines.push(``);
            lines.push(`export type ${typeName}Key = keyof ReturnType<typeof ${varName}>;`);
            lines.push(``);

            const filePath = join(import.meta.dirname, outputDir, `${section}.ts`);
            await writeFile(filePath, lines.join('\n'), 'utf-8');

            sections.push(section);

            console.info(`✅ ${outputDir}/${section}.ts`);
        }

        await this.renderColors(sections);
    }

    private async renderColors(sections: string[]): Promise<void> {
        const { outputDir } = this.config;

        const imports = sections
            .map((s) => {
                const varName = ThemeColorParser.kebabToCamel(s);
                return `import { ${varName} } from '@/theme/ui/${s}';`;
            })
            .join('\n');

        const spreads = sections
            .map((s) => `    ...${ThemeColorParser.kebabToCamel(s)}(theme),`)
            .join('\n');

        const lines = [
            `// ⚠️ This file is auto-generated. Do not edit manually.`,
            ``,
            imports,
            `import type { Theme } from '@/types';`,
            ``,
            `export default (theme: Theme) => ({`,
            spreads,
            `});`,
            ``,
        ];

        const filePath = join(import.meta.dirname, outputDir, 'index.ts');

        await writeFile(filePath, lines.join('\n'), 'utf-8');

        console.info(`🏁 ${outputDir}/index.ts`);
    }
}

export default function parser(): ThemeColorParser {
    return new ThemeColorParser();
}
