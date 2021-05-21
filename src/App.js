import React,{useEffect} from 'react';
import Navbar from './Components/Navbar';
import Experience from './Components/Experience';
import Education from './Components/Education';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Certifications from './Components/Certifications';
import Languages from './Components/Languages';
import './styles.css';
import {useLocation} from "react-router-dom";
import Blog from "./Components/Blog";

function App() {
  const { pathname, hash } = useLocation();
  console.log(useLocation(), pathname, hash);
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else{
      setTimeout(() => {
        const id = hash.replace('#', '');
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);
        console.log('here');
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }      
  }, [pathname,hash]); // do this on route change

  return (
    <div>
      <Navbar />
        <img className="banner" src="banner2.jpg" alt="website banner"/>
        <div className="wrapper">
          <About/>
          <Education/>
          <Certifications/>
          <Experience/>
          <Languages/>
          <Projects/>                  
          {/* <Blog/> */}
        </div> 
        <Footer/>

    </div>
  );
}

export default App;
