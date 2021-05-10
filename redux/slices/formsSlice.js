import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getFormList, getFormById, getFormResponse } from '../../apis/forms';

export const fetchFormList = createAsyncThunk('/form/list', async () => {
  const response = getFormList();
  return response;
});

export const fetchSingleFormData = createAsyncThunk('/form/single', async ({ uuid }) => {
  const response = getFormById({ uuid });
  return response;
});

export const fethchFormResponse = createAsyncThunk('/form/response', async ({ uuid }) => {
  const response = getFormResponse({ uuid });
  return response;
});

export const formListSlice = createSlice({
  name: 'form',
  initialState: {
    list: {},
    formParams: {
      name: '',
      description: '',
    },
    uuid: '',
    singleform: {},
    responses:[]
  },
  reducers: {
    saveForm(state, action) {
      const { name, description } = action.payload;
      state.formParams = {
        name,
        description,
      };
    },
    saveuuid(state, action) {
      const { uuid } = action.payload;
      state.uuid = uuid;
    },
  },
  extraReducers: {
    [fetchFormList.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [fetchSingleFormData.fulfilled]: (state, action) => {
      state.singleform = action.payload;
    },
    [fethchFormResponse.fulfilled]: (state, action) => {
      state.responses = action.payload;
    }
  }
});

export const { saveForm, saveuuid } = formListSlice.actions;

export default formListSlice.reducer;
