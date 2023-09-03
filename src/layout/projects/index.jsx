import './style.css'
import { Card } from '../../components/card';

export function Projects({ portfolio, images }) {
  return portfolio.map((project, index) => (
    <Card
      img={images[index].url}
      imgAlt={images[index].title}
      index={index}
      title={project.title}
      description={project.description}
      link={project.link}
    />
  ));
}
