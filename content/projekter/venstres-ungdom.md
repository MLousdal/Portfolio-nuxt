---
title: Venstres Ungdom
description: Præsentationsside
slug: venstres-ungdom
img: case_pictures_VU.jpg
mockups: [vu-multi.png, vu-multi2.png]
tools: [SASS, Vue, NuxtJS, Github, Figma]
github: https://github.com/MLousdal/MMD3-VU
live: https://mmd-3-vu.vercel.app/
---

### Beskrivelse

Til eksamen på 3. semester af multimediedesign uddannelsen lavede min gruppe et redesign af Venstres Ungdoms hjemmeside.

Venstres Ungdom ønskede optimering, redesign af deres <a class="external-link" target="_blank" rel="noopener" href="https://web.archive.org/web/20210613005818/https://vu.dk/">hjemmeside</a>, som ikke er blevet opdateret længe, og ikke længere reflektere deres værdier. Hovedmålet var derfor at præsentere deres politik på en fordelagtig  måde, som i sidste ende skal tiltrække flere medlemmer til organisationen.

Projektet er skrevet i Vue, med NuxtJS som framework. Gruppen besluttede at anvende NuxtJS pga. modulet content, som fungere som et git-baseret headless CMS skrevet i markdown.

Alle hjemmesidens sider er derfor dynamisk genereret ud fra CMS'et, hvilket var rigtig spændende at få til at fungere korrekt.

#### Funktioner

- Navigations baren får tilføjet en skygge når siden bliver scrollet ned
- Sub-card komponenten kan tilpasse sig flere forskellige typer data, og er derfor meget genanvendelig
- Sub-nav komponenten er side navigationen som kan findes på alle undersider, hvor den dynamisk bliver fodret med links

### Bygget med

<v-tools :tools="tools"></v-tools>
