import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCountry = createAsyncThunk("country/fetchAllCountry", async (dispatch, getState) => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const countrySlice = createSlice({
  name: "country",
  initialState: {
    fetchCountry: [],
    country: [],
    status: null,
  },
  reducers: {
    resetCountry(state) {
      state.country = state.fetchCountry;
    },
    filterByRegion(state, action) {
      const filterdCountry = state.fetchCountry.filter((country) => {
        return country.region.toLowerCase() === action.payload;
      });
      state.country = filterdCountry;
    },
    filterByCountyName(state, action) {
      const filterdCountry = state.fetchCountry.filter((country) => {
        return country.name.toLowerCase() === action.payload.toLowerCase();
      });
      state.country = filterdCountry;
    },
  },
  extraReducers: {
    [getAllCountry.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllCountry.fulfilled]: (state, action) => {
      state.status = "Success";
      state.fetchCountry = action.payload;
      state.country = state.fetchCountry;
    },
    [getAllCountry.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export const countryAction = countrySlice.actions;
export default countrySlice.reducer;
