<template>
  <div class="tool">
    <img :src="`/icons/tools/${tool.toLowerCase()}.svg`" alt="" /><span>{{ tool }}</span>
  </div>
</template>

<script>
export default {
  name: 'VTool',
  props: {
    tool: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
