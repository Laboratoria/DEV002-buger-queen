
export function Modal({array, cliente}){
    return(
        <div>
            <div>
                <p>Pedido #{1}</p>
                <p>Cliente:{cliente}</p>
                <div>
                    <p>Pedido</p>
                    <div>
                        <p>{array.item}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}