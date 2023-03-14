import { useState } from "react";
import { BttnPedido } from "./BttnPedido";
// import styles from "./BttnForm.module.css";
import desayuno from "./desayuno.json";
import { InputForm } from "./InputForm";
import { Menu } from "./Menu";
import almuerzo from "./almuerzo.json"

import styles from "./Formulario.module.css"

// export function Formulario(){
//     const [tittle, setTitle]= useState ("Hola");
//     const [todos, setTodos]= useState([]);

//     function handleInputChange(e) {
//         setTitle(e.target.value);
//       }
    
//     function handleSubmit(e){
//         e.preventDefault();
//         const newTodo={
//             tittle: tittle,
//             completed: false
//         };
//         setTodos([...todos,newTodo]);
//         setTitle("");
//     }
//     return (
//         <div className="Container">
            
//             <form onSubmit={handleSubmit} className="todoCreateForm">
//                 <input
//                 onChange={handleInputChange}
//                 value={tittle}
//                 className="todoInput"
//                 />
//                 <input value="Create todo" type={"submit"} className="buttonCreate" />
//             </form>
//             <div className="Pedidos">
//                 {
//                     todos.map((item=>(
//                         <div>{item.tittle}</div>
//                     )))
//                 }
//             </div>

//         </div>
//     )
// }

export function Formulario(){
    const[Productos, setProductos]=useState(desayuno)
    const[buttonStyle1,setButtonStyle1]=useState(styles.color)
    const[buttonStyle2,setButtonStyle2]=useState(styles.sinColor)
    const[Cliente, setCliente]=useState("")
    const [Lista, setLista] = useState([])
    // const[Cantidad, setCantidad]=useState(1)

    function handleInputChange(e) {
        setCliente(e.target.value);
}
    function ClickPedido(e){
        console.log(e.target.children[0].innerText)
        console.log(e.target.children[1].innerText)
        // console.log(e.target.id)

        const newLista={
            id: e.target.id,
            // quantity: Cantidad,
            item: e.target.children[0].innerText,
            price:e.target.children[1].innerText
        }
        setLista([...Lista,newLista])
    }
    function Borrar(e){
        // e.preventDefault();
        setCliente("");
        setLista([]);
    }

    function Delete(id){
        const copy=Lista.filter((item) => item.id !== id)
        setLista(copy)
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
    function Cocina(e){
        e.preventDefault()
        console.log(Lista)
        console.log(e)
        // console.log(e.target.form.children[1].children[0].children[1].children[1].innerText)
        // console.log(e.target.form.children[1].children[1].children[1].children[1].innerText)
        const nuevo = [...Lista]
        const nuevoQ= nuevo.map((item, i)=>{
          return { id: item.id,
            quantity: e.target.form.children[1].children[i].children[1].children[1].innerText,
            cliente:Cliente,
            item: item.item,
            price:item.price
        }
        })
        setLista(nuevoQ)
        console.log(nuevoQ)
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
            
            {/* <div>{Menu(desayuno,ClickPedido)}</div> */}
            <form className={styles.form}>
                <div id="head" className={styles.pedido}>
                    <p id="pedido">Pedido #<span>1</span></p>
                    <InputForm value={Cliente} placeholder="Nombre del cliente" handleInputChange={handleInputChange} ></InputForm>
                </div>

                <div id="products" className={styles.lista}>
                    {
                        Lista.map(((item,i)=>(
                            <BttnPedido key={i} id={item.id} item={item.item} price={item.price} onDelete={Delete} />
                        )))
                    }
                </div>
                <div className={styles.pedido}>
                    <p>TOTAL:</p>
                    <p>{}</p>
                </div>
                <div className={styles.botones}>
                    <button className={styles.borrar} onClick={Borrar}>Borrar pedido</button>
                    <button className={styles.enviar} type="submit" onClick={Cocina}>Enviar a cocina</button>
                </div>
                
            </form>
        </div>
        // target.form.children[1].children[0].children[1].children[1].innerText
    )
}