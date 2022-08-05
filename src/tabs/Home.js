import '../css/Home.css';

import logo from '../littleAstronaut.png';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import Navigation from './navigation'

function Home() {
  return (
    <div className='home'>
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <div className='center'>
          <h1>I'm Yovish MOONESAMY</h1>
          <p>A student in the Developer in charge of solutions for mobile devices and connected objects. Interested in the conception of software and website, i would like to be formed and increase my knowledge in different areas of coding.</p>
          <hr />
          <ul className='aButton'>
            <li><a className="buttonLinks" href='mailto:yovish.moonesamy@gmail.com' target="__blank" role="button"><SiGmail /></a></li>
            <li><a className="buttonLinks" href='https://fr.linkedin.com/in/yovish-moonesamy-53247b183' target="__blank" role="button"><FaLinkedin /></a></li>
            <li><a className="buttonLinks" href='https://github.com/yoyoking94' target="__blank" role="button"><BsGithub /></a></li>
          </ul>
        </div>
      </header>
      <Navigation />
    </div>
  );
}

export default Home;
