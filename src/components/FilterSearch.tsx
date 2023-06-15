import React from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import useSearchFilterSort from '../hooks/useSearchFilterSort';
import { FilterSearchProps } from '../types';
import { disabledSearch } from '../utils';

const style = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'inherit !important',
    },
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'inherit !important',
    },
    span: {
      color: 'inherit !important',
    },
  },
} as const;

const FilterSearch: React.FC<FilterSearchProps> = ({ onApplyFilters }) => {
  const {
    searchText,
    filters,
    handleSearchChange,
    handleStartDateChange,
    handleEndDateChange,
    handleStatusChange,
    handleSortChange,
    handleApplyFilters,
    handleResetFilters,
  } = useSearchFilterSort({ onApplyFilters });
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <>
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <TextField
          sx={style}
          label="Search"
          value={searchText}
          onChange={handleSearchChange}
          InputLabelProps={{
            style: {
              color: 'inherit',
            },
            shrink: true,
          }}
        />

        <TextField
          sx={style}
          label="Start Date"
          type="date"
          value={filters.startDate || ''}
          onChange={handleStartDateChange}
          variant="outlined"
          InputLabelProps={{
            style: {
              color: 'inherit',
            },
            shrink: true,
          }}
        />
        <TextField
          sx={style}
          label="End Date"
          type="date"
          value={filters.endDate || ''}
          onChange={handleEndDateChange}
          variant="outlined"
          InputLabelProps={{
            style: {
              color: 'inherit',
            },
            shrink: true,
          }}
        />
        <FormControl variant="outlined">
          <InputLabel style={{ color: 'inherit' }}>Status</InputLabel>
          <Select
            sx={style}
            value={filters.status}
            onChange={handleStatusChange}
            label="Status"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="failure">Failure</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel style={{ color: 'inherit' }}>Sort By</InputLabel>
          <Select
            sx={style}
            value={filters.sortBy}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          disabled={disabledSearch(filters)}
          color="inherit"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </Box>
    </>
  );
};

export default FilterSearch;
