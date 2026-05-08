function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generarAlternativas(correcta) {
  const alternativas = new Set()
  alternativas.add(correcta)

  while (alternativas.size < 4) {
    const variacion = numeroAleatorio(-4, 4)
    const opcion = correcta + variacion
    if (opcion >= 0 && opcion !== correcta) {
      alternativas.add(opcion)
    }
  }

  return [...alternativas].sort(() => Math.random() - 0.5)
}

function generarPregunta(nivel) {
  if (nivel === 1) {
    const a = numeroAleatorio(1, 9)
    const b = numeroAleatorio(1, 9)
    return {
      enunciado: `¿Cuánto es ${a} + ${b}?`,
      correcta: a + b,
      alternativas: generarAlternativas(a + b)
    }
  }

  if (nivel === 2) {
    const a = numeroAleatorio(5, 15)
    const b = numeroAleatorio(5, 15)
    return {
      enunciado: `¿Cuánto es ${a} + ${b}?`,
      correcta: a + b,
      alternativas: generarAlternativas(a + b)
    }
  }

  if (nivel === 3) {
    const b = numeroAleatorio(1, 9)
    const a = numeroAleatorio(b, 18)
    return {
      enunciado: `¿Cuánto es ${a} - ${b}?`,
      correcta: a - b,
      alternativas: generarAlternativas(a - b)
    }
  }
}

function generarPreguntas(nivel, cantidad = 10) {
  return Array.from({ length: cantidad }, () => generarPregunta(nivel))
}

export default generarPreguntas