import imgGithub from "./images/github.svg";
import imgLinkedin from "./images/linkedin.svg";
import imgCurriculum from "./images/file.svg";
import curriculum from "./Curriculo_Nathan.pdf";
import imgTechs from "./images/techs.svg";
import sgc from './images/sgc.png';
import britaldo from './images/britaldo.png';
import movie_match from './images/movie-match.png';
import face_recognition from './images/face-recognition.png';
import frLogo from './images/face-recognition/logo.png';
import frHome from './images/face-recognition/home.png';
import frSignup from './images/face-recognition/signup.png';
import frSignupSuccess from './images/face-recognition/signup-success.png';
import frLogin from './images/face-recognition/login.png';
import frLogged from './images/face-recognition/logged.png';
import mmLogo from './images/movie-match/logo.png';
import mmHome from './images/movie-match/home.png';
import mmSignup from './images/movie-match/signup.png';
import mmLogin from './images/movie-match/login.png';
import mmModal from './images/movie-match/modal.png';
import mmAssessments from './images/movie-match/assessments.png';
import mmList from './images/movie-match/list.png';
import beLogo from './images/britaldo-estoque/logo.png';
import beLogin from './images/britaldo-estoque/login.png';
import beHome from './images/britaldo-estoque/home.png';
import beSignup from './images/britaldo-estoque/signup.png';
import beUsers from './images/britaldo-estoque/users.png';
import csappLogo from './images/csapp/logo.png';
import csappLogin from './images/csapp/login.png';
import csappContracts from './images/csapp/contracts.png';
import csappFormContract from './images/csapp/form-contract.png';
import csappClients from './images/csapp/clients.png';
import csappFormClient from './images/csapp/form-client.png';
import csappClient from './images/csapp/client.png';
import csappUsers from './images/csapp/users.png';
import csappFormUser from './images/csapp/form-user.png';
import csappSolucoes from './images/csapp/solucoes.png';
import csappFormSolucao from './images/csapp/form-solucao.png';
import csappFornecedores from './images/csapp/fornecedores.png';
import csappFormFornecedor from './images/csapp/form-fornecedor.png';

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
      logo: csappLogo,
      links: [
        csappLogin,
        csappContracts,
        csappFormContract,
        csappClients,
        csappClient,
        csappFormClient,
        csappUsers,
        csappFormUser,
        csappSolucoes,
        csappFormSolucao,
        csappFornecedores,
        csappFormFornecedor
      ]
    },
    "movie-match": {
      logo: mmLogo,
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
      logo: beLogo,
      links: [
        beLogin,
        beSignup,
        beHome,
        beUsers
      ]
    },
    "sistema-reconhecimento-facial": {
      logo: frLogo,
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