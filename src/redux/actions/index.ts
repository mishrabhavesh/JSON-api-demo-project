import { createAsyncThunk } from "@reduxjs/toolkit";

import apiKit from '../../api/index';

export const fetchUserListAction = createAsyncThunk('jsonapi/users/fetch', async () => {
  const response = await apiKit().get('/users');
  
  return response.data as UserTypes.UserList[];
});
