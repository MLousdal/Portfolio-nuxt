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
        <div class="showcase--Mockups">
          <nuxt-picture
            v-for="mockup in project.mockups"
            :key="mockup"
            :src="`cases/${mockup}`"
            data-aos="fade-up"
          ></nuxt-picture>
        </div>
        <article class="box text shadow" data-aos="fade-up">
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
import aos from '~/mixins/aos'
export default {
  mixins: [aos],
  async asyncData({ $content, params }) {
    const project = await $content('projekter', params.slug).fetch()

    return {
      project,
    }
  },
  head() {
    return {
      title: 'Mads Lousdal - ' + this.project.title,
    }
  },
}
</script>

<style></style>
