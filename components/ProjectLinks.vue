<template>
  <div class="flex row gap-1">
    <a
      :href="live"
      class="btn btn-primary outline sm"
      target="_blank"
      rel="noopener"
      :class="[{ s: size == 's' }, { l: size == 'l' }]"
      >Se live
      <img
        src="~/assets/icons/mdi_open-in-new.svg"
        alt="åben projektet i ny fane"
        class="icon"
        :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }]"
    /></a>
    <a
      :href="github"
      class="btn btn-primary outline sm"
      target="_blank"
      rel="noopener"
      :class="[{ s: size == 's' }, { l: size == 'l' }]"
      >Github
      <img
        src="~/assets/icons/social/mdi_github.svg"
        alt="se koden på github"
        class="icon"
        :class="[{ s: size == 's' }, { m: size == 'm' }, { l: size == 'l' }]"
    /></a>
  </div>
</template>

<script>
export default {
  name: 'ProjectLinks',
  props: {
    size: {
      default: 'm',
      type: String,
    },
    live: {
      default: '',
      type: String,
    },
    github: {
      default: '',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn.btn-primary.outline {
  line-height: 0;
  &:hover {
    color: var(--font-color-inverse);

    & .icon {
      filter: var(--filter-font-color-inverse);
    }
  }
}
</style>
