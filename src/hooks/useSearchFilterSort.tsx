import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Filters, UseSearchFilterSortProps } from '../types';

/**
 * Custom hook for handling search, filter, and sort functionality.
 * @param initialFilters - Initial filter values.
 * @param onApplyFilters - Callback function to handle applying filters.
 * @returns Object with filter-related state and event handlers.
 */
const useSearchFilterSort = ({
  initialFilters,
  onApplyFilters,
}: UseSearchFilterSortProps) => {
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<Filters>(
    initialFilters || {
      searchText: '',
      startDate: null,
      endDate: null,
      status: 'all',
      sortBy: 'desc',
    }
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    setFilters((prevFilters) => ({ ...prevFilters, searchText: text }));
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const startDate = event.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, startDate }));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const endDate = event.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, endDate }));
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    const status = event.target.value as string;
    setFilters((prevFilters) => ({ ...prevFilters, status }));
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const sortBy = event.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, sortBy }));
  };

  const handleApplyFilters = () => {
    const updatedFilters = { ...filters, searchText };
    onApplyFilters(updatedFilters);
  };

  const handleResetFilters = () => {
    setSearchText('');
    setFilters({
      searchText: '',
      startDate: null,
      endDate: null,
      status: 'all',
      sortBy: 'desc',
    });
    onApplyFilters({
      searchText: '',
      startDate: null,
      endDate: null,
      status: 'all',
      sortBy: 'desc',
    });
  };

  return {
    searchText,
    filters,
    handleSearchChange,
    handleStartDateChange,
    handleEndDateChange,
    handleStatusChange,
    handleSortChange,
    handleApplyFilters,
    handleResetFilters,
  };
};

export default useSearchFilterSort;
