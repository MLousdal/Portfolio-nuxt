<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Links from "../src/components/Links.vue";
import ArrowDown from "../src/components/ArrowDown.vue";
import ProjectCard from "../src/components/ProjectCard.vue";
import Profil from "../src/components/Profil.vue";
import Contact from "../src/components/Contact.vue";

export default {
  name: "App",
  components: { Navbar, Links, ArrowDown, ProjectCard, Profil, Contact },
};
</script>

<style></style>
