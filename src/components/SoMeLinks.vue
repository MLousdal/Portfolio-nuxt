<template>
  <div class="links flex row gap">
    <a
      href="mailto:mads.lousdal@gmail.com"
      class="icon"
      :class="[{ m: size == 'm' }, { l: size == 'l' }]"
      target="_blank"
      rel="noopener"
      ><img
        src="../assets/images/icons/social/mdi_email-outline.svg"
        alt="email"
    /></a>
    <a
      href="https://www.linkedin.com/in/mads-lousdal/"
      class="icon"
      :class="[{ m: size == 'm' }, { l: size == 'l' }]"
      target="_blank"
      rel="noopener"
      ><img src="../assets/images/icons/social/mdi_linkedin.svg" alt="linkedin"
    /></a>
    <a
      href="https://github.com/MLousdal"
      class="icon"
      :class="[{ m: size == 'm' }, { l: size == 'l' }]"
      target="_blank"
      rel="noopener"
      ><img src="../assets/images/icons/social/mdi_github.svg" alt="github"
    /></a>
  </div>
</template>

<script>
export default {
  name: "Links",
  props: { size: String },
};
</script>

<style></style>
