import React from 'react';

import 'styles/main.sass';
import Header from 'components/Header0';
import MainBanner from 'components/MainBanner';
import About from 'components/About0';
import Experience from 'components/Experience0';
import Courses from 'components/Courses0';
import Skills from 'components/Skills0';
import Trainings from 'components/Trainings0';

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
