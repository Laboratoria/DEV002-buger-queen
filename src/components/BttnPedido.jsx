import { useState } from "react"
import styles from "./BttnPedido.module.css"

export function BttnPedido({item,price, quantity, id, onDelete}){
    const [cantidad, setCantidad]=useState(1);
    function Mas(e){
        e.preventDefault();
       
        setCantidad(cantidad+1)
    }
    function Menos(e){
        e.preventDefault();
        if(cantidad===1){
        onDelete(id)
        } else if(cantidad>1){
            setCantidad(cantidad-1)
        }

    }
    return (
        <div className={styles.bttn} id={id}>
            <p className="text">{item}</p>

            <div className={styles.signos}>
                <button className={styles.signo} onClick={Mas}>+</button>
                <p className="text">{cantidad}</p>
                <button className={styles.signo} onClick={Menos}>-</button>
            </div>

            <p className="text">{price}</p>

            <div className={styles.icono} onClick={(e)=>{onDelete(id)}}></div>
        </div>
    )
}