import './skill.css'

export function SkillComponent(){
  return(
    <>
      <div class="skill-div">
<h2 id="skill">My Skills</h2>

<button class="html">HTML</button>
<button class="css">CSS</button>
<button class="js">JS</button>
<button class="react">React</button>
<button class="vite">Vite</button>
</div>


<p class="version">Version Control and Deployment</p>
<div class="div-li">
  <li>Git</li>
<li>GitHub</li>
<li>Netlify</li>
<li>GitHub pages</li>
<li>VITE</li>
</div>

    
    <p class="skill-content">I’m confident working with React to build interactive components, manage state, and connect apps to APIs.</p>
    
    </>
  );
}