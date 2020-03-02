<template>
  <div class="text-center">
    <b-row>
        <b-col cols="8" class="m-2">
        <b-form-input v-model="cityName" required placeholder="Enter your city name" id="cityName">
            </b-form-input>
        </b-col>
        <b-col class="m-2">
          <b-button @click="showWeather" pill>Search</b-button>
        </b-col>
    </b-row>
    <hr />
    <b-card-group v-if="weatherDetails && weatherDetails && weatherDetails.length" deck>
      <b-card v-for="(value, key) in weatherDetails" :key="key">
        dt_txt:<h2>{{value.dt_txt}}</h2>
        icon:<h2>{{value.weather[0].icon}}</h2>
        temp_min: <h2>{{value.main.temp_min}}</h2>
        temp_max: <h2>{{value.main.temp_max}}</h2>
        humidity: <h2>{{value.main.humidity}}</h2>
        weather:<h2>{{value.weather[0].description}}</h2>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { cities } from '../../shared/cityList';
import { actionTypes } from '../../shared/appConstants';

export default {
  name: 'weather-widget',
  mounted() {
    console.log('weatherDetails88888888888==, ', this.$store.state.weatherForecastModule.weatherDetails);

    // this.showAllCities();
  },
  data() {
    return { cityName: '' };
  },
  computed: {
    cities() {
      return this.$store.state.weatherForecastModule.allCities;
    },
    weatherDetails() {
      console.log('this.$store.state.weatherForecastModule.weatherDetails===',
        this.$store.state.weatherForecastModule.weatherDetails);

      return this.$store.state.weatherForecastModule.weatherDetails;
    },
  },
  methods: {
    showWeather() {
      // eslint-disable-next-line no-unused-vars
      const cityId = this.getCityIdByCityName();
      if (cityId) {
        this.showWeatherDetails(cityId);
      }
    },
    showWeatherDetails(cityId) {
      this.$store.dispatch(actionTypes.getWeatherDetailsAction, cityId);
    },
    getCityIdByCityName() {
      // eslint-disable-next-line max-len
      const cityDetails = cities.find((city) => city.name.toLowerCase() === this.cityName.toLowerCase());
      if (cityDetails && cityDetails.id) return cityDetails.id;

      // eslint-disable-next-line no-alert
      alert('No city name found!');
      return false;
    },
  },
};
</script>
