# AI Agent Guide - Schattenjagd

## Mental Model

- Der Server ist autoritativ. Zugreihenfolge, Tickets, Sichtbarkeit und Ergebnis liegen in `src/server`.
- Der Host zeigt nur an, was `toPublicState` liefert. Die aktuelle Position des Schattens wird dort erst nach Spielende gesetzt.
- Der Controller zeigt pro Spieler nur `toControllerStateForPlayer`. Ermittler duerfen nie die aktuelle Schattenposition erhalten.
- Die Karte ist pro Runde fix und wird nur bei Zustandsaenderungen mitgesendet. Deshalb darf `tick` den Zustand nicht bei jedem Frame veraendern - Countdowns laufen ueber `turnEndsAt` im Client.

## Dateien

- `src/config.ts` - Regelwerte, Lobby-Setup-Keys, Verkehrsmittel.
- `src/map/generateTransitMap.ts` - prozeduraler Netzgenerator (Taxi/Bus/Metro, Zusammenhangs-Garantie).
- `src/map/graph.ts` - Verbindungen und BFS-Distanzen.
- `src/server/rules.ts` - Zuglogik, Phasenwechsel, Fangpruefung.
- `src/server/ai.ts` - Zugbewertung des KI-Schattens.
- `src/server/setup.ts` - Startaufstellung.
- `src/host/SchattenjagdRenderer.ts` - komplette Host-Darstellung.
- `src/controller/index.ts` - Aufbau des `choice`-Layouts.

## Regeln fuer Aenderungen

- Keine fremden Marken, Kartenvorlagen oder Illustrationen einbringen. Alle Inhalte bleiben Eigenentwicklung.
- Sichtbarkeitsregeln nicht aufweichen: Die Schattenposition erscheint nur in Enttarnungsrunden oder nach Spielende.
- Balancing-Aenderungen in `src/config.ts` buendeln statt ueber den Code zu verteilen.
- Texte gehoeren nach `src/text.ts` (de/en), nicht hart in Server, Host oder Controller.

## Verifikation

```bash
npm run typecheck
npm run build
```

Danach in der Plattform:

```bash
npm run games:sync-local
npm run typecheck
```
