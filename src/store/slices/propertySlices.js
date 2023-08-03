import { createSlice } from "@reduxjs/toolkit";
const data = require("../../dummyData.json");

const propertySlice = createSlice({
  name: "property",
  initialState: {
    location: { value: "", selected: false },
    date: { value: new Date(), selected: false },
    price: { value: { min: 0, max: 0 }, selected: false },
    propertyType: { value: "", selected: false },
    data: data,
  },
  reducers: {
    changeLocation(state, action) {
      state.location.value = action.payload;
      state.location.selected = true;
    },
    changeDate(state, action) {
      state.date.value = action.payload;
      state.date.selected = true;
    },
    changePrice(state, action) {
      state.price.value.min = action.payload.min;
      state.price.value.max = action.payload.max;
      state.price.selected = true;
    },
    changePropertyType(state, action) {
      state.propertyType.value = action.payload;
      state.propertyType.selected = true;
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
