function pular(){
    mario = document.getElementById('mario')
    mario.style.animation='animacaopulo 500ms linear'
    

    //Remove a animação para realizar o pulo novamente (SÓ QUE NÃO)
    //setTimeout(mario.style.animation='' ,600)
 }
 
 document.addEventListener('keydown', pular)