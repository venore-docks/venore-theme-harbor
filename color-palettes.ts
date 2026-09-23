import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida = o petróleo de marca da FEM (--primary de theme.css, #006b82) — presets
// alternativos que o admin pode escolher em /admin/settings/brand giram o matiz a partir daqui,
// mesmo princípio do Aurora (generate-hue-rotation-palettes.ts).
export const HARBOR_COLOR_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.488 0.089 219.5)",
      primaryForeground: "oklch(0.98 0.01 219.5)",
      accent: "oklch(0.9 0.05 219.5)",
      accentForeground: "oklch(0.24 0.03 219.5)",
      ring: "oklch(0.488 0.089 219.5)",
    },
    dark: {
      primary: "oklch(0.7 0.1 219.5)",
      primaryForeground: "oklch(0.16 0.03 219.5)",
      accent: "oklch(0.32 0.05 219.5)",
      accentForeground: "oklch(0.92 0.03 219.5)",
      ring: "oklch(0.7 0.1 219.5)",
    },
  },
  THEME_HUE_PRESETS,
);
