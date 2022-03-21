import React from 'react';
import { Grid } from 'semantic-ui-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DashboardSkeleton = () => {
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Grid.Column>
          <Skeleton
            width={250}
            height={40}
            borderRadius={15}
            style={{ marginTop: '18px' }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Skeleton height={60} />
        </Grid.Column>
        <Grid.Column>
          <Skeleton height={60} />
        </Grid.Column>
        <Grid.Column>
          <Skeleton height={60} />
        </Grid.Column>
        <Grid.Column>
          <Skeleton height={60} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Skeleton width={250} height={40} borderRadius={15} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <Skeleton height={450} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Skeleton width={150} borderRadius={20} />
          <Skeleton height={40} />
          <Skeleton
            width={150}
            borderRadius={20}
            style={{ marginTop: '35px' }}
          />
          <Skeleton height={40} />
          <Skeleton
            width={150}
            borderRadius={20}
            style={{ marginTop: '35px' }}
          />
          <Skeleton height={40} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <Skeleton width={200} height={20} borderRadius={20} />
          <Skeleton height={100} />
        </Grid.Column>

        <Grid.Column width={8}>
          <Skeleton width={200} height={20} borderRadius={20} />
          <Skeleton height={100} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default DashboardSkeleton;
