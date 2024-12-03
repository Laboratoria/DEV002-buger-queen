import { CambiarPropTimeEnCocina } from "../../Firebase/firestore"

export function ModalCocina({Equis, pedido}){
    const start=pedido.time[0]
    const finish= new Date()
    let dividiendoStart=start.split(":")
    let horaStart=Number(dividiendoStart[0])
    let minutosStart=Number(dividiendoStart[1])
    let segStart=Number(dividiendoStart[2])

    const [hour, minutes, seconds] = [finish.getHours(), finish.getMinutes(), finish.getSeconds()];

    const tiempo= (hour-horaStart)+":"+(minutes-minutosStart)+":"+(seconds-segStart)
    function EnviarTimeCalculado(e){
        e.preventDefault()
 

        CambiarPropTimeEnCocina(pedido.pedido,tiempo)
        Equis()
    }
    return(
        <div className="fondoModal">
            <div className="Modal">
                {/* <button key="01" onClick={Equis} className="btnX">X</button> */}
                <p key="02" className="text">Resumen de la operación:</p>
                
                <p key="03"  className="text">Inicio: {start}</p>
                <p key="04"  className="text">Fin: {finish}</p> 
                <p key={"05"} className="text">Cálculo: {tiempo}</p> 
                <button key="06" className="btn" onClick={EnviarTimeCalculado}>Siguiente</button>
            </div>
        </div>
    )
}