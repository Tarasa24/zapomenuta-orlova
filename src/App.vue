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
  mounted() {
    const c = [
      String.raw`  ______                                            _    __     ____       _             __  `,
      String.raw` |___  /                                           | |  /_/    / __ \     | |           /_/  `,
      String.raw`    / / __ _ _ __   ___  _ __ ___   ___ _ __  _   _| |_ __ _  | |  | |_ __| | _____   ____ _ `,
      String.raw`   / / / _' | '_ \ / _ \| '_ ' _ \ / _ \ '_ \| | | | __/ _' | | |  | | '__| |/ _ \ \ / / _' |`,
      String.raw`  / /_| (_| | |_) | (_) | | | | | |  __/ | | | |_| | || (_| | | |__| | |  | | (_) \ V / (_| |`,
      String.raw` /_____\__,_| .__/ \___/|_| |_| |_|\___|_| |_|\__,_|\__\__,_|  \____/|_|  |_|\___/ \_/ \__,_|`,
      String.raw`            | |                                                                              `,
      String.raw`            |_|                                                                              `,
    ]
    c.forEach((e) => {
      document.appendChild(document.createComment(e))
    })
  },
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

html
  scroll-behavior: smooth

body
  margin: 0
</style>
