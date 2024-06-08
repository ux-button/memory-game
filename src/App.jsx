import { useState, useEffect, useRef, useInsertionEffect } from 'react'
import { fetchExtra } from './imageFetch'
import { shuffleDeck } from './shuffleDeck'
import { Card } from './components/Card'
import { NavigationBar } from './components/Navigation'
import './App.css'

export function Game () {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState({points: 0, best: 0});

  const match = useRef([]);
  let counter = useRef(0)

  useEffect(() => {
    async function getExtra (extra, initial) {
      const fetchExtraPokemons = await fetchExtra(extra, initial);
      shuffleDeck(fetchExtraPokemons)
      setPokemons(fetchExtraPokemons);
    }
    getExtra(30, pokemons.length)
  }, [counter.current])

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
        <Card key={pokemon.id} id={pokemon.id} pokemonName={pokemon.name} imageUrl={pokemon.url} handleClick={checkMatch}/>
      )
  })

  return (
    <>
      <div className='navigation-bar'>
        <NavigationBar score={score} />
      </div>
      <div className='card-board'>
        {cardsPile.slice(0, 15)}
      </div>
    </>
  )
}