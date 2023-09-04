import './style.css';
import * as myFunctions from '../../../utils/functions';

function NameIconsSection({ presentation, urlGithub, urlLinkedin, urlCurriculum, imgGithub, imgLinkedin, imgCurriculum }) {

  const redirectSocialNetwork = (link) => myFunctions.redirect(link);

  return (
    <div id="header-div-name-icons">
      <span id="header-name">{presentation}</span>
      <div id="header-div-icons">
        <img
          onClick={() => redirectSocialNetwork(urlGithub)}
          src={imgGithub}
          alt="GitHub icon"
          className="header-img"
        />
        <img
          onClick={() => redirectSocialNetwork(urlLinkedin)}
          src={imgLinkedin}
          alt="LinkedIn icon"
          className="header-img"
        />
        <a href={urlCurriculum} download="Currículo-Nathan.pdf">
          <img src={imgCurriculum} alt="PDF icon" className="header-img" />
        </a>
      </div>
    </div>
  );
}

function FullStackSection({ stack }) {
  return <p id="header-fullstack">{stack}</p>;
}

function AboutMeSection({ experience }) {
  return (
    <div id="header-div-about-me">
      <p id="header-about-me">{experience}</p>
    </div>
  );
}

export function Header(props) {
  return (
    <header>
      <NameIconsSection {...props} />
      <FullStackSection {...props} />
      <AboutMeSection {...props} />
    </header>
  );
}
