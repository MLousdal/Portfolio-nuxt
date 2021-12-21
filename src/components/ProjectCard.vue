<template>
  <article class="projectCard">
    <a href="#" target="_blank" rel="noopener" class="cardOverlay">
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
    </a>
    <div class="box flex column gap-1">
      <h4>webTemplate: Styled boilerplate</h4>
      <div class="flex row between">
        <div class="flex row gap-1">
          <a
            href="https://web-template-eight.vercel.app/showcase.html"
            class="btn btn-primary outline sm"
            target="_blank"
            rel="noopener"
            >Se live <img
              src="../assets/images/icons/mdi_open-in-new.svg"
              alt="åben projektet i ny fane"
              class="icon s"
          /></a>
          <a
            href="https://github.com/MLousdal/webTemplate"
            class="btn btn-primary outline sm"
            target="_blank"
            rel="noopener"
            >Github <img
              src="../assets/images/icons/social/mdi_github.svg"
              alt="se koden på github"
              class="icon s"
          /></a>
        </div>
        <span class="small-text">HTML, SCSS, JS</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .btn.btn-primary.outline:hover {
    color: var(--font-color-inverse);
  
  & .icon {
    filter: var(--filter-font-color-inverse);
  }}
</style>
