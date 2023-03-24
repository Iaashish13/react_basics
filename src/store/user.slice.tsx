import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel } from "src/features/restaurant/types/UserTypes";

interface UserState {
  userList: UserModel[];
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  userList: [],
  loading: false,
  error: null,
};

export const fetchUserList = createAsyncThunk("call api", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserList.pending,(state)=>{
            state.loading= true;
        });
        builder.addCase(
           fetchUserList.fulfilled,
            (state, action: PayloadAction<UserModel[]>) => {
              state.loading = false;
              state.userList = action.payload;
            }
          );
          builder.addCase(fetchUserList.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message??'Sth went wrong'
          });

    },
});
export default userSlice.reducer; 
