import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from '@mui/material';


const UserBody = ({ users }: { users: { id: number; name: string; username: string; website: string; company: { name: string; } }[] }) =>
<>
  {users.map((user) => (
    <TableRow
      key={user.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="center" component="th" scope="row" >
        {user.id}
      </TableCell>
      <TableCell align="center">{user.name}</TableCell>
      <TableCell align="center">{user.username}</TableCell>
      <TableCell align="center">
        <Link target="_blank" href={`https://${user.website}`}>{user.website}</Link>
      </TableCell>
      <TableCell align="center">{user.company.name}</TableCell>
    </TableRow>
  ))}
</>

export default UserBody;
