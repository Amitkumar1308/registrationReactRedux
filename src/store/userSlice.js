import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  data: null,
};

// Thunk for saving user data
export const saveUserData = createAsyncThunk('user/saveUserData', async (userData) => {
  return userData;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to clear user data on logout
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
