import { createSlice } from "@reduxjs/toolkit";

const sampleUser = {
  profile: {
    name: "Root User",
    email: "root@gmail.com",
  },
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: sampleUser,
  reducers: {
    toggleLogin(state) {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { toggleLogin } = userSlice.actions;
export default userSlice.reducer;
