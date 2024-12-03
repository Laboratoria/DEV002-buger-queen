import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupLog } from '../../Firebase/auth'
import { CollectionUsers } from '../../Firebase/firestore'
import styles from "./Login.module.css" 

export function SignUp({Crear, IniciaSesion}){
    const navigate= useNavigate()
    const[nombre, setNombre]= useState("")
    const[area, setArea]=useState("")
    const[email, setEmail]=useState("")
    const[contraseña, setContraseña]= useState("")
    function handleInputChangeE(e){
        setEmail(e.target.value)
    }
    function handleInputChangeC(e){
        setContraseña(e.target.value)
    }
    function handleInputChangeN(e){
        setNombre(e.target.value)
    }
    function handleInputChangeA(e){
        setArea(e.target.value)
    }

    function Cuenta(e){
        e.preventDefault()
        SignupLog(email,contraseña)
      .then((data) => {
        console.log(data)
        navigate("/Area")
        CollectionUsers(nombre,email,contraseña,area)
        .then(()=> console.log("se creo nuevo usuario"))
        .catch(err=> console.log(err))
        
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);

        if (error.code === 'auth/email-already-in-use') {
          alert('Este correo ya está en uso');
        } else if (error.code === 'auth/weak-password') {
          alert('Tu contraseña es muy débil');
        } else if (error.code === 'auth/invalid-email') {
          alert('Este correo es inválido');
        }
      });


    }
    // async function Cuenta(e){
    //     e.preventDefault()
        
    // // await CollectionUsers(nombre,email,contraseña,area)
    // // //     .then( lista=> console.log(lista))
    // // // .catch( error=>console.log(error))
    // // navigate("/Area")
    // }

    return(
        <div> 
        <form className={styles.form}>
            <input className={styles.input} placeholder="Nombre" value={nombre} onChange={handleInputChangeN}/>
            <input className={styles.input} placeholder="Area" value={area} onChange={handleInputChangeA}/>
            <input className={styles.input} placeholder="Correo" value={email} onChange={handleInputChangeE}/>
            <input className={styles.input} type="password" placeholder="Contraseña" value={contraseña} onChange={handleInputChangeC} />
            {/* <Link to="/Area"> */}
            <button className={styles.btn} onClick={Cuenta}>Crear Cuenta</button> 
            {/* </Link> */}
        </form>
        <p className={styles.text}>¿Ya tienes una cuenta? <span className={styles.span} onClick={IniciaSesion}>Inicia Sesión</span></p>
    </div>
    )
}  