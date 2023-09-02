import './style.css';

function AboutMeSection({ aboutMeTitle, aboutMeDescription }) {
  return (
    <section>
      <h1>{aboutMeTitle}</h1>
      <p>{aboutMeDescription}</p>
    </section>
  );
}

function TechnologiesSection({ technologiesTitle, technologiesDescription, imgTechnologies }) {
  return (
    <section>
      <h1>{technologiesTitle}</h1>
      <p>{technologiesDescription}</p>
      <img src={imgTechnologies} alt="PHP, JavaScript, ReactJS, TypeScript, Java, Linux" />
    </section>
  );
}

function ProjectsSection({ projectsTitle, projectsDescription }) {
  return (
    <section>
      <h1>{projectsTitle}</h1>
      <p>{projectsDescription}</p>
    </section>
  );
}

export function Body(props) {
  return (
    <main>
      <AboutMeSection {...props} />
      <TechnologiesSection {...props} />
      <ProjectsSection {...props} />
    </main>
  );
}
