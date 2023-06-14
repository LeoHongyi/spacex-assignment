import { ReactNode } from 'react';

export type Launch = {
  id: string;
  date_utc: string;
  name: string;
  details: string;
  links: {
    flickr: {
      small: string[];
      original: string[];
    };
    webcast: string;
  };
};

export type LaunchItemProps = {
  launch: Launch;
};

export type ThemeSwitcherProps = {
  children: ReactNode;
};

export type Filters = {
  searchText: string;
  startDate: string | null;
  endDate: string | null;
  status: string;
  sortBy: string;
};

export type UseSearchFilterSortProps = {
  initialFilters?: Filters;
  onApplyFilters: (filters: Filters) => void;
};

export type FilterSearchProps = {
  onApplyFilters: (filters: Filters) => void;
};

export type launchResponseType = {
  data: {
    docs: [];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: number;
    totalDocs: number;
    totalPages: number;
  };
};
