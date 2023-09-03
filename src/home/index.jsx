import './style.css'
import { Header } from '../layout/header'
import { Body } from '../layout/body'
import { Projects } from '../layout/projects'
import text from '../../languages/pt-br.json'
import { links } from '../../assets/links'


export function Home() {

  const { presentation, stack, experience } = text.header;
  const { github, linkedin, curriculum, techs, techsImages } = links;
  const { aboutMe, technologies, projects } = text.body;
  const { portfolio } = text;

  return (
    <>
      <Header
        presentation={presentation}
        stack={stack}
        experience={experience}
        urlGithub={github.url}
        urlLinkedin={linkedin.url}
        urlCurriculum={curriculum.url}
        imgGithub={github.img}
        imgLinkedin={linkedin.img}
        imgCurriculum={curriculum.img} />

      <Body
        aboutMeTitle={aboutMe.title}
        aboutMeDescription={aboutMe.descripion}
        technologiesTitle={technologies.title}
        technologiesDescription={technologies.description}
        imgTechnologies={techs}
        projectsTitle={projects.title}
        projectsDescription={projects.descripion} />

      <Projects
        portfolio={portfolio}
        images={techsImages} />
    </>
  )
}
