import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Post from '../components/Post';

import firebase, { getFollowingUsersPost } from '../functions/firebase';

const Home = () => {
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState('');

  function truncate(input) {
    if (input.length > 500) {
      return input.substring(0, 500) + '...';
    }
    return input;
  }

  const getPosts = async () => {
    const user = firebase.auth().currentUser;
    const posts = await getFollowingUsersPost(user.uid);
    if (posts === 1) {
      setError(
        <Typography variant="body1" align="center">
          You are not following anyone.
        </Typography>
      );
    } else if (posts === 2) {
      setError(
        <Typography variant="body1" align="center">
          An error occured in the server, please try again.
        </Typography>
      );
    } else {
      var tempArray = [];
      posts.map((post) => {
        tempArray.push(post.data());
      });
      setDisplay(tempArray);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography
        style={{ margin: '2rem 0', textDecoration: 'underline' }}
        align="center"
        variant="h3"
      >
        Home
      </Typography>
      {display &&
        display.map((post, key) => (
          <Post
            key={key}
            title={post.title}
            author={post.author}
            body={truncate(post.body)}
            comments={post.comments ? post.comments.length : 0}
            authorId={post.authorId}
            postId={post.postId}
          />
        ))}
      {error ? error : ''}
      <Toolbar />
    </Container>
  );
};

export default Home;
