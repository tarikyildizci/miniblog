import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  return (
    <Container maxWidth="sm">
      <Typography variant="body1" align="center" style={{ margin: '3rem 0' }}>
        Oops. The page you are looking for doesn't exist.
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push('/explore');
            }}
          >
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
