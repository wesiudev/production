
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
    addImagesToarray: (state, action) => {
      state.images = [...state.images, action.payload]
    },
    setFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setImages: (state, action) => {
      state.images = action.payload
      state.loadingImages = false
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

export const { setImages, clearImages, setLimit,setBrowseImages, setCurrentOpen, setFetching,  addImagesToarray } = imagesSlice.actions;

export default imagesSlice.reducer;