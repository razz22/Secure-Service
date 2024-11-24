import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  toggleNav: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToggleNav: (state, action) => {
      state.toggleNav = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setToggleNav } = themeSlice.actions;

export default themeSlice.reducer;
