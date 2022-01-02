<template>
  <article class="profil">
    <picture class="shadow l">
      <img
        src="/about/madsLousdal.jpeg"
        alt="billede af Mads"
      />
    </picture>
    <section class="text box shadow">
      <h3>Hvem er jeg?</h3>
      <p>
        Hejsa! Mit navn er Mads, og jeg studere multimedie design hos UCN i
        Aalborg, hvor jeg bliver undervist i både de teknologiske aspekter af
        frontend, og teorien bag design og brugeroplevelsen.<br />Udenfor skolen
        følger jeg aktivt de nyeste trends på tæt hold, for altid at have
        fingeren på pulsen med det moderne web. Som resultat af det er jeg ofte
        ham på holdet som kan finde de kreative løsninger til både design og
        kodning.<br />For mig er det bedste ved at udvikle hjemmesider når
        projektet virkeligt tager form, og det smukke design står fuldt
        funktionelt tilbage på skærmen.<br /><br />Når jeg ikke sidder foran
        computeren kan jeg ofte findes i det nærmeste fitness center i gang med
        at løfte hele verden.
      </p>
      <h3>Min værktøjskasse</h3>
      <v-tools :tools="tools" class="profile"></v-tools>
    </section>
  </article>
</template>

<script>
import VTools from './VTools.vue'

export default {
  name: 'LpProfile',
  components: { VTools },
  data() {
    return {
      tools: ["HTML", "CSS", "SASS", "JavaScript", "Vue", "NodeJS", "Github", "Parcel", "Figma"]
    }
  }
}
</script>

<style></style>
