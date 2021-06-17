import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import '../../styles.css';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Pet By Us",
      languages: ["HTML", "CSS", "JavaScript","jQuery"],
      languagesModal: "This project was developed using HTML, CSS, JavaScript, and jQuery for the front-end.",
      description: "It is a portal with general information about dogs, adoption, and recommendations.",
      goals: "It was developed for helping prospective and current pet owners and for supporting the adoption cause.",
      challenges: "It was my first web development project. It was a challenge to understand the concepts at the time and apply them in a responsive manner. However, I like to include it in my portfolio because we should be proud of every work we do and look at them as an opportunity for improvement.",
      projectClass: "petbyus-project",
      embedId: "um-HJnbS3Rc",
      githubPath: "https://github.com/coutojuli/Petbyus",
      url: "Not Deployed",  
    },
    {
      id: "2",
      title: "Books Online",
      languages: ["ASP.NET", "HTML", "CSS", "SQL Server"],
      languagesModal: "This project was developed using ASP.NET, HTML, CSS for the front-end, C# for the back-end, and SQL Server for the database.",
      description: "This project is a library management system where users can register, login, see book recomendations, search for a book, see the books available, and wishlist a book. Admin is able to execute CRUD actions to manage users, books, recommendations, and statistics.",
      goals: "This project aims to facilitate management CRUD actions, to provide an user-friendly application to the user, and to mimic features to a real library management system.",
      challenges: "It was a challenge to connect the front-end, back-end, and database system in a real ASP.NET project using a mix of regular HTML, CSS, LINQ, and Razor.",
      projectClass: "books-project",
      embedId: "k1WS5DGKdPA",
      githubPath: "https://github.com/coutojuli/BooksOnline",
      url: "Not Deployed",  
    },
    {
      id: "3",
      title: "MHIRJ",
      languages: ["React", "SQL Server", "Python"],
      languagesModal: "This project was developed using React for the front-end, Python for the API, and SQL Server for the database.",
      description: "In this project, I developed reporting tools and analytical graphs using React. Connected the application with REST APIs that were built in Python, and structured databases using SQLServer. I was also able to provide additional features such as download, print, filters, search, and different views.",
      goals: "Convert the existing analysis tool and python code into a web application.",
      challenges: "It was a challenge to understand the aviation terms, create a design that represented what the client desired providing at the same time an user friendly interface and good performance",
      projectClass: "mhirj-project",
      embedId: "",
      githubPath: "This project is on a private repository.",
      url: "It is deployed but it is a restricted server so no one from outside of the client's network can access it.",    
    },
    {
      id: "4",
      title: "CRMS",
      languages: ["HTML", "CSS", "PHP", "MySQL"],
      languagesModal: "This project was developed using PHP for the front-end and MySQL for the database.",
      description: "This project is a car rental management system where the user can see the details of available cars and do reservations. The admin can create, read, update, and delete cars and reservations. Admin can also use the file system to do CRUD opperations. Additional features include search, validation, login, and registration.",
      goals: "This project envisioned to develop a car rental system management application using PHP and a database system. Prospective users would be administrators from car rental system companies that want to be able to do SQL DMLS efficiently using files and php to help then manage their rental company cars.",
      challenges: "It was a challenge to develop the file system using PHP in a specific pattern and to develop the entire design from scratch.",
      projectClass: "crms-project",
      embedId: "ombb8J0QoR4",
      githubPath: "https://github.com/coutojuli/CRMS",
      url: "Not Deployed",  
    },
    {
      id: "5",
      title: "Portfolio",
      languages: ["React", "HTML", "CSS"],
      languagesModal: "This project was developed using React, HTML, and CSS for the front-end",
      description: "This project was developed to show the education, experience, skills, and projects of Juliana Claussen.",
      goals: "This project aims to give whoever visits this website more knowledge about Juliana Claussen's abilities as a web developer.",
      challenges: "The challenge about this project is that when you are developing something for yourself, it always has room for improvement and never seems good enough.",
      projectClass: "portfolio-project",
      embedId: "AElc9k0iPvM",
      githubPath: "https://github.com/coutojuli/portfolio",
      url: "coutojuli.github.io",   
    },
    {
      id: "6",
      title: "RCMS",
      languages: ["React", "Node", "MongoDB"],
      languagesModal: "This project was developed using React for the front-end, Node for the back-end, middleware with auth token, and MongoDB for the database.",
      description: "Project created to simulate a restaurant management system where the user can see the menu, add or remove items from his cart, and order. Admin is able to create, update, remove and edit menu items and inventory items. Additional features include search items and load items in the database using json file. ",
      goals: "The goal for this project was to successfully develop a restaurant application with React connecting with the APIS developed using Node.",
      challenges: "It was a challenge to develop the CRUD APIS with Express. It was also a challenge to make the cart work dinamically in the same page as the menu with all the appropriate calculations.",
      projectClass: "restaurant-project",
      embedId: "aEC4pQW-4eM",
      githubPath: "https://github.com/coutojuli/project-server-mern-deployment",
      url: "Not Deployed",  
    },
    {
      id: "7",
      title: "DB Books",
      languages: ["Web Forms", "SQL Server"],
      languagesModal: "This project was developed using C# and SQL Server.",
      description: "This project is a web forms that allows the user to connect to the database, search, delete, and export the database to a csv file.",
      goals: "The goal was to successfully apply the concepts learned in class and develop a simple windows form application.",
      challenges: "It was a challenge to do the sorted search at the time. It was also a challenge to do the video as the database no longer existed.",
      projectClass: "DBBooks-project",
      embedId: "cQVv7kdYxwU",
      githubPath: "https://github.com/coutojuli/DBBOOKS",
      url: "Not Deployed",  
    },
    {
      id: "8",
      title: "HRMS",
      languages: ["Java","SQL Server"],
      languagesModal: "This project was developed using Eclipse, Java for the application and SQL Server for the database",
      description: "This project used a Java GUI application using Oracle database and files for handling the data and table management. This project provides functionalities such as login screen, employee profile, recruitment, payroll management, and performance.",
      goals: "It was developed to help manage human resources activities, business process and data of an organization.",
      challenges: "It was a challenge to develop a java application with so many functionalities in such a short period of time.",
      projectClass: "hrms-project",
      embedId: "6BkWf_tWc5w",
      githubPath: "https://github.com/coutojuli/HRMS",
      url: "Not Deployed",  
    },
  ]);

  return (
    <div id="projects">
      <h1 className="title">Projects</h1>
          <Grid container spacing={5}>     
              {projects.map(item=>{
                return (
                  <Grid item xs={6} className="project">
                    <Project
                      project = {item}
                    />
                  </Grid>
              )})}                     
        </Grid> 
    </div>
  );
}

export default Projects;