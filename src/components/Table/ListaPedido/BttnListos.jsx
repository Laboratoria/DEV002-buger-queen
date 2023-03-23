import "./BttnListos.css"

export function BttnListo({pedidoListo, callback}){
    return(
        <div className="column cardListo" >
            <div className="column cardInter" onClick={callback}> 
                <div className="row space">
                    <p>Pedido #</p><p>{pedidoListo.pedido}</p>
                </div>
                <div className="row space">
                    <p>Cliente:</p><p>{pedidoListo.cliente}</p>
                </div>
                <div className="row space">
                    <p>Total:</p><p>{pedidoListo.total}</p>
                </div>
            </div>
        </div>
    )
}
