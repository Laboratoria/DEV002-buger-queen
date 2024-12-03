import { useEffect, useState } from "react"
import { getDataPedidos } from "../../../Firebase/firestore";
import { BttnListo } from "./BttnListos";
import { ModalEntregar } from "./ModalEntregar";
import "./PedidosListos.css"

export function PedidosListos(){
    const[lista,setLista]=useState([])
    const[modal,setModal]=useState("")
    
    function CerrarModal(){
        setModal("")
    }

    function MostrarModal(e){
        e.preventDefault()
        console.log(e)
        let id= e.target.children[0].children[1].innerText
        console.log(id)
        const listaPed=[...lista]
        let pedido=listaPed.filter((ele)=>ele.pedido==id)
        console.log(pedido)
        if(modal==""){
            setModal(<ModalEntregar pedido={pedido[0]} QuitarModal={CerrarModal} Equis={CerrarModal}/>)
        }
 
    }

    useEffect(()=>{
        const nuevaList = [] ;
        getDataPedidos((querySnapshot)=>{
             querySnapshot.forEach((doc)=> 
               { 
                const task=doc.data()
                if(task.state==="Listo para servirse"){
                 nuevaList.push(task)   
                }    
            })
        setLista(nuevaList)
          
    ;})
    },[lista,setLista]) 
    return(
        <div className="PedidosListos">
            {
                lista.map((pedido)=>{
                    return(
                        <BttnListo pedidoListo={pedido} callback={MostrarModal}/>
                    )
                })
            }
            {modal}
        </div>
    )
}