import { useNavigate } from "react-router-dom";
import { logout } from "../../../Firebase/auth";
import styles from "./ModalSalir.module.css"

export function ModalSalirP({Equis}){

    const navigate= useNavigate()
    function BtnSalir(){
           logout();
           navigate("/")
       }
    return(
        <div className={styles.fondoModal}>
            <div className={styles.Modal}>
                <button onClick={Equis} className={styles.btnX}>X</button>
                <p className={styles.text}>¿Quieres salir de la aplicación?</p>
                
                <button onClick={BtnSalir} className={styles.btn}>Salir</button>
            </div>
        </div>
    )
}