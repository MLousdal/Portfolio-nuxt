<template>
  <div class="flex gap-1 row themeToggler">
    <input
      type="checkbox"
      aria-label="theme-toggle"
      class="toggle"
      @click="toggleTheme"
    />
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      if (document.body.classList.contains("theme-light")) {
        document.body.classList.replace("theme-light", "theme-dark");
      } else {
        document.body.classList.replace("theme-dark", "theme-light");
      }
    },
  },
  mounted() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    const themeToggler = document.querySelector(".themeToggler");

    let sun = document.createElement("img");
    sun.src = "mdi_white-balance-sunny.svg";
    sun.classList = "icon s filter-font-color"

    let moon = document.createElement("img");
    moon.src = "mdi_weather-night.svg";
    moon.classList = "icon s filter-font-color"

    if (userPrefersDark) {
      document.body.className = "theme-dark";
      themeToggler.prepend(moon);
      themeToggler.append(sun);
    }

    if (userPrefersLight) {
      document.body.className = "theme-light";
      themeToggler.prepend(sun);
      themeToggler.append(moon);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
