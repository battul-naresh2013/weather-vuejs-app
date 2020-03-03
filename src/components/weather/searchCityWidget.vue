<template>
  <div class="container">
    <b-row>
      <b-col cols="10" class="m-2">
        <b-form-input v-model="cityName" required placeholder="Enter your city name"
         id="cityName"></b-form-input>
      </b-col>
      <b-col class="m-2">
        <b-button @click="showWeather" pill>Search</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { cities } from '../../shared/cityList';
import { actionTypes } from '../../shared/appConstants';

export default {
  name: 'search-city-widget',
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    showWeather() {
      const cityId = this.getCityIdByCityName();
      if (cityId) {
        this.showWeatherDetails(cityId);
      }
    },
    getCityIdByCityName() {
      const cityDetails = cities.find(
        (city) => city.name.toLowerCase() === this.cityName.toLowerCase(),
      );
      if (cityDetails && cityDetails.id) return cityDetails.id;
      // eslint-disable-next-line no-alert
      alert('No city name found!');
      return false;
    },
    showWeatherDetails(cityId) {
      this.$store.dispatch(actionTypes.getWeatherDetailsAction, cityId);
    },
  },
};
</script>
