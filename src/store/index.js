import { configureStore } from '@reduxjs/toolkit';

import propertyReducer from './slices/propertySlices';

const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export default store;
