const mariov = document.getElementById('mario')
const tubov = document.getElementById('tubo')

function pular(){
    
    mario.style.animation='animacaopulo 500ms linear'
    
        removeranimacao = function() {
        mario.style.animation = ''
        mario.removeEventListener('animationend', removeranimacao)
      }
      mario.addEventListener('animationend', removeranimacao)
}
 

const loop = setInterval(function(){
    if(parseInt(tubo.style.left)<= 145){
        tubo.style.animation=''
    }
}, 50)

 document.addEventListener('keydown', pular)