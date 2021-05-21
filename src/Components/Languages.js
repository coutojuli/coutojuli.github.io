import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles.css';

const Languages = () => {
  
  return(
    <div id="skills">
     <h1 className="title">Skills</h1>
     <Grid container spacing={2}>
       <Grid xs={3}>
        <div className="languages-container">
          <div className="languages-header">
              <h1>Languages</h1>
            </div>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>PHP</li>
              <li>XML</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
          </div>
       </Grid>
       <Grid xs={3}>
       <div className="languages-container">
          <div className="languages-header">
            <h1>Database</h1>
          </div>
          <ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Oracle</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>PL/SQL</li>
          </ul>
          </div>
       </Grid>
       <Grid xs={3}>
       <div className="languages-container">
          <div className="languages-header">
          <h1>Knowledge</h1>
          </div>
          <ul>
            <li>GitHub</li>
            <li>Zurb Foundation</li>
            <li>Bootstrap</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>RestAPI</li>
          </ul>
          </div>
       </Grid>
       <Grid xs={3}>
       <div className="languages-container">
          <div className="languages-header">
          <h1>Software</h1>
          </div>
          <ul>
            <li>NetBeans</li>
            <li>Eclipse</li>
            <li>Visual Studio</li>
            <li>SSMS</li>
            <li>VSCode</li>
            <li>Neo4j</li>
          </ul>
          </div>
       </Grid>
     </Grid>
      
    </div>
  );
}

export default Languages;