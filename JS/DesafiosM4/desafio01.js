function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      resolve("Maior de idade");
    } else {
      reject("Menor de idade");
    }
  })
}

checaIdade(23)
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  });