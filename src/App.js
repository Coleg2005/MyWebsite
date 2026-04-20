import './App.css';
import Navbar from './components/Navbar.js';
import Intro from "./sections/Intro.js";
import WorkExp from './sections/WorkExp.js';
import Projects from './sections/Projects.js';
// import Coursework from './sections/Coursework.js';
import Resume from './sections/Resume.js';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <div className="break"/>
      <WorkExp/>
      <div className="break"/>
      <Projects/>
      <div className="break"/>
      {/* <Coursework/>
      <div className="break"/> */}
      <Resume/>
    </div>
  );
}

export default App;