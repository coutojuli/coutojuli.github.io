import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title:{
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '50px',
    margin: '50px auto',
    textAlign:'center',
  },
  educationContainer:{
    margin:'30px auto',
    textAlign:'center',
    '& ul':{
      textAlign:'center',
    },
    '& h1':{
      fontSize: '17px',  
    },
    '& p':{
      fontSize:'15px',
    },
  },
  icon:{
    width:'70px',
    height:'70px',
    color:'#dce7e8',
  }
}));

const Education = () => {
  const style = useStyles();
  return (
    <div className={style.root} id="education"> 
       <h1 className={style.title}>Education</h1>
       <Grid container spacing={2} className={style.educationContainer}>
         <Grid xs={4} >
            <ComputerIcon className={style.icon}/>
            <h1>Information Technology Solutions</h1>
            <p>Postgraduate, Humber College</p>
            <p>Toronto, ON, May 2020</p>
          </Grid>
        <Grid xs={4}>
        <SchoolIcon className={style.icon}/>
            <h1>Civil Engineering</h1>
            <p>Bachelor, Universidade Veiga de Almeida</p>
            <p>Brazil, September 2016</p>
          </Grid>
          <Grid xs={4}>
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