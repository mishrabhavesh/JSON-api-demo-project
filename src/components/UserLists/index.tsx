import React, { useCallback, useMemo } from 'react'
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';

import { fetchUserListAction } from '../../redux/actions';
import { setUserFilteredIds } from '../../redux/slice/users';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import LinearIndeterminate from '../LoadingBar';
import SearchBar from '../SearchTab';
import UserBody from './UserBody';

const UserLists = () => {
  const dispatch = useAppDispatch();
  const { users, users: { isLoading: isUserListLoading, filteredIds } } = useAppSelector(state => state)

  const refetchDataHandler = useCallback(() => dispatch(fetchUserListAction()), [dispatch]);

  const searchTextChangeHandler = useCallback((searchText: string) => !searchText ? refetchDataHandler() : dispatch(setUserFilteredIds(searchText)), [dispatch, refetchDataHandler])

  const userBodyData = useMemo(() => filteredIds ? users.data.filter(({ id }: { id: number }) => filteredIds.includes(id)) : users.data, [users.data, filteredIds])

  return (
    <Container>
      <Box sx={{ m: 3, display: 'flex', justifyContent: 'center' }}>
        <SearchBar onChange={searchTextChangeHandler} />
      </Box>
      <Box sx={{ m: 4, textAlign: 'center' }}>
        <Button onClick={refetchDataHandler} variant="contained">Reload Data</Button>
      </Box>
      {isUserListLoading ? <LinearIndeterminate /> : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Username</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Website</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">Company Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <UserBody users={userBodyData} />
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box sx={{ my: 5, textAlign: 'center' }}>
        Created By <h5>Bhavesh Mishra</h5>
      </Box>
    </Container>
  );
};

export default UserLists;
