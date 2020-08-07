<template>
  <nav>
    <router-link to="/" class="logo">
      <img class="logo" :src="require('@/assets/logo.png')" alt="logo" />
    </router-link>

    <router-link class="link" to="/mapa">Mapa</router-link>
    <router-link class="link" to="/o-projektu">O projektu</router-link>

    <a
      href="https://www.mesto-orlova.cz/"
      target="_blank"
      rel="noopener noreferrer"
      class="orlova"
    >
      <img :src="require('@/assets/img/orlova.png')" alt="Město Orlová logo" />
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
nav
  display: grid
  grid-template-columns: 75px 90px 90px auto 50px
  background-color: $bg-dark
  align-items: center
  height: 63px

.logo
  border-bottom: 0
  height: 63px

.link
  color: white
  text-decoration: none
  padding: 20px 0
  border-bottom: 5px solid transparent
  &:hover
    @include transition(border-bottom)
    border-bottom: 5px solid $primary

.orlova
  grid-column: 5
  justify-self: center
  height: min-content
  img
    height: 50px
</style>
