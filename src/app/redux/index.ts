import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import search from '../../store/search';
import tickerDetails from '../../store/tickerDetails';
import popularTickers from '../../store/popularTickers';

const store = configureStore({
  reducer: {
    search,
    tickerDetails,
    popularTickers,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
