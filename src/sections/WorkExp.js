import XPCard from '../components/XPCard.js';

export default function WorkExp() {
  return (
    <div className="workExp" id="experience">
      <h2 className="title">Work Experience</h2>
      <div className="">
        <XPCard employer={"Epic Systems"} description={"Interning in Madison this coming summer! I'm excited to see what I'll accomplish!"} url={"https://www.epic.com/software"} role={"Software Development Intern"} duration={"May 2026 - August 2026"} pic={"EpicPic.jpeg"}/>
        <XPCard employer={"Katara AI"} description={"Build AI agent frameworks to rapidly develop and deploy text classifiers"} url={"https://www.katara.ai/"} role={"Software Engineering Intern"} duration={"May 2025 - August 2025"} pic={"KataraPic.png"}/>
        <XPCard employer={"George Washington University"} description={"Conduct literature reviews on brain-computer interface applications in sleep medicine and gaming"} url={"https://engineering.gwu.edu/xiaodong-qu"} role={"Research Assistant"} duration={"October 2024 - Present"} pic={"GWITPic.png"}/>
        <XPCard employer={"George Washington University"} description={"Assist hundreds of users weekly with university software"} url={"https://it.gwu.edu/"} role={"Student Tech Sup Asst I"} duration={"October 2024 - Present"} pic={"GWITPic.png"}/>
      </div>
    </div>
  );
}