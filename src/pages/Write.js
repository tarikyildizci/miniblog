import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import firebase, { createPost } from '../functions/firebase';

const Write = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const publish = async () => {
    var user = firebase.auth().currentUser;
    const response = await createPost(title, body, user.displayName, user.uid);
    if (response === 1) {
      setTitle('');
      setBody('');
      alert('Post Successful');
    } else {
      setTitle('');
      setBody('');
      alert('A problem occured, please try again later.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            style={{ marginTop: '3rem', textDecorationLine: 'underline' }}
          >
            New Post
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: '100%' }}
            label="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: '100%' }}
            value={body}
            multiline
            label="I want to talk about..."
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={publish}>
            Publish
          </Button>
        </Grid>
      </Grid>
      <Toolbar />
    </Container>
  );
};

export default Write;
