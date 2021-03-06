import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const Post = ({ title, body, author, comments, authorId, postId }) => {
  const history = useHistory();

  return (
    <div style={{ margin: '4rem 0' }}>
      <Typography
        variant="h4"
        onClick={() => {
          history.push('/post/' + postId);
        }}
        style={{ cursor: 'pointer' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        color="primary"
        onClick={() => {
          history.push('/user/' + authorId);
        }}
        style={{ cursor: 'pointer' }}
      >
        by {author}
      </Typography>
      <Typography variant="body1">{body}</Typography>
      {comments > 0 ? (
        <Typography variant="caption">
          -{comments} comment{comments === 1 ? '' : 's'}-
        </Typography>
      ) : (
        ''
      )}
    </div>
  );
};

export default Post;
