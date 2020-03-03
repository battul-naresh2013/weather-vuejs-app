<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script>
import dashboard from './views/dashboard.vue';

export default {
  components: {
    dashboard,
  },
};
</script>
<style scoped>
#app {
  background: url('./assets/background-image.png') no-repeat bottom center scroll;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>>
