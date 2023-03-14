// import logo from './logo.svg';
// import { useNavigate, Link } from 'react-router-dom';
import './App.css';
import { Encabezado } from './components/Encabezado';
import { Formulario } from './components/Formulario';
import { Login } from './components/login/Login';
import { Selection } from './components/Area/Selection';
import { Kitchen } from './components/Kitchen/Kitchen';



export function Inicio(){
  return(
      <Login>        
      </Login>
  )
}

export function Area(){
  return(
    < Selection/>
  )
}
export function App(){

  return (
    <div className='App'>
      <Encabezado></Encabezado>
      <Formulario></Formulario>

    </div>

  );
}

export function Cocina(){
  return(
    <Kitchen/>
  )
}
