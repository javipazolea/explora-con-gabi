function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

const banco = {
1: [
    { enunciado: '¿Con qué letra empieza "mamá"?', alternativas: ['M', 'P', 'S', 'L'], correcta: 'M' },
    { enunciado: '¿Con qué letra empieza "papá"?', alternativas: ['M', 'P', 'T', 'L'], correcta: 'P' },
    { enunciado: '¿Con qué letra empieza "sol"?', alternativas: ['S', 'P', 'M', 'L'], correcta: 'S' },
    { enunciado: '¿Con qué letra empieza "luna"?', alternativas: ['S', 'P', 'M', 'L'], correcta: 'L' },
    { enunciado: '¿Con qué letra empieza "gato"?', alternativas: ['G', 'P', 'M', 'L'], correcta: 'G' },
    { enunciado: '¿Con qué letra empieza "nube"?', alternativas: ['S', 'P', 'N', 'L'], correcta: 'N' },
    { enunciado: '¿Con qué letra empieza "flor"?', alternativas: ['F', 'P', 'M', 'L'], correcta: 'F' },
    { enunciado: '¿Con qué letra empieza "casa"?', alternativas: ['S', 'P', 'C', 'L'], correcta: 'C' },
    { enunciado: '¿Con qué letra termina "pan"?', alternativas: ['A', 'P', 'N', 'M'], correcta: 'N' },
    { enunciado: '¿Con qué letra termina "sol"?', alternativas: ['S', 'O', 'L', 'M'], correcta: 'L' },
    { enunciado: '¿Con qué letra termina "mar"?', alternativas: ['M', 'A', 'R', 'T'], correcta: 'R' },
    { enunciado: '¿Cuál de estas es una vocal?', alternativas: ['P', 'M', 'A', 'T'], correcta: 'A' },
    { enunciado: '¿Cuál de estas NO es una vocal?', alternativas: ['A', 'E', 'P', 'O'], correcta: 'P' },
    { enunciado: '¿Cuántas vocales hay en español?', alternativas: [3, 4, 5, 6], correcta: 5 },
    { enunciado: '¿Cuántas letras tiene "SOL"?', alternativas: [2, 3, 4, 5], correcta: 3 },
    { enunciado: '¿Cuántas letras tiene "MAMÁ"?', alternativas: [3, 4, 5, 6], correcta: 4 },
    { enunciado: '¿Cuántas letras tiene "PAN"?', alternativas: [2, 3, 4, 5], correcta: 3 },
    { enunciado: '¿Con qué letra empieza "árbol"?', alternativas: ['A', 'R', 'B', 'L'], correcta: 'A' },
    { enunciado: '¿Con qué letra empieza "iglesia"?', alternativas: ['A', 'E', 'I', 'O'], correcta: 'I' },
    { enunciado: '¿Con qué letra empieza "uva"?', alternativas: ['A', 'E', 'I', 'U'], correcta: 'U' },
  ],
  2: [
    { enunciado: '¿Qué sílaba falta? PE___', alternativas: ['RRO', 'LLU', 'MA', 'CA'], correcta: 'RR' },
    { enunciado: '¿Qué palabra rima con "sol"?', alternativas: ['pan', 'col', 'mar', 'pie'], correcta: 'col' },
    { enunciado: '¿Qué palabra rima con "pan"?', alternativas: ['sol', 'mar', 'van', 'pie'], correcta: 'van' },
    { enunciado: '¿Qué palabra rima con "flor"?', alternativas: ['pan', 'sol', 'mar', 'amor'], correcta: 'amor' },
    { enunciado: '¿Cuántas sílabas tiene "CASA"?', alternativas: [1, 2, 3, 4], correcta: 2 },
    { enunciado: '¿Cuántas sílabas tiene "PELOTA"?', alternativas: [2, 3, 4, 5], correcta: 3 },
    { enunciado: '¿Cuántas sílabas tiene "SOL"?', alternativas: [1, 2, 3, 4], correcta: 1 },
    { enunciado: '¿Cuántas sílabas tiene "MARIPOSA"?', alternativas: [3, 4, 5, 6], correcta: 4 },
    { enunciado: '¿Cuántas sílabas tiene "ZAPATO"?', alternativas: [2, 3, 4, 5], correcta: 3 },
    { enunciado: '¿Cuántas sílabas tiene "PAN"?', alternativas: [1, 2, 3, 4], correcta: 1 },
    { enunciado: '¿Cuál es el plural de "gato"?', alternativas: ['gato', 'gatos', 'gata', 'gatas'], correcta: 'gatos' },
    { enunciado: '¿Cuál es el plural de "flor"?', alternativas: ['flor', 'flores', 'flora', 'floris'], correcta: 'flores' },
    { enunciado: '¿Cuál es el plural de "árbol"?', alternativas: ['árbol', 'árbols', 'árboles', 'árbolies'], correcta: 'árboles' },
    { enunciado: '¿Qué palabra es un animal?', alternativas: ['mesa', 'perro', 'casa', 'libro'], correcta: 'perro' },
    { enunciado: '¿Qué palabra es una fruta?', alternativas: ['mesa', 'silla', 'manzana', 'libro'], correcta: 'manzana' },
    { enunciado: '¿Qué palabra es un color?', alternativas: ['mesa', 'rojo', 'casa', 'libro'], correcta: 'rojo' },
    { enunciado: '¿Cuál de estas palabras tiene 3 sílabas?', alternativas: ['sol', 'mesa', 'zapato', 'pan'], correcta: 'zapato' },
    { enunciado: '¿Cuál de estas palabras tiene 1 sílaba?', alternativas: ['casa', 'pelota', 'árbol', 'sol'], correcta: 'sol' },
  ],
  3: [
    { enunciado: '¿Qué es un sustantivo?', alternativas: ['una acción', 'el nombre de algo', 'un color', 'un número'], correcta: 'el nombre de algo' },
    { enunciado: '¿Cuál de estas es una acción?', alternativas: ['perro', 'casa', 'correr', 'rojo'], correcta: 'correr' },
    { enunciado: '¿Cuál de estas es un adjetivo?', alternativas: ['correr', 'mesa', 'bonito', 'saltar'], correcta: 'bonito' },
    { enunciado: '¿Qué signo va al final de una pregunta?', alternativas: ['!', '.', '?', ','], correcta: '?' },
    { enunciado: '¿Qué signo va al final de una exclamación?', alternativas: ['!', '.', '?', ','], correcta: '!' },
    { enunciado: '¿Cuál de estas palabras está bien escrita?', alternativas: ['Kasa', 'Casa', 'Caza', 'Qasa'], correcta: 'Casa' },
    { enunciado: '¿Cuál es el opuesto de "grande"?', alternativas: ['alto', 'pequeño', 'gordo', 'rápido'], correcta: 'pequeño' },
    { enunciado: '¿Cuál es el opuesto de "frío"?', alternativas: ['nieve', 'lluvia', 'caliente', 'viento'], correcta: 'caliente' },
    { enunciado: '¿Cuál es el opuesto de "rápido"?', alternativas: ['alto', 'pequeño', 'lento', 'suave'], correcta: 'lento' },
    { enunciado: '¿Cuál de estas palabras tiene tilde?', alternativas: ['casa', 'perro', 'árbol', 'mesa'], correcta: 'árbol' },
    { enunciado: '¿Cuál de estas oraciones está completa?', alternativas: ['El perro', 'Corre rápido', 'El perro corre', 'Muy rápido'], correcta: 'El perro corre' },
    { enunciado: '¿Qué palabra es un sinónimo de "feliz"?', alternativas: ['triste', 'contento', 'enojado', 'asustado'], correcta: 'contento' },
  ]
}

function generarPreguntas(nivel, cantidad = 10) {
  const preguntas = banco[nivel] || banco[1]
  return mezclar(preguntas).slice(0, cantidad)
}

export default generarPreguntas