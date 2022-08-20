import { createSlice, current } from "@reduxjs/toolkit";
import { fetchUserListAction } from "../actions";

interface initialStateType {
  data: UserTypes.UserList[];
  isLoading: boolean;
  filteredIds: null | number[]
}

const initialState: initialStateType = { data: [], isLoading: false, filteredIds: null };

const userList = createSlice({
  name: 'jsonapi/users/data',
  initialState,
  reducers: {
    setUserFilteredIds: (state, action) => {
      const currentState = current(state);
      const searchFilteredIds = currentState.data
      .filter(user => user.name.toLowerCase().startsWith(action.payload.toLowerCase()) || user.username.toLowerCase().startsWith(action.payload.toLowerCase()))
      .map(user => Number(user.id));

        return ({
        ...state,
        filteredIds: searchFilteredIds,
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserListAction.pending, (state) => ({
      ...state,
      isLoading: true
      })
    );

    builder.addCase(fetchUserListAction.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      isLoading: false,
      filteredIds: null,
    }))
  }
});

export const { setUserFilteredIds } = userList.actions;

export default userList.reducer;