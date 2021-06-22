import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles.css';

const About = () => {
  return (
    <div className="root"> 
      <h1 className="title" id="about">About</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img className="about-image" src='about8.jpg' alt="juliana profile"/>
        </Grid>
        <Grid item xs={12} sm={6} className="about-text">
          <p>Name: Juliana Claussen</p>
          <p>Email: juliana.correa.couto@gmail.com</p>
          <p>Location: Toronto, Ontario</p>
          <p>Phone: +1 647 673 1595</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;