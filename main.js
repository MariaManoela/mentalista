var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    let elementoResultado = document.getElementById('resultado')
    let chute = parseInt(document.getElementById('valor').value)

    if(chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!"
    } else if (chute < 0 || chute > 10) {
        elementoResultado.innerHTML = "Digite um número de 0 a 10!"
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Você errou! O número secreto é maior que " + chute
    } else {
        elementoResultado.innerHTML = "Você errou! O número secreto é menor que " + chute
    }
}
