// src/store/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  _id: string | null;
  userName: string | null;
  role: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: UserState = {
  _id: null,
  userName: null,
  role: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state._id = action.payload._id;
      state.userName = action.payload.userName;
      state.role = action.payload.role;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearUser(state) {
      state._id = null;
      state.userName = null;
      state.role = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
