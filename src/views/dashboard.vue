<template>
  <div class="text-center">
    <h1>Weather Dashboard</h1>
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
