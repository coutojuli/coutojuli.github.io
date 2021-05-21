import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import '../styles.css';

const Projects = () => {
  const [languages,setLanguages] = useState({
    "html":3,
    "css": 4,
    "C#":2,
    "php":1,
    "javascript":3,
    "react":1,
  }
  );
  return (
    <div id="projects">
      <h1 className="title">Projects</h1>
          <Grid container spacing={5}>
          <Grid xs={6} className="project">
          <div className="petbyus-project">
              <h1 className="project-h1">Pet By Us</h1>
              <div className="project-text">
                <h2>Languages</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>JQuery</li>
                </ul>
              </div>
            </div>   
        </Grid>
        <Grid xs={6} className="project">
        <div className="books-project">
            <h1 className="project-h1">Books Online</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>ASP.NET </li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL Server</li>
              </ul>
            </div>
          </div>   
        </Grid>
        <Grid xs={6} className="project">
        <div className="mhirj-project">
            <h1 className="project-h1">MHIRJ</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>React</li>
                <li>SQL Server</li>
                <li>Python</li>
              </ul>
            </div>
          </div>   
        </Grid>
        <Grid xs={6} className="project">
          <div className="crms-project">
            <h1 className="project-h1">CRMS</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>MySql</li>
              </ul>
            </div>
          </div>       
        </Grid> 
        <Grid xs={6} className="project">
        <div className="portfolio-project">
            <h1 className="project-h1">Portfolio</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>   
        </Grid>
        <Grid xs={6} className="project">
          <div className="restaurant-project">
            <h1 className="project-h1">Restaurant</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>       
        </Grid> 
        <Grid xs={6} className="project">
        <div className="hrms-project">
            <h1 className="project-h1">HRMS</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>Java</li>
                <li>SQL Server</li>
              </ul>
            </div>
          </div>   
        </Grid>
        <Grid xs={6} className="project">
          <div className="DBBooks-project">
            <h1 className="project-h1">DB Books</h1>
            <div className="project-text">
              <h2>Languages</h2>
              <ul>
                <li>Web Forms</li>
                <li>SQL Server</li>
              </ul>
            </div>
          </div>       
        </Grid> 
        </Grid> 
    </div>
  );
}

export default Projects;