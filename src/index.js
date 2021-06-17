import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Experience from './Components/Experience';
import Education from './Components/Education';
import About from './Components/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills';
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
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

