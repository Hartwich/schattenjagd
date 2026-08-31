import type { TransportMode } from "./config.js";

export type SchattenjagdLanguage = "de" | "en";

export interface SchattenjagdText {
  title: string;
  shadowRole: string;
  detectiveRole: string;
  spectatorRole: string;
  aiShadowName: string;
  shadowUnknown: string;
  modeLabels: Record<TransportMode, string>;
  ticketLabel: string;
  stationLabel: string;
  turnLabel: string;
  stageShadow: string;
  stageDetective: string;
  stageCaught: string;
  stageEscaped: string;
  preparing: string;
  shadowTurnHint: string;
  shadowWaitHint: string;
  detectiveTurnHint: string;
  detectiveWaitHint: string;
  shadowMovedPublic: (mode: string) => string;
  shadowMovedShrouded: string;
  shadowSurfaced: (station: number) => string;
  detectiveProgress: (moved: number, total: number) => string;
  detectivesTurn: string;
  shadowTurnStart: (turn: number, total: number) => string;
  caughtMessage: (detective: string, station: number) => string;
  escapedMessage: string;
  shadowStuck: string;
  noMoveLeft: string;
  timeoutShadow: string;
  timeoutDetectives: string;
  shroudArmed: string;
  shroudDisarmed: string;
  doubleArmed: string;
  doubleDisarmed: string;
  shroudLabel: string;
  doubleLabel: string;
  shroudDescription: string;
  doubleDescription: string;
  shroudActiveNote: string;
  doubleActiveNote: string;
  doubleSecondStep: string;
  nextReveal: (turn: number) => string;
  noReveal: string;
  lastSeen: (station: number, turn: number) => string;
  neverSeen: string;
  travelLogTitle: string;
  ticketsTitle: string;
  scoreShadowEscape: string;
  scoreDetectiveWin: string;
  scoreCapture: string;
  waitingForState: string;
  moveDescription: (mode: string, ticketsLeft: number) => string;
  moveDescriptionUnlimited: (mode: string) => string;
  blockedOccupied: string;
  blockedNoTicket: string;
  hunt: string;
  escapeIn: (turns: number) => string;
  roleAssignedShadow: string;
  roleAssignedDetective: string;
  aiShadowActive: string;
  yourStation: string;
  shadowLabel: string;
  specialsLabel: string;
  sightingLabel: string;
  positionLine: (station: number) => string;
}

const de: SchattenjagdText = {
  title: "Schattenjagd",
  shadowRole: "Du bist der Schatten",
  detectiveRole: "Du bist Ermittlerin oder Ermittler",
  spectatorRole: "Du schaust zu",
  aiShadowName: "Der Schatten (KI)",
  shadowUnknown: "Der Schatten",
  modeLabels: {
    taxi: "Taxi",
    bus: "Bus",
    metro: "Metro"
  },
  ticketLabel: "Tickets",
  stationLabel: "Station",
  turnLabel: "Zug",
  stageShadow: "Der Schatten zieht",
  stageDetective: "Ermittler ziehen",
  stageCaught: "Schatten gestellt",
  stageEscaped: "Schatten entkommen",
  preparing: "Die Stadtkarte wird vorbereitet ...",
  shadowTurnHint: "Waehle deine naechste Station. Nur das Verkehrsmittel wird verraten.",
  shadowWaitHint: "Der Schatten plant seinen Zug.",
  detectiveTurnHint: "Waehle deine naechste Station.",
  detectiveWaitHint: "Warte auf die uebrigen Ermittler.",
  shadowMovedPublic: (mode) => `Der Schatten ist mit ${mode} gereist.`,
  shadowMovedShrouded: "Der Schatten hat seine Spur verschleiert.",
  shadowSurfaced: (station) => `Der Schatten wurde an Station ${station} gesichtet.`,
  detectiveProgress: (moved, total) => `Ermittlerzuege: ${moved}/${total}.`,
  detectivesTurn: "Die Ermittler sind am Zug.",
  shadowTurnStart: (turn, total) => `Zug ${turn} von ${total}. Der Schatten ist am Zug.`,
  caughtMessage: (detective, station) => `${detective} stellt den Schatten an Station ${station}.`,
  escapedMessage: "Der Schatten hat alle Zuege ueberstanden und entkommt.",
  shadowStuck: "Der Schatten ist eingekesselt und kann nicht mehr ziehen.",
  noMoveLeft: "Keine Verbindung frei.",
  timeoutShadow: "Zeit abgelaufen. Der Schatten weicht automatisch aus.",
  timeoutDetectives: "Zeit abgelaufen. Wer nicht gezogen hat, bleibt stehen.",
  shroudArmed: "Schleier vorbereitet.",
  shroudDisarmed: "Schleier abgelegt.",
  doubleArmed: "Doppelzug vorbereitet.",
  doubleDisarmed: "Doppelzug abgelegt.",
  shroudLabel: "Schleier",
  doubleLabel: "Doppelzug",
  shroudDescription: "Verbirgt das Verkehrsmittel deines naechsten Zuges.",
  doubleDescription: "Erlaubt zwei Zuege hintereinander, bevor die Ermittler dran sind.",
  shroudActiveNote: "Schleier ist aktiv.",
  doubleActiveNote: "Doppelzug ist aktiv.",
  doubleSecondStep: "Zweiter Teil des Doppelzugs.",
  nextReveal: (turn) => `Naechste Sichtung in Zug ${turn}.`,
  noReveal: "Keine Sichtung mehr geplant.",
  lastSeen: (station, turn) => `Zuletzt gesehen: Station ${station} (Zug ${turn}).`,
  neverSeen: "Noch keine Sichtung.",
  travelLogTitle: "Reiseprotokoll",
  ticketsTitle: "Ermittler",
  scoreShadowEscape: "Flucht gelungen",
  scoreDetectiveWin: "Schatten gestellt",
  scoreCapture: "Festnahme",
  waitingForState: "Warte auf Spielstand.",
  moveDescription: (mode, ticketsLeft) => `${mode} - noch ${ticketsLeft} Tickets`,
  moveDescriptionUnlimited: (mode) => `${mode} - unbegrenzt`,
  blockedOccupied: "Station ist belegt",
  blockedNoTicket: "Kein Ticket mehr",
  hunt: "Die Jagd laeuft.",
  escapeIn: (turns) => `Noch ${turns} Zuege bis zur Flucht.`,
  roleAssignedShadow: "Du reist verdeckt. Verrate dich nicht.",
  roleAssignedDetective: "Findet den Schatten, bevor die Zuege ausgehen.",
  aiShadowActive: "Der Schatten wird vom Server gesteuert.",
  yourStation: "Deine Station",
  shadowLabel: "Schatten",
  specialsLabel: "Sonderzuege",
  sightingLabel: "Sichtung",
  positionLine: (station) => `Du stehst auf Station ${station}`
};

const en: SchattenjagdText = {
  title: "Shadow Hunt",
  shadowRole: "You are the Shadow",
  detectiveRole: "You are an investigator",
  spectatorRole: "You are watching",
  aiShadowName: "The Shadow (AI)",
  shadowUnknown: "The Shadow",
  modeLabels: {
    taxi: "Taxi",
    bus: "Bus",
    metro: "Metro"
  },
  ticketLabel: "Tickets",
  stationLabel: "Station",
  turnLabel: "Turn",
  stageShadow: "Shadow is moving",
  stageDetective: "Investigators are moving",
  stageCaught: "Shadow cornered",
  stageEscaped: "Shadow escaped",
  preparing: "Preparing the city map ...",
  shadowTurnHint: "Pick your next station. Only the transport type is revealed.",
  shadowWaitHint: "The Shadow is planning a move.",
  detectiveTurnHint: "Pick your next station.",
  detectiveWaitHint: "Waiting for the other investigators.",
  shadowMovedPublic: (mode) => `The Shadow travelled by ${mode}.`,
  shadowMovedShrouded: "The Shadow covered its tracks.",
  shadowSurfaced: (station) => `The Shadow was spotted at station ${station}.`,
  detectiveProgress: (moved, total) => `Investigator moves: ${moved}/${total}.`,
  detectivesTurn: "The investigators are up.",
  shadowTurnStart: (turn, total) => `Turn ${turn} of ${total}. The Shadow is up.`,
  caughtMessage: (detective, station) => `${detective} corners the Shadow at station ${station}.`,
  escapedMessage: "The Shadow survived every turn and escapes.",
  shadowStuck: "The Shadow is boxed in and cannot move.",
  noMoveLeft: "No connection available.",
  timeoutShadow: "Time is up. The Shadow dodges automatically.",
  timeoutDetectives: "Time is up. Everyone who did not move stays put.",
  shroudArmed: "Shroud prepared.",
  shroudDisarmed: "Shroud put away.",
  doubleArmed: "Double move prepared.",
  doubleDisarmed: "Double move put away.",
  shroudLabel: "Shroud",
  doubleLabel: "Double move",
  shroudDescription: "Hides the transport type of your next move.",
  doubleDescription: "Lets you move twice before the investigators react.",
  shroudActiveNote: "Shroud is armed.",
  doubleActiveNote: "Double move is armed.",
  doubleSecondStep: "Second half of the double move.",
  nextReveal: (turn) => `Next sighting on turn ${turn}.`,
  noReveal: "No further sighting scheduled.",
  lastSeen: (station, turn) => `Last seen: station ${station} (turn ${turn}).`,
  neverSeen: "No sighting yet.",
  travelLogTitle: "Travel log",
  ticketsTitle: "Investigators",
  scoreShadowEscape: "Escape successful",
  scoreDetectiveWin: "Shadow cornered",
  scoreCapture: "Arrest",
  waitingForState: "Waiting for game state.",
  moveDescription: (mode, ticketsLeft) => `${mode} - ${ticketsLeft} tickets left`,
  moveDescriptionUnlimited: (mode) => `${mode} - unlimited`,
  blockedOccupied: "Station occupied",
  blockedNoTicket: "No ticket left",
  hunt: "The hunt is on.",
  escapeIn: (turns) => `${turns} turns until the escape.`,
  roleAssignedShadow: "You travel unseen. Do not give yourself away.",
  roleAssignedDetective: "Find the Shadow before the turns run out.",
  aiShadowActive: "The Shadow is controlled by the server.",
  yourStation: "Your station",
  shadowLabel: "Shadow",
  specialsLabel: "Special moves",
  sightingLabel: "Sighting",
  positionLine: (station) => `You are at station ${station}`
};

export const schattenjagdText: Record<SchattenjagdLanguage, SchattenjagdText> = { de, en };

export function getSchattenjagdText(language?: string): SchattenjagdText {
  return language === "en" ? schattenjagdText.en : schattenjagdText.de;
}
