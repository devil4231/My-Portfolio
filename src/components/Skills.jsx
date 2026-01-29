const skillsData = [
  {
    title: "Programming Languages",
    items: ["C++", "Python"]
  },
  {
    title: "Front-End",
    items: ["ReactJS", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    items: ["NodeJS", "ExpressJS"]
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Postman", "JIRA", "VS Code"]
  },
  {
    title: "Additional Skills",
    items: ["Testing", "DSA", "Problem Solving", "Critical Thinking"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <p className="skill-heading">{skill.title}</p>
            <div className="skill-items">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
