<template>
  <main>
    <l-map
      :zoom="15"
      :center.sync="center"
      :maxBounds="[
        [49.7500600534, 18.107126193],
        [49.9503805554, 18.7595699213],
      ]"
      :minZoom="14"
      :maxZoom="18"
      :options="{
        zoomSnap: 0.5,
        zoomControl: false,
      }"
      class="map"
      ref="map"
    >
      <l-tile-layer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-control-zoom position="topright" />
      <l-control-scale position="bottomright" :imperial="false" />
      <l-marker
        v-for="([name, details], index) in places"
        :key="name"
        :lat-lng="[details.lat, details.lng]"
        @click="
          () => {
            if ($route.query.h !== index + 1)
              $router.push({ path: '/mapa', query: { h: index + 1 } })
            zoomTo(details.lat, details.lng)
          }
        "
        :ref="index"
      >
        <l-icon
          :popupAnchor="[0, -50]"
          :iconSize="[50, 50]"
          :iconAnchor="[25, 50]"
          :icon-url="
            highlighted != index
              ? require('@/assets/img/pin.svg')
              : require('@/assets/img/pin_highlighted.svg')
          "
          :shadowUrl="require('@/assets/img/empty.png')"
        />
        <l-popup class="popup">
          <router-link :to="`/misto/${index + 1}`">
            <b>{{ index + 1 }}.{{ name }}</b>
            <br />
            <i>{{ convertCoord(details.lat, details.lng) }}</i>
            <br />
            <img
              :src="require(`@/assets/img/thumb/${name}.webp`)"
              :alt="name"
            />
          </router-link>
        </l-popup>
      </l-marker>

      <span v-if="lookForPosition">
        <l-circle
          @click="zoomTo(position.lat, position.lng, false)"
          :latLng="[position.lat, position.lng]"
          :radius="position.acc / 2"
          :color="positionAvailible ? '#FCBA03' : '#232B2B'"
          :fillColor="positionAvailible ? '#FCBA03' : 'grey'"
        />
        <l-circle-marker
          @click="zoomTo(position.lat, position.lng, false)"
          :latLng="[position.lat, position.lng]"
          :radius="7.5"
          :fill="true"
          :fillColor="positionAvailible ? '#FC5D03' : 'grey'"
          :fillOpacity="1"
          color="#232B2B"
        />
      </span>
    </l-map>

    <aside v-bind:class="{ opened: open, closed: !open }">
      <div class="list">
        <h2>Seznam</h2>
        <ol>
          <li v-for="([name, details], index) in places" :key="index">
            <router-link :to="`/misto/${index + 1}`">{{ name }}</router-link>
            <button
              class="zoom"
              @click="
                () => {
                  if ($route.query.h !== index + 1)
                    $router.push({ path: '/mapa', query: { h: index + 1 } })
                  zoomTo(details.lat, details.lng)
                  $refs[index][0].mapObject.openPopup()
                }
              "
              aria-label="Přiblížit"
              title="Přiblížit"
            >
              <fa :icon="['fas', 'map-marker-alt']" />
            </button>
          </li>
        </ol>

        <div class="downloadMap">
          <a href="/zapomenutaorlova-muor-cz.pdf">Mapa ke stažení</a>
        </div>
      </div>
      <button
        class="sideBtn"
        v-if="open"
        @click="handleClick"
        aria-label="Zmenšit postranní menu"
      >
        &lt;
      </button>
      <button
        class="sideBtn"
        v-else
        @click="handleClick"
        aria-label="Zvětšit postranní menu"
      >
        &gt;
      </button>
    </aside>
  </main>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LControlScale,
  LMarker,
  LPopup,
  LIcon,
  LCircle,
  LCircleMarker,
} from 'vue2-leaflet'

import data from '@/assets/data/locations.json'
import { convertCoord, sleep } from '@/assets/js/helperFunctions.js'

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LControlScale,
    LMarker,
    LPopup,
    LIcon,
    LCircle,
    LCircleMarker,
  },
  data() {
    return {
      safeScreen: window.innerWidth >= 700,
      open: window.innerWidth >= 700,
      center: [49.846198, 18.429747],
      places: Object.entries(data),
      highlighted: null,
      convertCoord: convertCoord,
      position: { lat: 0, lng: 0, acc: 0 },
      lookForPosition: true,
      positionAvailible: false,
    }
  },
  watch: {
    '$route.query.h': function () {
      this.highlighted = this.$route.query.h - 1
    },
  },
  async created() {
    // safeScreen listener
    window.addEventListener(
      'resize',
      () => (this.safeScreen = window.innerWidth >= 700)
    )

    // selected pin handeling
    this.highlighted = this.$route.query.h - 1
    if (this.$route.query.h) {
      const place = this.places[this.highlighted][1]
      this.$nextTick(() => {
        this.center = this.calculateOffset(place.lat, place.lng)
        this.$refs[this.highlighted][0].mapObject.openPopup()
      })
    }

    this.$nextTick(() => {
      this.$refs.map.mapObject.on('popupclose', () => {
        this.highlighted = null
      })
    })

    // position handeling
    while (this.lookForPosition) {
      this.displayPosition()
      await sleep(2000)
    }
  },
  destroyed() {
    this.lookForPosition = false
    window.removeEventListener(
      'resize',
      () => (this.safeScreen = window.innerWidth >= 700)
    )
  },
  methods: {
    handleClick() {
      const el = document.getElementsByTagName('aside')[0]

      el.animate(
        [
          { left: this.open ? '0' : '-355px' },
          { left: this.open ? '-355px' : '0' },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
        }
      )
      el.style.left = this.open ? '-355px' : '0'

      this.open = !this.open

      if (this.safeScreen && this.places[this.highlighted]) {
        const place = this.places[this.highlighted][1]
        this.zoomTo(place.lat, place.lng)
      }
    },
    zoomTo(x, y, offset = true) {
      this.center = offset ? this.calculateOffset(x, y) : [x, y]

      if (this.open && !this.safeScreen) this.handleClick()
    },
    calculateOffset(x, y) {
      const map = this.$refs.map.mapObject
      var center = map.project([x, y])

      center.x = center.x

      center = new L.point(
        center.x - (this.open && this.safeScreen ? 375 / 2 : 0),
        center.y - 140
      )
      var target = map.unproject(center)

      return [target.lat, target.lng]
    },
    displayPosition() {
      if (!navigator.geolocation) {
        this.lookForPosition = false
      } else {
        navigator.geolocation.getCurrentPosition(
          (geo) => {
            const position = geo.coords

            this.positionAvailible = true
            this.position = {
              availible: true,
              lat: position.latitude,
              lng: position.longitude,
              acc: position.accuracy,
            }
          },
          (err) => {
            this.positionAvailible = false
          }
        )
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.map
  position: fixed !important
  bottom: 0
  height: calc(100vh - 63px)
  width: 100%
  .popup
    text-align: center
    a
      text-decoration: none
      color: black
    b
      text-decoration: underline
      @include transition(color)
    img
      @include transition(transform)
    &:hover
      b
        color: $accent
      img
        transform: scale(.95)

aside
  position: fixed
  top: 63px
  left: 0
  z-index: 1001
  width: 375px
  min-height: 100vh
  background-color: rgba(white, 0.7)
  display: grid
  grid-template-columns: auto 20px
  text-align: left
  h2
    margin: 12.5px
    text-align: center
  .sideBtn
    height: 100%
    border: 0
    color: white
    font-weight: bold
    background-color: $bg-dark
    cursor: pointer
    position: sticky
    right: 0
    left: 0

    grid-column: 2
    grid-row: 1 / span 3

    &:hover
      background-color: black
  .list
    @include small-device
      overflow: auto
      height: calc(100vh - 63px)
    ol
      margin: 0
      font-size: 1.25rem
      @include small-device-portrait
        padding-right: 70px
        font-size: 1rem
      a
        color: black
        text-decoration: none
  .zoom
    background-color: transparent
    border: 0
    font-size: 1.25rem
    cursor: pointer
    color: $primary

.closed
  left: -355px

.downloadMap
  text-align: center
  margin-top: 1em
  a
    color: black
</style>
