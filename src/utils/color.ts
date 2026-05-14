/**
 * Utility helpers for working with hex colors.
 *
 * @example
 *   import color from "@/utils/color";
 *
 *   color.white                          // "#ffffff"
 *   color.transparent                    // "#00000000"
 *   color.alpha("#282c34", 0.5)          // "#282c3480"
 *   color.alpha("#282c34", 50)           // "#282c3480"  (same, percent form)
 *   color.shift("#528bff", 28)           // all channels +28
 *   color.shift("#528bff", { r: 40, b: -10 }) // per-channel
 *   color.hover("#528bff")               // lightened hover variant
 *   color.hover("#528bff", 48)           // stronger hover
 *   color.mix("#000000", "#ffffff", 0.5) // "#808080"
 *   color.contrast("#528bff")            // "#ffffff"
 *   color.luminance("#528bff")           // 0–1
 *   color.brightness("#528bff")          // 0–255
 *   color.valid("#528bff")               // true
 *   color.valid("#fff")                  // true  (3-digit)
 *   color.valid("#528bff80")             // true  (8-digit with alpha)
 */

import type { HexColor } from "@/types";

type ChannelShift = { r?: number; g?: number; b?: number };

const color = {
    transparent: '#00000000',

    /**
     * Appends an alpha (opacity) channel to a 6-digit hex color.
     * Accepts opacity as a float [0, 1] or as a percentage integer [0, 100].
     *
     * @param hex     - Base hex color, e.g. "#282c34".
     * @param opacity - Opacity as 0–1 float or 0–100 integer.
     * @returns 8-digit hex color with alpha, e.g. "#282c3480".
     *
     * @example
     *   color.alpha("#282c34", 0.5)  // => "#282c3480"
     *   color.alpha("#282c34", 50)   // => "#282c3480"
     *   color.alpha("#61afef", 0.15) // => "#61afef26"
     */
    alpha(hex: string, opacity: number): HexColor {
        const normalized = opacity > 1 ? opacity / 100 : opacity;
        const a = Math.round(normalized * 255).toString(16).padStart(2, "0");
        return (hex + a) as HexColor;
    },

    /**
     * WCAG 2.0 relative luminance of a hex color (range 0–1).
     * Used to determine whether a color is perceptually light or dark.
     *
     * @param hex - 6-digit hex color, e.g. "#528bff".
     * @returns Relative luminance in [0, 1].
     */
    luminance(hex: string): number {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        const lin = (c: number) =>
            c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    },

    /**
     * Perceived brightness via the HSP algorithm (range 0–255).
     *
     * @param hex - 6-digit hex color.
     * @returns Perceived brightness in [0, 255].
     */
    brightness(hex: string): number {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
    },

    /**
     * Returns "#000000" or "#ffffff" — whichever gives the best WCAG contrast
     * against the given background color.
     *
     * @param hex - 6-digit background hex color.
     * @returns "#000000" or "#ffffff".
     */
    contrast(hex: string): HexColor {
        return (color.brightness(hex) > 128 ? "#000000" : "#ffffff") as HexColor;
    },

    /**
     * Shifts RGB channels by `amount`.
     * Pass a single number to shift all channels equally,
     * or an object to shift each channel independently.
     * Channels are clamped to [0, 255].
     *
     * @param hex    - 6-digit hex color.
     * @param amount - Uniform delta or per-channel `{ r?, g?, b? }`.
     * @returns Shifted hex color.
     *
     * @example
     *   color.shift("#528bff", 28)               // all channels +28
     *   color.shift("#528bff", -28)              // all channels -28
     *   color.shift("#528bff", { r: 40, b: -10 }) // only r and b
     */
    shift(hex: string, amount: number | ChannelShift): HexColor {
        const clamp = (n: number) => Math.min(255, Math.max(0, n));
        const dr = typeof amount === "number" ? amount : (amount.r ?? 0);
        const dg = typeof amount === "number" ? amount : (amount.g ?? 0);
        const db = typeof amount === "number" ? amount : (amount.b ?? 0);
        const r = clamp(parseInt(hex.slice(1, 3), 16) + dr);
        const g = clamp(parseInt(hex.slice(3, 5), 16) + dg);
        const b = clamp(parseInt(hex.slice(5, 7), 16) + db);
        return ("#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")) as HexColor;
    },

    /**
     * Derives a hover variant: lightens dark colors, darkens light ones.
     * The shift amount is configurable for different component intensities.
     *
     * @param hex    - 6-digit base hex color.
     * @param amount - Channel delta (default: 28).
     * @returns Hover variant hex color.
     *
     * @example
     *   color.hover("#528bff")     // default intensity
     *   color.hover("#528bff", 48) // stronger hover effect
     */
    hover(hex: string, amount = 28): HexColor {
        return color.luminance(hex) > 0.5
            ? color.shift(hex, -amount)
            : color.shift(hex, amount);
    },

    /**
     * Mixes two hex colors by a given weight.
     * `weight` controls how much of `hex1` is in the result:
     * 0 = fully `hex2`, 1 = fully `hex1`, 0.5 = equal blend.
     *
     * @param hex1   - First hex color.
     * @param hex2   - Second hex color.
     * @param weight - Blend weight toward `hex1` in [0, 1] (default: 0.5).
     * @returns Blended hex color.
     *
     * @example
     *   color.mix("#000000", "#ffffff")      // => "#808080"
     *   color.mix("#528bff", "#282c34", 0.2) // 20% blue, 80% dark
     */
    mix(hex1: string, hex2: string, weight = 0.5): HexColor {
        const w = Math.min(1, Math.max(0, weight));
        const p = (h: string, s: number, e: number) => parseInt(h.slice(s, e), 16);
        const r = Math.round(p(hex1, 1, 3) * w + p(hex2, 1, 3) * (1 - w));
        const g = Math.round(p(hex1, 3, 5) * w + p(hex2, 3, 5) * (1 - w));
        const b = Math.round(p(hex1, 5, 7) * w + p(hex2, 5, 7) * (1 - w));
        return ("#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")) as HexColor;
    },

    /**
     * Returns true if the string is a valid hex color.
     * Accepts 3-digit (#rgb), 6-digit (#rrggbb), and 8-digit (#rrggbbaa) forms.
     *
     * @param hex - String to validate.
     * @returns True if valid hex color.
     *
     * @example
     *   color.valid("#528bff")   // true  (6-digit)
     *   color.valid("#fff")      // true  (3-digit shorthand)
     *   color.valid("#528bff80") // true  (8-digit with alpha)
     *   color.valid("528bff")    // false (missing #)
     *   color.valid("#gggggg")   // false (invalid chars)
     */
    valid(hex: string): boolean {
        return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(hex);
    },
} as const;

export default color;
