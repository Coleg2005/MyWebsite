import ProjectCard from '../components/ProjectCard.js';

export default function WorkExp() {
  return (
    <div className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="project-list">
        <ProjectCard title={"PickUp Sports"} description={"App allowing users to coordinate pickup sports games"} stack={["React", "NodeJS", "TypeScript", "MongoDB"]} github={"https://github.com/Coleg2005/PickUpIOS"} pic={"PickupPic.png"}/>
        <ProjectCard title={"NLP Tweet Sentiment Analyzer"} description={"Analyze the sentiment from over 1M covid tweets"} stack={["CoreNLP", "Java"]} github={"https://github.com/Coleg2005/COVID-Sentiment-Analyzer"} pic={"Sentiment-Analysis-2.png"}/>
        <ProjectCard title={"AI MoneyMaker"} description={"Simple machine learning project to predict cyclical stocks"} stack={["Python", "Keras", "Sci-kit Learn"]} github={"https://github.com/Coleg2005/AiMoneyMaker"} pic={"AIpic.png"}/>
      </div>
    </div>
  );
}