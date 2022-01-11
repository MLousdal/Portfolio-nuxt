---
title: Dice on ice
description: Digitalt terninge spil
slug: diceonice
img: case_pictures_dice.png
mockups: [doi-desktop.png, doi-mobile.png]
tools: [HTML, SASS, JavaScript, Github, Parcel]
github: https://github.com/MLousdal/Dice-Rolling-Game
live: https://dice-rolling-game.vercel.app/
---

### Beskrivelse

Dice on ice er et mini-projekt der blev udviklet som del af Hacktoberfest 2021. Udfordringen fra <a class="external-link" target="_blank" rel="noopener" href="https://github.com/thinkswell/javascript-mini-projects/">javascript-mini-projects</a> lød at løse opgaven uden at anvende et javascript framework.

#### Reglerne

- Spillerne skiftes til at slå med terningen, man må slå indtil terningen viser 1
- Slås en 1’er nulstilles de akkumulerede point
- En spiller kan vælge at holde på sine point, som bliver tilføjet til deres endelige score, og afslutter sin tur
- Den første til 50 point vinder!

### Bygget med

<v-tools :tools="tools"></v-tools>
