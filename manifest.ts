import type { ThemeManifest } from "@venore/theme-sdk";

export const harborManifest: ThemeManifest = {
  key: "harbor",
  name: "Harbor",
  version: "0.1.5",
  themeContractVersion: "7.0.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o petróleo-teal de --primary (referência visual do
  // tema, ver theme.css).
  brandAesthetics: { mode: "svg", size: 96, scrolledSize: 84, position: "left", color: "oklch(0.488 0.089 219.5)" },
  colorModes: ["light", "dark"],
};
