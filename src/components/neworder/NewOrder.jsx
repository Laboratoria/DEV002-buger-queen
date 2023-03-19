import Button from "../button/Button";
import "./neworder.css";
import NewProduct from "../newProduct/newProduct";
import { useState } from "react";
import { addDoc, orderCollection, Timestamp } from "../../firebase/firebase";

function NewOrder({ array, total, add, subtract, delet }) {
  //console.log(array)
  const [client, setClient] = useState("");

  async function handleClick() {
    if (array.length === 0) {
      alert("No ingreso ningun producto");
    } else if (client === "") {
      messageClient.innerHTML = "ingrese el nombre del cliente";
    } else {
      try {
        await addDoc(orderCollection, {
          client: client,
          order: array,
          date: Timestamp.fromDate(new Date()),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div>
        <div className="containerNeworder">
          <input
            type="text"
            name="client"
            placeholder="nombre del cliente"
            className="client"
            onChange={(e) => {
              setClient(e.target.value);
            }}
          />
          <span id="messageClient"></span>
          <div className="headerNewProduct">
            <p>Cantidad</p>
            <p>Producto</p>
            <p>Sub Total</p>
          </div>
          <div className="orderClient">
            {array.length === 0 ? <p>No selecciono ningun producto :/</p> : ""}
            {array.map((product) => (
              <NewProduct
                key={product.id}
                data={product}
                add={add}
                subtract={subtract}
                delet={delet}
              />
            ))}
          </div>
          <div className="containerBill">
            <p>TOTAL</p>
            <p>
              S/.<span>{total}</span>
            </p>
          </div>
        </div>
        <div className="buttonCocina">
          <Button name={"Enviar a cocina"} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default NewOrder;
