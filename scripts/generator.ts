import { generator } from '@/generator';
import BlackFlatTheme from '@/themes/black-flat/theme';
import BlackTheme from '@/themes/black/theme';
import DarkFlatTheme from '@/themes/dark-flat/theme';
import DarkTheme from '@/themes/dark/theme';
import DarkerFlatTheme from '@/themes/darker-flat/theme';
import DarkerTheme from '@/themes/darker/theme';
import LightFlatTheme from '@/themes/light-flat/theme';
import LightTheme from '@/themes/light/theme';
import WarmFlatTheme from '@/themes/warm-flat/theme';
import WarmTheme from '@/themes/warm/theme';

const themes = [
    DarkTheme,
    DarkFlatTheme,
    DarkerTheme,
    DarkerFlatTheme,
    BlackTheme,
    BlackFlatTheme,
    LightTheme,
    LightFlatTheme,
    WarmTheme,
    WarmFlatTheme,
];

await generator(themes)
    .output('../themes')
    .run();
