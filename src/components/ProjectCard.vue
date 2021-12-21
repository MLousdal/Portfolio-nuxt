<template>
  <article class="projectCard">
    <a
      href="#"
      target="_blank"
      rel="noopener"
      class="cardOverlay"
    >
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
    <div class="box">
      <h4>webTemplate: Styled boilerplate</h4>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style></style>
