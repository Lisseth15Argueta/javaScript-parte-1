/*contador = contador + 1;
console.log(contador);

/*const contador = 4;
console.log(contador);

/*const contador = 1;
console.log(contador);
if(true){
  const contador = 5;
  console.log(contador);
}

/*const persona = {
  nombre: "Lisseth",
  apellido: "Argueta"
};
persona.nombre = "Erika";
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombre, persona.apellido);*/

/*objetos literales y optional chainig operador
const fruta = ["pera", "manzana", "sandia"];
console.log(fruta[1])

Ojetos literales, no indexados
const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true

console.log("Este leon es de color: " + animal.color);
console.log("y su nombre es: " + animal.nombre);
console.log(animal["rugiendo"]);

/*const tareas = {
  "2359-91k83204u23rhrefiu" : {
    title: "tarea #01"
  }
}

console.log(tareas["2359-91k83204u23rhrefiu"].title)


/*const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favorito: {
    dia: {
      ok: true,
    },

    noche: {
      ok: false
    }
  }
}

console.log(animal.favorito.dia.ok);
console.log(animal.favorito.noche.ok);*/

/*const animal = {
  color: "naranja",
  nombre: "Simba",
  rugiendo: true,
  favorito: {
    dia: {
      ok: true,
    },
    noche: {
      ok: false
    }
  }
}
//Guuardar el valor de la propiedad color en una constante
const color = animal.color
const nombre = animal.nombre
console.log("color: " + color + ", animal: " + nombre);*/


const animal = {
  color: "azul",
  nombre: "Torogoz",
  volando: true
}

//destructuring..
const {color, nombre, volando} = animal

console.log("El " + nombre + " es de color: " + color);

//Arrays indexados
const frutas = ["pera", "manzana", "sandia"];

//destructuring array
const [pera, manzana, sandia,] = frutas;
console.log("A mi me gusta mucho la " + sandia);