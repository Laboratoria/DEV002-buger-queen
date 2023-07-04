import styles from "./OpcionesPerfil.module.css"
export function OpcionesPerfil({Modal}){
    // function btnSalir(){
    //     logout();
    //     navigate("/")
    // }

    return(
        <div className={styles.box}>
            {/* <button className={styles.btn}>Perfil</button> */}
            <button onClick={Modal}  className={styles.btn}>Salir</button>
        </div>
    )
}