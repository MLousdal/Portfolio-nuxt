<template>
  <nav class="box shadow">
    <div class="navContainer">
      <nuxt-link to="/" class="logo">
        <img src="~/assets/images/ML.svg" alt="" />
      </nuxt-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link to="/#projects" class="underline"
              >Projekter</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/#profil" class="underline">Profil</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#contact" class="underline">Kontakt</nuxt-link>
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
      src="/mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  methods: {
    toggleMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')

      if (
        navLinksContainer.style.display === 'none' ||
        navLinksContainer.style.display === ''
      ) {
        navLinksContainer.style.display = 'flex'
      } else {
        navLinksContainer.style.display = 'none'
      }
    },
  },
}
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
