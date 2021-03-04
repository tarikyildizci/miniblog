import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Post from '../components/Post';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Post
        title={'First blog of this site'}
        author={'Tarık Yıldızcı'}
        body={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias provident labore consequatur quisquam mollitia! Omnis ut impedit voluptatibus placeat delectus nam, optio doloribus commodi.'
        }
      />
    </Container>
  );
};

export default Home;
