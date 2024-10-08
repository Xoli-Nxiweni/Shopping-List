import { useState, useEffect, useMemo } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
// import { colors } from '@mui/material';

// Styling components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: '20.65%',
    // width: '30.5ch',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  cursor: 'pointer',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '25ch',
      },
    },
    background: 'lightgrey',
    borderRadius: '5px',
  },
}));

// eslint-disable-next-line react/prop-types
function SearchAppBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce the search function to reduce the number of calls
  const debouncedSearch = useMemo(
    () => debounce((query) => onSearchChange(query), 300),
    [onSearchChange]
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm, debouncedSearch]);

  return (
    <Box sx={{ flexGrow: 0,
    }}>
      <Search sx={{
        padding: '0 10px',
      }} >
        <SearchIconWrapper  >
          <SearchIcon  sx={{
            zIndex: 1
          }}/>X
        </SearchIconWrapper  >
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>
    </Box>
  );
}

export default SearchAppBar;