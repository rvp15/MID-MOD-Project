import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const savedpics =
  localStorage.getItem("likeddata") !== null
    ? JSON.parse(localStorage.getItem("likeddata"))
    : [];

const initialState = {
  likeddata: savedpics,
};
export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    setlikedlist: (state, action) => {
      // state.likeddata = action.payload
      console.log(action.payload);
      const existitem = state.likeddata.find(
        (item) => item.title === action.payload.title
      );
      if (!existitem) {
        state.likeddata.push(action.payload);
      }
      localStorage.setItem(
        "likeddata",
        JSON.stringify(state.likeddata.map((item) => item))
      );
    },
    setremoveliked: (state, action) => {
      state.likeddata = state.likeddata.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
});

export const { setlikedlist, setremoveliked } = likedSlice.actions;

export default likedSlice.reducer;
