<template>
  <nav class="box shadow">
    <div class="navContainer">
      <a href="#" class="logo">
        <img src="../assets/images/ML.svg" alt="" />
      </a>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li><a href="#" class="underline">Projekter</a></li>
          <li><a href="#" class="underline">Profil</a></li>
          <li><a href="#" class="underline">Kontakt</a></li>
        </ul>
        <div class="navSocial">
          <links size="m"></links>
          <theme-toggle></theme-toggle>
        </div>
      </div>
    </div>
    <input
      type="image"
      src="mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
import ThemeToggle from "./ThemeToggle.vue";
import Links from "./Links.vue";

export default {
  name: "Navbar",
  components: { ThemeToggle, Links },
  methods: {
    toggleMenu() {
      let navLinksContainer = document.querySelector(".navLinksContainer");

    if (navLinksContainer.style.display == "none" || navLinksContainer.style.display == "") {
        navLinksContainer.style.display = "flex";
      } else {
        navLinksContainer.style.display = "none";
      }
    },
  },
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
