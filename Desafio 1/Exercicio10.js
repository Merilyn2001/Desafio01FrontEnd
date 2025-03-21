function exercicio10() {
    let numero = 5;
    let chute;
    while (chute != numero) {
        chute = prompt('Escolha um número entre 1 e 5');
        if (chute == numero) {
            break;
        } else {
            alert('Tente novamente.');
        }
    }
}