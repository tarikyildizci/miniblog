import React, { useState, useEffect } from 'react';
import {
  Container,
  Toolbar,
  Grid,
  Avatar,
  Typography,
  Button,
} from '@material-ui/core';
import Post from '../components/Post';

import { useHistory } from 'react-router-dom';

import firebase, { getUserPost, logout } from '../functions/firebase';

const Profile = () => {
  const [display, setDisplay] = useState([]);
  const [userInfo, setUserInfo] = useState();

  const history = useHistory();

  function truncate(input) {
    if (input.length > 250) {
      return input.substring(0, 250) + '...';
    }
    return input;
  }

  const Logout = async () => {
    await logout();
    history.push('/');
  };

  const getPosts = async () => {
    const user = firebase.auth().currentUser;
    setUserInfo(user);
    const posts = await getUserPost(user.uid);
    setDisplay(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid container style={{ marginTop: '3rem' }} justify="center">
        <Grid item>
          <Avatar
            style={{ width: '100px', height: '100px' }}
            src={userInfo && userInfo.photoURL}
            xs={12}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ margin: '2rem 0', textDecoration: 'underline' }}
            align="center"
            variant="h3"
          >
            {userInfo && userInfo.displayName}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Button variant="contained" color="secondary" onClick={Logout}>
            Logout
          </Button>
        </Grid>
      </Grid>
      {display
        ? display.map((post, key) => (
            <Post
              key={key}
              title={post.title}
              author={post.author}
              body={truncate(post.body)}
              comments={post.comments ? post.comments.length : 0}
              authorId={post.authorId}
              postId={post.postId}
              deletable
            />
          ))
        : 'Loading'}
      <Toolbar />
    </Container>
  );
};

export default Profile;
