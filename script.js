//1)

/* let elemento = document.querySelector('.container')

elemento.addEventListener('mousedown', function(){

  console.log('Apareceu')

  document.querySelector('#texto').innerText = 'apareceu'

}) */

//2)

/* let elemento = document.querySelector('#texto').addEventListener('mouseup', function(){

  document.querySelector('#texto').innerText = 'mudou'

}) */

//3)

/* document.querySelector('#botao').addEventListener('click', function(){

   alert('Voce apertou o botão')

}) */

//4

/* document.querySelector('.container').addEventListener('dblclick', function(){

   let elemento = document.querySelector('.container')

   elemento.style.backgroundColor = 'red'

}) */

//5)

/* const mouseArea = document.getElementById('mouseArea');

mouseArea.addEventListener('mousemove', function(event) {
    
    const x = event.offsetX;  // Posição X relativa ao div
    const y = event.offsetY;  // Posição Y relativa ao div

    mouseArea.textContent = `Coordenadas: X = ${x}, Y = ${y}`;
}); */

//6)

/* document.querySelector('.container').addEventListener('mouseenter', function(){

 
    document.querySelector('.container').style.backgroundColor = 'orange'

}) */

//7)

let elemento = document.querySelector('.arrastar')
let agarrando = false

elemento.addEventListener('mousedown', function(){

  agarrando = true

})

document.addEventListener('mousemove', function(e) {
    if (agarrando) {
     
        elemento.style.left = `${e.pageX - 50}px`;
        elemento.style.top = `${e.pageY - 50}px`;
    }
});

elemento.addEventListener('mouseup', function(){

  agarrando = false

})