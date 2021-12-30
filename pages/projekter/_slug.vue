<template>
  <div class="gaps">
    <header class="wrapper project">
      <h1>{{ project.title }}: {{ project.description }}</h1>
      <project-links
        size="m"
        :github="project.github"
        :live="project.live"
      ></project-links>
    </header>
    <nuxt-picture :src="`cases/${project.img}`" class="wrapper"></nuxt-picture>
    <main class="wrapper showcase">
      <h2>Hvad er {{ project.title }}?</h2>
      <section class="showcase--Wrapper">
        <nuxt-picture :src="`cases/${project.img}`"></nuxt-picture>
        <article class="box text">
          <nuxt-content
            :document="project"
            class="flex column gap-1"
          ></nuxt-content>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projekter', params.slug).fetch()

    return {
      project,
    }
  },
}
</script>

<style></style>
