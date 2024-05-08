import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createModel = createAsyncThunk("createModel", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const createModelSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createModel.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createModel.fulfilled, (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    }),
      builder.addCase(createModel.rejected, (state) => {
        state.loading = true;
        console.log(error);
      });
  },
});

export default createModelSlice.reducer;
