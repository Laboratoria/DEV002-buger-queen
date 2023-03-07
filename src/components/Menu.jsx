import React from 'react';
import styles from "./Menu.module.css"
function Pedido({elemento, callback}){

    return (
        <button className={styles.bttn} onClick={callback}><p key={"01"}>{elemento.item}</p><p key={"02"}>S/.{elemento.price}</p></button>
        )
}

export function Menu ({array, callback}) {
    return (
        <div>
           {array.map((elemento) => {
              return  <Pedido key={elemento.id} elemento={elemento} callback={callback}/>
           })} 
        </div>
    );
}

