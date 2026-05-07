import styles from './Personaje.module.css'

function Personaje({ estado = 'feliz' }) {
  const caras = {
    feliz:      '😊',
    emocionada: '🤩',
    pensando:   '🤔',
    celebrando: '🥳',
    animando:   '😅'
  }

  return (
    <div className={styles.personaje}>
      <div className={styles.cara}>
        {caras[estado]}
      </div>
      <div className={styles.nombre}>Gabi</div>
    </div>
  )
}

export default Personaje