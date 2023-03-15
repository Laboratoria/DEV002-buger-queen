import './App.css';
import { Login } from './components/login/Login';
import { Selection } from './components/Areas/Selection';
import { Kitchen } from './components/Kitchen/Kitchen';
import { Table } from './components/Table/Table';



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
export function Mesas(){

  return (
    <Table/>
  );
}

export function Cocina(){
  return(
    <Kitchen/>
  )
}
