import { CambiarPropState, CambiarPropTimeEnCocina, EnviandoHora } from "../../Firebase/firestore"
import "./CardPedidoLarge.css"
export function CardPedidoLarge({pedido,quitarPedido, MostrarModal}){
    function Listo(e){
        e.preventDefault()
        const date = new Date();
        const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        let horita=hour+":"+minutes+":"+seconds

        EnviandoHora(pedido.pedido,horita)

        CambiarPropState(pedido.pedido,"Listo para servirse")

        quitarPedido(pedido.pedido)
        MostrarModal(pedido)
        }
    
    return(
        <div className="column all">
            <div className="column fondo" key={"01"}>
                <div className="row espacio text" key={"01"}>
                    <p className="bold non">Pedido #</p>
                    <p className="non">{pedido.pedido}</p>
                </div>
                {/* <div><p>Cliente:</p><p>{pedido.cliente}</p></div> */}
                <div className="column espacio" key={"02"}>
                    <div className=" row  between text bold"> <p className="non">Productos</p> <p className="non">Unidades</p></div>
                    <div className="white">
                    {pedido.productos.map((producto, i)=> {
                        return(
                            <div className="row between" key={"pedido"+i}>
                                <p className="textMini" >{producto.item}</p>
                                <p className="puntos" ></p>
                                <p className="textMini" >{producto.quantity}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="row espacio text" key={"03"}>
                    <p className="bold non" key={"01"}>Tiempo de inicio: </p> <p key={"02"} className="non">{pedido.time[0]}</p> 
                </div>
            </div>
            <button className="bttn text" key={"02"} onClick={Listo}>Listo para servirse</button>
        </div>
    )
}