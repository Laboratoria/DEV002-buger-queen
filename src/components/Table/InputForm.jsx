// import { useState } from "react";

export function InputForm({ id, placeholder, value, handleInputChange }) {
  // const[valor,setValor]=useState(value)
  // function handleInputChange(e) {
  //             setValor(e.target.value);
  // }

  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      style={{
        maxWidth: "45%",
        flexGrow: 1,
        padding: "10px 5px",
      }}
    />
  );
}
