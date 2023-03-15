import { useState } from "react"
import styles from "./BttnPedido.module.css"

export function BttnPedido({item,price, quantity, id, onDelete, functionMas, functionMenos}){
    const [cantidad, setCantidad]=useState(1);
    const [precio, setPrecio]=useState(Number(price))
    function Mas(e){
        e.preventDefault();
        let newCantidad=cantidad+1
        let numero=Number(price)
        let newPrice=precio+Number(price)
        setCantidad(newCantidad)
        
        setPrecio(newPrice)
        functionMas(e, newCantidad, newPrice, numero )
    }
    function Menos(e){
        e.preventDefault();
        if(cantidad===1){
        onDelete(id)
        } else if(cantidad>1){
            let newCantidad= cantidad-1
            let numero=Number(price)
            let newPrice=precio-Number(price)
            setCantidad(newCantidad)
            setPrecio(newPrice)
            functionMenos(numero)
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

            <p className="text">S/.{precio}</p>

            <div className={styles.icono} onClick={(e)=>{onDelete(id)}}></div>
        </div>
    )
}