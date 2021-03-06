import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
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
      setError(<p>You are not following anyone.</p>);
    } else if (posts === 2) {
      setError(<p>An error occured in the server, please try again.</p>);
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
