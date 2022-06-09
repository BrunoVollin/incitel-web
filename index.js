function calcImc(e) {
    e.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    document.getElementById("imc").innerHTML = 'IMC: '+ imc.toFixed(2);

    let classificacao = getClasificacao(imc);
    document.getElementById("clasificacao").innerHTML = 'CLASIFICAÇÃO: '+ classificacao;
}

function getClasificacao(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso';
    } else if(imc < 25) {
        return 'Peso normal';
    } else if(imc < 30) {
        return 'Sobrepeso';
    } else if(imc < 35) {
        return 'Obesidade grau I';
    } else if(imc < 40) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}