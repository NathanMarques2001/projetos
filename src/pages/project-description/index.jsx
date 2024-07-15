import './style.css';
import text from '../../../languages/pt-br.json'
import { links } from '../../../assets/links'
import { Carousel } from '../../components/carousel';

export function ProjectDescription({ projectTitle }) {
  const images = links.projectsImages[projectTitle]?.links;
  const project = text.projects[projectTitle];

  return (
    <div id='projectDescriptionContainer'>
      <div id='projectDescriptionHeader'>
        <div id='projectDescriptionHeaderText'>
          <h1 id='projectDescriptionHeaderTextTitle'>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <img src={links.projectsImages[projectTitle]?.logo} alt={`Logo ${text.projects[projectTitle]?.title}`} id='projectDescriptionBanner' />
      </div>
      <div className='projectDescriptionDiv'>
        <h2>TELAS</h2>
        <p id='projectDescriptionTextDescriptionScreens' className='projectDescriptionTextDescription'>{project.screens}</p>
        <Carousel images={images} />
      </div>
      <div className='projectDescriptionDiv'>
        <h2>TECNOLOGIAS</h2>
        <p className='projectDescriptionTextDescription'>{project.techs}</p>
      </div>
      <div className='projectDescriptionDiv'>
        <h2>INFRAESTRUTURA</h2>
        <p className='projectDescriptionTextDescription'>{project.infrastructure}</p>
      </div>
      <div className='projectDescriptionDiv'>
        <h2>FRONT-END</h2>
        <p className='projectDescriptionTextDescription'>{project.frontend}</p>
      </div>
      <div className='projectDescriptionDiv'>
        <h2>BACK-END</h2>
        <p className='projectDescriptionTextDescription'>{project.backend}</p>
      </div>
      <div className='projectDescriptionDiv'>
        <h2>MAIS INFORMAÇÕES</h2>
        <p className='projectDescriptionTextDescription'>O código-fonte deste projeto está disponível no GitHub. O repositório inclui toda a estrutura do projeto, com documentação simplificada para facilitar a contribuição e manutenção.</p>
        <p className='projectDescriptionTextDescription'>Para mais informações, entre em contato pelo e-mail nathanbrandao1@gmail.com.</p>
      </div>
    </div>
  );
}