<template>
  <article class="projectCard shadow">
    <nuxt-link
      :to="`projekter/${project.slug}`"
      href="#"
      class="cardOverlay"
      :aria-label="`link til ${project.title}`"
    >
      <nuxt-picture :src="`cases/${project.img}`" alt=""></nuxt-picture>
    </nuxt-link>
    <div class="box flex column gap-1 projectCard--Text">
      <h4>{{ project.title }}: {{ project.description }}</h4>
      <div class="projectCard--Info">
        <project-links
          size="s"
          :github="project.github"
          :live="project.live"
        ></project-links>
        <span class="small-text">{{ toolsString }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      default() {},
      type: Object,
    },
  },
  computed: {
    toolsString() {
      const slicedArray = this.project.tools.slice(0, 3)
      return slicedArray.join(' + ')
    },
  },
}
</script>

<style></style>
