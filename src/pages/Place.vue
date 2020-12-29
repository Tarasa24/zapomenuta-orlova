<template>
  <main>
    <img
      class="main_img"
      :src="
        require(`@/assets/img/articles/${this.$route.params.name}/main.webp`)
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
            require(`@/assets/img/articles/${$route.params.name}/${image.file}`)
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

export default {
  components: {},
  data() {
    return {
      place: {},
      body: '',
      images: [],
    }
  },
  created() {
    this.place = data[decodeURI(this.$route.params.name)]
    if (!this.place) this.$router.replace('/mapa')
    else {
      this.place.name = this.$route.params.name
      this.place.nth =
        Object.keys(data).indexOf(decodeURI(this.$route.params.name)) + 1
    }

    const md = require(`@/assets/data/articles/${this.$route.params.name}.md`)
      .default
    this.body = marked(md)

    this.images = require(`@/assets/img/articles/${this.$route.params.name}/list.json`)
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
  h1
    margin-top: 40px
    color: white
    text-transform: uppercase
    font-size: 3.5rem
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
  h2, h3, p
    margin-left: 10px
    margin-right: 10px

.gallery
  width: calc( 100% - 20px )
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
