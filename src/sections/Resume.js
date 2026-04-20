import { useInView } from "../hooks/useInView";

export default function Resume() {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div className="resume" id="resume">
      <h2 className="title">Resume</h2>
      <div className={`resume-img ${isVisible ? "show" : "hidden"}`} ref={ref}>
        <a
          href="assets/Cole_Garrison_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/resume-preview.png"
            alt="Resume Preview"
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </a>
      </div>
    </div>
  );
}