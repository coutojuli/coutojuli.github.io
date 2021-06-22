import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
  icon:{
    width:'70px',
    height:'70px',
    color:'#dce7e8',
  }
}));

const Education = () => {
  const style = useStyles();
  return (
    <div className="root" id="education"> 
       <h1 className="title">Education</h1>
       <Grid container spacing={2} className="educationContainer">
         <Grid item sm={12} md={4} className="educationContainer__grid">
            <ComputerIcon className={style.icon}/>
            <h1>Information Technology Solutions</h1>
            <p>Postgraduate, Humber College</p>
            <p>Toronto, ON, May 2020</p>
          </Grid>
        <Grid item sm={12} md={4} className="educationContainer__grid">
        <SchoolIcon className={style.icon}/>
            <h1>Civil Engineering</h1>
            <p>Bachelor, Universidade Veiga de Almeida</p>
            <p>Brazil, September 2016</p>
          </Grid>
          <Grid item sm={12} md={4} className="educationContainer__grid">
        <SchoolIcon className={style.icon}/>
            <h1>Civil Engineering</h1>
            <p>Exchange Program, University of Toronto</p>
            <p>Toronto, ON, December 2015</p>
          </Grid>
       </Grid>
    </div>
  );
}

export default Education;