import { useState } from "react";
import { ModalSalirP } from "../../components/Encabezado/Perfil/ModalSalir";
import { Encabezado } from "../../components/Encabezado/Encabezado";
import { Formulario } from "../../components/Table/Formulario";
import styles from "./Table.module.css";
import { PedidosListos } from "../../components/Table/ListaPedido/PedidosListos";

export function Table() {
  const [modal, setModal] = useState("");
  const SubTitulos = ["mesa", "lista de pedidos"];

  const [buttonStyle1, setButtonStyle1] = useState(styles.color);
  const [buttonStyle2, setButtonStyle2] = useState(styles.sinColor);

  const Stylos = [buttonStyle1, buttonStyle2];

  const [vista, setVista] = useState(<Formulario />);
  // const [card, setCard]= useState("")
  function CerrarM() {
    console.log("Click equis");
    setModal("");
  }
  function MostrarModal() {
    if (modal == "") {
      console.log("mostrarModal");
      // setCard("")
      setModal(<ModalSalirP Equis={CerrarM} />);
    } else {
      setModal("");
    }
  }
  function CambioVista() {
    if (buttonStyle1 === styles.sinColor) {
      setButtonStyle1(styles.color);
      setButtonStyle2(styles.sinColor);
      setVista(<Formulario />);
    } else {
      setButtonStyle1(styles.sinColor);
      setButtonStyle2(styles.color);
      setVista(<PedidosListos />);
    }
  }
  return (
    <div className={styles.fondo}>
      <Encabezado
        ModalSalir={MostrarModal}
        Subs={SubTitulos}
        Estilos={Stylos}
        clickVista={CambioVista}
      />
      {vista}
      {modal}
      <div className={styles.background} />
    </div>
  );
}
