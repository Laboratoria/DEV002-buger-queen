import { Encabezado } from './Encabezado';
import { Formulario } from './Formulario';
import styles from "./Table.module.css"
export function Table(){
    return(
        <div className={styles.fondo}>
            <Encabezado/>
            <Formulario/>
        </div>
    )
}