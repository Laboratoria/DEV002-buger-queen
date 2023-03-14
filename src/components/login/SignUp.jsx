import { Link } from 'react-router-dom'
import styles from "./Login.module.css" 

export function SignUp({Crear, IniciaSesion}){
    return(
        <div> 
        <form className={styles.form}>
            <input className={styles.input} placeholder="Correo"/>
            <input className={styles.input} type="password" placeholder="Contraseña"/>
            <Link to="/Menu">
            <button className={styles.btn} onClick={Crear}>Crear Cuenta</button> 
            </Link>
        </form>
        <p className={styles.text}>¿Ya tienes una cuenta? <span className={styles.span} onClick={IniciaSesion}>Inicia Sesión</span></p>
    </div>
    )
}  