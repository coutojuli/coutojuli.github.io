import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
  separatorDot:{
    width:'10px',
    height:'10px',
    border: '1px solid #f7f5f2',
    backgroundColor:'#dce7e8',
  },
  separatorConector:{
    backgroundColor:'#dce7e8',
    width:'2px',
  },
}));

const Experience = () => {
  const style = useStyles();
  const [experience, setExperience] = useState([
    {
      id: "1",
      experience: "Research Assistant - Junior React Developer",
      from: "Jan 2021",
      to: "Present",
      company: "MHIRJ",
      location: "Toronto, Canada",
      description: ["Worked on the dashboard development using React and REST API using Python and SQL Server.","Responsible for the data analysis, wireframe creation, and component architecture.","Worked on testing, debugging, refactoring existing code and writing project documentation."],
    },
    {
      id: "2",
      experience: "Team Leader",
      from: "Mar 2018",
      to: "Present",
      company: "Hu-A-Kam Enterprises Inc",
      location: "Toronto, Canada",
      description: ["Responsible for training employees, handling complaints, identifying customer needs, providing solutions, and alternatives to achieve customer satisfaction.","Assisted in managing service, production areas, labor transfers, payroll forms, station observation verifications, positioning plans, and other administrative duties."],
    },
    {
      id: "3",
      experience: "Civil Engineering Intern",
      from: "May 2016",
      to: "Aug 2016",
      company: "Bergamo Enganharia Ltda",
      location: "Rio de Janeiro, Brasil",
      description: ["Developed project blueprints using AutoCAD.","Estimated construction costs of prospective projects."],
    },
    {
      id: "4",
      experience: "Summer Research Intern",
      from: "May 2015",
      to: "Sep 2015",
      company: "University of Toronto",
      location: "Toronto, Canada",
      description: ["Carried out strength/consolidation/bulk property tests, triaxial, and direct shear tests.","Calibrated equipment and transducers to further application on Dasylab.","Prepared cemented materials for testing and research reports."],
    },
    {
      id: "5",
      experience: "Quality Control Technician",
      from: "May 2013",
      to: "July 2014",
      company: "Grupo Santa Isabel",
      location: "Rio de Janeiro, Brasil",
      description: ["Responsible for inspections, monitoring, reports, quality control, budgets, schedules, and payments.","Responsible for training contractors and company employees.","Participated in the building Internal Commission for Accident Prevention."],
    },
    {
      id: "6",
      experience: "Student Ambassador",
      from: "Jan 2015",
      to: "Dec 2015",
      company: "University of Toronto",
      location: "Toronto, Canada",
      description: ["Aided student to fullfill their academic experience.","Developed guides to help Science Without Borders students.","Served as support and tuttoring for new-coming students."],
    },
  ]);

  return (
    <div className={style.root} id="experience"> 
        <h1 className="title">Experience</h1>
        <Timeline align="left" className="experience-timeline">
          {Object.values(experience).map((item=>{
              return (
                <TimelineItem>
                  <TimelineContent className="experience-entry">
                    <h3>{item.from} - {item.to}</h3>
                    <p>{item.experience}, {item.company}</p>
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot className={style.separatorDot}/>
                    <TimelineConnector className={style.separatorConector} />
                  </TimelineSeparator>
                  <TimelineOppositeContent>
                    <ul>{item.description.map((i=><li>{i}</li>))}</ul>
                  </TimelineOppositeContent>
                </TimelineItem>
            )}))} 
        </Timeline>
    </div>    
  );
}

export default Experience;