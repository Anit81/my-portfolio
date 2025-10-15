import './skill.css'

export function SkillComponent(){
  return(
    <>
      <div className="skill-div">
<h2 id="skill">My Skills</h2>

<button className="html">HTML</button>
<button className="css">CSS</button>
<button className="js">JS</button>
<button className="react">React</button>
<button className="vite">Vite</button>
</div>


<p className="version">Version Control and Deployment</p>
<div className="div-li">
  <li>Git</li>
<li>GitHub</li>
<li>Netlify</li>
<li>GitHub pages</li>
<li>VITE</li>
</div>

    
    <p className="skill-content">I’m confident working with React to build interactive components, manage state, and connect apps to APIs.</p>
    
    </>
  );
}