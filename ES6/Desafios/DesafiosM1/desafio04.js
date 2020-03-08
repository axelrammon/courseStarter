//  Execício 4.1

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

const { nome, endereco: {cidade, estado} } = empresa;

console.log("");
console.log("Exercício 4.1");
console.log("");
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//  Execício 4.2

const mostraInfo = ({nome, idade}) => {
  return `${nome} tem ${idade} anos.`;
}

console.log("");
console.log("Exercício 4.2");
console.log("");
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));