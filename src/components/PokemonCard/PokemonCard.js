import React, {useEffect, useState} from 'react';
import {getPokemonByName} from "../../api/getPokemons";
import {Link} from "react-router-dom";
import classes from "./PokemonCard.module.css"

const PokemonCard = ({ pokemon }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState()

    useEffect(() => {
        getPokemonByName(pokemon.name)
            .then((data) => {
                setPokemonInfo(data)
            })
    }, [ pokemon.name ])

    return (
        <div className={classes.pokemonCard}>
            <Link to={`/pokemon/${pokemon.name}`} className={classes.link}>
                <p>{pokemon.name}</p>
                <img src={pokemonInfo && pokemonInfo.sprites.other.dream_world.front_default} alt=""/>
            </Link>
        </div>
    );
};

export default PokemonCard;