import clientApi from './clientApi';
import { apiKey, cityApiUrl } from '../shared/appConstants';

const getWeatherDetails = (id) => clientApi.get(`${cityApiUrl}=${id}&appid=${apiKey}`);

export default getWeatherDetails;
