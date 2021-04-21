import React, {useEffect,useState,useReducer} from 'react';
import {v4 as uuid} from 'uuid'
import axios from 'axios';
import './App.css';
import  {reducer,initialState} from "./components/reducers"
import Results from "./components/Results"
import {ResultProvider,AutoCompleteProvider} from "./components/context"

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   const options = state.fetchPokemons.map(pokemon =>pokemon.name);
    const [value, setValue] = useState(options[0]);

     const [show,setShow] = useState(false)

   const picPokemon = state.fetchPokemons
   .filter(picture => picture.name === value)
   .map(pictureImg => pictureImg.imageUrl);
   
   const url = "https://api.pokemontcg.io/v1/cards"

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
    const addValue ={
      id:uuid(),
      picPokemon,
      rotate: Math.floor(Math.random() * 20),
      value:value
    };
    dispatch({type: 'ADD_POKEMON' , payload: addValue})
    dispatch({type: 'OPTION_UPDATE', payload: addValue})
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
    <ResultProvider value={{passDispatch:dispatch,
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




