function pular(){
    
    mario.style.animation='animacaopulo 500ms linear'
    
        removeranimacao = function() {
        mario.style.animation = ''
        mario.removeEventListener('animationend', removeranimacao)
      }
      mario.addEventListener('animationend', removeranimacao)
}

setInterval(function hitbox(){
  let tubo= document.getElementById('tubo')
  let mario= document.getElementById('mario')
  let posicao_tubo= tubo.offsetLeft
  let posicao_mario= mario.offsetTop
  if(posicao_tubo <=145 && posicao_tubo >= -40 && posicao_mario >=315){
      tubo.style.animation = 'none'
      tubo.style.left = '145px'
    }
},50)
      
 document.addEventListener('keydown', pular) 
