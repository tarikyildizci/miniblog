import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Post from '../components/Post';

import firebase, { getRandomPosts } from '../functions/firebase';

const Explore = () => {
  const [display, setDisplay] = useState([]);

  function truncate(input) {
    if (input.length > 500) {
      return input.substring(0, 500) + '...';
    }
    return input;
  }

  const getPosts = async () => {
    const posts = await getRandomPosts();
    if (posts === 1) {
      alert('There was an error, please try again.');
    } else {
      var tempArray = [];
      posts.map((post) => {
        if (post.data().authorId !== firebase.auth().currentUser.uid) {
          tempArray.push(post.data());
        }
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
        Explore
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
      <Toolbar />
    </Container>
  );
};

export default Explore;
