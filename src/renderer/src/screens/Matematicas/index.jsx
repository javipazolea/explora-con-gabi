import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BotonVolver from '../../components/BotonVolver'
import Personaje from '../../components/Personaje'
import Actividad from '../../components/Actividad'
import Leccion from '../../components/Leccion'

function Matematicas() {
  const [nivel, setNivel] = useState(null)
  const [modo, setModo] = useState(null) // 'leccion' | 'practica' | 'evaluacion'

  if (nivel && modo === 'leccion') {
    return <Leccion nivel={nivel} materia="matematicas" onTerminar={() => setModo('practica')} />
  }

  if (nivel && (modo === 'practica' || modo === 'evaluacion')) {
    return (
      <Actividad
        nivel={nivel}
        materia="matematicas"
        modo={modo}
        color="#f0f4ff"
        acento="#667eea"
        onVolver={() => setModo(null)}
      />
    )
  }

  if (nivel) {
    return (
      <main style={{
        minHeight: '100vh',
        background: '#f0f4ff',
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
          <button onClick={() => setModo('leccion')} style={btnStyle('#667eea')}>
            📖 Aprender
          </button>
          <button onClick={() => setModo('practica')} style={btnStyle('#22c55e')}>
            ✏️ Practicar
          </button>
          <button onClick={() => setModo('evaluacion')} style={btnStyle('#f97316')}>
            ⭐ Evaluarme
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f4ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '1.5rem'
    }}>
      <BotonVolver />
      <Personaje estado="feliz" />
      <h2 style={{ fontSize: '2rem', color: '#333' }}>🔢 Matemáticas</h2>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>¿Qué nivel quieres?</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setNivel(1)} style={btnStyle('#667eea')}>Nivel 1 ⭐</button>
        <button onClick={() => setNivel(2)} style={btnStyle('#667eea')}>Nivel 2 ⭐⭐</button>
        <button onClick={() => setNivel(3)} style={btnStyle('#667eea')}>Nivel 3 ⭐⭐⭐</button>
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

export default Matematicas