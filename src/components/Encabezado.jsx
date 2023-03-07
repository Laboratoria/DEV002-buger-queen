import styles from "./Encabezado.module.css"
import { useState } from "react"

export function Encabezado(){
    const[user,setUser]=useState('Andrea')
    return (
        <div className={styles.head}>
            <h1 className={styles.burger}>BURGER QUEEN</h1>
            <p className={styles.text}>MENU</p>
            <p className={styles.text}>LISTA DE PEDIDOS</p>
            {/* <p className={styles.text}>COCINA</p> */}
            <p className={styles.user}>{user}</p>
        </div>
    )
}