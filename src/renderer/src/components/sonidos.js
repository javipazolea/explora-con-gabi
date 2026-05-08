const ctx = () => new (window.AudioContext || window.webkitAudioContext)()

const tono = (frecuencia, duracion, tipo = 'sine', volumen = 0.3) => {
  const audio = ctx()
  const oscilador = audio.createOscillator()
  const ganancia = audio.createGain()

  oscilador.connect(ganancia)
  ganancia.connect(audio.destination)

  oscilador.type = tipo
  oscilador.frequency.setValueAtTime(frecuencia, audio.currentTime)
  ganancia.gain.setValueAtTime(volumen, audio.currentTime)
  ganancia.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duracion)

  oscilador.start(audio.currentTime)
  oscilador.stop(audio.currentTime + duracion)
}

export const sonidos = {
  correcto: () => {
    tono(520, 0.15)
    setTimeout(() => tono(660, 0.15), 150)
    setTimeout(() => tono(880, 0.25), 300)
  },

  incorrecto: () => {
    tono(300, 0.15, 'sawtooth')
    setTimeout(() => tono(220, 0.3, 'sawtooth'), 150)
  },

  click: () => {
    tono(440, 0.08, 'sine', 0.15)
  },

  inicio: () => {
    tono(440, 0.1)
    setTimeout(() => tono(550, 0.1), 100)
    setTimeout(() => tono(660, 0.1), 200)
    setTimeout(() => tono(880, 0.2), 300)
  },

  leccionTerminada: () => {
    tono(440, 0.1)
    setTimeout(() => tono(550, 0.1), 100)
    setTimeout(() => tono(660, 0.1), 200)
    setTimeout(() => tono(770, 0.1), 300)
    setTimeout(() => tono(880, 0.3), 400)
  },

  logro: () => {
    tono(660, 0.1)
    setTimeout(() => tono(880, 0.1), 100)
    setTimeout(() => tono(660, 0.1), 200)
    setTimeout(() => tono(880, 0.1), 300)
    setTimeout(() => tono(1100, 0.4), 400)
  },

  navegar: () => {
    tono(550, 0.1, 'sine', 0.15)
    setTimeout(() => tono(440, 0.1, 'sine', 0.15), 100)
  }
}