import './style.css'

export function Projects({ portfolio, images }) {
  return (
    <>
      {portfolio.map((project, index) => (
        <div key={index}>
          <p>{project.title}</p>
          <p>{project.description}</p>
          <img src={images[index]} alt="" />
          <div>
            {project.technologies.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
