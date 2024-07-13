import './style.css';
import text from '../../../languages/pt-br.json'
import { links } from '../../../assets/links'
import { Carousel } from '../../components/carousel';

export function ProjectDescription({ projectTitle }) {
  const images = links.projectsImages[projectTitle]?.links;
  const project = text.projects[projectTitle];

  return (
    <div>
      <div>
        <h1>{projectTitle}</h1>
        <p>{project.description}</p>
        <img src="" alt="" />
      </div>
      <div>
        <h2>TELAS</h2>
        <p>{project.screens}</p>
        <Carousel images={images} />
      </div>
      <div>
        <h2>TECNOLOGIAS</h2>
        <p>{project.techs}</p>
      </div>
      <div>
        <h2>INFRAESTRUTURA</h2>
        <p>{project.infrastructure}</p>
        <img src="" alt="" />
      </div>
      <div>
        <h2>FRONT-END</h2>
        <p>{project.frontend}</p>
        <img src="" alt="" />
      </div>
      <div>
        <h2>BACK-END</h2>
        <p>{project.backend}</p>
        <img src="" alt="" />
      </div>
      <div>
        <h2>MAIS INFORMAÇÕES</h2>
        <p></p>
      </div>
    </div>
  );
}