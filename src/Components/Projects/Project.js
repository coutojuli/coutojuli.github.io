import React from 'react';
import '../../styles.css';
import ProjectModal from './ProjectModal';

const Project = (props) => {
  return(
    <div className={props.project.projectClass}>
        <h1 className="project-h1">{props.project.title}</h1>
        <div className="project-text">
          <h2>Languages</h2>
          <ul>
            {props.project.languages.map(item=>{
              return <li>{item}</li>
            })}
          </ul>
          <ProjectModal 
            project = {props.project}
          />
      </div>
    </div>   
  );
}

export default Project;