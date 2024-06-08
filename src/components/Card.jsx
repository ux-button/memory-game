function Card ({ id, pokemonName, imageUrl, handleClick }) {
    return (
        <div key={id} className='card' onClick={() => handleClick(id)}>
            <div>
                <img src={imageUrl}></img>
            </div>
            <p>{ pokemonName }</p>
        </div>
    )
}

export { Card }