import PropTypes from 'prop-types';
import { useContext } from 'react';
import { simpleData } from '../CardContext';

function Card ({ id, pokemonName, imageUrl, handleClick }) {
    const yeaYea = useContext(simpleData);

    return (
        <div key={id} className='card' onClick={() => handleClick(id)} data-testid='card'>
            <div>{yeaYea.days}</div>
            <div>
                <img src={imageUrl} width='96px' height='96px'></img>
            </div>
            <p>{ pokemonName }</p>
        </div>
    )
}

Card.PropTypes = {
    id: PropTypes.number,
    pokemonName: PropTypes.string,
    imageUrl: PropTypes.string
}

Card.defaultProps = {
    pokemonName: 'Unknown',
}

export { Card }