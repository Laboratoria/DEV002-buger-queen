// import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../../Firebase/auth";
import { db, addDoc, collection } from "../../Firebase/firebase";
// import { CollectionUsers } from "../../app/firestore";
import styles from "./Login.module.css" 
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp";


export function Login(){

    const navigate = useNavigate();
    function Registrate(e){
        e.preventDefault();
        setLog(<SignUp IniciaSesion={Inicia}/>)

    }
    function Inicia(e){
        e.preventDefault();
        setLog(<SignIn Registrate={Registrate}/>)
    }
    function BtnSignIn(e, email, contraseña){
        console.log('signin')
        console.log(email)
        e.preventDefault();

        let user= "";
        let displayName="";
        let uid="";
        let emailUser="";

        login(email, contraseña)
        .then((credential) => {
            user = credential.user;
            displayName = (user.displayName);
            uid = (user.uid);
            emailUser = (user.email);
            console.log(credential);
            console.log(displayName, emailUser, uid);
            navigate("/Area");
            // addDoc((collection(db,"prueba1")),{name:"andrea", correo:"@gmail.com", contra:1234, result:"se logro"})
            // .then(data=>{console.log(data); console.log("se creo, coleccion")})
            // .catch(err=> {console.log(err); console.log("no se pudo :C")})
            // CollectionUsers('Andre', emailUser, contraseña, uid)

          })
          .catch((error) => {
            console.log(error.message);
            console.log(error.code);
    
            if (error.code === 'auth/weak-password') {
              alert('Tu contraseña es muy débil');
            } else if (error.code === 'auth/invalid-email') {
              alert('Este correo es inválido');
            } else if (error.code === 'auth/internal-error') {
              alert('Probablemente te olvidaste de ingresar tu contraseña');
            } else if (error.code === 'auth/user-not-found') {
              alert('Esta cuenta no está creada');
            } else if (error.code === 'auth/wrong-password') {
              alert('Contraseña incorrecta');
            }
          });
    }
    const [log, setLog]=useState(<SignIn Registrate={Registrate} 

        Ingresar={BtnSignIn}
         />)


         useEffect(() => {

        }, []);
    return (
        <div  className={styles.fondo}>
            <div className={styles.logo}> </div>
            <p className={styles.tittle}>BURGER QUEEN</p>
            {log}
            
        </div>
    )
}
