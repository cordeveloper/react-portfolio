import React from 'react';
import Landing from '../Pages/Landing';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import Contact from '../Pages/Contact';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} /> 
      <Route path="/about-me" component={About} /> 
      <Route path="/projects" component={Projects} /> 
      <Route path="/resume" component={Resume} /> 
      <Route path="/contact" component={Contact} /> 
    </Switch>
  )
}

export default Main;