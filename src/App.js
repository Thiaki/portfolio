import React from 'react';

import './styles/main.sass';
import Header from './components/Header';
import MainBanner from 'components/MainBanner';
import About from './components/About';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Skills from './components/Skills';
import Trainings from './components/Trainings';

function App() {

  return(
    <div className="App">
      <Header />
      <MainBanner />
      <About />
      <Skills />
      <Trainings />
      <Courses />
      <Experience />
    </div>
  )
}

export default App;
