import { useNavigate } from "react-router-dom";
import styles from "./OpcionesPerfil.module.css";
export function OpcionesPerfil({ Modal, name }) {
  // function btnSalir(){
  //     logout();
  //     navigate("/")
  // }
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <p> Bienvenid@ {name}! </p>
      <button className={styles.btn} onClick={() => navigate("/Area")}>
        Areas
      </button>
      <button onClick={Modal} className={styles.btn}>
        Salir
      </button>
    </div>
  );
}
