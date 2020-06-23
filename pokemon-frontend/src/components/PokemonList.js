import React from 'react';
import './PokemonList.css'

const PokemonList = (props) => {
    const {
        fetchStatus,
        pokemonList,
        fetchError
    } = props;

if (fetchStatus ===  'IDLE' || fetchStatus === 'STARTED') {
    return (
        <div className="pokemon-list">
            Loading...
        </div>
    )
}

if (fetchStatus  === 'SUCCEED') {
    return(
        <div className="pokemon-list">
            <pre> 
                {pokemonList.map(pokemon => (
                    <div className="pokemon-list_names"> <h1>{pokemon.name.french}</h1> 
                     <h1>{pokemon.name.japanese}</h1> </div>
                ))}
            </pre>
        </div>
    )
}

return (
    <div className="pokemon-list">
        Sorry, an error occured: 
        <pre>
            {fetchError}
        </pre>
    </div>
    );
};

export default PokemonList;