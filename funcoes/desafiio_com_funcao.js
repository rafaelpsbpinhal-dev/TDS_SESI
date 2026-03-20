/*
Atalho comentário de várias linhas:
alt + shift = A 

Desafio:
Criar uma funcão que recebe preço e desconto em % 
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade 
e mostre o calor total da compra.

*/

function calcularDesconto (preco, desconto) {
    const valorFinal = preco - (preco * (desconto / 100)) ;
    console.log(`o valor final do produto foi de : ${valorfinal}`);
}
        
calcularDesconto(1000, 5);

function calculartotal (preco, quantidade) {
    const valortotal = preco - preco * quantidade;
    console.log(`o valor total é de : ${valorfinal}`);
}

calculartotal(100,12);
