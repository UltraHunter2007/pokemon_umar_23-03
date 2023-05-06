import React, {useEffect, useState} from 'react'
import classes from './PokemonCard.module.css'
const PokemonCard = ({ pokemon }) => {
    const [ pokemonData, setPokemonData ] = useState(null)

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(pokemon.url)
            const data = await response.json()
            setPokemonData(data)
        }
        fetchPokemonData()
    }, [pokemon.url])

    return (
        <div className='pokemonCard'>
            <h3>{pokemon.name}</h3>
            {pokemonData && (
                <img
                    src={pokemonData.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                    className={classes.pokemonImage}
                />
            )}
        </div>
    )
}

export default PokemonCard