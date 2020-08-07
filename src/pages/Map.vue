<template>
  <main>
    <l-map
      :zoom="15"
      :center="latLng(49.846198, 18.429747)"
      :options="{
        zoomSnap: 0.5,
        zoomControl: false,
      }"
      class="map"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-control-zoom position="topright" />
      <l-control-scale position="bottomright" :imperial="false" />
      <l-marker :lat-lng="latLng(49.84616, 18.429968)">
        <l-icon
          :popupAnchor="[0, -30]"
          :icon-url="require('@/assets/img/marker.png')"
        />
        <l-popup style="text-align: center">
          1.
          <router-link to="/misto/Kostel">
            Kostel
          </router-link>
          <br />
          <i>49.84616, 18.429968</i>
        </l-popup>
      </l-marker>
    </l-map>
  </main>
</template>

<script>
import L from 'leaflet';
import {
  LMap,
  LTileLayer,
  LControlZoom,
  LControlScale,
  LMarker,
  LPopup,
  LIcon,
} from 'vue2-leaflet';

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
  methods: {
    latLng(x, y) {
      return L.latLng(x, y);
    },
  },
};
</script>

<style lang="sass" scoped>
.map
  height: calc(100vh - 63px)
  width: 100%
</style>
