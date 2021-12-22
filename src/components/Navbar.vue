<template>
  <nav class="box shadow">
    <div class="navContainer">
      <router-link to="/" class="logo">
        <img src="../assets/images/ML.svg" alt="" />
      </router-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <router-link to="/#projects" class="underline"
              >Projekter</router-link
            >
          </li>
          <li>
            <router-link to="/#profil" class="underline">Profil</router-link>
          </li>
          <li>
            <router-link to="/#contact" class="underline">Kontakt</router-link>
          </li>
        </ul>
        <div class="navSocial">
          <SoMeLinks size="m"></SoMeLinks>
          <theme-toggle></theme-toggle>
        </div>
      </div>
    </div>
    <input
      type="image"
      src="../mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
import ThemeToggle from "../components/ThemeToggle.vue";
import SoMeLinks from "./SoMeLinks.vue";

export default {
  name: "Navbar",
  components: { ThemeToggle, SoMeLinks },
  data() {
    return {
      activeElement: document.activeElement,
    };
  },
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
