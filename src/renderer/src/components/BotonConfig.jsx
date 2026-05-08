import { useState } from 'react'
import { useConfig } from './ConfigContext'
import styles from './BotonConfig.module.css'

function BotonConfig() {
  const [abierto, setAbierto] = useState(false)
  const {
    sonidosActivos,
    setSonidosActivos,
    vozSeleccionada,
    setVozSeleccionada,
    vocesDisponibles
  } = useConfig()

  return (
    <>
      <button
        className={styles.botonFlotante}
        onClick={() => setAbierto(!abierto)}
      >
        ⚙️
      </button>

      {abierto && (
        <div className={styles.panel}>
          <h3 className={styles.titulo}>Configuración</h3>

          <div className={styles.opcion}>
            <span>Sonidos</span>
            <button
              onClick={() => setSonidosActivos(!sonidosActivos)}
              className={`${styles.toggle} ${sonidosActivos ? styles.activo : ''}`}
            >
              {sonidosActivos ? '🔊 ON' : '🔇 OFF'}
            </button>
          </div>

          <div className={styles.opcion}>
            <span>Voz de Gabi</span>
            <select
              value={vozSeleccionada}
              onChange={(e) => setVozSeleccionada(e.target.value)}
              className={styles.select}
            >
              <option value="">Por defecto</option>
              {vocesDisponibles.map((voz) => (
                <option key={voz.name} value={voz.name}>
                  {voz.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setAbierto(false)}
            className={styles.cerrar}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  )
}

export default BotonConfig