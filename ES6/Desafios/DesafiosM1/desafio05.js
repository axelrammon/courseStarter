//  Execício 5.1

//  Execício 5.1.1

const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log("");
console.log("Execício 5.1.1");
console.log("");
console.log(x);
console.log(y);

//  Execício 5.1.2

const soma = (...numeros) => {
  return numeros.reduce((total, next) => {
    return total + next;
  });
}

console.log("");
console.log("Execício 5.1.2");
console.log("");
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//  Execício 5.2

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: "Lontras" } };

console.log("");
console.log("Execício 5.2");
console.log("");
console.log(usuario2);
console.log("");
console.log(usuario3);