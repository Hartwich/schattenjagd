import type { GameManifest } from "@open-party-lab/game-core";
import { schattenjagdRoomSettingKeys, schattenjagdSetupConfig } from "./config.js";

export const schattenjagdManifest = {
  id: "schattenjagd",
  displayName: "Schattenjagd",
  description: "Ermittler jagen einen verdeckt reisenden Schatten durch ein zufaellig erzeugtes Verkehrsnetz.",
  minPlayers: 3,
  minPlayersBySetting: {
    settingKey: schattenjagdRoomSettingKeys.shadowMode,
    values: { ai: 2 }
  },
  maxPlayers: 8,
  hostView: "SchattenjagdHostScene",
  controllerView: "schattenjagd",
  controllerLayout: "choice",
  supportsTeams: false,
  estimatedRoundDurationMs: 900_000,
  roundCompletionMode: "wait_for_ready",
  lobbySetup: {
    title: "Schattenjagd Setup",
    description: "Lege fest, wer den Schatten spielt. Alle uebrigen Spieler ermitteln gemeinsam.",
    fields: [
      {
        kind: "select",
        id: "shadowMode",
        settingKey: schattenjagdRoomSettingKeys.shadowMode,
        actionKey: "shadowMode",
        label: "Schatten",
        description: "Zufaellig, per Sitzplatz oder komplett vom Server gesteuert.",
        defaultValue: schattenjagdSetupConfig.shadowMode.defaultValue,
        options: [
          { id: "random", label: "Zufaelliger Spieler", description: "Ein Spieler wird geheim ausgelost." },
          { id: "seat", label: "Fester Sitzplatz", description: "Spieler mit der gewaehlten Platznummer." },
          { id: "ai", label: "Server-KI", description: "Alle Spieler ermitteln gegen die KI." }
        ]
      },
      {
        kind: "select",
        id: "turnTime",
        settingKey: schattenjagdRoomSettingKeys.turnTime,
        actionKey: "turnTime",
        label: "Zugzeit",
        description: "Zeitfenster pro Zug fuer Schatten und Ermittler.",
        defaultValue: schattenjagdSetupConfig.turnTime.defaultValue,
        options: [
          { id: "20", label: "20 Sekunden", description: "Sehr schnelles Tempo." },
          { id: "30", label: "30 Sekunden", description: "Zuegig." },
          { id: "45", label: "45 Sekunden", description: "Ausgewogen." },
          { id: "60", label: "60 Sekunden", description: "Entspannt." },
          { id: "90", label: "90 Sekunden", description: "Viel Bedenkzeit." },
          { id: "off", label: "Ohne Zeitlimit", description: "Kein Countdown, es wird auf jeden Zug gewartet." }
        ]
      },
      {
        kind: "number",
        id: "shadowSeat",
        settingKey: schattenjagdRoomSettingKeys.shadowSeat,
        actionKey: "shadowSeat",
        label: "Sitzplatz des Schattens",
        description: "Nur relevant bei fester Sitzplatzwahl. Platz 1 ist der zuerst beigetretene Spieler.",
        min: schattenjagdSetupConfig.shadowSeat.min,
        max: schattenjagdSetupConfig.shadowSeat.max,
        step: schattenjagdSetupConfig.shadowSeat.step,
        defaultValue: schattenjagdSetupConfig.shadowSeat.defaultValue
      }
    ]
  },
  phaseDurations: {
    roundIntroMs: 2_000,
    countdownMs: 2_400,
    resultMs: 7_000,
    scoreboardMs: 5_000
  },

  ownsScreens: ["round_intro", "result"],
  visual: { accent: "#5d6f80", icon: "ghost", eyebrow: "Shadows" },
  audio: { track: { profile: "mystery", bpm: 96, rootMidi: 45, masterGain: 0.12 } },
} as const satisfies GameManifest;

export const manifest = schattenjagdManifest;
