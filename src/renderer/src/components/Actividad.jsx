import { useState, useEffect } from 'react'
import BotonVolver from './BotonVolver'
import Personaje from './Personaje'
import generarMatematicas from './generadorMatematicas'
import generarLenguaje from './generadorLenguaje'
import generarCiencias from './generadorCiencias'
import { sonidos } from './sonidos'

const generadores = {
  matematicas: generarMatematicas,
  lenguaje: generarLenguaje,
  ciencias: generarCiencias
}

const limpiarTexto = (texto) => {
  return texto
    .replace(/[\u{1F600}-\u{1F64F}]/gu, '')
    .replace(/[\u{1F300}-\u{1F5FF}]/gu, '')
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, '')
    .replace(/[\u{1F700}-\u{1F77F}]/gu, '')
    .replace(/[\u{1F780}-\u{1F7FF}]/gu, '')
    .replace(/[\u{1F800}-\u{1F8FF}]/gu, '')
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, '')
    .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '')
    .replace(/[\u{2600}-\u{26FF}]/gu, '')
    .replace(/[\u{2700}-\u{27BF}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const hablar = (texto) => {
  window.speechSynthesis.cancel()
  const limpio = limpiarTexto(texto)
  const voz = new SpeechSynthesisUtterance(limpio)
  voz.lang = 'es-CL'
  voz.rate = 0.85
  voz.pitch = 1.1
  window.speechSynthesis.speak(voz)
}

function Actividad({ nivel, materia, modo, color, acento, onVolver }) {
  const [preguntas, setPreguntas] = useState([])
  const [indice, setIndice] = useState(0)
  const [resultado, setResultado] = useState(null)
  const [puntaje, setPuntaje] = useState(0)
  const [terminado, setTerminado] = useState(false)
  const [estadoPersonaje, setEstadoPersonaje] = useState('pensando')

  useEffect(() => {
    const generador = generadores[materia]
    if (generador) setPreguntas(generador(nivel))
  }, [nivel, materia])

  if (preguntas.length === 0) return <p>Cargando...</p>

  const preguntaActual = preguntas[indice]

const responder = (alternativa) => {
  if (alternativa === preguntaActual.correcta) {
    setResultado('correcto')
    setPuntaje(puntaje + 1)
    setEstadoPersonaje('celebrando')
    sonidos.correcto()
  } else {
    setResultado('incorrecto')
    setEstadoPersonaje('animando')
    sonidos.incorrecto()
  }
}
  const siguiente = () => {
  setResultado(null)
  setEstadoPersonaje('pensando')
  if (indice + 1 < preguntas.length) {
    setIndice(indice + 1)
  } else {
    sonidos.logro()
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
        <Personaje estado="celebrando" />
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
            setEstadoPersonaje('pensando')
            const generador = generadores[materia]
            if (generador) setPreguntas(generador(nivel))
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
      <Personaje estado={estadoPersonaje} />

      <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem', marginTop: '1rem' }}>
        Pregunta {indice + 1} de {preguntas.length} · Puntaje: {puntaje}
      </p>

      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#333', textAlign: 'center' }}>
        {preguntaActual.enunciado}
      </h2>

      <button
        onClick={() => hablar(preguntaActual.enunciado)}
        style={{
          background: 'transparent',
          border: `2px solid ${acento}`,
          borderRadius: '12px',
          padding: '0.4rem 1rem',
          fontSize: '0.95rem',
          color: acento,
          cursor: 'pointer',
          marginBottom: '1.5rem'
        }}
      >
        🔊 Escuchar pregunta
      </button>

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
          <p style={{ fontSize: '1.8rem', color: '#ef4444', fontWeight: '700' }}>
            ¡Inténtalo de nuevo!
          </p>
          <button
            onClick={() => {
              setResultado(null)
              setEstadoPersonaje('pensando')
            }}
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