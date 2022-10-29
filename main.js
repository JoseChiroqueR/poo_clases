// Programacion Orientada a objetos (POO)
  // La Programación Orientada a Objetos (POO, o en inglés OOP) es un estilo de programación muy utilizado, donde creas y utilizas estructuras de datos de una forma muy similar a la vida real, lo que facilita considerablemente la forma de planificar y preparar el código de tus programas o aplicaciones.

/*   let persona = {
    nombre: 'Samuel',
    Apellido: 'Lopez',
    edad: 35,
    'que hace?': 'es programador'
  } */

  // Funciones Constructoras -> La función constructora es la versión de JavaScript de una clase. Un nombre de función constructora generalmente comienza con una letra mayúscula — esta convención se utiliza para hacer que las funciones constructoras sean más fáciles de reconocer en el código.

  // function Animal(nombre, genero, nacimiento){
  //   this.nombre = nombre;
  //   this.genero = genero;
  //   this.edad = 8;
  //   this.nacimiento = nacimiento;
  //   this.saludar = function(){
  //     return `Hola, mi nombre es ${this.nombre} y soy ${this.genero}`
  //   }
  // }

  // const animalUno = new Animal('Jack', 'Macho', '02/02/2016')
  // console.log(animalUno)
  // // console.log(animalUno.saludar())

  // const animalDos = new Animal('Chocolate', 'Hembra', '01/01/2018')
  // console.log(animalDos)
  // console.log(animalDos.saludar())

  // console.log(animalUno.hasOwnProperty('edad'))
  // console.log(animalUno.hasOwnProperty('nombre'))


/*   function Animal(nombre, genero, nacimiento){
    this.nombre = nombre;
    this.genero = genero;
    this.tipo = 'perros';
    this.nacimiento = nacimiento;
  }
  
  Animal.prototype.saludar = function(){
    return `Hola, mi nombre es ${this.nombre} y soy ${this.genero}`
  }



  const animalUno = new Animal('Jack', 'Macho', '02/02/2016')
  console.log(animalUno)
  console.log(animalUno.saludar())
  
  const animalDos = new Animal('Chocolate', 'Hembra', '01/01/2018')
  console.log(animalDos)
  console.log(animalDos.saludar())
  console.log(animalDos.hasOwnProperty('edad'))


  function Animal2(nombre, genero, nacimiento){
    this.nombre = nombre;
    this.genero = genero;
    this.tipo = 'gatos';
    this.nacimiento = nacimiento;
  } */

  // Clases
   // Una clase es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden crear objetos de programación, cada uno con sus características concretas.

/*   class Animal{
    constructor(nombre, genero){
      this.nombre = nombre,
      this. genero = genero
    }

    saludaremos(){
      return `Hola, mi nombre es ${this.nombre} y soy ${this.genero}`
    }
  }

  const animalUno = new Animal('Jack', 'Macho', '02/02/2016')
  console.log(animalUno)
  console.log(animalUno.saludaremos())
  
  const animalDos = new Animal('Chocolate', 'Hembra', '01/01/2018')
  console.log(animalDos)
  console.log(animalDos.saludaremos()) */

  // DOM
    // Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM). En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.title)
document.write("<h2>Hola mundo desde el Dom</h2>")