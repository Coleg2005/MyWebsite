import { useInView } from "../hooks/useInView";

export default function WorkExp({ employer, description, url, role, duration, pic }) {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
      
    >
      <div className={`experience-card ${isVisible ? "show" : "hidden"}`} ref={ref}>
        <div className="xp-card-image">
          <img src={`assets/${pic}`} alt="" />
        </div>
        <div className="xp-card-details">
          <div className="card-header">
            <h3 className="company-name">{employer}</h3>
            <span className="duration">{duration}</span>
          </div>
          <p className="role-title">{role}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </a>
  );
}