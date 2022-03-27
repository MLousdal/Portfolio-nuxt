---
title: Vue3-starter
description: Styled boilerplate
slug: vue3-starter
img: case_pictures_showcase.png
mockups: [vs-desktop.png, vs-op-desktop.png]
tools: [Vite, Vue, SASS, Open-props]
github: https://github.com/MLousdal/vue3-starter
live: https://vue3-starter-indol.vercel.app/
---

### Beskrivelse

Vue3-starter er en boilerplate til vite. Da jeg først kiggede på at skifte til Vite fra VueCLI havde jeg det problem at alle de skabeloner som fandtes indeholdte alt for mange ekstra ting som ikke havde brug for. Derfor lavede jeg min egen version. Vue3-starter er sat op til at bruge Vue 3, Vite-plugin-ssr, Open-props, Sass mm.

Jeg har tidligere udviklet mit eget CSS Framework <a class="external-link" target="_blank" rel="noopener" href="https://github.com/MLousdal/webTemplate">webTemplate</a>, som tog udgangspunkt andre frameworks som 'the Skeleton project' og 'spectre.css'. Jeg var træt af altid at skulle style de basale HTML elementer igen og igen. WebTemplate endte med at blive min egen normalize med ekstra utility klasser.

I vue3-starter har jeg ført ideen bag webTemplate videre, men denne gang anvendt <a class="external-link" target="_blank" rel="noopener" href="https://open-props.style/">Open-props</a> som grundlag for design systemet. Open-props tager alt det gode fra Tailwind, men bruger utility variabler i stedet for klasser. Hvilket lader dig skrive CSS som normalt uden at fylde HTML'en med utility klasser.

### Bygget med

<v-tools :tools="tools"></v-tools>
