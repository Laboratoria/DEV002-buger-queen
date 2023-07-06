import { useState } from "react";
import { BttnPedido } from "./BttnPedido";
// import styles from "./BttnForm.module.css";
import desayuno from "./desayuno.json";
import { InputForm } from "./InputForm";
import { Menu } from "../ListaDeElementos/Menu";
import almuerzo from "./almuerzo.json"

import styles from "./Formulario.module.css"
import { CollectionEnviarPedidos } from "../../Firebase/firestore";
import { ModalEnviar } from "./ModalEnviar";

export function Formulario(){
    const[Productos, setProductos]=useState(desayuno)
    const[modalEspacio,setModalEspacio]=useState("")
    const[buttonStyle1,setButtonStyle1]=useState(styles.color)
    const[buttonStyle2,setButtonStyle2]=useState(styles.sinColor)
    const[Cliente, setCliente]=useState("")
    const [Lista, setLista] = useState([])
    const[total, setTotal]= useState(0)
    const [numeroPedido, setNumeroPedido] =useState("")


    function handleInputChange(e) {
        setCliente(e.target.value);
}
function handleInputChangePedido(e) {
    setNumeroPedido(e.target.value);
}
    function ClickPedido(e){
        console.log(e.target.children[0].innerText)
        let precio=e.target.children[1].innerText
        var regex = /(\d+)/g;
        console.log(precio.match(regex)[0])
        let Price=precio.match(regex)[0]
        // console.log(e.target.id)

        const newLista={
            id: e.target.id,
            // quantity: Cantidad,
            item: e.target.children[0].innerText,
            price:Price
        }
        setLista([...Lista,newLista])

        setTotal(total+Number(Price))
    }
    function Borrar(e){
        e.preventDefault();
        setCliente("");
        setLista([]);
        setTotal(0)
    }
    function Mas(e, newCantidad, newPrice, numero){
        console.log(newCantidad)
        console.log(newPrice)
        console.log(numero)
        setTotal(total+numero)
    }

    function Menos(numero){
        setTotal(total-numero)
    }

    function Delete(id){
        const copy=Lista.filter((item) => item.id !== id)
        setLista(copy)

        let element= Lista.filter((item)=> item.id === id)
        let priceElement=element[0].price

        setTotal(total-Number(priceElement))
    }
    function cambioStyle(){
        if(buttonStyle1===styles.sinColor){
            setButtonStyle1(styles.color)
            setButtonStyle2(styles.sinColor)
            setProductos(desayuno)
        } else{
            setButtonStyle1(styles.sinColor)
            setButtonStyle2(styles.color)
            setProductos(almuerzo)

        }
    }
    function CerrarModal(){
        setModalEspacio("")
    }
 async function MostrarModal(e){
       await e.preventDefault()
        console.log(Lista)
    console.log(e.target.form.children[1].children[1].children[1].children[1].innerText)
        const nuevo = [...Lista]
      const  nuevoQ=  nuevo.map((item, i)=>{
            let cantidad=e.target.form.children[1].children[i].children[1].children[1].innerText;
            let precio= item.price
          return { 
            id: item.id,
            quantity: cantidad,
            item: item.item,
            price:precio,
            subtotal: cantidad*precio
        }
        })
        
        console.log(nuevoQ) 
        setLista(nuevoQ)

        function cocinita(e){
            e.preventDefault()
            console.log(nuevoQ)
            CollectionEnviarPedidos(numeroPedido,Cliente,"",nuevoQ, total,[],"Enviado de mesa","")
            .then(()=> console.log("se envió Lista"))
            .catch(err=> console.log(err))
    
            setLista([])
            setCliente("")
            setTotal(0)
            setNumeroPedido(Number(numeroPedido)+1)
            setModalEspacio("")
        }


        if (modalEspacio==""){
            console.log("if")
            console.log(Lista)
            
            setModalEspacio(<ModalEnviar 
                pedido={numeroPedido} 
                cliente={Cliente} 
                array={nuevoQ} 
                Cancelar={CerrarModal} Enviar={cocinita} total={total}/>)
        }
        
        
    }


    return (
        <div className={styles.fondo}>
            <div className={styles.menu}>
                <div className={styles.headMenu}>
                    <button 
                    className={buttonStyle1}
                    onClick={cambioStyle}
                    >Desayuno</button>

                    <button 
                    className={buttonStyle2}
                    onClick={cambioStyle}
                    >Almuerzo</button>
                </div>
                
                <Menu array={Productos} callback={ClickPedido} />
            </div>
            

            <form className={styles.form}>
                <div id="head" className={styles.pedido}>
                    {/* <p id="pedido">Pedido #<span>{numeroPedido}</span></p> */}
                    <InputForm value={numeroPedido} placeholder="Número de pedido" handleInputChange={handleInputChangePedido}/>
                    <InputForm value={Cliente} placeholder="Nombre del cliente" handleInputChange={handleInputChange} ></InputForm>
                </div>

                <div id="products" className={styles.lista}>
                    {
                        Lista.map(((item)=>(
                            <BttnPedido key={item.id} id={item.id} item={item.item} price={item.price} onDelete={Delete} functionMas={Mas} functionMenos={Menos} />
                        )))
                    }
                </div>
                <div className={styles.pedido}>
                    <p>TOTAL:</p>
                    <p>S/.{total}</p>
                </div>
                <div className={styles.botones}>
                    <button className={styles.borrar} onClick={Borrar}>Borrar pedido</button>
                    <button className={styles.enviar} type="submit" onClick={MostrarModal}>Enviar a cocina</button>
                </div>
                
            </form>
            {modalEspacio}
        </div>

    )
}