// import { Link } from 'react-router-dom'
import { useState } from "react"
import styles from "./Login.module.css" 
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp";


export function Login(){
    
    function Registrate(e){
        e.preventDefault();
        setLog(<SignUp IniciaSesion={Inicia}/>)

    }
    function Inicia(e){
        e.preventDefault();
        setLog(<SignIn Registrate={Registrate}/>)
    }
    const [log, setLog]=useState(<SignIn Registrate={Registrate}/>)



    return (
        <div  className={styles.fondo}>
            <div className={styles.logo}> </div>
            <p className={styles.tittle}>BURGER QUEEN</p>
            {log}
            
        </div>
    )
}
