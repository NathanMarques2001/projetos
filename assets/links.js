import imgGithub from "./images/github.svg";
import imgLinkedin from "./images/linkedin.svg";
import imgCurriculum from "./images/file.svg";
import curriculum from "./Curriculo_Nathan.pdf";
import imgTechs from "./images/techs.svg";
import sgc from './images/sgc.png';
import britaldo from './images/britaldo.png';
import movie_match from './images/movie-match.png';
import face_recognition from './images/face-recognition.png';
import frHome from './images/face-recognition/home.png';
import frSignup from './images/face-recognition/signup.png';
import frSignupSuccess from './images/face-recognition/signup-success.png';
import frLogin from './images/face-recognition/login.png';
import frLogged from './images/face-recognition/logged.png';
import mmHome from './images/movie-match/home.png';
import mmSignup from './images/movie-match/signup.png';
import mmLogin from './images/movie-match/login.png';
import mmModal from './images/movie-match/modal.png';
import mmAssessments from './images/movie-match/assessments.png';
import mmList from './images/movie-match/list.png';
import beLogin from './images/britaldo-estoque/login.png';
import beHome from './images/britaldo-estoque/home.png';
import beSignup from './images/britaldo-estoque/signup.png';
import beUsers from './images/britaldo-estoque/users.png';

export const links = {
  github: {
    url: "https://github.com/NathanMarques2001",
    img: imgGithub
  },
  linkedin: {
    url: "https://www.linkedin.com/in/nathan-marques-1a7818244/",
    img: imgLinkedin
  },
  curriculum: {
    url: curriculum,
    img: imgCurriculum
  },
  techs: imgTechs,
  techsImages: [
    {
      url: sgc,
      title: 'Prolinx - CSApp',
    },
    {
      url: movie_match,
      title: 'Movie Match',
    },
    {
      url: britaldo,
      title: 'Britaldo Estoque',
    },
    {
      url: face_recognition,
      title: 'Sistema de Reconhecimento Facial',
    }
  ],
  projectsImages: {
    "csapp": {
      links: []
    },
    "movie-match": {
      links: [
        mmLogin,
        mmSignup,
        mmModal,
        mmHome,
        mmAssessments,
        mmList
      ]
    },
    "britaldo-estoque": {
      links: [
        beLogin,
        beSignup,
        beHome,
        beUsers
      ]
    },
    "sistema-reconhecimento-facial": {
      links: [
        frHome,
        frSignup,
        frSignupSuccess,
        frLogin,
        frLogged
      ]
    }
  }
}