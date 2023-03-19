function pular(){
    
    mario.style.animation='animacaopulo 500ms linear'
    
        removeranimacao = function() {
        mario.style.animation = ''
        mario.removeEventListener('animationend', removeranimacao)
      }
      mario.addEventListener('animationend', removeranimacao)
}
 
 document.addEventListener('keydown', pular) 