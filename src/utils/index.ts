import dayjs from 'dayjs';
import { Filters } from '../types';

/**
 * Check if the search functionality is disabled based on the filters.
 * @param filters - The filter values.
 * @returns True if the search is disabled, otherwise false.
 */
export const disabledSearch = (filters: Filters) => {
  return (
    filters.endDate === null ||
    filters.startDate === null ||
    filters.searchText === ''
  );
};

/**
 * Format the date to the desired format.
 * @param date - The date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (date: string) => {
  return dayjs(date).format('MMM DD, YYYY');
};

/**
 * Convert the date string to ISO string format.
 * @param dateString - The date string to convert.
 * @returns The converted ISO string.
 */
export const toISOString = (dateString: string) =>
  dayjs(dateString).toISOString();
