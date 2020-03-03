<template>
  <div class="text-center">
    <h4 class="pt-5 header-text">Welcome to Weather Dashboard</h4>
    <weather-widget />
  </div>
</template>

<script>
import weatherWidget from '../components/weather/weatherWidget.vue';

export default {
  name: 'dashboard',
  components: {
    weatherWidget,
  },
};
</script>
<style scoped>
.header-text{
  color: azure;
}
</style>
