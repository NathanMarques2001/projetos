import './style.css';

function AboutMeSection({ aboutMeTitle, aboutMeDescription }) {
  return (
    <section className='bodySection'>
      <h1 className='sectionTitle'>{aboutMeTitle}</h1>
      <p className='sectionDescription'>{aboutMeDescription}</p>
    </section>
  );
}

function TechnologiesSection({ technologiesTitle, technologiesDescription, imgTechnologies }) {
  return (
    <section className='bodySection'>
      <h1 className='sectionTitle'>{technologiesTitle}</h1>
      <p className='sectionDescription'>{technologiesDescription}</p>
      <img id='imgTechsSection' src={imgTechnologies} alt="PHP, JavaScript, ReactJS, TypeScript, Java, Linux" />
    </section>
  );
}

function ProjectsSection({ projectsTitle, projectsDescription }) {
  return (
    <section className='bodySection' id='sectionProjects'>
      <h1 className='sectionTitle'>{projectsTitle}</h1>
      <p className='sectionDescription'>{projectsDescription}</p>
    </section>
  );
}

export function Body(props) {
  return (
    <main id='mainContainerBody'>
      <AboutMeSection {...props} />
      <TechnologiesSection {...props} />
      <ProjectsSection {...props} />
    </main>
  );
}
