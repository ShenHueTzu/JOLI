import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getResponseList } from '../../apis/response';

export const fetchResponseList = createAsyncThunk('/response/list', async () => {
  const response = getResponseList();
  return response;
});

export const responseSlice = createSlice({
  name: 'response',
  initialState: {
    list: {},
  },
  reducers: {},
  extraReducers: {
    [fetchResponseList.fulfilled]: (state, action) => {
      state.list = action.payload
    },
  }
});

export default responseSlice.reducer;
