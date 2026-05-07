import { useNavigate } from 'react-router-dom'
import styles from './BotonVolver.module.css'

function BotonVolver() {
    const navigate = useNavigate()
    return (
        <button className={styles.boton} onClick={() => navigate('/')}>
            ⬅️Volver
        </button>)
}

export default BotonVolver