<template>
  <div class="gaps">
    <navbar></navbar>
    <nuxt></nuxt>
    <contact></contact>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue'
import Navbar from '../components/VNavbar.vue'
export default {
  components: { Contact, Navbar },
}
</script>

<style></style>
