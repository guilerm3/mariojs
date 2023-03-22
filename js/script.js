function pular(){
  mario.style.animation='animacaopulo 500ms linear'
    removeranimacao = function() { //Faz o reset para poder acionar a animação novamente
      mario.style.animation = ''
        mario.removeEventListener('animationend', removeranimacao)
      }
      mario.addEventListener('animationend', removeranimacao)
}

setInterval(function engine(){
  let posicao_tubo= tubo.offsetLeft
  let posicao_mario= mario.offsetTop
  let posicao_nuvens = nuvem.offsetLeft
  if(posicao_tubo <=145 && posicao_tubo >= -40 && posicao_mario >=315){ //Condição que para todas as animações
      tubo.style.animation = 'none'
      rolagem.style.animation = 'none'
      nuvem.style.left=`${posicao_nuvens}px`
      tubo.style.left = `${posicao_tubo}px`
      mario.src='img/esqueleto.png'
      mario.style.top='485px'
      botao.style.animation='animacaoopacidade 1s infinite'
      clearInterval(engine)
    } 
},50)

function placar(){
  let contador=0
  let tubo=document.getElementById('tubo')
  let placar=document.getElementById('placar')
  tubo.addEventListener('animationiteration', ()=>{
    contador++
    placar.innerHTML=contador
  })
}

 window.addEventListener('load', placar);   
 document.addEventListener('keydown', pular) 
 document.addEventListener('touchstart', pular) 
