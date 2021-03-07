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
        alert('There was an error signing in.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm" style={{ height: '100vh' }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography align="center" variant="h1" style={{ margin: '5rem 0' }}>
            Miniblog
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            align="center"
            variant="body1"
            style={{ margin: '3rem 0' }}
          >
            Read and write without any distractions. Let your ideas flow.
          </Typography>
        </Grid>
        <Grid item xs={12} align="center" style={{ margin: '3rem 0' }}>
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
