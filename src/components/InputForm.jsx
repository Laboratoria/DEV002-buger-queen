import { useState } from "react";

export function InputForm({id, placeholder, value}){
    const[valor,setValor]=useState(value)
    function handleInputChange(e) {
                setValor(e.target.value);
    }

    return(
        <input 
        id={id} 
        type="text" 
        placeholder={placeholder} 
        value={valor}
        onChange={handleInputChange}
        />
    )

}