import React from 'react';
import '../styles.css';

const Navbar = () =>{

  return (
    <header className="main-head">
      <div className="wrapper">
        <nav className="navigation">
            <ul>
              <li><img src="logo1.png" alt="juliana logo"></img></li>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#education">Education</a></li>
              <li><a href="/#certifications">Certifications</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#projects">Projects</a></li>
            </ul>
          </nav>   
      </div>
    </header>
  );
}

export default Navbar;