import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/slice/filterSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.status);
  const onFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'h4.fontSize',
          color: '#53a7eb',
        }}
      >
        {`Find contacts by name`}
      </Typography>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          boxShadow:
            '0px 2px 1px -1px rgb(25 118 210), 0px 1px 1px 0px rgb(25 118 210), 0px 1px 3px 0px rgb(25 118 210)',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Find contacts by name"
          inputProps={{ 'aria-label': 'find contacts by name' }}
          type="text"
          name="filter"
          value={filterValue}
          title="Enter name"
          onChange={onFilterChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};
