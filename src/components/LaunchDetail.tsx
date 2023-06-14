import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { formatDate } from '../utils';
import LazyImage from './LazyImage';

const LaunchDetail = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();
  useEffect(() => {
    if (!item) {
      navigate('/', { replace: true });
    }
  }, [item, navigate]);
  if (!item) {
    return null; // Render nothing or a loading indicator
  }
  const { details, links, name, date_utc } = item;

  return (
    <div>
      <Button component={Link} to="/" color="inherit">
        <ArrowBack /> BACK TO LAUNCHES
      </Button>
      <Card>
        {links.webcast ? (
          <ReactPlayer url={item.links.webcast} controls width="100%" />
        ) : (
          <LazyImage launch={item} />
        )}
        <CardContent>
          <Typography variant="subtitle1">{formatDate(date_utc)}</Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body1">{details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaunchDetail;
