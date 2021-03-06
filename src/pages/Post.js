import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { getSinglePost } from '../functions/firebase';
import { useLocation } from 'react-router-dom';

const Post = () => {
  const location = useLocation();
  const [display, setDisplay] = useState();

  const getPost = async () => {
    var path = location.pathname;
    var postId = path.substring(6);
    const postData = await getSinglePost(postId);
    if (postData === 1) {
      alert('There is an error with our servers, try again later.');
    } else {
      setDisplay(postData);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container maxWidth="sm">
      {display ? (
        <>
          <Toolbar />
          <Typography
            variant="h4"
            onClick={() => {
              console.log('go to post');
            }}
            style={{ cursor: 'pointer' }}
          >
            {display.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary"
            onClick={() => {
              console.log('go to author');
            }}
            style={{ cursor: 'pointer' }}
          >
            by {display.author}
          </Typography>
          <Typography variant="body1">{display.body}</Typography>
        </>
      ) : (
        'There was an error with our server.'
      )}

      {display && display.comments > 0 ? (
        <Typography variant="caption">
          -{display.comments} comment{display.comments === 1 ? '' : 's'}-
        </Typography>
      ) : (
        ''
      )}
      <Toolbar />
    </Container>
  );
};

export default Post;