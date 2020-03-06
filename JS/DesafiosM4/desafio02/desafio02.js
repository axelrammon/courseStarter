var inputNome = document.querySelector('input');
var btnBuscar = document.querySelector('button');
var listaUl = document.querySelector('ul');



btnBuscar.onclick = () => {

  var userName = inputNome.value;

  listaUl.innerHTML = ''

  axios.get(`https://api.github.com/users/${userName}/repos`)
  .then((response) => {
    var repositorios = response.data;

    for (repo of repositorios) {
      var repoName = repo.name;
      
      var itemLista = document.createElement('li');
      var repositorio = document.createTextNode(repoName);
      
      itemLista.appendChild(repositorio);
      
      listaUl.appendChild(itemLista);

      inputNome.value = '';
    }
    
  }).catch((erro) => {
    console.log(erro);
  });

}
