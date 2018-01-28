export const generate = () => {
    var randomized = Math.ceil(Math.random() * Math.pow(10,10));//Cria um número aleatório do tamanho definido em size.
    var digito = Math.ceil(Math.log(randomized));//Cria o dígito verificador inicial
    while(digito > 10){//Pega o digito inicial e vai refinando até ele ficar menor que dez
        digito = Math.ceil(Math.log(digito));
    }
    var id = randomized + '' + digito;//Cria a ID

    return id
}