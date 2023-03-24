import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestroModel } from "src/features/restaurant/types/RestaurantTypes";
import axios from "axios";

interface RestroState {
  restroList: RestroModel[];
  loading: boolean;
  error: string | null;
}

const initialState: RestroState = {
  restroList: [],
  loading: false,
  error: null,
};

export const fetchRestroList = createAsyncThunk(
  "restro/fetchrestrolist",
  async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.112:7000/api/v1/resort/"
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const restroSlice = createSlice({
  name: "restros",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestroList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchRestroList.fulfilled,
      (state, action: PayloadAction<RestroModel[]>) => {
        state.loading = false;
        state.restroList = action.payload;
      }
    );
    builder.addCase(fetchRestroList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unkown error occured";
    });
  },
});

export default restroSlice.reducer;
