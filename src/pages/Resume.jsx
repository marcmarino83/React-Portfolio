import './Resume.css';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p><a href="/path/to/your-resume.pdf" download>Download My Resume</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
