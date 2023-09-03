import './style.css';
import * as myFunctions from '../../../utils/functions';

export function Card({ img, imgAlt, index, title, description, link }) {
  const redirect = () => myFunctions.redirect(link);

  const backgroundColor = index % 2 === 0 ? 'var(--tertiary-background)' : 'var(--secondary-background)';

  return (
    <div id='cardContainer' style={{ background: backgroundColor }}>
      <img src={img} alt={imgAlt} />
      <div id='cardContent'>
        <p className='cardText' id='cardTitle'>{title}</p>
        <p className='cardText' id='cardDescription'>{description}</p>
        <button id='cardButton' onClick={redirect}>Clique aqui para acessar</button>
      </div>
    </div>
  );
}
