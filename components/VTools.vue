<template>
  <div class="tools">
    <v-tool v-for="tool in tools" :key="tool" :tool="tool"></v-tool>
  </div>
</template>

<script>
import VTool from './VTool.vue'
export default {
  name: 'VTools',
  components: { VTool },
  props: {
    tools: {
      default() {},
      type: Array,
    },
  },
}
</script>

<style></style>
