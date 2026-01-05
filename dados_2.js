//todo código em .JS é definido por um comando inicial, e um valor, no caso do VAR é o comando var 
// e um identificador que pode ser ou nao atribuido a um valor ou termo
// se quiser quebrar uma linha de codigo muito extensa, tem que realizar a quebra no final do comando
//  ou antes de um sinal (como o +)
// String (Texto) -> sequencia de simbolos/letras
let preco = 19.9;
let desconto = 0.4;

console.log(19.9 * 0.6);

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Dildo";
let categoria = "Sexshop";

console.log("Produto: " + nome 
    + " , " + "Categoria: " + categoria
    + ", Preço: " + preco
    + ", Desconto: " + desconto
    + ", Preço Final: " + precoComDesconto);