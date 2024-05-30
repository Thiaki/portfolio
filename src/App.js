import React from 'react';

import './styles/main.sass';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Courses from './components/courses';
import Skills from './components/skills';
import Trainings from './components/trainings';

function App() {

  return(
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Trainings />
      <Courses />
      <Experience />
    </div>
  )
}

export default App;
