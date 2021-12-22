<template>
  <input
    type="image"
    src="mdi_arrow-down.svg"
    alt="down arrow"
    class="arrow"
    title="scroll to projects"
    @click="toSection('projects')"
  />
</template>

<script>
export default {
  name: "ArrowDown",
  methods: {
    toSection(section) {
      let id = "#" + section;
      let el = document.querySelector(id);
      let yOffset = -91;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      if (el) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
  },
};
</script>

<style></style>
