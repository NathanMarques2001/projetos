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

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function calculateExperience(startYear) {
  const today = new Date();
  return today.getFullYear() - startYear;
}

function AboutMeSection() {
  const age = calculateAge("2001-11-11");
  const experience = calculateExperience(2022);

  return (
    <div id="header-div-about-me">
      <p id="header-about-me">
        TENHO {age} ANOS SOU DESENVOLVEDOR FULL STACK COM POUCO MAIS DE {experience} ANOS DE EXPERIÊNCIA TRABALHANDO COMO FREELANCER E ATUANDO NA ÁREA.
      </p>
    </div>
  );
}

export function Header(props) {
  return (
    <header>
      <NameIconsSection {...props} />
      <FullStackSection {...props} />
      <AboutMeSection />
    </header>
  );
}
