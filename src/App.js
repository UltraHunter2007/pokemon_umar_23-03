import { useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs"
import MainPage from "./components/pages/MainPage/MainPage"
import Pokemon from "./components/pages/PokemonInfo/Pokemon"

function App() {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme  = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className={`app ${theme}`}>
            <h1>Pokemon Project</h1>
            <button onClick={toggleTheme} className='toggleTheme'>Change theme</button>
            <div className='container'>

                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path={'/about-us'} element={<AboutUs />}/>
                    <Route path={'/pokemon/:name'} element={<Pokemon />}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;