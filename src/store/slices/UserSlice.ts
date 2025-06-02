import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  data: unknown;
}

const initialState: IUserState = {
  data: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<unknown>) => {

    },
  },
});

export const { signIn } = UserSlice.actions;

export default UserSlice.reducer;
