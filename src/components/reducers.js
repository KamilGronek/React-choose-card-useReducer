export const initialState = {
  pokemonPack : [],
  resultsPokemons :[],
  error: '',
  totalResults: 0
}


export function reducer(prevState,action){
   switch(action.type) {
     case 'FETCH_SUCCESS':
        return{
          pokemonPack:action.payload,
          resultsPokemons :[],
          error: '',
          totalResults: 0
         }
      case 'FETCH_ERROR' :
         return{
          pokemonPack:[],
           resultsPokemons :[],
           error: 'Something went wrong'
         }
      case 'ADD_POKEMON': 
         return{
           ...prevState,
          pokemonPack: prevState.pokemonPack.filter(pokemonPack => pokemonPack.name !== action.payload[0].name),
          resultsPokemons:[...prevState.resultsPokemons,action.payload[0]],
          error: 'Choose value',
          totalResults: prevState.resultsPokemons.length + 1,
          }
      case 'DELETE_POKEMON': 
        return {
          ...prevState,
          pokemonPack: [...prevState.pokemonPack, action.payload],
          resultsPokemons: prevState.resultsPokemons.filter(getPokemon => getPokemon.id !== action.payload.id),
          totalResults: prevState.resultsPokemons.length - 1,
          }
        default:
        return prevState;
     }
   }

