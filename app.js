//Creamos una funcion con el async y dentro de el la URL de Jsonplaceholder

//Los awaint iran bloqueando lineas de codigo hasta que no se cumpla un async
async function leerTodos(){
    const Respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    //procese cuando la respuesta este terminada
    const datos = await Respuesta.json();

    return datos;
}
//un async es siempre una promise del async con el awaint
leerTodos().then(usuarios=> console.log(usuarios))

