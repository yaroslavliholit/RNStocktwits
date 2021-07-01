import axios from 'axios';
import {POLYGON_API_BASE_URL} from 'react-native-dotenv';

const httpAgent = axios.create({
  baseURL: `${POLYGON_API_BASE_URL}`,
});

export default httpAgent;
