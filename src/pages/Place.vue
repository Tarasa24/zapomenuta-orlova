<template>
  <main>
    <section class="head">
      <img
        class="main_img"
        :src="
          place.name
            ? require(`@/assets/img/articles/${place.name}/main.webp`)
            : require(`@/assets/img/empty.png`)
        "
        alt="background image"
      />
      <div>
        <span class="circle">
          <b>{{ place.nth }}</b>
        </span>
        <h1>
          {{ place.name }}
        </h1>
        <h4>
          <i>{{ convertCoord(place.lat, place.lng) }}</i>
        </h4>
      </div>
    </section>

    <div class="cover">
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
            :src="require(`@/assets/img/articles/${place.name}/${image.file}`)"
            :key="image.file"
            :alt="image.alt"
          />
        </viewer>
      </section>
    </div>
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
      convertCoord: convertCoord,
    }
  },
  created() {
    if (
      typeof Object.entries(data)[this.$route.params.index - 1] === 'undefined'
    )
      this.$router.replace('/mapa')
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
section
  width: 100%
  max-width: 1300px
  margin: auto
.head
  position: relative
  max-width: unset
  .main_img
    width: 100%
    min-height: 200%
    object-fit: cover
    filter: brightness(.4)
    z-index: -99
    position: absolute
    left: 0
    top: calc( -50% - 63px )
    @include small-device
      top: 0
      min-height: 100%
  div
    width: 60%
    padding: calc(12.5vh + 63px) 0 5vh 0
    margin: auto
    @include small-device-portrait
      width: 100%
    @include small-device-landscape
      width: 80%
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

.cover
  width: 100%
  background-color: white
  min-height: 100vh

.body
  text-align: justify
  width: calc( 100% - 20px )
  padding: 10px 10px 0 10px
  ul
    margin-right: 10px
    li
      margin: 7.5px 0
    a
      background-color: $primary
      text-decoration: none
      color: white
      font-weight: bold
      border-radius: 50%
      padding: 2px 8px
      font-size: 1.25rem
      @include transition(background-color)
      &:hover
        background-color: $accent

hr
  margin: 30px 10px

.gallery
  width: 100%
  overflow-x: auto
  display: flex
  margin-bottom: 20px
  img
    align-self: center
    padding: 10px 10px
    cursor: pointer
    max-width: 65%
    max-height: 25vh
    &:first-of-type
      padding-left: 25px
    &:last-of-type
      padding-right: 25px
.viewer-title
  font-size: 1.25rem
  color: white
  opacity: 1
  white-space: unset
  margin-top: 10px
  @include small-device-portrait
    margin-left: 0
    margin-right: 0
    max-width: 95%
</style>
