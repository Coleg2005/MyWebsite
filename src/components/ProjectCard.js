import { useInView } from "../hooks/useInView";

export default function ProjectCard({title, description, stack, github, pic}) {

  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <a href={github} target="_blank" rel="noopener noreferrer" className={`project-card ${isVisible ? "show" : "hidden"}`} ref={ref}>
      <img src={`assets/${pic}`} alt="" />
      <p className="project-title">{title}</p>
      <p className="project-stack">{stack.join(" • ")}</p>
      <p>{description}</p>
    </a>
  );
}

