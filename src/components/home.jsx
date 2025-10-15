import './home.css'

export function HomeComponent(){
  return(
    
    <div className="div-content">
      <div className="span-div">
      <span className="greetings">👋 Hello my name is </span>
       <p className="name">Ibesi Faustina</p>

       <p>Frontend Developer | React Enthusiast</p>

      <p className="content">I love creating clean, responsive, and user-friendly web experiences with React.
I’m passionate about turning ideas into real, functional websites that work beautifully on any device.</p>
        <button><a href="#project">View my Work</a></button>
         <button><a href="#contact">Contact me</a></button>
      </div>

  <div>
   <img src="src/assets/1760065664000.png" />
   </div>
</div>
    
  );
}