import React, { useContext } from 'react'
import {ResultContext} from "./context"
import AutoComplete from "./AutoComplete"

function Results(){

const context = useContext(ResultContext);

return(
<div className="bg">
    <div className="bg_blacLine"></div>
    <div className="bg_blackCircle">
        <div className ="bg_whiteCircle">
          <div className ="bg_whiteCircleBlackBorder"></div>
        </div>
    </div>
    <div className="app" onDragOver={context.dragOver}>
        <h2>Pokemon cards({context.totalResults})</h2>
        <form 
            className="input-form"
            onSubmit= {context.addPokemon} 
            >
            <AutoComplete/>
            <button  style={{width: 200}}>Add</button>
        </form>
        {context.resultsPokemons.map(pokemon => (
            <div key={pokemon.id}  className="pokemonCard"
                 style={{transform: `rotate(${pokemon.number}deg)`}}
                 draggable="true"
                 onDragEnd={context.dropCard}
            >
                <div className="invisible-element">
                    <div className="close" onClick={()=> context.dispatch({type:'DELETE_POKEMON',payload:pokemon}
                    )}>X
                    </div> 
                </div>
                <img src={pokemon.imageUrl} alt="" />
            </div>
            )) }
    </div>
</div>
);
}

export default Results