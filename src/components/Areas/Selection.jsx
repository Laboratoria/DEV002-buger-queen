import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged} from '../../app/auth'
import { auth } from '../../app/firebase'
import styles from "./Selection.module.css" 

export function Selection(){
    // onAuthStateChanged(auth, async( user)=>{

    // })
    const navigate= useNavigate()
    onAuthStateChanged(auth, async (user) => {
        try {
          if (!user) {
            navigate('/');
          } else if(user){
            // return(
            //     <div className={styles.Selection}>
            //         <Link to='/Area/Mesas'>
            //              <button className={styles.btnS}>Mesas</button>
            //         </Link>
            //        <Link to="/Area/Cocina">
            //              <button className={styles.btnS}>Cocina</button>
            //        </Link>
                    
            //     </div>
            // )
          }
        } catch (error) {
          console.log(error);
        }
      });

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