import React, {useEffect,useState,useReducer} from 'react';
import axios from 'axios';
import './App.css';
import  {reducer,initialState} from "./components/reducers"
import Results from "./components/Results"
import {ResultProvider,AutoCompleteProvider} from "./components/context"

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   const options = state.pokemonPack.map(pokemon =>pokemon.name);
   const [value, setValue] = useState(options[0]);
   const url = "https://api.pokemontcg.io/v1/cards"

   const pokemonValue = state.pokemonPack
  .filter(picture => picture.name === value);

  useEffect(() => {
    axios.get(url)
    .then(response =>{
      dispatch({type:'FETCH_SUCCESS', payload: response.data["cards"] })
    })
    .catch(error => {
      dispatch({type: 'FETCH_ERROR'})
        console.log("error")
      })
  }, []);

  const addPokemon = (e) =>{
    e.preventDefault();
    if(! value){
       return 
    }
    dispatch({type: 'ADD_POKEMON' , payload: pokemonValue})
    setValue();
  }

  const dropCard = (e) =>{
    e.target.style.left = `${e.pageX - 50}px`;
    e.target.style.top =  `${e.pageY - 50}px`;
  }
  const dragOver = (e) =>{
      e.stopPropagation();
      e.preventDefault();
  }

 return (
    <ResultProvider value={{
      dispatch,
      addPokemon,
      dropCard,
      dragOver,
      totalResults:state.totalResults,
      resultsPokemons: state.resultsPokemons,
    }}>
    <AutoCompleteProvider value={{
      value,
      options,
      setValue
    }}>
      <Results/>
      </AutoCompleteProvider>  
    </ResultProvider>
  );
}

export default App;

