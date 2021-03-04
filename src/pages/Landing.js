import React from 'react';
import { login } from '../functions/firebase';
import { useHistory } from 'react-router-dom';
import GoogleButton from 'react-google-button';

import { Container, Typography, Grid } from '@material-ui/core';

const Landing = () => {
  var history = useHistory();

  const Login = async () => {
    try {
      const user = await login();
      if (user) {
        history.push('/redirect');
      } else {
        console.log('There was an error signing in.');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ height: '100vh' }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h1">
            Miniblog
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align="center" variant="h5">
            Let the ideas flow.
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <GoogleButton
            onClick={() => {
              Login();
            }}
          >
            Google
          </GoogleButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
