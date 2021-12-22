<template>
  <header class="wrapper project">
    <h1>webTemplate: Styled boilerplate</h1>
    <project-links size="m"></project-links>
  </header>
  <picture class="wrapper">
    <source
      media="(max-width: 800px)"
      srcset="
        ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200&quality=75
      "
      type="image/webp"
    />
    <source
      media="(max-width: 800px)"
      srcset="
        ../assets/images/cases/case_pictures_showcase.png?as=png&width=1200
      "
      type="image/png"
    />
    <source
      srcset="
        ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200
      "
      type="image/webp"
    />
    <img
      src="../assets/images/cases/case_pictures_showcase.png?width=1200"
      alt="mockup af projektet"
    />
  </picture>
  <main class="wrapper showcase">
    <h2>Hvad er webTemplate?</h2>
    <section class="showcase--Wrapper">
      <picture class="">
        <source
          media="(max-width: 800px)"
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200&quality=75
          "
          type="image/webp"
        />
        <source
          media="(max-width: 800px)"
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=png&width=1200
          "
          type="image/png"
        />
        <source
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200
          "
          type="image/webp"
        />
        <img
          src="../assets/images/cases/case_pictures_showcase.png?width=1200"
          alt="mockup af projektet"
        />
      </picture>
      <article class="box text">
        <h3>Beskrivelse</h3>
        <p>
          webTemplate er en boilerplate til at starte nye projekter.<br />webTemplate
          er sat op med Parcel, og SASS, i en organiseret mappe struktur,
          baseret på
          <a
            class="external-link"
            target="_blank"
            rel="noopener"
            href="http://smacss.com/"
            >SMACSS</a
          >.<br />Derudover er de mest almindelige HTML elementer for stylede,
          så man ikke skal bruge tid på at opfinde den dybe tallerken.<br /><br />webTemplate
          anvender Autoprefixer, for at sikre den bedste kryds kompatibilitet
          mellem browsere som muligt.
        </p>
        <h3>Bygget med:</h3>
        <tools></tools>
      </article>
    </section>
  </main>
  <contact></contact>
</template>

<script>
import ProjectLinks from "../components/ProjectLinks.vue";
import Tools from "../components/Tools.vue";
import Contact from "../../src/components/Contact.vue";

export default {
  components: { ProjectLinks, Tools, Contact },
};
</script>

<style></style>
