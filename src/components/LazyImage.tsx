import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from '../assets/images/download.png';
import { LaunchItemProps } from '../types';

const LazyImage: React.FC<LaunchItemProps> = ({ launch }) => {
  return (
    <LazyLoadImage
      width={'100%'}
      height={400}
      placeholderSrc={PlaceholderImage}
      alt={launch.name}
      effect="blur"
      src={
        launch.links.flickr.original[0]
          ? launch.links.flickr.original[0]
          : PlaceholderImage
      }
    />
  );
};

export default LazyImage;
