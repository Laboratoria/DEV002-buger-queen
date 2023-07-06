import './App.css';
import { Login } from './Pages/login/Login';
import { Selection } from './Pages/Areas/Selection';
import { Kitchen } from './Pages/Kitchen/Kitchen';
import { Table } from './Pages/Mesas/Table';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import { useNavigate } from 'react-router-dom';



export function Inicio(){

  return(
      <Login>        
      </Login>
  )
}

export function Area(){
  const navigate=useNavigate()
  onAuthStateChanged(auth, async (user) => {
    try {
      if (!user) {
        navigate('/');
      } 
    } catch (error) {
      console.log(error);
    }
  });
  return(
    < Selection/>
  )
}
export function Mesas(){
  const navigate=useNavigate()
  onAuthStateChanged(auth, async (user) => {
    try {
      if (!user) {
        navigate('/');
      } 
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Table/>
  );
}

export function Cocina(){
  const navigate=useNavigate()
  onAuthStateChanged(auth, async (user) => {
    try {
      if (!user) {
        navigate('/');
      } 
      // else {
      //   return (
      //     <Kitchen/>
      //   );
      // }
    } catch (error) {
      console.log(error);
    }
  });
  return(
    <Kitchen/>
  )
}
