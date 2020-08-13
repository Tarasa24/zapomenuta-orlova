<template>
  <div id="app">
    <Nav />
    <router-view />
    <Update />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Update from '@/components/Update';

export default {
  components: {
    Nav,
    Update,
  },
};
</script>
