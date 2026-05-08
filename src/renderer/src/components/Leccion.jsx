import { useState } from 'react'
import Personaje from './Personaje'
import BotonVolver from './BotonVolver'

function Leccion({ nivel, materia, onTerminar }) {
  const [paso, setPaso] = useState(0)

 const lecciones = {
    matematicas: {
      1: [
        { texto: '¡Hola! Hoy vamos a aprender a sumar 🌟', emoji: '😊' },
        { texto: 'Sumar es juntar dos grupos de cosas 🍎🍎 + 🍎', emoji: '🤔' },
        { texto: '¡Mira! 2 manzanas más 1 manzana son 3 manzanas 🍎🍎🍎', emoji: '🤩' },
        { texto: 'Ahora tú: ¿cuánto es 1 + 1? Cuenta con tus dedos 🖐️', emoji: '😊' },
        { texto: '¡Exacto! 1 + 1 = 2 🎉 ¡Ya sabes sumar!', emoji: '🥳' },
      ],
      2: [
        { texto: '¡Bienvenida al Nivel 2! Aquí los números son más grandes 💪', emoji: '😊' },
        { texto: 'Vamos a sumar números hasta el 20 🔢', emoji: '🤔' },
        { texto: 'Por ejemplo: 10 + 5 — primero el 10, luego cuenta 5 más', emoji: '🤩' },
        { texto: '10... 11, 12, 13, 14, 15 ✅ ¡El resultado es 15!', emoji: '😊' },
        { texto: '¡Tú puedes! Vamos a practicar juntas 🌟', emoji: '🥳' },
      ],
      3: [
        { texto: '¡Nivel 3! Ahora aprenderemos a restar 🔢', emoji: '😊' },
        { texto: 'Restar es quitar cosas de un grupo 🍎🍎🍎', emoji: '🤔' },
        { texto: 'Si tienes 3 manzanas y comes 1, te quedan 2 🍎🍎', emoji: '🤩' },
        { texto: '3 - 1 = 2 ¡Así de fácil! Cuenta hacia atrás con tus dedos', emoji: '😊' },
        { texto: '¡Genial! Ya sabes restar, vamos a practicar 💪', emoji: '🥳' },
      ]
    },
    lenguaje: {
      1: [
        { texto: '¡Hola! Hoy vamos a aprender las letras 🌟', emoji: '😊' },
        { texto: 'Las vocales son: A E I O U 🎵', emoji: '🤔' },
        { texto: 'Cada palabra empieza con una letra — ¡como tu nombre! 🌸', emoji: '🤩' },
        { texto: '¿Sabes con qué letra empieza "mamá"? ¡Con la M! 💛', emoji: '😊' },
        { texto: '¡Muy bien! Ahora practiquemos juntas 🎉', emoji: '🥳' },
      ],
      2: [
        { texto: '¡Nivel 2! Vamos a aprender las sílabas 🌟', emoji: '😊' },
        { texto: 'Una sílaba es un golpe de voz — CA-SA tiene 2 golpes', emoji: '🤔' },
        { texto: 'Palmea mientras dices: MA-RI-PO-SA 👏👏👏👏', emoji: '🤩' },
        { texto: '¿Cuántos golpes tiene "SOL"? ¡Solo 1! SOL 👏', emoji: '😊' },
        { texto: '¡Genial! Ya sabes contar sílabas, a practicar 💪', emoji: '🥳' },
      ],
      3: [
        { texto: '¡Nivel 3! Ahora vamos con palabras y oraciones 🌟', emoji: '😊' },
        { texto: 'Una oración tiene un personaje y una acción', emoji: '🤔' },
        { texto: '"El perro corre" — el perro es el personaje, corre es la acción 🐕', emoji: '🤩' },
        { texto: 'Los opuestos son palabras contrarias — grande/pequeño, frío/caliente ❄️🔥', emoji: '😊' },
        { texto: '¡Excelente! Ya estás lista para practicar 🎉', emoji: '🥳' },
      ]
    },
    ciencias: {
      1: [
        { texto: '¡Hola! Hoy vamos a aprender sobre los animales 🐾', emoji: '😊' },
        { texto: 'Los animales pueden vivir en el agua, la tierra o el aire 🌊🌿🌤️', emoji: '🤔' },
        { texto: 'El pez vive en el agua 🐟 El pájaro vive en el aire 🐦', emoji: '🤩' },
        { texto: 'El perro vive en la tierra 🐕 ¿Y el gato? ¡También! 🐱', emoji: '😊' },
        { texto: '¡Muy bien! Vamos a practicar lo que aprendiste 🎉', emoji: '🥳' },
      ],
      2: [
        { texto: '¡Nivel 2! Hoy aprendemos sobre las plantas 🌱', emoji: '😊' },
        { texto: 'Las plantas necesitan agua, sol y tierra para vivir ☀️💧🌍', emoji: '🤔' },
        { texto: 'Las plantas tienen raíz, tallo, hojas y flores 🌸', emoji: '🤩' },
        { texto: 'La raíz toma el agua del suelo — ¡como una pajita! 🌿', emoji: '😊' },
        { texto: '¡Genial! Ya sabes sobre las plantas, a practicar 💪', emoji: '🥳' },
      ],
      3: [
        { texto: '¡Nivel 3! Hoy vamos con el cuerpo humano 🧍', emoji: '😊' },
        { texto: 'Nuestro cuerpo tiene muchas partes — cabeza, tronco y extremidades', emoji: '🤔' },
        { texto: 'Los sentidos nos ayudan a conocer el mundo 👀👂👃', emoji: '🤩' },
        { texto: 'Vista, oído, olfato, gusto y tacto — ¡5 sentidos! 🖐️', emoji: '😊' },
        { texto: '¡Increíble! Ya conoces tu cuerpo, vamos a practicar 🎉', emoji: '🥳' },
      ]
    }
  }
  const pasos = lecciones[materia]?.[nivel] || []
  const pasoActual = pasos[paso]

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0f4ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem'
    }}>
        <BotonVolver />
      <Personaje estado={pasoActual?.emoji === '🥳' ? 'celebrando' : pasoActual?.emoji === '🤔' ? 'pensando' : 'feliz'} />

      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '2rem 2.5rem',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        fontSize: '1.4rem',
        color: '#333',
        lineHeight: '1.8'
      }}>
        {pasoActual?.texto}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {paso > 0 && (
          <button
            onClick={() => setPaso(paso - 1)}
            style={{
              background: '#ddd',
              color: '#555',
              border: 'none',
              borderRadius: '16px',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            ← Anterior
          </button>
        )}

        {paso < pasos.length - 1 ? (
          <button
            onClick={() => setPaso(paso + 1)}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Siguiente →
          </button>
        ) : (
          <button
            onClick={onTerminar}
            style={{
              background: '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            ¡A practicar! 🚀
          </button>
        )}
      </div>

      <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
        {paso + 1} de {pasos.length}
      </p>
    </main>
  )
}

export default Leccion