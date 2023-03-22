import { useEffect, useState } from "react"
import { EnviandoHora, getDataDeMesas } from "../../app/firestore"
import { ListaCocina} from "../ListaDeElementos/Menu"
import { CardPedidoLarge } from "./CardPedidoLarge"
import styles from "./PedidosPorCocinar.module.css"
const falsaLista=[{
    pedido:1,
    cliente: "andre",
    productos:[{
        item:"Agua",
        precio:"5", 
        unidades:"2",
        subtotal:10
    },
    {
        item:"hamburguesa",
        precio:10,
        unidades:2,
        subtotal:20
    }
],
    tiempo:"tiempo",
    total: 50,
    mesero: "carolina"
},
{
    pedido:2,
    cliente:"ale",
    productos:[{
        item:"jugo",
        precio:"5",
        unidades:"2",
        subtotal:10
    },
    {
        item:"hamburguesa de carne ",
        precio:10,
        unidades:2,
        subtotal:20
    }
],
    tiempo:"tiempo",
    total:40,
    mesero:"Alexa"
}]
export function PedidosPorCocinar(){
    const[pedido,setPedido]=useState(<p className={styles.texto}>Selecciona un pedido para visualizarlo</p>)
    // const[tiempo,setTiempo]=useState(0)
    const[lista,setLista]=useState([])

    const ListitaDeFirebase=()=>{
        const nuevaList=[]
        getDataDeMesas((querySnapshot)=>{
             querySnapshot.forEach((doc)=> 
               { 
                const task=doc.data()
                if(task.state==="Enviado de mesa"){
                 nuevaList.push(task)   
                }
                
            }
        )
        setLista(nuevaList)
          
    ;})
    console.log(nuevaList) 
    

}
    function  clickPedido(e){
        e.preventDefault()
        console.log(e)
        let number= e.target.children[1].innerText
        // let start= Date.now()
        // console.log(start)
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
            const copy=lista.filter((item) => item.pedido !== number)
        setLista(copy)
        setPedido(<p className={styles.texto}>Selecciona un pedido para visualizarlo</p>)
        }

        setPedido(<CardPedidoLarge pedido={pedido[0]} quitarPedido={Quitar} />) 

    }
    useEffect(()=>{
        ListitaDeFirebase()
    },[])

    return(
        <div className={styles.fondo}>  
            <div className={styles.izquierda}>
               <ListaCocina array={lista} callback={clickPedido}/>
            </div>
            <div className={styles.derecha}>
              {pedido}  
            </div>
            
        </div>
    )
}
