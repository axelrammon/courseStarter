axios.get('https://api.github.com/users/axelrammon')
  .then((response) => {
    console.log(response);
  })
  .catch((erro) => {
    console.log(erro);
  })