import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '../../apis/user';

export const fetchUserInfo = createAsyncThunk('user/userInfo', async () => {
  const response = getUserInfo();
  return response;
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
  },
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, action) => {
      state.info = action.payload
    }
  }
});

export default userSlice.reducer;
