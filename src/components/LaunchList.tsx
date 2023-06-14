import React, { useState, useEffect, useContext } from 'react';
import {
  Grid,
  CircularProgress,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import LaunchItem from './LaunchItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LaunchAPI } from '../api/launch';
import FilterSearch from './FilterSearch';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import { Filters, Launch } from '../types';

const LaunchList: React.FC = () => {
  const [data, setData] = useState<Launch[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    searchText: '',
    startDate: null,
    endDate: null,
    status: 'all',
    sortBy: 'desc',
  });

  const fetchData = async () => {
    try {
      const { data } = await LaunchAPI.queryByOptions(12, page, filters);

      if (page === 1) {
        setData(data.docs);
      } else {
        setData((prevData) => [...prevData, ...data.docs]);
      }
      setHasMore(data.hasNextPage);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // listen filters change
    setPage(1); // reset page
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleApplyFilters = (appliedFilters: Filters) => {
    // 更新筛选条件
    setFilters(appliedFilters);
    setPage(1);
  };

  const themeContext = useContext(ThemeContext);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (!themeContext) {
    return null; //
  }

  const { setDarkMode, darkMode } = themeContext;
  return (
    <div>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <FilterSearch onApplyFilters={handleApplyFilters} />
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<CircularProgress />}
        endMessage={<p style={{ textAlign: 'center' }}>No more data</p>}
      >
        <Grid container spacing={2}>
          {data.map((launch, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <LaunchItem launch={launch} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default LaunchList;
