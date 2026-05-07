import { useState } from 'react'
import BotonVolver from './BotonVolver'

function Actividad({ preguntas, color, acento }) {
  const [indice, setIndice] = useState(0)
  const [resultado, setResultado] = useState(null)
  const [puntaje, setPuntaje] = useState(0)
  const [terminado, setTerminado] = useState(false)

  const preguntaActual = preguntas[indice]

  const responder = (alternativa) => {
    if (alternativa === preguntaActual.correcta) {
      setResultado('correcto')
      setPuntaje(puntaje + 1)
    } else {
      setResultado('incorrecto')
    }
  }

  const siguiente = () => {
    setResultado(null)
    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1)
    } else {
      setTerminado(true)
    }
  }

  if (terminado) {
    return (
      <main style={{
        minHeight: '100vh',
        background: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <BotonVolver />
        <p style={{ fontSize: '5rem' }}>🏆</p>
        <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '0.5rem' }}>
          ¡Lo lograste Gabi!
        </h2>
        <p style={{ fontSize: '1.5rem', color: acento, fontWeight: '700', marginBottom: '2rem' }}>
          Sacaste {puntaje} de {preguntas.length} ⭐
        </p>
        <button
          onClick={() => {
            setTerminado(false)
            setIndice(0)
            setPuntaje(0)
            setResultado(null)
          }}
          style={{
            background: acento,
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            padding: '1rem 2.5rem',
            fontSize: '1.3rem',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Jugar de nuevo 🎮
        </button>
      </main>
    )
  }

  return (
    <main style={{
      padding: '2rem',
      paddingTop: '5rem',
      minHeight: '100vh',
      background: color,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <BotonVolver />

      <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem' }}>
        Pregunta {indice + 1} de {preguntas.length} · Puntaje: {puntaje}
      </p>

      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>
        {preguntaActual.enunciado}
      </h2>

      {resultado === null && (
        <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {preguntaActual.alternativas.map((alt) => (
            <button
              key={alt}
              onClick={() => responder(alt)}
              style={{
                background: 'white',
                border: `3px solid ${acento}`,
                borderRadius: '16px',
                padding: '1.2rem 2rem',
                fontSize: '2rem',
                fontWeight: '700',
                color: '#333',
                cursor: 'pointer',
                minWidth: '120px',
                transition: 'all 0.2s'
              }}
            >
              {alt}
            </button>
          ))}
        </section>
      )}

      {resultado === 'correcto' && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '3rem' }}>🎉</p>
          <p style={{ fontSize: '1.8rem', color: '#22c55e', fontWeight: '700' }}>
            ¡Muy bien Gabi!
          </p>
          <button
            onClick={siguiente}
            style={{
              marginTop: '1.5rem',
              background: acento,
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Siguiente →
          </button>
        </div>
      )}

      {resultado === 'incorrecto' && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '3rem' }}>😅</p>
          <p style={{ fontSize: '1.8rem', color: '#ef4444', fontWeight: '700' }}>
            ¡Inténtalo de nuevo!
          </p>
          <button
            onClick={() => setResultado(null)}
            style={{
              marginTop: '1.5rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Intentar de nuevo
          </button>
        </div>
      )}
    </main>
  )
}

export default Actividad