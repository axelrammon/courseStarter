var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/axelrammon');
xhr.send(null);

xhr.onreadystatechange = () => {
  if (xhr.readystate === 4) {
    console.log(JSON.parse(xhr.responseText))
  }
}