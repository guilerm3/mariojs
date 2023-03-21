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
  let nuvem= document.getElementById('nuvem')
  let posicao_tubo= tubo.offsetLeft
  let posicao_mario= mario.offsetTop
  let posicao_nuvens = nuvem.offsetLeft
  if(posicao_tubo <=145 && posicao_tubo >= -40 && posicao_mario >=315){
      tubo.style.animation = 'none'
      nuvem.style.left=`${posicao_nuvens}px`
      tubo.style.left = `${posicao_tubo}px`
      mario.src='img/esqueleto.png'
      mario.style.top='485px'
      clearInterval(hitbox)
    }
},50)


      
 document.addEventListener('keydown', pular) 
