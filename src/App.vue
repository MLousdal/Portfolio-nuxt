<template>
  <Navbar></Navbar>
  <header class="hero wrapper">
    <h2 class="wave">Hejsa</h2>
    <h1>
      Mit navn er <b class="text-primary">Mads Lousdal</b>, og jeg er en
      passioneret frontend udvikler, med en god forståelse for ui/ux design
    </h1>
    <links size="l"></links>
    <arrow-down></arrow-down>
  </header>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Links from "../src/components/Links.vue";
import ArrowDown from "../src/components/ArrowDown.vue";

export default {
  name: "App",
  components: { Navbar, Links, ArrowDown },
};
</script>

<style></style>
