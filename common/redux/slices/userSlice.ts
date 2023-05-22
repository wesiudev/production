
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

const initialState: any = {
  userData: {},
  userPrompt:""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<string>) => {
      state.userData = action.payload
    },
    setUserPrompt:(state, action:PayloadAction<string>) => {
      state.userData.userPrompt = action.payload
    },
    logout: (state) => {
      state.userData = {}
      redirect("/auth")
    },
  },
});

export const { setUser, logout, setUserPrompt } = userSlice.actions;

export default userSlice.reducer;
