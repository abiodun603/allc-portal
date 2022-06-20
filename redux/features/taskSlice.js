import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../api/config"

export const fetchAsyncTask = createAsyncThunk(
  "task/fetchAsyncTask",
  async({token, email}) => {
    const url = "/api/everytask/"
    console.log(email)

    const response = await axios.get(
      config.apiUrl + url + email , {
        headers :{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + `${token}`
        },
        validateStatus: (status) => {
          return true;
        }
      }
    )

   return response.data
  }
)

const initialState = {
  task: {}
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers : {
    [fetchAsyncTask.pending]: () => {
      console.log("pending")
    },
    [fetchAsyncTask.fulfilled]: (state, {payload}) => {
      return {...state, task: payload}
    },
    [fetchAsyncTask.pending]: () => {
      console.log("rejected")
    }
  }
})

export const getAllTask = ((state) => state?.task?.task)
export default taskSlice.reducer