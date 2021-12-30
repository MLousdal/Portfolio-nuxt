<template>
  <input
    type="image"
    src="icons/mdi_arrow-down.svg"
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
      const id = "#" + section;
      const el = document.querySelector(id);
      const yOffset = -91;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      if (el) {
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
  },
};
</script>

<style></style>
