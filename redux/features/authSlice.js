import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../api/config"


export const fetchAsyncAuth= createAsyncThunk(
  "auth/fetchAsyncAuth",
  async(data) => {
    const url = "/api/loginlogin";
    console.log(data)
    const response = await axios.post(config.apiUrl + url , data, {
      headers: {
        "Content-Type": "application/json"
      },
      validateStatus : (status) => {
        return true
      }   
    });
    console.log(response)
    return response.data
  }
  
)

const initialState = {
  data: {},
  status: 'idle',
  // error: null
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchAsyncAuth.pending]: () => {
      console.log("pending")
    },

    [fetchAsyncAuth.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successfully");
      return {...state, data: payload}
    },

    [fetchAsyncAuth.rejected]: () => {
      console.log("rejected")
    }
  }
})

export const getAuthToken = ((state) => state?.auth?.data?.tokentoken?.original?.access_token);
export const getAuthEmail = ((state) => state?.auth?.data?.userdetails[0]?.email);
export const getAuthName = ((state) => state?.auth?.data?.userdetails[0]?.name);
export default authSlice.reducer;