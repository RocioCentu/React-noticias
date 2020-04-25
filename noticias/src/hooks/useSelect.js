import React,{useState} from 'react';

const useSelect = (stateInicial,opciones) => {
     const [state,guardarState]=useState(stateInicial);

     const SelectNoticias=()=>(
        <select
        className='browser-default'
        //para que el select tenga como valor el state
        value={state}
        onChange={e=> (guardarState(e.target.value)) }>
            
            {opciones.map(opcion=>(
            <option key={opcion.value} value={opcion.value}> {opcion.label}</option>
            ))}
        </select>
     );
     
    return [state,SelectNoticias,guardarState]
}
 
export default useSelect;