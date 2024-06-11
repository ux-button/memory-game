import { useState, useEffect, useRef, useInsertionEffect } from 'react'
import { fetchExtra } from './imageFetch'
import { shuffleDeck } from './shuffleDeck'
import { Card } from './components/Card'
import { NavigationBar } from './components/Navigation'
import trobber from './assets/trobber.svg'
import './App.css'

export function Game () {
  const [state, setState] = useState('loading');
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState({points: 0, best: 0});

  const match = useRef([]);

  useEffect(() => {
    let ignore = false;

    async function getExtra (extra, initial) {
      const fetchExtraPokemons = await fetchExtra(extra, initial);
      if (!ignore) {
        shuffleDeck(fetchExtraPokemons);
        setPokemons(fetchExtraPokemons);
        setState('ready')
      }
    }
    getExtra(150, pokemons.length)

    return () => {
      ignore = true;
    };
  }, [])

  function checkMatch (id) {
    if (match.current.includes(id)) {
      // Game over state
      match.current = [];
      if (score.points > score.best) {
        setScore({...score, points: 0, best: score.points});
      } else {
        setScore({...score, points: 0});
      }
      shuffleDeck(pokemons);
    } else {
      // Score state
      match.current.push(id);
      setScore({...score, points: score.points + 1});
      shuffleDeck(pokemons);
    }
  }

  const cardsPile = pokemons.map(pokemon => {
      return (
        <Card key={pokemon.id}
          id={pokemon.id}
          pokemonName={pokemon.name}
          imageUrl={pokemon.url}
          handleClick={checkMatch}/>
      )
  })

  if (state === 'loading') {
    return (
      <>
        <div className='nav'>
            <NavigationBar score={score} />
        </div>
        <div className='loading-container'>
          <img src={trobber}></img>
          Loading...
        </div>
      </>
    )
  } else if (state === 'ready') {
    return (
      <>
        <div className='nav'>
          <NavigationBar score={score} />
        </div>
        <div className='card-board'>
          {cardsPile.slice(0, 12)}
        </div>
      </>
    )
  }
}