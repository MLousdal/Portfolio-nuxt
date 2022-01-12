<template>
  <input
    id="toTopBtn"
    type="image"
    src="~/assets/icons/arrow-up-solid.svg"
    alt=""
    title="back to top"
    @click="toTop"
  />
</template>

<script>
export default {
  name: 'ToTop',
  computed: {
    toTopBtn: document.querySelector('#toTopBtn'),
  },
  mounted() {
    window.addEventListener('scroll', this.scrollFunction)
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.toTopBtn.style.display = 'block'
      } else {
        this.toTopBtn.style.display = 'none'
      }
    },
    toTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style></style>
