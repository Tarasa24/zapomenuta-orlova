<template>
  <div id="app">
    <Nav />
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
    <Update />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Update from '@/components/Update'

export default {
  components: {
    Nav,
    Update,
  },
}
</script>
