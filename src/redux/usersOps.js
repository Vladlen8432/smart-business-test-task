import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://66d5f112f5859a704267f08e.mockapi.io/usermenegmenttable/users"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://66d5f112f5859a704267f08e.mockapi.io/usermenegmenttable/users",
        newUser
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "contacts/deleteContact",
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://66d5f112f5859a704267f08e.mockapi.io/usermenegmenttable/users/${userId}`
      );
      return userId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
