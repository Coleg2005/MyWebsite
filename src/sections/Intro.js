import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Intro() {

  return (
    <div className="intro-container">
      <div className="intro-top">
        <h2 className="intro-title" id="about">Cole Garrison</h2>
        <p className="intro-subtitle">
          Software Engineer | Computer Science at George Washington University '27
        </p>
        <nav className="intro-links">
          <a href="https://github.com/Coleg2005" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" style={{ width: '32px', height: '32px', verticalAlign: 'middle', filter: 'invert(1)'}} />
          </a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/colegarrison1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn Logo" style={{ width: '32px', height: '32px', verticalAlign: 'middle' }} />
          </a>
          &nbsp;|&nbsp;
          <a href="mailto:cole.garrison.005@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} style={{ width: '32px', height: '32px', verticalAlign: 'middle', color: 'inherit', textDecoration: 'none'}}/>
          </a>
        </nav>
      </div>

      <div className="intro-bottom-left">
        <img src={`assets/Me.JPG`} alt="Me in Paris" />
      </div>

      <div className="intro-bottom-right">
        <h2>About Me</h2>
        <span>
          <p>Hello, my name is Cole Garrison and welcome to my website! I am a software engineer and computer science student at George Washington University.</p>
          <p>I'm looking forward to interning at Epic Systems in Madison, Wisconsin this summer as a software development intern!</p>
          <p>I enjoy playing basketball, coding side projects, and playing card games with friends. I'm going to do club baseball next semester and am always up for anything competitive.</p>
        </span>
      </div>

    </div>
  );
}