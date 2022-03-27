---
title: Dice on ice
description: Digitalt terninge spil
slug: diceonice
img: case_pictures_dice.png
mockups: [doi-desktop.png, doi-mobile.png]
tools: [Vue, SASS, Figma, Open-props]
github: https://github.com/MLousdal/Vue-Dice-Game
live: https://vue-dice-game.vercel.app/
---

### Beskrivelse

Dice on ice er et digitalt terningespil lavet i Vue, hvor 2+ spillere kæmper om at være den første til at nå 50 point.

#### Reglerne

- Spillerne skiftes til at slå med terningen, man må slå indtil terningen viser 1
- Slås en 1’er nulstilles de akkumulerede point
- En spiller kan vælge at holde på sine point, som bliver tilføjet til deres endelige score, og afslutter sin tur
- Den første til 50 point vinder!

### Bygget med

<v-tools :tools="tools"></v-tools>
