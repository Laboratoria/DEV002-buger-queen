import { Link } from 'react-router-dom'
import styles from "./Selection.module.css" 

export function Selection(){
    return(
        <div className={styles.Selection}>
            <Link to='/Area/Mesas'>
                 <button className={styles.btnS}>Mesas</button>
            </Link>
           <Link to="/Area/Cocina">
                 <button className={styles.btnS}>Cocina</button>
           </Link>
            
        </div>
    )
}