<template>
  <div v-if="updateExists" class="notification">
    Je k dispozici nová verze
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
  </div>
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
.notification
  position: fixed
  bottom: 10px
  left: 10px
  @include small-device-portrait
    right: 10px
  background-color: black
  color: white
  padding: 7.5px 15px
  z-index: 999999

button
  background-color: transparent
  border: 0
  cursor: pointer
  padding: 10px
  &:nth-of-type(1)
    color: $primary
    font-weight: bold
    text-transform: uppercase
    border-radius: 5px
    margin: 0 22.5px 0 15px
    @include transition(background-color, color)
    &:hover
      color: black
      background-color: $primary
  &:nth-of-type(2)
    margin-right: 2px
    color: white
    position: absolute
    right: 0
    top: 0
</style>
