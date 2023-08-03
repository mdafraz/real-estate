import { createSlice } from '@reduxjs/toolkit';

const data = require('../../dummyData.json');

const propertySlice = createSlice({
  name: 'property',
  initialState: {
    location: { value: '' },
    date: { value: null },
    price: { value: { min: 0, max: 0 } },
    propertyType: { value: null },
    data,
  },
  reducers: {
    changeLocation(state, action) {
      state.location.value = action.payload;
    },
    changeDate(state, action) {
      state.date.value = action.payload;
    },
    changePrice(state, action) {
      state.price.value.min = action.payload.min;
      state.price.value.max = action.payload.max;
    },
    changePropertyType(state, action) {
      state.propertyType.value = action.payload;
    },
    changeData(state, action) {
      state.data = action.payload;
    },
  },
});

export const {
  changeLocation,
  changeDate,
  changePrice,
  changePropertyType,
  changeData,
} = propertySlice.actions;

export default propertySlice.reducer;
