import { useState, useEffect } from 'react'
import Personaje from './Personaje'
import BotonVolver from './BotonVolver'
import { sonidos } from './sonidos'

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

const lecciones = {
  matematicas: {
    1: [
      { texto: '¡Hola! Hoy vamos a repasar las sumas 🌟', estado: 'feliz' },
      { texto: 'Sumar es juntar dos grupos. 2 manzanas más 1 manzana son 3 manzanas', estado: 'pensando' },
      { texto: '2 más 1 es igual a 3. ¡Así de fácil! 🎉', estado: 'emocionada' },
      { texto: 'Puedes usar tus dedos para contar 🖐️', estado: 'feliz' },
      { texto: '¡Muy bien! Ya sabes sumar. Vamos a practicar 💪', estado: 'celebrando' },
    ],
    2: [
      { texto: '¡Nivel 2! Ahora sumamos números más grandes 💪', estado: 'feliz' },
      { texto: 'Vamos a sumar hasta el 20 🔢', estado: 'pensando' },
      { texto: 'Truco: empieza por el número más grande y cuenta hacia adelante', estado: 'emocionada' },
      { texto: 'Por ejemplo: 12 más 3. Empezamos en 12 y contamos 3 más: 13, 14, 15', estado: 'feliz' },
      { texto: '¡Tú puedes! Vamos a practicar juntas 🌟', estado: 'celebrando' },
    ],
    3: [
      { texto: '¡Nivel 3! Hoy aprendemos a restar 🔢', estado: 'feliz' },
      { texto: 'Restar es quitar cosas. Si tienes 5 manzanas y comes 2, ¿cuántas quedan?', estado: 'pensando' },
      { texto: '5 menos 2: cuenta hacia atrás: 4, 3. ¡Quedan 3 manzanas!', estado: 'emocionada' },
      { texto: 'Truco: cuenta hacia atrás con tus dedos', estado: 'feliz' },
      { texto: '¡Genial! Ya sabes restar. ¡A practicar! 💪', estado: 'celebrando' },
    ]
  },
  lenguaje: {
    1: [
      { texto: '¡Hola! Hoy repasamos las letras del abecedario 🌟', estado: 'feliz' },
      { texto: 'Las vocales son 5: A, E, I, O, U. ¡Son las más importantes!', estado: 'pensando' },
      { texto: 'Todas las palabras tienen al menos una vocal. Casa tiene A. Sol tiene O.', estado: 'emocionada' },
      { texto: 'Las consonantes son todas las demás letras: M, P, S, L, N, C...', estado: 'feliz' },
      { texto: 'Para saber con qué letra empieza una palabra, di la primera letra en voz alta', estado: 'feliz' },
      { texto: 'MAMÁ empieza con M. PAPÁ empieza con P. ¡Tú ya lo sabes!', estado: 'emocionada' },
      { texto: '¡Excelente! Vamos a practicar las letras 🎉', estado: 'celebrando' },
    ],
    2: [
      { texto: '¡Nivel 2! Hoy aprendemos las sílabas 🌟', estado: 'feliz' },
      { texto: 'Una sílaba es un golpe de voz cuando hablas. Palmea cada golpe', estado: 'pensando' },
      { texto: 'CA-SA tiene 2 golpes, 2 sílabas', estado: 'emocionada' },
      { texto: 'MA-RI-PO-SA tiene 4 golpes, 4 sílabas', estado: 'feliz' },
      { texto: 'SOL tiene 1 solo golpe, 1 sílaba', estado: 'pensando' },
      { texto: 'El plural es cuando hay más de uno. Gato pasa a Gatos. Flor pasa a Flores', estado: 'emocionada' },
      { texto: 'Si la palabra termina en vocal, le agregamos S. Si termina en consonante, ES', estado: 'feliz' },
      { texto: '¡Muy bien! Ya sabes sílabas y plurales. A practicar 💪', estado: 'celebrando' },
    ],
    3: [
      { texto: '¡Nivel 3! Hoy aprendemos las partes de las palabras y oraciones 🌟', estado: 'feliz' },
      { texto: 'Un SUSTANTIVO es el nombre de una persona, animal o cosa', estado: 'pensando' },
      { texto: 'Perro, mesa, Gabriela, árbol. ¡Todos son sustantivos!', estado: 'emocionada' },
      { texto: 'Un VERBO es una acción, algo que se hace', estado: 'pensando' },
      { texto: 'Correr, saltar, comer, dormir. ¡Todos son verbos!', estado: 'emocionada' },
      { texto: 'Un ADJETIVO describe cómo es algo. Grande, pequeño, bonito, rojo', estado: 'pensando' },
      { texto: 'El punto se pone al terminar una oración. La coma hace una pausa', estado: 'feliz' },
      { texto: 'Las preguntas llevan signos de pregunta al inicio y al final', estado: 'pensando' },
      { texto: 'Las exclamaciones llevan signos de exclamación al inicio y al final', estado: 'emocionada' },
      { texto: 'Una oración completa tiene sustantivo y verbo. Por ejemplo: El perro corre', estado: 'feliz' },
      { texto: '¡Increíble! Ya conoces sustantivos, verbos y signos 🏆', estado: 'celebrando' },
    ]
  },
  ciencias: {
    1: [
      { texto: '¡Hola! Hoy aprendemos sobre los animales 🐾', estado: 'feliz' },
      { texto: 'Los animales pueden vivir en el agua, la tierra o el aire', estado: 'pensando' },
      { texto: 'El pez vive en el agua. El pájaro vive en el aire. El perro vive en la tierra', estado: 'emocionada' },
      { texto: 'Los animales domésticos viven con nosotros: perro, gato, vaca', estado: 'feliz' },
      { texto: 'Los animales salvajes viven en la naturaleza: león, tigre, elefante', estado: 'pensando' },
      { texto: 'Cada animal come cosas distintas. La vaca come pasto. El león come carne', estado: 'emocionada' },
      { texto: '¡Ya conoces los animales! A practicar 🎉', estado: 'celebrando' },
    ],
    2: [
      { texto: '¡Nivel 2! Hoy aprendemos sobre las plantas 🌱', estado: 'feliz' },
      { texto: 'Las plantas necesitan 3 cosas para vivir: agua, sol y tierra', estado: 'pensando' },
      { texto: 'La RAÍZ está bajo la tierra y toma el agua, como una pajita', estado: 'emocionada' },
      { texto: 'El TALLO sostiene la planta y lleva el agua hacia arriba', estado: 'feliz' },
      { texto: 'Las HOJAS reciben el sol y hacen la comida de la planta', estado: 'pensando' },
      { texto: 'La FLOR produce las semillas para que nazcan plantas nuevas', estado: 'emocionada' },
      { texto: 'Comemos distintas partes: la manzana es el fruto, la lechuga es la hoja', estado: 'feliz' },
      { texto: '¡Genial! Ya conoces las plantas. A practicar 💪', estado: 'celebrando' },
    ],
    3: [
      { texto: '¡Nivel 3! Hoy aprendemos sobre nuestro cuerpo', estado: 'feliz' },
      { texto: 'El cuerpo tiene 3 partes: cabeza, tronco y extremidades', estado: 'pensando' },
      { texto: 'Tenemos 5 sentidos para conocer el mundo', estado: 'emocionada' },
      { texto: 'VISTA con los ojos. OÍDO con las orejas', estado: 'feliz' },
      { texto: 'OLFATO con la nariz. GUSTO con la lengua. TACTO con las manos', estado: 'pensando' },
      { texto: 'El CORAZÓN bombea la sangre por todo el cuerpo', estado: 'emocionada' },
      { texto: 'Los PULMONES nos permiten respirar', estado: 'feliz' },
      { texto: 'El ESTÓMAGO digiere la comida que comemos', estado: 'pensando' },
      { texto: 'El CEREBRO nos permite pensar, sentir y controlar el cuerpo', estado: 'emocionada' },
      { texto: 'Para estar sanos: comer bien, hacer ejercicio y dormir suficiente', estado: 'feliz' },
      { texto: '¡Eres increíble Gabi! Ya conoces tu cuerpo 🏆', estado: 'celebrando' },
    ]
  }
}

function Leccion({ nivel, materia, onTerminar }) {
  const [paso, setPaso] = useState(0)
  const pasos = lecciones[materia]?.[nivel] || []
  const pasoActual = pasos[paso]

  useEffect(() => {
    if (pasoActual?.texto) {
      hablar(pasoActual.texto)
    }
    return () => window.speechSynthesis.cancel()
  }, [paso, pasoActual])

  if (!pasoActual) return null

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f8f6ff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem',
      position: 'relative'
    }}>
      <BotonVolver />
      <Personaje estado={pasoActual.estado} />

      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '2rem 2.5rem',
        maxWidth: '550px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        fontSize: '1.4rem',
        color: '#333',
        lineHeight: '1.8'
      }}>
        {pasoActual.texto}
      </div>

      <button
        onClick={() => hablar(pasoActual.texto)}
        style={{
          background: 'transparent',
          border: '2px solid #667eea',
          borderRadius: '12px',
          padding: '0.5rem 1.2rem',
          fontSize: '1rem',
          color: '#667eea',
          cursor: 'pointer'
        }}
      >
        🔊 Escuchar de nuevo
      </button>

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
            onClick={() => {
              window.speechSynthesis.cancel()
              sonidos.leccionTerminada()
              onTerminar()
            }}
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