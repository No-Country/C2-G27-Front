
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { value: { name: '', role: '', email: '' } },
  reducers: {
    // eslint-disable-next-line no-undef
    login: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
