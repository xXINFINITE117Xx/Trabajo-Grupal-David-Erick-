let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "
document.addEventListener('DOMContentLoaded', function() {
    const commentTextarea = document.getElementById('comment');
    const counterElement = document.getElementById('counter');
    const submitCommentButton = document.getElementById('submit-comment');
// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
commentTextarea.addEventListener('input', function() {
    const charCount = this.value.length;
    counterElement.textContent = 255 - charCount;
  });
// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log(msg.toLowerCase())
// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
commentTextarea.addEventListener('input', function() {
    const commentText = this.value.toLowerCase();
    const containsFiltro = commentText.includes('filtro');
    if (containsFiltro) {
      console.log(true);
    }
  });
// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
if (msg.includes('ejercicios')===true){
  console.log('ejercicios');
}else {
  console.log('esta palabra no se encuentra en la cadena de texto');
}
// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
submitCommentButton.addEventListener('click', function() {
    const commentText = commentTextarea.value;
    const commentTextModified = commentText.replace(/ /g, '-');
    console.log(commentTextModified);
  });
});
// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.


// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes (David Gaona Henao-Erick Arias Cardona)