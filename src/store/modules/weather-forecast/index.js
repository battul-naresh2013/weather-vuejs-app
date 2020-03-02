export const namespaced = true; // module namespace

export { actions } from './actions';

export { default as mutations } from './mutations';

export const state = {
  allCities: [],
  weatherDetails: {},
};

export const getters = {};
