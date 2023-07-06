import {
  db, 
  collection, 
  addDoc, 
  doc, 
  setDoc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  arrayUnion} from "./firebase"

// --Usuarios que crean cuenta

export const CollectionUsers= (name, email, contraseña, area)=> {addDoc(collection(db,'Users'),{
    name, 
    email,
    contraseña,
    area
});}

export const CollectionUsuarios=(id, name, email, contraseña, area)=>setDoc(doc(db,"Usuarios Creados", id), {
    name, 
    email,
    contraseña,
    area
})

// --Enviados desde Mesas // Collection de pedidos
const EnviadosMesas="Enviados de mesas"

export const CollectionEnviarPedidos=(id,cliente,mesero, productos, total, time, state,timeEnCocina)=>setDoc(doc(db,"Enviados de mesas", id),{
  pedido:id,
  cliente:cliente,
  mesero:mesero,
  productos:productos,
  total:total,
  time:time,
  state:state,
  "time en cocina":timeEnCocina
})

// --Traer datos de la colección de pedidos
export const getDataPedidos=(callback)=>{
  let ordenar=query(collection(db,"Enviados de mesas"), orderBy("pedido","asc"));
  // let normal=collection(db, "Enviados de mesas")
  onSnapshot(ordenar,callback)
}

// --Poner tiempo en cocina
export const EnviandoHora=(id,time)=>{
  const documento=doc(db,EnviadosMesas,id)
  updateDoc(documento,{
    time:arrayUnion(time)
  })
}

// --Enviados desde cocina, Listos para servirse// para cambiar el valor de "state" y cambiar el valor de "time en cocina"

export const CambiarPropState=(id, state)=>{
  const documento=doc(db,EnviadosMesas,id)
  updateDoc(documento,{
    state:state
  })
}

// falta añadir propiedad con el único valor en consola
export const CambiarPropTimeEnCocina=(id, timeEnCocina)=>{
  const documento=doc(db,EnviadosMesas,id)
  updateDoc(documento,{
    "time en cocina": timeEnCocina
  })
}
