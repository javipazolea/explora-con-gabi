import { useState } from 'react'
import BotonVolver from '../../components/BotonVolver'
import Personaje from '../../components/Personaje'
import Actividad from '../../components/Actividad'
import Leccion from '../../components/Leccion'

function Lenguaje() {
  const [nivel, setNivel] = useState(null)
  const [modo, setModo] = useState(null)

  if (nivel && modo === 'leccion') {
    return <Leccion nivel={nivel} materia="lenguaje" onTerminar={() => setModo('practica')} />
  }

  if (nivel && (modo === 'practica' || modo === 'evaluacion')) {
    return (
      <Actividad
        nivel={nivel}
        materia="lenguaje"
        modo={modo}
        color="#fff4f0"
        acento="#f97316"
        onVolver={() => setModo(null)}
      />
    )
  }

  if (nivel) {
    return (
      <main style={{
        minHeight: '100vh',
        background: '#fff4f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        gap: '1.5rem'
      }}>
        <BotonVolver />
        <Personaje estado="feliz" />
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Nivel {nivel} — ¿Qué hacemos?</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => setModo('leccion')} style={btnStyle('#f97316')}>📖 Aprender</button>
          <button onClick={() => setModo('practica')} style={btnStyle('#22c55e')}>✏️ Practicar</button>
          <button onClick={() => setModo('evaluacion')} style={btnStyle('#667eea')}>⭐ Evaluarme</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#fff4f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '1.5rem'
    }}>
      <BotonVolver />
      <Personaje estado="feliz" />
      <h2 style={{ fontSize: '2rem', color: '#333' }}>📖 Lenguaje</h2>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>¿Qué nivel quieres?</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setNivel(1)} style={btnStyle('#f97316')}>Nivel 1 ⭐</button>
        <button onClick={() => setNivel(2)} style={btnStyle('#f97316')}>Nivel 2 ⭐⭐</button>
        <button onClick={() => setNivel(3)} style={btnStyle('#f97316')}>Nivel 3 ⭐⭐⭐</button>
      </div>
    </main>
  )
}

const btnStyle = (bg) => ({
  background: bg,
  color: 'white',
  border: 'none',
  borderRadius: '16px',
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  fontWeight: '700',
  cursor: 'pointer'
})

export default Lenguaje