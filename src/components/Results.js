import React, { useContext } from 'react'
import {ResultContext} from "./context"
import AutoComplete from "./AutoComplete"

function Results(){

const context = useContext(ResultContext)

const value = context.value
console.log(value)

return(
<div className="bg-picture">
    <div className="blacLine"></div>
    <div className="blackCircle">
        <div className ="whiteCircle">
        <div className ="whiteCircleBlackBorder"></div>
           
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
                 style={{transform: `rotate(${pokemon.rotate}deg)`}}
                 draggable="true"
                 onDragEnd={context.dropCard}
            >
                    {/* <div className ="x-field"></div> */}
                <div className="invisible-element">
                    <div className="close" onClick={()=> context.passDispatch({type:'DELETE_POKEMON',payload:pokemon }
                    // ,{type:'RETURN_OPTION',payload:value }
                    )
                        }>X
                    </div> 
                </div>
                <img src={pokemon.picPokemon} alt="" />
            </div>
            )) }
    </div>
</div>
);
}

export default Results