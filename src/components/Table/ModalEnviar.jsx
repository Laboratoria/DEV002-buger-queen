import "./ModalEnviar.css"

export function ModalEnviar({pedido, array, cliente, Cancelar, Enviar}){
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
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div key={"botones"} className="row botones">
                <button className="bttn cancelar" onClick={Cancelar}>Cancelar</button>
                <button className="bttn enviar" onClick={Enviar}>Enviar</button>
                </div>
                
            </div>
        </div>

    )
}