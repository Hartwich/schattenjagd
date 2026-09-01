import Phaser from "phaser";
import type { TransportMode } from "../config.js";

const assetRoot = "/schattenjagd";

export const cityMapTextureKey = "schattenjagd-city-night";

export const modeTicketTextureKeys: Record<TransportMode, string> = {
  taxi: "schattenjagd-ticket-taxi",
  bus: "schattenjagd-ticket-bus",
  metro: "schattenjagd-ticket-metro"
};

export const modeVehicleTextureKeys: Record<TransportMode, string> = {
  taxi: "schattenjagd-vehicle-taxi",
  bus: "schattenjagd-vehicle-bus",
  metro: "schattenjagd-vehicle-metro"
};

export function preloadSchattenjagdAssets(scene: Phaser.Scene): void {
  scene.load.image(cityMapTextureKey, `${assetRoot}/city-night.webp`);

  for (const [mode, textureKey] of Object.entries(modeTicketTextureKeys)) {
    scene.load.image(textureKey, `${assetRoot}/ticket-${mode}.png`);
  }

  for (const [mode, textureKey] of Object.entries(modeVehicleTextureKeys)) {
    scene.load.image(textureKey, `${assetRoot}/vehicle-${mode}.png`);
  }
}
