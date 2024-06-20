function calcularImc(altura, peso){
    return (peso / (altura ** 2));
}

function calculaFatorial(numero){
    let fatorial = 1;
    while(numero > 0){
        fatorial *= numero;
        numero--;
    }
    return fatorial;
}

function converteEmDolar(valor){
    return (valor * 4.8);
}

function calculrAreaRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);

    alert(`A Área da sala Retangular é de ${area} e seu Perimetro é de ${perimetro}`);
}

function calcularAreaCircular(raio){
    let pi = 3.14;
    let area = pi * (raio ** 2);
    let perimetro = 2 * pi * raio;

    alert(`A Área da sala Circular é de ${area} e seu perimetro é de ${perimetro}`);
}

function mostrarTabuadaDoValor(valor){
    let mensagem = "";
    for (let i = 0; i < 10; i++) {
        mensagem += `${valor} * ${i} = ${valor * i}\n`;
    }
    alert(mensagem);
}