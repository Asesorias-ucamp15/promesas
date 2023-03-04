//* Las promesas pueden ser usadas para evaluar cosas
let x = 10

const igualdad = new Promise((resolve, reject) => {
  if(x === 10){
    resolve('la variable es igual a 10')
  } else {
    reject('la variable no es igual a 10')
  }
})

//* Aqui recibimos el resultado de la promesa y en caso de haber algún error podremos manejarlo
igualdad .then(res => {
  console.log('success: ', res)
})

.catch(err => {
  console.log('error: ', err)
})

//* Aquí ejecutaremos un método asíncrono que nos devolverá un valor erroneo

// console.log('1 proceso iniciado...')

// setTimeout(() => {
//   x = x * 3 + 2
//   console.log('proceso terminado...')
// }, 3000)

// console.log('3 el resultado es ', x)

//* Esto lo podemos corregir ingresando el proceso a una funcipón asíncrona
const proceso = new Promise((resolve, reject) => {
  console.log('1 proceso iniciado...')
  setTimeout(() => {
    x = x * 3 + 2
    console.log('proceso terminado...')
    resolve(x)
  }, 3000)
})

proceso.then(r => {
  console.log('3 el resultado es ', r)
})

const usuarios = [
  {id: 1, nombre: 'Juan'},
  {id: 2, nombre: 'Pedro'},
  {id: 3, nombre: 'Maria'},
  {id: 4, nombre: 'Ana'},
  {id: 5, nombre: 'Jose'},
  {id: 6, nombre: 'Luis'}
]

const obtenerUsuario = async(id) => {
  if(id > usuarios.length){
    throw new Error('El usuario no existe')
  }else {
    const usuario = await usuarios.find(u => u.id === id)
    console.log('El usuario es ', usuario)
  }
}

obtenerUsuario(2)