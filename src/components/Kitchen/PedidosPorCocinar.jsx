import { useEffect, useState } from "react"
import { EnviandoHora, getDataPedidos } from "../../Firebase/firestore"
import { ListaCocina} from "../ListaDeElementos/Menu"
import { CardPedidoLarge } from "./CardPedidoLarge"
import { ModalCocina } from "./ModalCocina"
import styles from "./PedidosPorCocinar.module.css"

export function PedidosPorCocinar(){
    const[pedido,setPedido]=useState(<p className={styles.texto}>Selecciona un pedido para visualizarlo</p>)
    const[lista,setLista]=useState([])
    const[modal,setModal]=useState("")
    function CerrarModal(){
        setModal("")
    }
    function MostrarModal(pedido){
        setModal(<ModalCocina Equis={CerrarModal} pedido={pedido} />)
    }

    function  clickPedido(e){
        e.preventDefault()
        let number= e.target.children[1].innerText

        const date = new Date();
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

        console.log(hour,minutes,seconds)
        let horita=hour+":"+minutes+":"+seconds
        console.log(horita)
        // console.log(Date())
        EnviandoHora(number,horita)
        const listaPed=[...lista]
        let pedido=listaPed.filter((ele)=>ele.pedido==number)
        console.log(pedido)
        
        function Quitar(){
        setPedido(<p className={styles.texto}>Selecciona un pedido para visualizarlo</p>)
        }
        setPedido(<CardPedidoLarge pedido={pedido[0]} quitarPedido={Quitar} MostrarModal={MostrarModal} />) 

    }
   
    useEffect(()=>{
        // const nuevaList = [] ; 
        const orders=getDataPedidos((querySnapshot)=>{
            const nuevaList=[] 
            querySnapshot.forEach((doc)=> 
               { 
                const task=doc.data()
                if(task.state==="Enviado de mesa"){
                 nuevaList.push(task)   
                }
            });
            setLista(nuevaList);
        
        return ()=>{
            orders();
        }
    ;})

    },[]);

    return(
        <div className={styles.fondo}>  
            <div className={styles.izquierda}>
               <ListaCocina array={lista} callback={clickPedido}/>
            </div>
            <div className={styles.derecha}>
              {pedido}  
            </div>
            {modal}
        </div>
    )
}
