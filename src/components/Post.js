import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Post = ({ title, body, author }) => {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <Typography
        variant="subtitle2"
        color="primary"
        onClick={() => {
          console.log(author);
        }}
        style={{ cursor: 'pointer' }}
      >
        by {author}
      </Typography>
      <Typography variant="body1">{body}</Typography>
    </div>
  );
};

export default Post;
