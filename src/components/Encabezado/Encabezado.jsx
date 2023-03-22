import styles from "./Encabezado.module.css"
import { useState } from "react"
// import { logout } from "../../app/auth"
// import { useNavigate } from "react-router-dom"
import { OpcionesPerfil } from "./Perfil/OpcionesPerfil"

export function Encabezado({ModalSalir, Subs, Estilos, clickVista }){
    const[user,setUser]=useState('Andrea')
    const[cardSalir,setCardSalir]= useState("")
    // const  Subs=["LISTO"]
    function Salir(){
        console.log('click Salir')
        if(cardSalir==""){
           setCardSalir(<OpcionesPerfil Modal={ModalSalir}/>) 
        } else{
            setCardSalir("")
        }

    }

    return (
        <div className={styles.head}>
            <h1 key={"logo"} className={styles.burger}><span className={styles.logo}></span> BURGER QUEEN</h1>
            {/* <p className={styles.text}>MENU</p>
            <p className={styles.text}>LISTA DE PEDIDOS</p> */}
            {Subs.map((sub,i)=>{
                return(
                    <p className={Estilos[i]} onClick={clickVista} key={i}>{sub}</p>
                )
            })}
            <p key={"perfil"} className={styles.user} onClick={Salir}>{user}<span className={styles.perfil}></span></p>
            {cardSalir}
        </div>
    )
}