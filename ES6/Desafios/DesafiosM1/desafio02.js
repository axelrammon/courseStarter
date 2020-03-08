const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//  Execício 2.1
const idades = usuarios.map(item => item.idade);

console.log("");
console.log("Exercício 2.1");
console.log(idades);

//  Execício 2.2

const maioresRocketseat = usuarios.filter((item) => {
  return item.empresa === 'Rocketseat' && item.idade >= 18;
});

console.log("");
console.log("Exercício 2.2");
console.log(maioresRocketseat);

//  Execício 2.3

const trabalhaGoogle = usuarios.find((item) => {
  return item.empresa === 'Google'
});

console.log("");
console.log("Exercício 2.3");
console.log(trabalhaGoogle);

//  Execício 2.4

const multIdadePor2 = usuarios.map(item => {
  item.idade = item.idade * 2;
  return item;
});

const filtrarMenoresQue50 = usuarios.filter(item => item.idade <= 50);

console.log("");
console.log("Exercício 2.4");
console.log(filtrarMenoresQue50);
console.log("");
