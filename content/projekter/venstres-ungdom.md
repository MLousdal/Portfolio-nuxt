---
title: Venstres ungdom
description: Præsentationsside
slug: venstres-ungdom
img: case_pictures_VU.jpg
mockups: [tb-multi.png, tb-multi2.png]
tools: [SASS, Vue, NuxtJS, Github, Figma]
github: https://github.com/MLousdal/MMD3-VU
live: https://mmd-3-vu.vercel.app/
---

### Beskrivelse

Toolbox er in full-stack web app som min gruppe udviklede som eksamensprojekt på 3. semester af multimediedesign uddannelsen.

Ideen med Toolbox er at være en central kilde til at finde online værktøjer, som kan bruges til at lave hjemmesider, så man slipper for det rod af bogmærker man let laver. Intensionen med toolbox er ikke at tilbyde værktøjerne selv, men at fungere som en guide bog, og pege brugerne i den rigtige retning.

#### Funktioner

Toolbox er en fælleskabsbaseret tjeneste hvor brugerne indsender de værktøjer som de selv bruger. Derfor havde vi specielt fokus på at optimere netop det da vi implementerede funktionalitet.

- Hvert værktøj er kategoriseret i enten design, UX, front-end, eller back-end
- Bruger autentificering (login og signup)
- Brugere kan tilføje nye værktøjer til Toolbox
- Brugere kan tilføje deres ynglings værktøjer til en privat kollektion
- Brugere kan opdatere de værktøjer som de selv har indsendt
- Admins har rettigheder til at ændre eller slette alle værktøjer
- Der er lys, og mørkt farve temaer (kan skiftes mellem ved at trykke 1)

### Bygget med

<v-tools :tools="tools"></v-tools>
