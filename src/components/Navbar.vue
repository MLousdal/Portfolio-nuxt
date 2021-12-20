<template>
  <nav class="flex row gap box between">
    <div class="flex row gap">
      <a href="#" class="logo">
        <img src="../assets/images/ML.svg" alt="" />
      </a>
      <ul class="flex row gap align-center">
        <li><a href="#" class="underline">Projekter</a></li>
        <li><a href="#" class="underline">Profil</a></li>
        <li><a href="#" class="underline">Kontakt</a></li>
      </ul>
    </div>
    <div class="flex row gap">
      <links></links>
      <theme-toggle></theme-toggle>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from "./ThemeToggle.vue";
import Links from "./Links.vue";

export default {
  name: "Navbar",
  components: { ThemeToggle, Links },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0;
  }
}
</style>
