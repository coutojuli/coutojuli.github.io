import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title:{
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '50px',
    textAlign:'center',
    margin: '50px auto',
  },
  img:{
    textAlign:'right',
  },
  text:{
    textAlign:'left',
    margin: '70px 0px 0px 50px',
    '& p':{
      padding:'5px',  
    }
  },

}));

const About = () => {
  const style = useStyles();

  return (
    <div className={style.root}> 
      <h1 className={style.title} id="about">About</h1>
      <Grid container spacing={2}>
        <Grid xs={6} className={style.img}>
          <img src='about8.jpg' alt="juliana profile"/>
        </Grid>
        <Grid xs={4} className={style.text}>
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