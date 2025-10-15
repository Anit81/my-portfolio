import { HeaderComponent } from './components/header';
import { HomeComponent } from './components/home';
import {  AboutComponent } from './components/about';
import { ProjectComponent } from './components/project';
import {SkillComponent} from './components/skill';
import { ContactComponent } from './components/contact';


import './App.css'

function App() {
  
  return (
    <>
    <HeaderComponent />
     <HomeComponent />
     <AboutComponent />
     <SkillComponent />
     <ProjectComponent />
     <ContactComponent />
    </>
  );
}

export default App

