<template>
  <main v-if="updateExists">
    Nová verze je k dispozici
    <button @click="refreshApp">Aktualizovat</button>
    <button
      @click="
        () => {
          updateExists = false
        }
      "
      aria-label="Zavřít notifikaci"
    >
      <fa :icon="['fas', 'times']" />
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return { refreshing: false, registration: null, updateExists: false }
  },
  created() {
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return
      this.refreshing = true
      window.location.reload()
    })
  },
  methods: {
    showRefreshUI(e) {
      this.registration = e.detail
      this.updateExists = true
    },
    refreshApp() {
      this.updateExists = false
      if (!this.registration || !this.registration.waiting) {
        return
      }
      this.registration.waiting.postMessage('skipWaiting')
    },
  },
}
</script>

<style lang="sass" scoped>
main
  position: fixed
  bottom: 10px
  left: 10px
  background-color: black
  color: white
  padding: 7.5px 15px

button
  background-color: transparent
  border: 0
  margin-left: 15px
  cursor: pointer
  padding: 10px
  &:nth-of-type(1)
    color: $primary
    font-weight: bold
    text-transform: uppercase
  &:nth-of-type(2)
    color: white
</style>
