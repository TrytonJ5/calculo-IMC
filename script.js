function pesoIdeal(valorImc){
    if(valorImc < 18.5){
        return " abaixo do peso ideal"
    }else if(valorImc < 25){
        return " peso ideal"
    }else if(valorImc < 30){
        return " peso acima do ideal"
    }else{
        return " obesidade"
    }
}

function calculaImc(){
    var altura = parseFloat(document.getElementById("idAltura").value);
    var peso = parseFloat(document.getElementById("idPeso").value);

    var imc = peso / (altura * altura);

    document.getElementById("idSpan").innerText = "o seu imc é " + imc.toFixed(1) + pesoIdeal(imc);
}