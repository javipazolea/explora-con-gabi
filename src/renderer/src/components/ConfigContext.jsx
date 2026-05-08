import { createContext, useContext, useState, useEffect } from 'react'

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

const ConfigContext = createContext()

export function ConfigProvider({ children }) {
  const [sonidosActivos, setSonidosActivos] = useState(() => {
    return localStorage.getItem('sonidosActivos') !== 'false'
  })

  const [vozSeleccionada, setVozSeleccionada] = useState(() => {
    return localStorage.getItem('vozSeleccionada') || ''
  })

  const [vocesDisponibles, setVocesDisponibles] = useState([])

  useEffect(() => {
    const cargarVoces = () => {
      const voces = window.speechSynthesis.getVoices()
      const vocesEspanol = voces.filter(v =>
        v.lang.startsWith('es') || v.name.toLowerCase().includes('spanish')
      )
      setVocesDisponibles(vocesEspanol.length > 0 ? vocesEspanol : voces)
    }

    cargarVoces()
    window.speechSynthesis.onvoiceschanged = cargarVoces
  }, [])

  useEffect(() => {
    localStorage.setItem('sonidosActivos', sonidosActivos)
  }, [sonidosActivos])

  useEffect(() => {
    localStorage.setItem('vozSeleccionada', vozSeleccionada)
  }, [vozSeleccionada])

  return (
    <ConfigContext.Provider value={{
      sonidosActivos,
      setSonidosActivos,
      vozSeleccionada,
      setVozSeleccionada,
      vocesDisponibles
    }}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}

export function useHablar() {
  const { vozSeleccionada } = useConfig()

  return (texto) => {
    window.speechSynthesis.cancel()
    const limpio = limpiarTexto(texto)
    const voz = new SpeechSynthesisUtterance(limpio)
    voz.lang = 'es-CL'
    voz.rate = 0.85
    voz.pitch = 1.1

    if (vozSeleccionada) {
      const voces = window.speechSynthesis.getVoices()
      const vozEncontrada = voces.find(v => v.name === vozSeleccionada)
      if (vozEncontrada) voz.voice = vozEncontrada
    }

    window.speechSynthesis.speak(voz)
  }
}