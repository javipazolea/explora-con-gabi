import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

function Home() {
    const navigate = useNavigate()

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>¡Hola Gabi! 🌟</h1>
                <p>¿Qué quieres aprender hoy?</p>
                </header>

                <section className={styles.section} >
                <button onClick={() => navigate('/matematicas')}>🔢 Matemáticas</button>
                <button onClick={() => navigate('/lenguaje')}>📖 Lenguaje</button>
                <button onClick={() => navigate('/ciencias')}>🌿 Ciencias</button>
                </section>
        </main>
    )
}

export default Home