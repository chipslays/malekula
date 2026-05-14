import build from '@/theme/builder';
import type { Theme } from '@/types';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

class ThemeGenerator {
    private themes: Theme[] = [];
    private outputDir: string = '';

    constructor(themes: Theme[]) {
        this.themes.push(...themes.flat());
    }

    output(dir: string): this {
        this.outputDir = dir;
        return this;
    }

    async run(): Promise<void> {
        if (this.themes.length === 0) throw new Error('No themes provided. Call .input(...themes) first.');
        if (!this.outputDir) throw new Error('Output dir is required. Call .output(dir) first.');

        const themesPath = join(import.meta.dirname, this.outputDir);

        try {
            await mkdir(themesPath);
        } catch (error: any) {
            if (error.code !== 'EEXIST') throw error;
        }

        for (const theme of this.themes) {
            const content = build(theme);

            await writeFile(join(themesPath, theme.file), JSON.stringify(content, null, 2), 'utf-8');

            console.info(`✨ ${theme.file}`);
        }
    }
}

export function generator(themes: Theme[]): ThemeGenerator {
    return new ThemeGenerator(themes);
}
