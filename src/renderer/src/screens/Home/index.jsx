import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import Personaje from '../../components/Personaje'
import { sonidos } from '../../components/sonidos'

function Home() {
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Personaje estado="feliz" />
        <h1>¡Hola Gabi! 🌟</h1>
        <p>¿Qué quieres aprender hoy?</p>
      </header>

      <section className={styles.section}>
        <button onClick={() => { sonidos.navegar(); navigate('/matematicas') }}>🔢 Matemáticas</button>
        <button onClick={() => { sonidos.navegar(); navigate('/lenguaje') }}>📖 Lenguaje</button>
        <button onClick={() => { sonidos.navegar(); navigate('/ciencias') }}>🌿 Ciencias</button>
      </section>
    </main>
  )
}

export default Home