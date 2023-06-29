import './style.css';
import file from '../../assets/file.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import curriculo from '../../assets/curriculo.pdf'

export function Header() {

  const redirectSocialNetwork = (link) => {
    window.open(link, "_blank");
  }

  return (
    <header>
      <div id='header-div-name-icons'>
        <span id='header-name'>OI &#128075; EU SOU NATHAN</span>
        <div id='header-div-icons'>
          <img onClick={e => redirectSocialNetwork("https://github.com/NathanMarques2001")} src={github} alt="github icon" className='header-img' />
          <img onClick={e => redirectSocialNetwork("https://www.linkedin.com/in/nathan-marques-1a7818244/")} src={linkedin} alt="linkedin icon" className='header-img' />
          <a href={curriculo} download="Currículo-Nathan.pdf">
            <img src={file} alt="file icon" className='header-img' />
          </a>
        </div>
      </div>
      <p id='header-fullstack'>FULL STACK DEVELOPER</p>
      <div id='header-div-about-me'>
        <p id='header-about-me'>&nbsp;TENHO 21 ANOS SOU DESENVOLVEDOR FULL STACK COM POUCO MAIS DE 6 MESES DE EXPERIÊNCIA TRABALHANDO COMO FREELANCER E ATUANDO NA ÁREA.</p>
      </div>
    </header>
  )
}