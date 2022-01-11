<template>
  <nav class="box shadow navbar">
    <div class="navContainer">
      <nuxt-link to="/" class="logo" aria-label="home" @click.native="closeMenu">
        <img src="~/assets/ML.svg" alt="" />
      </nuxt-link>
      <div class="navLinksContainer">
        <ul class="navLinks">
          <li>
            <nuxt-link to="/#projects" class="underline" @click.native="closeMenu">Projekter</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#profil" class="underline" @click.native="closeMenu">Profil</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#contact" class="underline" @click.native="closeMenu">Kontakt</nuxt-link>
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
      src="/icons/mdi_menu.svg"
      alt="menu"
      class="icon filter-primary navBtn"
      @click="toggleMenu"
    />
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  data() {
    return {
      menuOpen: false,
    }
  },
  mounted() {
    document.addEventListener('resize', this.mqResize)
    document.addEventListener('mouseup', (e) => {
      // bruger en arrow function for at overkomme problem med at this. skifter til
      this.handleOutside(e)
    })
    this.mqResize()
  },
  beforeDestroy() {
    document.removeEventListener('mouseup', (e) => {
      this.handleOutside(e)
    })
  },
  methods: {
    closeMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (window.innerWidth < 800) {
        navLinksContainer.classList.add('hide')
        this.menuOpen = true
      }
    },
    openMenu() {
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (window.innerWidth < 800) {
        navLinksContainer.classList.remove('hide')
        this.menuOpen = false
      }
    },
    handleOutside(e) {
      const navbar = document.querySelector('.navbar')
      if (window.innerWidth < 800) {
        if (!navbar.contains(e.target)) {
          this.closeMenu()
        } else {
          this.openMenu()
        }
      }
    },
    toggleMenu() {
      if (this.menuOpen === false) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    },
    mqResize() {
      const mql = window.matchMedia('(max-width: 800px)')
      const navLinksContainer = document.querySelector('.navLinksContainer')
      if (mql.matches) {
        navLinksContainer.classList.add('hide')
      } else {
        navLinksContainer.classList.remove('hide')
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
