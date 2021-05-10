import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import formListSlice from './slices/formsSlice';
import responseSlice from './slices/responseSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    form: formListSlice,
    response: responseSlice,
  },
});
