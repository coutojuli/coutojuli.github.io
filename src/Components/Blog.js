import React from 'react';
import Grid from '@material-ui/core/Grid';

const Blog = () => {
  return(
    <div id="blog">
      <h1 className="title">Blog</h1>
    <Grid container spacing={2}>
      <Grid xs={6}>
        <div id="post1"></div>
      </Grid>
      <Grid xs={4}>
        <div id="post2"></div>
      </Grid>
      <Grid xs={2}>
        <div id="post3"></div>
      </Grid>
      <Grid xs={8}>
        <div id="post4"></div>
      </Grid>
      <Grid xs={4}>
        <div id="post5"></div>
      </Grid>
    </Grid>
    </div>
  )
}

export default Blog;