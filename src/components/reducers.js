export const initialState = {
    fetchPokemons : [],
    resultsPokemons :[],
    error: '',
    totalResults: 0
  }
  
  
  export function reducer(prevState,action){
     switch(action.type) {
       case 'FETCH_SUCCESS':
           return{
          fetchPokemons:action.payload,
           resultsPokemons :[],
           error: '',
           totalResults: 0
         }
        case 'FETCH_ERROR' :
           return{
            fetchPokemons:[],
             resultsPokemons :[],
             error: 'Something went wrong'
           }
        case 'ADD_POKEMON': {
           const arrayPokemons= {
             ...prevState,
            resultsPokemons:[...prevState.resultsPokemons,action.payload],
            error: 'Choose value',
            totalResults: prevState.resultsPokemons.length + 1
          }
          console.log('After ADD_POKEMON: ', arrayPokemons);
          return arrayPokemons;
        }
       case 'DELETE_POKEMON': {
        const arrayPokemons= {
            ...prevState,
            resultsPokemons: prevState.resultsPokemons.filter(getPokemon => getPokemon.id !== action.payload.id),
            totalResults: prevState.resultsPokemons.length - 1,
        }
        console.log('After DELETE_POKEMON: ', arrayPokemons);
        return arrayPokemons
       }
       case  'OPTION_UPDATE' :{
        const optionUpdate = {
          ...prevState,
            fetchPokemons: prevState.fetchPokemons.filter(fetchPokemons => fetchPokemons.name !== action.payload.value)
        }
        console.log('After OPTION_UPDATE: ', optionUpdate);
        return optionUpdate
       }
      //  case 'RETURN_OPTION':{
      //   const optionUpdate = {
      //     ...prevState,
      //      fetchPokemons: [...prevState.fetchPokemons, action.payload.value]
      //   }
      //   console.log('After RETURN_OPTION', optionUpdate)
      //   return optionUpdate
      //  }
  
           default:
             return prevState;
       }
     }