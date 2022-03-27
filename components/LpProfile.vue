<template>
  <article class="profil">
    <nuxt-picture
      :src="`about/${profile.img}`"
      alt="billede af Mads"
      class="shadow l"
    ></nuxt-picture>
    <nuxt-content :document="profile" class="box text shadow"></nuxt-content>
  </article>
</template>

<script>
export default {
  name: 'LpProfile',
  props: {
    profile: {
      default() {},
      type: Object,
    },
  },
}
</script>

<style></style>
