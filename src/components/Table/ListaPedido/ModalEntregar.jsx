import { CambiarPropState } from "../../../Firebase/firestore"
import "./ModalEntregar.css"

export function ModalEntregar({pedido,QuitarModal, Equis}){
    function Entregado(e){
        e.preventDefault()
        // ListoParaServirse(pedido.pedido,"Listo para servirse")
        CambiarPropState(pedido.pedido,"Entregado al cliente")
       QuitarModal(pedido.pedido)
    }
    return (
        <div className="fondoModal">
            <div className="Modal">
                <button onClick={Equis} className="btnX">X</button>
                <p key={"pedido"} className="">Pedido #{pedido.pedido}</p>
                <p  key={"cliente"}>Cliente: {pedido.cliente}</p>
                <div key={"productos"} className="cursor">
                    <p>Productos</p>
                    <div className="cursor">
                        {pedido.productos.map((elemento, i)=>{
                            return(
                                <div className="row between cursor" key={i}>
                                    <p className="textMini" key={i}>{elemento.item}</p>
                                    <p className="puntos" key={i+1}></p>
                                    <p className="textMini" key={i+2}>{elemento.quantity}</p>
                                    <p className="puntos" key={i+3}></p>
                                    <p className="textMini" key={i+4}>{elemento.subtotal}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div key="total" className="row cursor">
                    <p>Total:</p><p>{pedido.total}</p>
                </div>
                <div key={"botones"} className="row botones cursor">
                <button className="bttn" onClick={Entregado}>Entregado</button>
                </div>
            </div>
        </div>
    )
}