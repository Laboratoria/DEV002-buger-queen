import React from 'react';
import { getDataDeMesas } from '../../Firebase/firestore';
import styles from "./Menu.module.css"
// Para Mesas
function Pedido({elemento, callback, id}){

    return (
        <button  className={styles.bttn} onClick={callback} id={id}><p>{elemento.item}</p><p>S/.{elemento.price}</p></button>
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
        <button className={styles.bttn} onClick={callback}><p >Pedido</p><p>{numero}</p></button>
    )
}
export function ListaCocina({array, callback}){
    return(
        <div className={styles.menu}>
            {
                array.map((element, i)=>{
                    return(
                        <ElementoCocina key={element.pedido} numero={element.pedido} callback={callback}/>
                    )
                })
            }
        </div>
    )
}
