<template>
  <div class="gaps">
    <header id="hero" class="hero wrapper">
      <h2 class="wave">Hejsa</h2>
      <h1>Mit navn er <b class="text-primary">Mads Lousdal</b></h1>
      <p class="xlarge-text">
        Jeg er en passioneret frontend udvikler, med en god forståelse for ui/ux
        design
      </p>
      <so-me-links size="l"></so-me-links>
      <arrow-down></arrow-down>
    </header>
    <section id="projects" class="wrapper flex column gap">
      <h2>Projekter</h2>
      <div class="projects">
        <project-card
          v-for="project in projects"
          :key="project.title"
          :project="project"
        ></project-card>
      </div>
    </section>
    <section id="profil" class="wrapper flex column gap">
      <h2>Profil</h2>
      <lp-profile></lp-profile>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const projects = await $content('projekter', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tools', 'live', 'github'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects,
    }
  },
}
</script>
