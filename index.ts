
let abordar = ( Dato:string , Numero:number ) =>{ //parametros de funciones
 console.log(Dato, Numero);
}
abordar('yh', 5)

function saludar({name, edad}: {name?:string, edad: number}):number{ //objetos
    console.log(`Hols ${name === undefined ? 'Nicol' : name}, tienes ${edad}`);
    return edad
}

saludar({edad: 24}) // Hola Nicol, tienes 24 

const SAyFuncion = (fn: (text: string) => string) => {
    console.log( fn('MIglues puerco') )
}

SAyFuncion( (text) => {
    return text
})

function charlar(mensaje:string){
    console.log(mensaje)
    throw new Error(mensaje)
}

function Create() {
    return {
        planet: 'Tierra',
        city: 'Santa Cruz'
    }
}

type Address = ReturnType<typeof Create>

const miareglo:Array<(string | number | object)> = []

miareglo.push('Hola')
miareglo.push(5)
miareglo.push({Nombre:'Yhordi', age:5})

interface Persona {
    nombre: string;
    ege:number;
}

interface VideoGames extends Persona{
 videoGames: string[]
}

interface Police extends Persona{
    fireGuns: number[];
}


function CorrectWhatHolding( persona:VideoGames) : string[] // tipar dos tipos de datos, sin morir en el intento.
function CorrectWhatHolding( persona:Police) : number[]

function CorrectWhatHolding (persona: any):any  {
  if( persona.videoGames){
    return persona.videoGames;
  } else {
    return persona.fireGuns
  }
}

const policia = {
    nombre: 'Yhordi',
    ege: 24,
    fireGuns: [45112]
}
const persona = {
    nombre: 'Yhordi',
    ege: 24,
    videoGames: ['VTA']
}
let result = CorrectWhatHolding(policia)
let results = CorrectWhatHolding(persona)