// import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import IconButton from "../../components/buttons/IconButton";

export function SignIn({ Ingresar, Registrate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  function handleInputChangeE(e) {
    setEmail(e.target.value);
  }
  function handleInputChangeC(e) {
    setContraseña(e.target.value);
  }

  return (
    <div>
      <form className={styles.form}>
        {/* <input className={styles.input} placeholder="Nombre"/> */}
        <div className={styles.div_input}>
          <input
            className={styles.input}
            placeholder="Correo"
            value={email}
            onChange={handleInputChangeE}
          />
        </div>
        <div
          className={styles.div_input}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={contraseña}
            onChange={handleInputChangeC}
          />
          <IconButton onclick={() => setShowPassword((prev) => !prev)}>
            <i
              style={{
                fontSize: "20px",
              }}
              className={
                showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
              }
            />
          </IconButton>
        </div>
        {/* <Link to="/Area"> */}
        <button
          className={styles.btn}
          onClick={(e) => Ingresar(e, email, contraseña)}
        >
          Ingresar
        </button>
        {/* </Link> */}
      </form>
      {/* <p className={styles.text}>¿No tienes una cuenta? <span className={styles.span} onClick={Registrate}>Regístrate</span></p> */}
    </div>
  );
}
