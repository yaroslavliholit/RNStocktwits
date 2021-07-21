import axios from 'axios';

import {httpResponseAdapter} from '../../shared/utils/json';
import ENV from '../../shared/constants/env';

const httpAgent = axios.create({
  baseURL: `${ENV.POLYGON_API_BASE_URL}`,
  transformResponse: httpResponseAdapter,
});

export default httpAgent;
