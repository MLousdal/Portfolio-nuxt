<template>
  <header class="hero wrapper" id="hero">
    <h2 class="wave">Hejsa</h2>
    <h1>Mit navn er <b class="text-primary">Mads Lousdal</b></h1>
    <p class="xlarge-text">
      Jeg er en passioneret frontend udvikler, med en god forståelse for ui/ux
      design
    </p>
    <so-me-links size="l"></so-me-links>
    <arrow-down></arrow-down>
  </header>
  <section class="wrapper flex column gap" id="projects">
    <h2>Projekter</h2>
    <div class="projects">
      <project-card></project-card>
      <project-card></project-card>
      <project-card></project-card>
      <project-card></project-card>
    </div>
  </section>
  <section class="wrapper flex column gap" id="profil">
    <h2>Profil</h2>
    <profil></profil>
  </section>
  <contact></contact>
</template>

<script>
import Navbar from "../../src/components/Navbar.vue";
import SoMeLinks from "../components/SoMeLinks.vue";
import ArrowDown from "../../src/components/ArrowDown.vue";
import ProjectCard from "../../src/components/ProjectCard.vue";
import Profil from "../../src/components/Profil.vue";
import Contact from "../../src/components/Contact.vue";

export default {
  name: "App",
  components: { Navbar, SoMeLinks, ArrowDown, ProjectCard, Profil, Contact },
};
</script>

<style></style>
