import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, fetchUsers } from "./usersOps";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (users) => users.id !== action.payload
        );
      });
  },
});
export const selectFilteredUsers = (state) => {
  const { items, filter } = state.users;
  if (!filter) return items;
  return items.filter((user) =>
    Object.values(user).some((value) =>
      value.toLowerCase().includes(filter.toLowerCase())
    )
  );
};

export const { updateFilter } = usersSlice.actions;
export default usersSlice.reducer;
