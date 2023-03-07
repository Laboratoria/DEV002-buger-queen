import { useState } from "react"

export function BttnPedido({item,price}){
    const [cantidad, setCantidad]=useState(1);
    function Mas(){
        setCantidad(cantidad+1)
    }
    function Menos(){
        if(cantidad===1){
        document.querySelector(".bttn").innerHTML=""
        } else if(cantidad>1){
            setCantidad(cantidad-1)
        }

    }
    return (
        <div className="bttn">
            <p className="text">{item}
            </p>
            <div>
                <button className="signo" onClick={Mas}>+</button>
                <p className="text">{cantidad}</p>
                <button className="signo" onClick={Menos}>-</button>
            </div>
            <p className="text">{price}
            </p>
            <div className="icono">
            </div>
        </div>
    )
}