import React, { useContext } from 'react'
import {AutoCompleteContext} from "./context"
import Autocomplete from '@material-ui/lab/Autocomplete';


 function AutoComplete(){

    const context = useContext(AutoCompleteContext)
    return(
      <Autocomplete
      value={context.value || ""}
      onChange={(event, newValue) => {
        context.setValue(newValue);    
      }}
      id="custom-input-demo"
      options={context.options}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input style={{ width: 192 }} type="text" {...params.inputProps} />
        </div>
      )}
    />
    )
  }

export default AutoComplete
