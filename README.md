# Schattenjagd

Verfolgungsspiel mit verdeckter Bewegung fuer Open Party Lab. Ein Spieler reist als "Der Schatten" unsichtbar durch ein zufaellig erzeugtes Verkehrsnetz, alle anderen jagen ihn als Ermittler.

## Status

Alpha. Der komplette Spielablauf ist spielbar: Kartengenerierung, Zugphasen, Tickets, Sonderzuege, Enttarnungsrunden, Fang- und Fluchtauswertung, KI-Schatten.

## Regeln in Kurzform

- Gespielt wird auf einer festen, illustrierten Nacht-Stadtkarte mit 64 Stationen und drei Verkehrsebenen (Taxi, Bus, Metro). Stationen liegen auf Kreuzungen und Bruecken; die Linien und Bewegungsanimationen folgen den sichtbaren Strassenzuegen. Kreis-, Quadrat- und Sechseckstationen zeigen mit konzentrischen Farbflaechen alle dort verfuegbaren Verkehrsmittel. Ermittler besetzen das Stationszentrum in ihrer Spielerfarbe.
- 22 Zuege. In den Zuegen 3, 8, 13, 18 und 22 wird die Position des Schattens oeffentlich sichtbar.
- Pro Zug zieht zuerst der Schatten, danach ziehen alle Ermittler gleichzeitig innerhalb ihres Zeitfensters.
- Der Schatten reist unbegrenzt, verraet aber nach jedem Zug das benutzte Verkehrsmittel.
- Ermittler haben ein begrenztes Ticketkonto: 12 Taxi, 9 Bus, 5 Metro.
- Zwei Sonderzuege des Schattens: **Schleier** verbirgt das Verkehrsmittel, **Doppelzug** erlaubt zwei Zuege hintereinander.
- Ermittler duerfen nicht auf eine Station ziehen, auf der bereits ein anderer Ermittler steht. Der Schatten weicht besetzten Stationen ebenfalls aus.
- Die Ermittler gewinnen, sobald eine Figur auf der Station des Schattens landet oder der Schatten keinen legalen Zug mehr hat.
- Der Schatten gewinnt, wenn er alle 22 Zuege uebersteht.

## Lobby

Die Lobby oeffnet sich als eigene Ansicht, sobald das Spiel gewaehlt ist. Einstellbar sind:

**Schatten**

- **Zufaelliger Spieler** - ein Spieler wird geheim ausgelost.
- **Fester Sitzplatz** - der Spieler mit der gewaehlten Platznummer (Platz 1 = zuerst beigetreten).
- **Server-KI** - alle Spieler ermitteln gemeinsam gegen einen vom Server gesteuerten Schatten.

**Zugzeit**

- 20, 30, 45 (Standard), 60 oder 90 Sekunden pro Zug.
- **Ohne Zeitlimit** schaltet den Countdown ganz ab. Es wird dann auf jeden Zug gewartet;
  getrennte Spieler werden weiterhin uebersprungen, damit die Runde nicht haengt.

## Punkte

- Festnahme: alle Ermittler +2, die festnehmende Person zusaetzlich +1.
- Gelungene Flucht: der Schatten +4 (nur bei menschlichem Schatten).

## Run Through Open Party Lab

Dieses Repo ist keine eigenstaendige App. Es laeuft ueber die Open-Party-Lab-Plattform.

Empfohlenes Layout:

```text
Open-Party-Lab/
  local-games/
    schattenjagd/
```

Aus dem Plattform-Repo:

```bash
npm install
npm run games:sync-local
npm run dev:all
```

Die Plattform laedt dieses Spiel nur, wenn das Repo lokal existiert und `npm run games:sync-local` es verlinkt hat.

## Eigenstaendigkeit und Rechte

Karte, Stationsnetz, Namen, Rollenbezeichnungen, Regelwerte, Texte und Grafik dieses Repos sind Eigenentwicklungen. Es werden keine fremden Marken, Kartenvorlagen, Illustrationen oder Textbausteine verwendet. Das feste Netz wird deterministisch erzeugt (`src/map/generateTransitMap.ts`) und deckungsgleich auf eine eigene fiktive Stadtillustration gelegt. Taxi-, Bus- und Metro-Tickets sowie die animierten Fahrzeugmarker sind ebenfalls eigene Spielgrafiken.

## Package-Entrypoints

```text
@open-party-lab/game-schattenjagd/manifest
@open-party-lab/game-schattenjagd/protocol
@open-party-lab/game-schattenjagd/server
@open-party-lab/game-schattenjagd/host
@open-party-lab/game-schattenjagd/controller
```

## Entwicklung

```bash
npm install
npm run typecheck
npm run build
```

## Lizenz

Apache-2.0
