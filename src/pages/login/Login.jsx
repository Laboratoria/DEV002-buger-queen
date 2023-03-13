import "./login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { loginUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  //const [credential, setCredential] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    console.log(email);
    const password = e.target.password.value;
    console.log(password);

    try {
      const user = await loginUser(email, password);
      console.log(user);
      navigate("/attention");
      // setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
      if (error.code === "auth/invalid-email") {
        messageEmail.innerHTML = "correo inválido";
      } else if (error.code === "auth/user-not-found") {
        messageEmail.innerHTML = "correo no registrado";
      } else if (error.code === "auth/wrong-password") {
        messagePassword.innerHTML = "contraseña incorrecta";
      } else {
        alert("algo salio mal");
      }
    }
  }

  function handleChange() {
    messageEmail.innerHTML = "";
    messagePassword.innerHTML = "";
  }

  return (
    <>
      <div className="containerLogin">
        <img src={logo} alt="logo food express" className="logoLogin" />
        <p>Por favor llena los siguientes datos para iniciar sesión</p>
        <form action="" className="formLogin" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ana@gmail.com"
            id="email"
            onKeyUp={handleChange}
          />
          <span id="messageEmail" className="message"></span>
          <input
            type="password"
            placeholder="contraseña"
            id="password"
            onKeyUp={handleChange}
          />
          <span id="messagePassword" className="message"></span>
          <button className="button-login">INICIA SESIÓN</button>
        </form>
      </div>
    </>
  );
}

export default Login;
