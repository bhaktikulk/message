import React from 'react';


const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2>Top Skills</h2>
        <p>Enhancing my career by mastering following skills:</p>
      </div>

      <div className="skills-list">
        <div className="skill-item">
          <h3>Java</h3>
          <p>Strong foundation in java language and proper understanding of OOPS concpts.</p>
        </div>
        <div className="skill-item">
          <h3>React</h3>
          <p>Skilled in assessing and managing react commands and working thoroughly.</p>
        </div>
        <div className="skill-item">
          <h3>Angular</h3>
          <p>Proficient in angular services and http requests to manage data in json format.</p>
        </div>
        <div className="skill-item">
          <h3>Backend</h3>
          <p>Building backend technologies and having proficiency in Node js and Express js and proper use of MySQL and MangoDB.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
