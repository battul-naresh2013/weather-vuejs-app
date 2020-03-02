import Vue from 'vue';
import Vuex from 'vuex';
import * as weatherForecastModule from './modules/weather-forecast';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { weatherForecastModule },
  state: {},
});
