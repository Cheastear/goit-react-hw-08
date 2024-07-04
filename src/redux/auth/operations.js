import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "auth/fetchContacts",
  async (authData, thunkAPI) => {
    try {
      var response = await axios
        .get("/users/signup", authData)
        .then((response) => {
          return response.data;
        });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
