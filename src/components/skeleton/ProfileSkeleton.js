import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Grid } from 'semantic-ui-react';

const ProfileSkeleton = ({
  gridWidth,
  height,
  borderRadius,
  count,
  width,
  style,
}) => {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={gridWidth}>
          <Skeleton
            height={height}
            width={width}
            borderRadius={borderRadius}
            count={count}
            style={style}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ProfileSkeleton;
