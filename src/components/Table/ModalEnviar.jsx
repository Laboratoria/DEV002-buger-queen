import "./ModalEnviar.css"

export function ModalEnviar({pedido, array, cliente, Cancelar, Enviar, total}){
    return(
        <div className="column fondoModal">
            <div className="column Modal">
                <p key={"pedido"} className="">Pedido #{pedido}</p>
                <p  key={"cliente"}>Cliente:{cliente}</p>
                <div key={"productos"}>
                    <p>Productos</p>
                    <div>
                        {array.map((elemento, i)=>{
                            return(
                                <div className="row between" key={i}>
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
                <div className="row">
                    <p>Total:</p> <p>S/.{total}</p>
                </div>
                <div key={"botones"} className="row botones">
                <button className="bttn cancelar" onClick={Cancelar}>Cancelar</button>
                <button className="bttn enviar" onClick={Enviar}>Enviar</button>
                </div>
                
            </div>
        </div>

    )
}