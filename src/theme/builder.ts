import semanticTokenColors from '@/theme/syntax/semantic-token-colors';
import tokenColors from '@/theme/syntax/textmate-token-colors';
import ui from '@/theme/ui';
import type { Theme } from '@/types';

const build = (theme: Theme) => {
    return {
        name: theme.name,
        type: theme.type,
        colors: ui(theme),
        semanticHighlighting: true,
        semanticTokenColors: semanticTokenColors(theme),
        tokenColors: tokenColors(theme),
    };
};

export default build;
