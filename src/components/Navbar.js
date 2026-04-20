import { useEffect, useState, useRef } from "react";

export default function NavBar() {

  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav className={`navbar ${!isVisible ? "navbar--hidden" : ""}`}>
      <span className="nav-logo">
        Cole's Site
        <img src={`assets/smile_logo_nav.png`} alt="" />
      </span>
      <div className="nav-links">
        <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#experience">Experience</a>
        <a className="nav-link" href="#projects">Projects</a>
        <a className="nav-link" href="#resume">Resume</a>
      </div>
    </nav>
  );
}