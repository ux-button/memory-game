function Card ({ id, pokemonName, imageUrl, handleClick }) {
    return (
        <div key={id} className='card' onClick={() => handleClick(id)}>
            <div>
                <img src={imageUrl} width='96px' height='96px'></img>
            </div>
            <p>{ pokemonName }</p>
        </div>
    )
}

export { Card }