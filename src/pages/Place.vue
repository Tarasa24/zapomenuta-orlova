<template>
  <main>
    <img
      class="main_img"
      :src="
        place.name ? require(`@/assets/img/articles/${place.name}/main.webp`) : require(`@/assets/img/empty.png`)
      "
      alt="background image"
    />
    <section class="head">
      <span class="circle">
        <b>{{ place.nth }}</b>
      </span>
      <h1>
        {{ place.name }}
      </h1>
      <h4><i>{{ convertCoord(place.lat, place.lng) }}</i></h4>
    </section>

    <section class="body" v-html="body" />

    <section>
      <hr />
      <viewer
        :images="images"
        class="gallery"
        :options="{
          inline: false,
          button: true,
          navbar: false,
          title: true,
          toolbar: true,
          tooltip: true,
          movable: false,
          zoomable: true,
          rotatable: false,
          scalable: false,
          transition: false,
          fullscreen: true,
          keyboard: true,
        }"
      >
        <img
          v-for="image in images"
          :src="
            require(`@/assets/img/articles/${place.name}/${image.file}`)
          "
          :key="image.file"
          :alt="image.alt"
        />
      </viewer>
    </section>
  </main>
</template>

<script>
import marked from 'marked'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

import data from '@/assets/data/locations.json'
import { convertCoord } from '@/assets/js/helperFunctions.js'

export default {
  components: {},
  data() {
    return {
      place: {},
      body: '',
      images: [],
      convertCoord: convertCoord
    }
  },
  created() {
    if (typeof Object.entries(data)[this.$route.params.index - 1] === 'undefined') this.$router.replace('/mapa') 
    else {
      const [name, details] = Object.entries(data)[this.$route.params.index - 1]
      this.place = details

      this.place.name = name
      this.place.nth = this.$route.params.index
          
      const md = require(`@/assets/data/articles/${this.place.name}.md`).default
      this.body = marked(md)

      this.images = require(`@/assets/img/articles/${this.place.name}/list.json`)
    }
  },
}
</script>

<style lang="sass">
.main_img
  width: 100%
  filter: brightness(.4)
  z-index: -99
  height: 450px
  object-fit: cover
  @include small-device
    height: 375px

section
  width: 100%
  max-width: 1300px
  margin: auto

.head
  position: absolute
  top: 225px
  left: 50vw
  transform: translate(-50%, 0)
  width: 80%
  @include small-device
    top: 150px
  h1
    margin-top: 40px
    margin-bottom: 0
    color: white
    text-transform: uppercase
    font-size: 3.5rem
    @include small-device
      font-size: 2.25rem
  h4 
    color: white
  .circle
    background-color: $primary
    color: white
    border-radius: 50%
    padding: 30px
    font-size: 0
    position: relative
    bottom: 12.5px
    b
      font-size: 2rem
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

hr
  margin: 30px 10px

.body
  text-align: justify
  width: calc( 100% - 20px )
  padding: 0 10px
  li
    margin-right: 10px

.gallery
  width: 100%
  overflow-x: auto
  display: flex
  margin-bottom: 20px
  img
    align-self: center
    margin: 10px
    cursor: pointer
    max-width: 20vw
    max-height: 30vh
</style>
