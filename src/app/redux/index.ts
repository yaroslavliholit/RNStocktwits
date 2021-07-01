import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import search from '../../store/search';

const store = configureStore({
  reducer: {
    search,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
