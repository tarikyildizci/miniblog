import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../functions/firebase';
const Post = ({
  title,
  body,
  author,
  comments,
  authorId,
  postId,
  deletable = false,
}) => {
  const history = useHistory();

  const PostDelete = async (postId) => {
    const response = await deletePost(postId);
    if (response === 1) {
      alert('There is an error with our servers. Please try again later.');
    } else {
      console.log(response);
      alert('Post Deleted Successfully!');
      history.push('/explore');
    }
  };

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
        {'    '}
      </Typography>{' '}
      {deletable ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            PostDelete(postId);
          }}
        >
          Delete
        </Button>
      ) : (
        ''
      )}
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
