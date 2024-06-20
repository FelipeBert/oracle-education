let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentivas = 0;

mensagemInicial();

function verificarChute(){
    tentivas++;
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let palavraTentivas = tentivas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você Descobriu o Numero Secreto em ${tentivas} ${palavraTentivas}!`;
        modificaCampo('h1', 'Acertou');
        modificaCampo('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            modificaCampo('p', 'O Numero Secreto é menor');
        } else{
            modificaCampo('p', 'O Numero Secreto é maior');
        }
        limparCampo();
    }
}

function mensagemInicial(){
    modificaCampo('h1', "Jogo do Numero Secreto");
    modificaCampo('p', "Escolha um numero entre 1 e 10: ");
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaList = listaNumerosSorteados.length;

    if(quantidadeDeElementosDaList == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function modificaCampo(tag, texto){
    let camp = document.querySelector(tag);
    camp.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 0;
    mensagemInicial();
}