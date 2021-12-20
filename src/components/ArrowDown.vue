<template>
  <input
    type="image"
    src="mdi_arrow-down.svg"
    alt="down arrow"
    class="arrow"
    title="scroll to projects"
    @click="toProjects"
  />
</template>

<script>
export default {
  name: "ArrowDown",
  methods: {
    toProjects() {
      console.log("toProjects")
    }
  }
};
</script>

<style></style>
