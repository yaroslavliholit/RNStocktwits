import axios from 'axios';

import ENV from '../../shared/constants/env';

const httpAgent = axios.create({
  baseURL: `${ENV.POLYGON_API_BASE_URL}`,
});

export default httpAgent;
