import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPokemonByName } from '../../../api/getPokemons';
import classes from './Pokemon.module.css'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        getPokemonByName(name).then((data) => {
            setPokemon(data);
        });
    }, [name]);

    return (
        <div>
            <Link to='/' className={classes.backLink}>Go back</Link>
            {pokemon ? (
                <div>
                    <h1 className={classes.pokemonName}>{pokemon.name}</h1>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className={classes.pokemonImage}/>
                    <p className={classes.pokemonStat}>Weight: {pokemon.weight} kg</p>
                    <p className={classes.pokemonStat}>Height: {pokemon.height} m</p>
                    <div className={classes.pokemonAbilities}>
                        <h2>Abilities:</h2>
                        <ul>
                            {pokemon.abilities.map((ability) => (
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Pokemon;
