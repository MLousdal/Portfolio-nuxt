<template>
  <nav class="box shadow">
    <div class="navContainer">
      <router-link to="/" class="logo">
        <img src="../assets/images/ML.svg" alt="" />
      </router-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li><router-link to="/" @click="toSection('projects')" class="underline">Projekter</router-link></li>
          <li><router-link to="/" @click="toSection('profil')" class="underline">Profil</router-link></li>
          <li><router-link to="/" @click="toSection('contact')" class="underline">Kontakt</router-link></li>
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

      if (
        navLinksContainer.style.display == "none" ||
        navLinksContainer.style.display == ""
      ) {
        navLinksContainer.style.display = "flex";
      } else {
        navLinksContainer.style.display = "none";
      }
    },
    toSection(section) {
      let id = "#" + section;
      let el = document.querySelector(id);
      let yOffset = -91;

      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        this.$router.push('/')
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
