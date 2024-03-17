import './App.css';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Courses from './components/courses';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Trainings from './components/trainings';

function App() {

  return(
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Courses />
      <Portfolio />
      <Skills />
      <Trainings />
    </div>
  )
}

export default App;
