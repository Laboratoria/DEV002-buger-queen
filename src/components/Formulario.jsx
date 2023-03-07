import { useState } from "react";
import { BttnPedido } from "./BttnPedido";
// import { Menu } from "./Menu";
// import styles from "./BttnForm.module.css";
import desayuno from "./desayuno.json";
import { Menu } from "./Menu";

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
    const [Lista, setLista] = useState([])

    function ClickPedido(e){
        console.log(e.target.children[0].innerText)
        console.log(e.target.children[1].innerText)

        const newLista={
            item: e.target.children[0].innerText,
            price:e.target.children[1].innerText
        }
        setLista([...Lista,newLista])
    }
    return (
        <div>
            <Menu key={"01"} array={desayuno} callback={ClickPedido} />
            {/* <div>{Menu(desayuno,ClickPedido)}</div> */}
            <div>
                {
                    Lista.map(((item,i)=>(
                        <BttnPedido key={i} item={item.item} price={item.price} />
                    )))
                }
            </div>
        </div>
    )
}