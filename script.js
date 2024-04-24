// começo da lógica para ter o tamanho e a largura da janela
var largura =0
var altura=0
var vidas =1
var tempo = 15
var nivel = window.location.search // ele te dá tudo que tem dps do ponto de interrogação, incluindo o ponto de interrogação
nivel = nivel.replace('?','')// isso é para tirar o ponto de interrogação
var tempoMosquito = 1500
// precisamos colocar estas variáveis antes, pois se não colocarmos a variável vai 
// ter um escopo somente na funçaõ "ajustarPosicao"


//aqui é só uma sequência de ifs, que serão utilizados para determinar o tempo que uma aplicação irá demorar
//para cada mosquito ficar, no setTime
if(nivel =='normal'){
    tempoMosquito = 1500
}else if(nivel =='dificil'){
    tempoMosquito = 1000
}else if(nivel =='impossivel'){
    tempoMosquito = 750
}
function ajustarPosicao(){
    largura = window.screen.availWidth
    altura = window.screen.availHeight
    console.log(altura, largura)
}
ajustarPosicao()
// final da lógica 
var cronometro = setInterval(function(){
    tempo -=1;
    document.getElementById('cronometro').innerHTML = tempo
    if (tempo <=0){
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    }
}, 1000)
// começo lógica para posicionar o inimigo em posição randômica
function posicionarRandomicamente(){
    var x = Math.floor(Math.random()*largura -90)
    var y = Math.floor(Math.random()*altura -90)
    //fazemos isso por conta que pode aparecer valores negativos no processo acima, logo precismos de algo
    // para lidar com isso
    x= x<0? 0:x
    y=y<0?0:y
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if (vidas<=3){
        document.getElementById('v' + vidas).src ='imagens/coracao_vazio.png'
        }else{
            window.location.href = 'game_over.html'
        }
        vidas++
    }
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.left = x +'px'
    mosquito.style.top =y +'px'
    mosquito.className = designarTamanho() +' '+girarImagem()
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id ='mosquito'//dá para atribuir um id pelo javascript também
    mosquito.onclick = function(){
        this.remove() // o this serve para referenciar-se á si mesmo.
    }
}
//final lógica para posicionar o inimigo em posição randômica

// começo da lógica para a imagem ter tamanho randômicos
function designarTamanho(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
//final da lógica para a imagem ter tamanho randômicos
// começo lógica para a imagem inverter de posição
function girarImagem(){
    var girar = Math.floor(Math.random() * 2)
    switch(girar){
        case 0:
            return 'normal'
        case 1:
            return 'rotacionado'
    }
}
//final da lógica para a imagem inverter de posição