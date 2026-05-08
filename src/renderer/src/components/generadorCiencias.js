function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

const banco = {
  1: [
    { enunciado: '¿Qué animal hace "muu"?', alternativas: ['Perro', 'Vaca', 'Gato', 'Pato'], correcta: 'Vaca' },
    { enunciado: '¿Qué animal hace "guau"?', alternativas: ['Gato', 'Vaca', 'Perro', 'Pato'], correcta: 'Perro' },
    { enunciado: '¿Qué animal hace "miau"?', alternativas: ['Perro', 'Vaca', 'Gato', 'Pato'], correcta: 'Gato' },
    { enunciado: '¿Qué animal vive en el agua?', alternativas: ['León', 'Pez', 'Perro', 'Gato'], correcta: 'Pez' },
    { enunciado: '¿Qué animal vuela?', alternativas: ['Perro', 'Vaca', 'Pájaro', 'Gato'], correcta: 'Pájaro' },
    { enunciado: '¿Cuántas patas tiene un perro?', alternativas: [2, 4, 6, 8], correcta: 4 },
    { enunciado: '¿Cuántas patas tiene una gallina?', alternativas: [2, 4, 6, 8], correcta: 2 },
    { enunciado: '¿Cuántas patas tiene una araña?', alternativas: [4, 6, 8, 10], correcta: 8 },
    { enunciado: '¿Qué come una vaca?', alternativas: ['Carne', 'Pasto', 'Pescado', 'Frutas'], correcta: 'Pasto' },
    { enunciado: '¿Qué come un león?', alternativas: ['Pasto', 'Frutas', 'Carne', 'Semillas'], correcta: 'Carne' },
    { enunciado: '¿Qué animal da leche?', alternativas: ['Perro', 'Gato', 'Vaca', 'Caballo'], correcta: 'Vaca' },
    { enunciado: '¿Qué animal pone huevos?', alternativas: ['Perro', 'Vaca', 'Gallina', 'Gato'], correcta: 'Gallina' },
    { enunciado: '¿Dónde vive un pez?', alternativas: ['Tierra', 'Aire', 'Agua', 'Árbol'], correcta: 'Agua' },
    { enunciado: '¿Qué necesitan los animales para vivir?', alternativas: ['Solo agua', 'Agua y comida', 'Solo comida', 'Solo sol'], correcta: 'Agua y comida' },
    { enunciado: '¿Cuál de estos es un animal doméstico?', alternativas: ['León', 'Tigre', 'Perro', 'Elefante'], correcta: 'Perro' },
    { enunciado: '¿Cuál de estos es un animal salvaje?', alternativas: ['Perro', 'Gato', 'León', 'Vaca'], correcta: 'León' },
    { enunciado: '¿Qué animal tiene trompa?', alternativas: ['Jirafa', 'Elefante', 'Cebra', 'León'], correcta: 'Elefante' },
    { enunciado: '¿Qué animal tiene cuello muy largo?', alternativas: ['Elefante', 'León', 'Jirafa', 'Hipopótamo'], correcta: 'Jirafa' },
    { enunciado: '¿Qué animal tiene rayas negras y blancas?', alternativas: ['León', 'Elefante', 'Cebra', 'Hipopótamo'], correcta: 'Cebra' },
    { enunciado: '¿Cuál de estos animales puede vivir en la tierra y en el agua?', alternativas: ['Perro', 'Rana', 'Gato', 'León'], correcta: 'Rana' },
  ],
  2: [
    { enunciado: '¿Qué necesitan las plantas para vivir?', alternativas: ['Solo agua', 'Agua, sol y tierra', 'Solo sol', 'Solo tierra'], correcta: 'Agua, sol y tierra' },
    { enunciado: '¿Qué parte de la planta está bajo la tierra?', alternativas: ['Tallo', 'Hoja', 'Flor', 'Raíz'], correcta: 'Raíz' },
    { enunciado: '¿Para qué sirven las hojas?', alternativas: ['Para beber agua', 'Para hacer la comida con el sol', 'Para crecer', 'Para florecer'], correcta: 'Para hacer la comida con el sol' },
    { enunciado: '¿Cómo se llama la parte que sostiene la planta?', alternativas: ['Raíz', 'Hoja', 'Tallo', 'Flor'], correcta: 'Tallo' },
    { enunciado: '¿Qué produce una flor?', alternativas: ['Raíces', 'Tallos', 'Semillas', 'Agua'], correcta: 'Semillas' },
    { enunciado: '¿De dónde nace una planta nueva?', alternativas: ['De una hoja', 'De una semilla', 'Del agua', 'Del sol'], correcta: 'De una semilla' },
    { enunciado: '¿Qué pasa si una planta no recibe agua?', alternativas: ['Crece más', 'Florece', 'Se seca', 'Cambia de color'], correcta: 'Se seca' },
    { enunciado: '¿Qué pasa si una planta no recibe sol?', alternativas: ['Crece más rápido', 'Se pone amarilla y débil', 'Florece más', 'No cambia nada'], correcta: 'Se pone amarilla y débil' },
    { enunciado: '¿Cuál de estos es un árbol?', alternativas: ['Rosa', 'Margarita', 'Roble', 'Clavel'], correcta: 'Roble' },
    { enunciado: '¿Cuál de estos es una fruta?', alternativas: ['Zanahoria', 'Lechuga', 'Manzana', 'Papa'], correcta: 'Manzana' },
    { enunciado: '¿Cuál de estos es una verdura?', alternativas: ['Manzana', 'Plátano', 'Zanahoria', 'Uva'], correcta: 'Zanahoria' },
    { enunciado: '¿Qué parte de la planta usamos cuando comemos una manzana?', alternativas: ['La raíz', 'El tallo', 'La hoja', 'El fruto'], correcta: 'El fruto' },
    { enunciado: '¿Qué parte de la planta usamos cuando comemos lechuga?', alternativas: ['La raíz', 'El tallo', 'La hoja', 'La flor'], correcta: 'La hoja' },
    { enunciado: '¿Qué parte de la planta usamos cuando comemos zanahoria?', alternativas: ['La raíz', 'El tallo', 'La hoja', 'La flor'], correcta: 'La raíz' },
    { enunciado: '¿Cuántas estaciones del año hay?', alternativas: [2, 3, 4, 5], correcta: 4 },
  ],
  3: [
    { enunciado: '¿Cuántos sentidos tiene el ser humano?', alternativas: [3, 4, 5, 6], correcta: 5 },
    { enunciado: '¿Con qué vemos?', alternativas: ['La nariz', 'Los ojos', 'Las orejas', 'La boca'], correcta: 'Los ojos' },
    { enunciado: '¿Con qué escuchamos?', alternativas: ['Los ojos', 'La nariz', 'Las orejas', 'Las manos'], correcta: 'Las orejas' },
    { enunciado: '¿Con qué olemos?', alternativas: ['Los ojos', 'La nariz', 'Las orejas', 'La boca'], correcta: 'La nariz' },
    { enunciado: '¿Con qué tocamos?', alternativas: ['Los ojos', 'La nariz', 'Las orejas', 'Las manos'], correcta: 'Las manos' },
    { enunciado: '¿Con qué saboreamos?', alternativas: ['Los ojos', 'La nariz', 'Las orejas', 'La lengua'], correcta: 'La lengua' },
    { enunciado: '¿Cuántos huesos tiene el cuerpo humano aproximadamente?', alternativas: [106, 206, 306, 406], correcta: 206 },
    { enunciado: '¿Qué órgano bombea la sangre?', alternativas: ['El pulmón', 'El estómago', 'El corazón', 'El cerebro'], correcta: 'El corazón' },
    { enunciado: '¿Para qué sirven los pulmones?', alternativas: ['Para digerir', 'Para respirar', 'Para pensar', 'Para moverse'], correcta: 'Para respirar' },
    { enunciado: '¿Para qué sirve el estómago?', alternativas: ['Para respirar', 'Para pensar', 'Para digerir la comida', 'Para bombear sangre'], correcta: 'Para digerir la comida' },
    { enunciado: '¿Para qué sirve el cerebro?', alternativas: ['Para respirar', 'Para pensar y controlar el cuerpo', 'Para digerir', 'Para bombear sangre'], correcta: 'Para pensar y controlar el cuerpo' },
    { enunciado: '¿Qué nos protege del sol?', alternativas: ['Los huesos', 'Los músculos', 'La piel', 'La sangre'], correcta: 'La piel' },
    { enunciado: '¿Cuántas partes tiene el cuerpo?', alternativas: ['1', '2', '3', '4'], correcta: '3' },
    { enunciado: '¿Cuál es la parte más grande del cuerpo?', alternativas: ['La cabeza', 'Los brazos', 'El tronco', 'Las piernas'], correcta: 'El tronco' },
    { enunciado: '¿Qué debemos hacer para tener un cuerpo sano?', alternativas: ['Solo dormir', 'Comer bien, hacer ejercicio y dormir', 'Solo comer', 'Solo hacer ejercicio'], correcta: 'Comer bien, hacer ejercicio y dormir' },
  ]
}

function generarPreguntas(nivel, cantidad = 10) {
  const preguntas = banco[nivel] || banco[1]
  return mezclar(preguntas).slice(0, cantidad)
}

export default generarPreguntas