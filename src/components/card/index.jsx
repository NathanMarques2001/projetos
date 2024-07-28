import './style.css';
import * as myFunctions from '../../../utils/functions';
import { Link } from 'react-router-dom';

export function Card({ img, imgAlt, index, title, description, link }) {
  const redirect = () => myFunctions.redirect(link);

  const backgroundColor = index % 2 === 0 ? 'var(--background)' : 'var(--secondary-background)';

  return (
    <div id='cardContainer' style={{ background: backgroundColor }}>
      <img src={img} alt={imgAlt} id='cardImage' />
      <div id='cardContent'>
        <p className='cardText' id='cardTitle'>{title}</p>
        <p className='cardText' id='cardDescription'>{description}</p>
        <button id='cardButton'><Link to={link}>Clique aqui para acessar</Link></button>
      </div>
    </div>
  );
}
