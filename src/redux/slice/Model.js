import { createSlice, createAsyncThunk, Tuple } from "@reduxjs/toolkit";

export const fetchModel = createAsyncThunk("fetchModel", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});
const modelSlice = createSlice({
  name: "model",
  initialState: {
    featured: [],
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    addFeatured: (state, action) => {
      const newFeatureItem = state.data.find(
        (item) => item.id == action.payload
      );
      state.featured?.push(newFeatureItem);
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== action.payload);
      }
    },
    removeFeatured: (state, action) => {
      const newDataItem = state.featured.find(
        (item) => item.id == action.payload
      );
      state.data?.unshift(newDataItem);
      if (state.featured) {
        state.featured = state.featured.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchModel.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchModel.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchModel.rejected, (state, action) => {
      state.isError = true;
      console.log("Error ", action.payload);
    });
  },
});

export const { addFeatured, removeFeatured } = modelSlice.actions;
export default modelSlice.reducer;
