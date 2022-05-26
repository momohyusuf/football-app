import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  season: '2021',
};

export const seasonSlice = createSlice({
  name: 'season',
  initialState,
  reducers: {
    updateSeason: (state, { payload }) => {
      console.log(payload);
      state.season = payload;
    },
  },
});

export const { updateSeason } = seasonSlice.actions;

export default seasonSlice.reducer;
