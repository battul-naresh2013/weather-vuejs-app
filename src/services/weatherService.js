import clientApi from './clientApi';
import { apiKey, cityApiUrl } from '../shared/appConstants';

// eslint-disable-next-line import/prefer-default-export
export const getWeatherDetails = (id) => clientApi.get(`${cityApiUrl}=${id}&appid=${apiKey}`);
