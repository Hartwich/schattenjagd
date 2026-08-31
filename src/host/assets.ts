import Phaser from "phaser";
import type { TransportMode } from "../config.js";

const assetRoot = "/schattenjagd";

export const cityMapTextureKey = "schattenjagd-city-night";

export const modeTicketTextureKeys: Record<TransportMode, string> = {
  taxi: "schattenjagd-ticket-taxi",
  bus: "schattenjagd-ticket-bus",
  metro: "schattenjagd-ticket-metro"
};

export function preloadSchattenjagdAssets(scene: Phaser.Scene): void {
  scene.load.image(cityMapTextureKey, `${assetRoot}/city-night.webp`);

  for (const [mode, textureKey] of Object.entries(modeTicketTextureKeys)) {
    scene.load.image(textureKey, `${assetRoot}/ticket-${mode}.png`);
  }
}
