<template>
  <main>
    <section class="head">
      <l-map
        :zoom="14.5"
        :center="[place.lat, place.lng]"
        :options="{ zoomControl: false, dragging: false }"
        class="map"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        <l-marker :lat-lng="[place.lat, place.lng]">
          <l-icon
            :popupAnchor="[0, -30]"
            :icon-url="require('@/assets/img/marker.png')"
          />
        </l-marker>
      </l-map>

      <aside>
        <h1>
          <span class="circle">
            <b>{{ place.nth }}</b>
          </span>
          {{ place.name }}
        </h1>

        <p>
          Integer facilisis lacus odio, at fringilla magna fringilla laoreet.
          Aliquam eget sodales arcu. Ut ultricies erat neque. Nullam in interdum
          ligula, eget varius mi. Nullam suscipit urna auctor nisl luctus
          volutpat. Nullam quam neque, scelerisque eu est a, pellentesque
          pellentesque felis. Fusce lobortis ultricies sem, ut porta justo
          elementum in. Integer facilisis lacus odio, at fringilla magna
          fringilla laoreet. Aliquam eget sodales arcu. Ut ultricies erat neque.
          Nullam in interdum ligula, eget varius mi. Nullam suscipit urna auctor
          nisl luctus volutpat.
        </p>

        <p>
          Integer facilisis lacus odio, at fringilla magna fringilla laoreet.
          Aliquam eget sodales arcu. Ut ultricies erat neque. Nullam in interdum
          ligula, eget varius mi. Nullam suscipit urna auctor nisl luctus
          volutpat. Nullam quam neque, scelerisque eu est a, pellentesque
          pellentesque felis. Fusce lobortis ultricies sem, ut porta justo
          elementum in. Integer facilisis lacus odio, at fringilla magna
          fringilla laoreet. Aliquam eget sodales arcu. Ut ultricies erat neque.
          Nullam in interdum ligula, eget varius mi. Nullam suscipit urna auctor
          nisl luctus volutpat.
        </p>
      </aside>
    </section>

    <section class="body">
      <h2>Historie</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        augue metus, vitae vulputate ipsum tincidunt id. Aenean ac tincidunt
        orci. Etiam venenatis porta neque nec finibus. Pellentesque ut lacinia
        diam. Donec id interdum eros, vitae ultrices justo. Nunc tempor varius
        ex, ac faucibus nisl faucibus et. Integer tincidunt pellentesque magna,
        nec blandit ex porttitor sit amet. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc ullamcorper mauris odio. Morbi
        eleifend commodo dapibus. Sed porttitor metus vitae placerat elementum.
        Quisque at risus maximus elit vehicula consectetur. Maecenas tristique
        varius eros, nec vestibulum tortor auctor quis. Mauris vel feugiat
        felis, sit amet mattis nibh. Ut semper, elit in luctus sollicitudin,
        orci augue interdum leo, sit amet finibus augue mauris quis nunc. Ut
        hendrerit vitae velit eget venenatis. Nulla sit amet cursus enim. Etiam
        magna quam, tempor sit amet erat et, iaculis malesuada arcu. Morbi at
        nisi interdum ex suscipit tempor a a sapien. Nullam vulputate massa et
        ipsum tempor imperdiet. Vestibulum quis libero vel mi porta gravida quis
        sed odio. Aenean eget iaculis tortor. Nullam vel auctor dui, eu
        imperdiet velit. Mauris tincidunt elementum porttitor. In fringilla
        felis non velit blandit tempor ut eget nisi. Nam ac malesuada massa, sit
        amet varius erat. Cras sed purus euismod, mattis nisi eget, fringilla
        augue. Nulla mollis ornare eros. Curabitur non nisl eu dui ultricies
        maximus. Sed ac turpis est. Quisque accumsan eros nec consectetur
        pellentesque. Duis aliquam efficitur vestibulum. Cras quis leo elit.
        Proin convallis fringilla ante at iaculis. Aliquam condimentum volutpat
        magna vitae mattis. Fusce vestibulum pulvinar quam, sed iaculis lorem
        pulvinar eu. Pellentesque sapien ante, commodo vel orci quis, tempus
        condimentum risus. Proin sed sollicitudin metus. Pellentesque sit amet
        nunc quis dui ornare facilisis. Suspendisse nec cursus lectus, eu
        molestie ex. Proin tincidunt luctus velit, nec laoreet turpis pulvinar
        in. Vestibulum ut tincidunt tellus. Donec in elementum nunc, accumsan
        posuere urna. Curabitur pulvinar egestas orci vel pulvinar. Ut nec lacus
        mauris. Curabitur tempus congue aliquam. Vestibulum tincidunt ipsum in
        laoreet rhoncus. Duis vitae magna at elit ultricies ornare. Suspendisse
        ut felis ut tellus accumsan interdum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Mauris euismod dui dui, aliquet luctus
        magna facilisis ut.
      </p>
    </section>
  </main>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

import data from '@/assets/data/main.json';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      place: {},
    };
  },
  created() {
    this.place = data[decodeURI(this.$route.params.name)];
    if (!this.place) this.$router.replace('/mapa');
    else {
      this.place.name = this.$route.params.name;
      this.place.nth =
        Object.keys(data).indexOf(decodeURI(this.$route.params.name)) + 1;
    }
  },
};
</script>

<style lang="sass" scoped>
section
  width: 100%
  max-width: 1300px
  margin: auto

.head
  display: grid
  grid-template-columns: 350px auto
  margin-top: 50px

  padding-bottom: 50px
  margin-bottom: 50px
  border-bottom: 2.5px solid $grey

  .map
    justify-self: center
    align-self: center
    width: 350px
    height: 350px

  aside
    text-align: left
    align-self: center
    margin-left: 50px
    .circle
      background-color: $primary
      color: white
      border-radius: 50%
      padding: 25px
      margin-right: 25px
      font-size: 0
      position: relative
      bottom: 12.5px
      b
        font-size: 1.5rem
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    h1
      font-size: 2rem
    p
      margin-top: 40px

.body
  p
    text-align: left
</style>
