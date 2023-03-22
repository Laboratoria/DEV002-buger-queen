import React from 'react';
import { getDataDeMesas } from '../../app/firestore';
import styles from "./Menu.module.css"
// Para Mesas
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

// Para cocina


function ElementoCocina({callback, numero}){
    return(
        <button className={styles.bttn} onClick={callback}><p key={"01"}>Pedido</p><p key={"02"}>{numero}</p></button>
    )
}
export function ListaCocina({array, callback}){
    return(
        <div className={styles.menu}>
            {
                array.map((element, i)=>{
                    return(
                        <ElementoCocina key={i} numero={element.pedido} callback={callback}/>
                    )
                })
            }
        </div>
    )
}
