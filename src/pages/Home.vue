<template>
  <main>
    <section class="segment1 flex">
      <div>
        <img v-lazy="require('@/assets/img/logo.webp')" alt="" />
        <h1>ZAPOMENUTÁ ORLOVÁ</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla neque ac felis egestas eleifend. Vestibulum molestie
          convallis arcu vitae porta. Fusce nec lorem odio. Nullam at nulla eu
          ante tristique egestas. Aliquam et orci porta ligula interdum rutrum.
          Sed mattis massa sodales tortor pellentesque pretium. Integer at
          placerat risus.
        </p>
        <a href="#aplikace">
          <button>
            <b>APLIKACE</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)),url(${parallaxArr[0]})`,
      }"
    />

    <section class="flex" id="aplikace">
      <img v-lazy="require('@/assets/img/home/download.svg')" alt="" />
      <div>
        <h2>APLIKACE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla neque ac felis egestas eleifend. Vestibulum molestie
          convallis arcu vitae porta. Fusce nec lorem odio. Nullam at nulla eu
          ante tristique egestas. Aliquam et orci porta ligula interdum rutrum.
          Sed mattis massa sodales tortor pellentesque pretium. Integer at
          placerat risus.
        </p>
        <a href="#outdoor">
          <button>
            <b>OUTDOOROVÉ HRY</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)),url(${parallaxArr[1]})`,
      }"
    />

    <section id="outdoor">
      <div>
        <h2>OUTDOOROVÉ HRY</h2>
        <p>
          Součástí historických cedulí je i série geokeší Zapomenutá Orlová v
          outdooorové hře Geocaching. Doprovází je také štítky hry Munzee.
        </p>
        <div class="flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span>
              <img
                v-lazy="require('@/assets/img/home/geocaching.webp')"
                alt=""
              />
              <b>Geocaching</b>
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span>
              <img v-lazy="require('@/assets/img/home/munzee.webp')" alt="" />
              <b>Munzee</b>
            </span>
          </a>
        </div>
        <a href="#mapa">
          <button>
            <b>MAPA</b>
            <fa :icon="['fas', 'chevron-down']" />
          </button>
        </a>
      </div>
    </section>

    <div
      class="parallax"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .7)),url(${parallaxArr[2]})`,
      }"
    />

    <section class="flex" id="mapa">
      <img v-lazy="require('@/assets/img/home/map.svg')" alt="" />
      <div>
        <h2>MAPA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla neque ac felis egestas eleifend. Vestibulum molestie
          convallis arcu vitae porta. Fusce nec lorem odio. Nullam at nulla eu
          ante tristique egestas. Aliquam et orci porta ligula interdum rutrum.
          Sed mattis massa sodales tortor pellentesque pretium. Integer at
          placerat risus.
        </p>
        <router-link to="/mapa">
          <button>
            <b>Otevřít</b>
          </button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import locations from '../assets/data/locations.json'

export default {
  name: 'Home',
  data() {
    return {
      parallaxArr: [],
    }
  },
  mounted() {
    let array = this.shuffle(Object.keys(locations))

    for (let i = 0; i < array.length; i++) {
      array[i] = require(`@/assets/img/articles/${array[i]}/main.webp`)
    }

    this.parallaxArr = array
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
  },
}
</script>

<style lang="sass" scoped>
.parallax
  height: 80vh
  width: 100%
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover

h1, h2
  margin-top: 5px

section
  background-color: white
  padding: 2vh 15vw
  @include small-device
    padding: 2vh 5vw
  display: flex
  align-items: center
  min-height: 100vh
  & > div
    width: 100%
  img
    height: 25vh
    min-height: 150px
    max-height: 250px
    border: 1px solid $grey
    border-radius: 50%
    margin: auto
  h2
    font-size: 3rem
    @include small-device-portrait
      font-size: 2rem
  p
    margin: 0 5vw
  a
    text-decoration: none
  button
    display: grid
    text-align: center
    margin: 5vh auto 0 auto
    border: 1px solid $grey
    border-radius: 10px
    background-color: $primary
    cursor: pointer
    width: 20vw
    min-width: 250px
    min-height: 50px
    justify-items: center
    align-items: center
    @include small-device-portrait
      width: 100%
    @include transition(background-color)
    &:hover
      background-color: $accent
    b
      font-size: 1rem

.segment1, #aplikace
  a
    text-decoration: none

#aplikace, #mapa
  @include small-device-portrait
    display: grid
  h2
    @include small-device-landscape
      font-size: 1.75rem

.segment1
  min-height: calc( 100vh - 63px)
  @include small-device-landscape
    min-height: 100vh
  h1
    font-size: 4rem
    @include small-device
      font-size: 2rem

#outdoor
  h2
    @include small-device-landscape
      font-size: 2.2rem
  img
    @include small-device-portrait
      height: 17.5vh
      min-height: 100px
  .flex
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      text-decoration: none
      color: black
      margin: 2vh 5vw
      @include transition(transform)
      &:hover
        transform: scale(.9)
    span
      display: grid
    b
      margin-top: 20px
      font-size: 1.5rem
</style>
