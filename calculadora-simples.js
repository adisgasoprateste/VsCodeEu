// calculadora.js

const readline = require('readline');

// Cria interface de entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Calculadora JavaScript ===");
console.log("Use operadores: +  -  *  /  %");
console.log("Digite 'sair' para encerrar.\n");

function calcular(expressao) {
  try {
    // Evita código malicioso e limita o uso a números e operadores básicos
    if (!/^[0-9+\-*/.%() ]+$/.test(expressao)) {
      throw new Error("Expressão inválida!");
    }
    const resultado = eval(expressao);
    return resultado;
  } catch (e) {
    return "Erro: " + e.message;
  }
}

function perguntar() {
  rl.question("Digite uma expressão: ", (entrada) => {
    if (entrada.toLowerCase() === "sair") {
      console.log("Encerrando calculadora...");
      rl.close();
      return;
    }

    const resultado = calcular(entrada);
    console.log(`Resultado: ${resultado}\n`);
    perguntar();
  });
}

perguntar();