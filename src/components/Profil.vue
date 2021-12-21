<template>
  <article class="profil">
    <picture class="shadow">
      <source
        media="(max-width: 800px)"
        srcset="
          ../assets/images/about/madsLousdal.jpeg?width=1000&as=webp&quality=50
        "
        type="image/webp"
      />
      <source
        media="(max-width: 800px)"
        srcset="../assets/images/about/madsLousdal.jpeg?width=1000&quality=50"
        type="image/jpeg"
      />
      <source
        srcset="../assets/images/about/madsLousdal.jpeg?width=1000&as=webp"
        type="image/webp"
      />
      <img
        src="../assets/images/about/madsLousdal.jpeg?width=1000"
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
      <tools></tools>
    </section>
  </article>
</template>

<script>
import Tools from "./Tools.vue";

export default {
  name: "Profil",
  components: { Tools },
};
</script>

<style></style>
