<template>
  <main>
    <l-map
      :zoom="15"
      :center.sync="center"
      :maxBounds="[
        [49.7500600534, 18.107126193],
        [49.9503805554, 18.7595699213],
      ]"
      :minZoom="12"
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
        v-for="(details, name, index) in places"
        :key="name"
        :lat-lng="[details.lat, details.lng]"
        @click="
          () => {
            $router.push({ path: '/mapa', query: { h: name } });
            zoomTo(details.lat, details.lng);
          }
        "
        :ref="name"
      >
        <l-icon
          :popupAnchor="[0, -50]"
          :iconSize="[50, 50]"
          :iconAnchor="[25, 50]"
          :icon-url="
            highlighted != name
              ? require('@/assets/img/marker.png')
              : require('@/assets/img/markerH.png')
          "
          :shadowUrl="require('@/assets/img/empty.png')"
        />
        <l-popup class="popup">
          <router-link :to="`/misto/${encodeURI(name)}`">
            <b>{{ index + 1 }}.{{ name }}</b>
            <br />
            <i>{{ convertCoord(details.lat, details.lng) }}</i>
            <br />
            <img src="https://via.placeholder.com/160x90" :alt="name" />
          </router-link>
        </l-popup>
      </l-marker>
    </l-map>

    <aside v-bind:class="{ opened: open, closed: !open }">
      <h2>Seznam</h2>
      <ol>
        <li v-for="(details, name) in places" :key="name">
          <router-link :to="`/misto/${encodeURI(name)}`">{{
            name
          }}</router-link>
          <button
            class="zoom"
            @click="
              () => {
                $router.push({ path: '/mapa', query: { h: name } });
                zoomTo(details.lat, details.lng);
                $refs[name][0].mapObject.openPopup();
              }
            "
            aria-label="Přiblížit"
            title="Přiblížit"
          >
            <fa :icon="['fas', 'map-marker-alt']" />
          </button>
        </li>
      </ol>
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
} from 'vue2-leaflet';

import data from '@/assets/data/main.json';

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
  },
  data() {
    return {
      open: true,
      center: [49.846198, 18.429747],
      places: data,
      highlighted: null,
    };
  },
  watch: {
    '$route.query.h': function() {
      this.highlighted = this.$route.query.h;
    },
  },
  created() {
    this.highlighted = this.$route.query.h;
    if (this.highlighted) {
      this.center = [
        this.places[this.highlighted].lat,
        this.places[this.highlighted].lng,
      ];
      this.$nextTick(() => {
        this.$refs[this.highlighted][0].mapObject.openPopup();
      });
    }

    this.$nextTick(() => {
      this.$refs.map.mapObject.on('popupclose', () => {
        this.highlighted = null;
      });
    });
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    zoomTo(x, y) {
      this.center = [x, y];
    },
    convertCoord(NS, EW) {
      function convertDm(dd) {
        dd = Math.abs(dd);
        const deg = Math.floor(dd);
        return `${deg}° ${((dd - deg) * 60).toFixed(3)}`;
      }

      return `${NS > 0 ? 'N' : 'S'} ${convertDm(NS)} ${
        EW > 0 ? 'E' : 'W'
      } ${convertDm(EW)}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.map
  height: calc(100vh - 63px)
  width: 100%
  .popup
    text-align: center
    a
      text-decoration: none
      color: black
    b
      text-decoration: underline
      color: blue

aside
  position: fixed
  top: 63px
  left: 0
  z-index: 400
  height: calc(100vh - 63px)
  width: 300px
  background-color: rgba(white, 0.7)

  text-align: left
  h2
    text-align: center
  .sideBtn
    position: absolute
    top: 0
    right: -20px
    height: calc(100vh - 63px)
    width: 20px

    border: 0
    color: white
    font-EWight: bold
    background-color: $bg-dark
    cursor: pointer

    &:hover
      background-color: black
  li
    font-size: 1.25rem
    a
      color: black
      text-decoration: none
  .zoom
    background-color: transparent
    border: 0
    font-size: 1.25rem
    margin-left: 10px
    cursor: pointer
    color: $primary

.closed
  @keyframes close
    from
      left: 0
    to
      left: -300px
  animation-name: close
  animation-duration: 1s
  left: -300px

.opened
  @keyframes open
    from
      left: -300px
    to
      left: 0
  animation-name: open
  animation-duration: 1s
  left: 0
</style>
