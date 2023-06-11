
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: [],
  loadingImages: true,
  limit: 12, 
  isFetching:false,
  browseImages: [],
  randomImages:[],
  currentOpen: ""
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setImages: (state, action) => {
      state.images = action.payload
      state.loadingImages = false
    },
    pushToImages: (state, action) => {
      state.browseImages = [...state.browseImages, action.payload]
    },

    setBrowseImages: (state, action) => {
      state.browseImages = action.payload
    },
    setCurrentOpen: (state, action) => {
      state.currentOpen = action.payload
    },
    clearImages: (state, action) => {
      state.images = []
    },
  },
});

export const { setImages, clearImages, setLimit,setBrowseImages, setCurrentOpen, setFetching, pushToImages } = imagesSlice.actions;

export default imagesSlice.reducer;