<template>
  <nav class="box shadow navbar">
    <div class="navContainer">
      <nuxt-link
        to="/"
        class="logo"
        aria-label="home"
        @click.native="closeMenu"
      >
        <img src="~/assets/ML.svg" alt="" />
      </nuxt-link>
      <div v-show="menuOpen" class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link
              :to="{
                name: 'index',
                hash: '#projects',
              }"
              class="underline"
              @click.native="closeMenu"
              >Projekter</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{
                name: 'index',
                hash: '#profil',
              }"
              class="underline"
              @click.native="closeMenu"
              >Profil</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{
                name: 'index',
                hash: '#contact',
              }"
              class="underline"
              @click.native="closeMenu"
              >Kontakt</nuxt-link
            >
          </li>
        </ul>
        <div class="navSocial">
          <SoMeLinks size="m"></SoMeLinks>
          <theme-toggle></theme-toggle>
        </div>
      </div>
    </div>
    <input id="navbar_checkbox" v-model="menuOpen" type="checkbox" />
    <label for="navbar_checkbox" class="navBtn">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  data() {
    return {
      menuOpen: true,
    }
  },
  mounted() {
    window.addEventListener('resize', this.mqResize)
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.handleOutside(e)
    })
    this.mqResize()
  },
  methods: {
    closeMenu() {
      if (window.innerWidth < 800) {
        this.menuOpen = false
      }
    },
    openMenu() {
      if (window.innerWidth < 800) {
        this.menuOpen = true
      }
    },
    handleOutside(e) {
      const navbar = document.querySelector('.navbar')
      if (window.innerWidth < 800) {
        if (!navbar.contains(e.target)) {
          this.closeMenu()
        }
      }
    },
    mqResize() {
      const mql = window.matchMedia('(max-width: 800px)')
      if (mql.matches) {
        this.menuOpen = false
      } else {
        this.menuOpen = true
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
