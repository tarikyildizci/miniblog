import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Post from '../components/Post';

import firebase, { getRandomPosts } from '../functions/firebase';

const Explore = () => {
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState('');

  function truncate(input) {
    if (input.length > 500) {
      return input.substring(0, 500) + '...';
    }
    return input;
  }

  const getPosts = async () => {
    const posts = await getRandomPosts();
    if (posts === 1) {
      alert('There was an error.');
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

export default Explore;
