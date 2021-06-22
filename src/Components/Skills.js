import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles.css';

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="title">Skills</h1>
      <div className="skills-wrapper">
         <div className="skills-list">
          <Grid container spacing={2}>
            <Grid item sm={2}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>PHP</li>
                <li>C#</li>
                <li>Java</li>
              </ul>
            </Grid>
            <Grid item sm={6}>
              <ul>
                <li>SQL Server</li>
                <li>Oracle</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>Foundation</li>
                <li>Bootstrap</li>
              </ul>
            </Grid>
          </Grid>
        </div>
        </div>
    </div>
  );
}

export default Skills;