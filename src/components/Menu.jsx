import React from 'react';
import styles from "./Menu.module.css"
function Pedido({elemento, callback, id}){

    return (
        <button  className={styles.bttn} onClick={callback} id={id}><p key={"01"}>{elemento.item}</p><p key={"02"}>S/.{elemento.price}</p></button>
        )
}

export function Menu ({array, callback, quantity}) {
    return (
        <div className={styles.menu}>
           {array.map((elemento) => {
              return  <Pedido key={elemento.id} id={elemento.id} elemento={elemento} callback={callback}/>
           })} 
        </div>
    );
}

