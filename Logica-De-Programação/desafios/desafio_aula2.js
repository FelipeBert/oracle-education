// Funções do Desafio de Codigo sobre utilização de funções, parametros e retorno.

function saudacao(nome){
    console.log(`Olá ${nome}!`);
}

function retornaDobro(valor){
    return (valor * 2);
}

function calcularMedia(valor1, valor2, valor3){
    return ((valor1 + valor2 + valor3) / 3);
}

function retornarMaior(valor1, valor2){
    if(valor1 > valor2){
        return valor1;
    }
    return valor2;
}

function quadradoDoValor(valor){
    return (valor * valor);
}