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

import { useHistory, useLocation } from 'react-router-dom';

import firebase, {
  getUserPost,
  isUserInDatabase,
  followUser,
  unfollowUser,
} from '../functions/firebase';

const User = () => {
  const [display, setDisplay] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [following, setFollowing] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const location = useLocation();

  function truncate(input) {
    if (input.length > 250) {
      return input.substring(0, 250) + '...';
    }
    return input;
  }

  const Follow = async () => {
    setButtonDisabled(true);
    await followUser(firebase.auth().currentUser.uid, userInfo.uid);
    setFollowing(true);
    setButtonDisabled(false);
  };
  const Unfollow = async () => {
    setButtonDisabled(true);
    await unfollowUser(firebase.auth().currentUser.uid, userInfo.uid);
    setFollowing(false);
    setButtonDisabled(false);
  };

  const getPosts = async () => {
    var path = location.pathname;
    var userId = path.substring(6);
    const user = await isUserInDatabase(userId);
    setUserInfo(user);
    const posts = await getUserPost(userId);
    setDisplay(posts);

    setFollowing(user.followers.includes(firebase.auth().currentUser.uid));
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
          <Button
            disabled={buttonDisabled}
            variant="contained"
            color={following ? 'default' : 'primary'}
            onClick={following ? Unfollow : Follow}
          >
            {following ? 'Unfollow' : 'Follow'}
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
            />
          ))
        : 'Loading'}
      <Toolbar />
    </Container>
  );
};

export default User;
