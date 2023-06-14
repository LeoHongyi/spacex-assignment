import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';
import { Launch, LaunchItemProps } from '../types';
import { formatDate } from '../utils';

const LaunchItem: React.FC<LaunchItemProps> = ({ launch }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleItemClick = (item: Launch) => {
    navigate(`/detail/${item.id}`, { state: { item } });
  };
  return (
    <Card sx={{ mb: 2, maxWidth: isMobile ? 400 : 800 }}>
      <CardContent>
        <LazyImage launch={launch} />
        <Typography variant="h6" gutterBottom>
          {formatDate(launch.date_utc)}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {launch.name}
        </Typography>
        <Button
          onClick={() => handleItemClick(launch)}
          variant="outlined"
          color="inherit"
          style={{ marginTop: '20px' }}
        >
          {'LEARN MORE'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LaunchItem;
