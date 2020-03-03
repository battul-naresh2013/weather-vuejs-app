<template>
  <div>
    <search-city-widget />
    <hr />
    <b-card-group class="m-3" v-if="hasWeatherDetails">
      <b-card
      overlay
      class="cards"
      img-alt="Card Image"
      bg-variant="light"
      text-variant="white"
      v-for="(value, key) in weatherDetails" :key="key">
        <h5>{{getDate(value.dt_txt)}}</h5>
        <span class="iconify icon-size"
        :data-icon="iconCss[key]" data-inline="false"></span>
        <p><strong>{{getMinTempDegreeCelcius(key)}}°C</strong>
         / {{getMaxTempDegreeCelcius(key)}}°C</p>
        <p>Humidity: {{humidity[key]}}</p>
        <p>Weather: {{weather[key]}}</p>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import getWeatherIcon from '../../shared/utilities/weatherIcons';
import searchCityWidget from './searchCityWidget.vue';
import { celsius } from '../../shared/utilities/temperature-unit-convertor';

export default {
  name: 'weather-widget',
  components: {
    searchCityWidget,
  },
  data() {
    return {
      cityName: '',
      iconCss: [],
      tempMin: [],
      tempMax: [],
      humidity: [],
      weather: [],
    };
  },
  computed: {
    weatherDetails() {
      this.processData();
      return this.$store.state.weatherForecastModule.weatherDetails;
    },
    hasWeatherDetails() {
      return this.$store.state.weatherForecastModule.weatherDetails
      && this.$store.state.weatherForecastModule.weatherDetails.length;
    },
  },
  methods: {
    getDate(date) {
      return new Date(date).toDateString();
    },
    getMinTempDegreeCelcius(index) {
      return celsius(this.tempMin[index]);
    },
    getMaxTempDegreeCelcius(index) {
      return celsius(this.tempMax[index]);
    },
    processData() {
      this.resetData();
      const { weatherDetails } = this.$store.state.weatherForecastModule;
      weatherDetails.forEach((wd) => {
        this.weather.push(wd.weather[0].description);
        this.tempMin.push(wd.main.temp_min);
        this.tempMax.push(wd.main.temp_max);
        this.humidity.push(wd.main.humidity);
        this.iconCss.push(getWeatherIcon(wd.weather[0].icon));
      });
    },
    resetData() {
      this.iconCss = [];
      this.tempMin = [];
      this.tempMax = [];
      this.humidity = [];
      this.weather = [];
    },
  },
};
</script>
<style scoped>
.cards {
  background: url('../../assets/card-background.png') no-repeat bottom center scroll;
  background-size: cover;
  width: 100%;
  height: 40vh;
}
.icon-size {
  font-size: 50px;
}
</style>
