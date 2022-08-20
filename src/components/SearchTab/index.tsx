import { TextField } from '@mui/material';
import * as React from 'react';

const SearchBar = ({ onChange }: { onChange: (text: string) => void; }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(searchValue);
    }, 400); // throttle for 400ms

    return () => clearTimeout(timeout);
  }, [searchValue, onChange]);

  const textChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => setSearchValue(value);

  return <TextField sx={{ width: '50%' }} value={searchValue} onChange={textChangeHandler} id="Quick-basic" label="Search" variant="outlined" />
};

export default SearchBar;
