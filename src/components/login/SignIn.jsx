import { Link } from 'react-router-dom'
import styles from "./Login.module.css" 

export function SignIn({Ingresar, Registrate}){
    return (
        <div> 
        <form className={styles.form}>
            {/* <input className={styles.input} placeholder="Nombre"/> */}
            <input className={styles.input} placeholder="Correo"/>
            <input className={styles.input} type="password" placeholder="Contraseña"/>
            <Link to="/Area">
            <button className={styles.btn} onClick={Ingresar}>Ingresar</button>
            </Link>
        </form>
        <p className={styles.text}>¿No tienes una cuenta? <span className={styles.span} onClick={Registrate}>Regístrate</span></p>
    </div>
    )
}