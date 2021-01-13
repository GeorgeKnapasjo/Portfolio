import NavBar from './Layout/NavBar'
import Banner from './Layout/Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import { AboutMeWrapper } from './AboutMe/AboutMe.styled';

function App() {

  const anchorLinkHandler = (section) => {
    document.getElementById(section).scrollIntoView( {
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div>
      <NavBar handleClick={anchorLinkHandler}/>
      <Banner/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
