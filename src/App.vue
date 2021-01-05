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

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

body
  margin: 0
  background: $grey
  background-image: linear-gradient(90deg, rgba($grey,1) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 85%, rgba($grey,1) 100%), linear-gradient(0deg, rgba($grey,1) 0%, rgba(255,255,255,1) 15%)
</style>
