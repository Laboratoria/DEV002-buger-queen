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

// --Enviados desde Mesas
const EnviadosMesas="Enviados de mesas"

export const CollectionEnviarPedidos=(id,cliente,mesero, productos, total, time, state)=>setDoc(doc(db,"Enviados de mesas", id),{
  pedido:id,
  cliente:cliente,
  mesero:mesero,
  productos:productos,
  total:total,
  time:time,
  state:state
})

export const getDataDeMesas=(callback)=>{
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

// --Enviados desde cocina, Listos para servirse

export const ListoParaServirse=(id, state)=>{
  const documento=doc(db,EnviadosMesas,id)
  updateDoc(documento,{
    state:state
  })
}

// export const saveTask = (description, uid) => {
//     // console.log(description);
//     addDoc(collection(db, 'tasks'), {
//       uid,
//       description,
//       likes: [],
//     });
//   };