<template>
  <article class="projectCard shadow">
    <router-link to="/projekt/" href="#" class="cardOverlay">
      <picture>
        <source
          media="(max-width: 800px)"
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200&quality=75
          "
          type="image/webp"
        />
        <source
          media="(max-width: 800px)"
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=png&width=1200
          "
          type="image/png"
        />
        <source
          srcset="
            ../assets/images/cases/case_pictures_showcase.png?as=webp&width=1200
          "
          type="image/webp"
        />
        <img
          src="../assets/images/cases/case_pictures_showcase.png?width=1200"
          alt="mockup af projektet"
        />
      </picture>
    </router-link>
    <div class="box flex column gap-1 projectCard--Text">
      <h4>webTemplate: Styled boilerplate</h4>
      <div class="projectCard--Info">
        <project-links size="s"></project-links>
        <span class="small-text">API, HTML, SCSS, JS</span>
      </div>
    </div>
  </article>
</template>

<script>
import ProjectLinks from "../components/ProjectLinks.vue";

export default {
  name: "ProjectCard",
  components: { ProjectLinks },
};
</script>

<style></style>
