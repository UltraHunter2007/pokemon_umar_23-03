import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Pagination, PokemonCard} from "../../../components";
import {fetchPokemons} from "../../../api/getPokemons";
import classes from "./MainPage.module.css"

const MainPage = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ offset, setOffset ] = useState(1)
    const [ page, setPage ] = useState(1)
    const [ count, setCount ] = useState(1)
    const limit = 12;

    useEffect(() => {
        fetchPokemons({ limit, offset }).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [ offset ])

    const handleNext = () => {
        setOffset(prev => prev + limit)
        setPage(prev => prev + 1)
    }

    const handlePrev = () => {
        setOffset(prev => prev - limit)
        setPage(prev => prev - 1)
    }

    return (
        <div className={classes.mainPageContainer}>
            <h1 className={classes.mainPageTitle}>Umar</h1>
            <div className={classes.mainPageButtons}>
                <Link to='/about-us' className={classes.mainPageLink}>
                    <button className={classes.mainPageButton}>To About Us</button>
                </Link>
            </div>
            <Pagination
                page={page}
                count={count}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
            <div className={classes.pokemonList}>
                {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </div>
        </div>
    );

};

export default MainPage;