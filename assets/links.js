import imgGithub from "./images/github.svg";
import imgLinkedin from "./images/linkedin.svg";
import imgCurriculum from "./images/file.svg";
import curriculum from "./curriculo.pdf";
import imgTechs from "./images/techs.svg";
import nft from './images/nft.png';
import pokedex from './images/pokedex.png';
import britaldo from './images/britaldo.png';
import habits from './images/habits.png';

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
    nft, britaldo, pokedex, habits
  ]
}