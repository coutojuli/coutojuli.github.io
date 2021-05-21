import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Experience from './Components/Experience';
import Education from './Components/Education';
import About from './Components/About';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Skills from './Components/Languages';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={App}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/education" component={Education}></Route>
        <Route path="/experience" component={Experience}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/certifications" component={Certifications}></Route>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

