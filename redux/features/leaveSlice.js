import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../api/config"

export const fetchAsyncLeave = createAsyncThunk(
  "leave/fetchAsyncLeave",
  async(data) => {
    const leave = "/api/leave"

    const response = await axios.get(
      config.apiUrl + url + data, {
        header: {
          "Content-Type": "application/json",
          "Authorization": "Bearer" + ""
        },
        validateStatus: (status) => {
          return true;
        }
      }
    )
  }
)

const initialState = {
  data: {}
}

const taskSlice = createSlice({
  name: "leave",
  initialState,
  extraReducers: {
    [fetchAsyncLeave.pending]: () => {
      console.log("pending")
    },
    [fetchAsyncLeave.fulfilled]: () => {
      return {...state, data: payload}
    },
    [fetchAsyncLeave.pending]: () => {
      console.log("rejected")
    }
  }
})