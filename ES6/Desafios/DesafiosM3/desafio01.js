// Função delay aciona o .then após 1s

const delay = (sec) => new Promise(resolve => {
  setTimeout(() => {
    resolve(`${sec}s`);
  }, 1000)
});

async function umPorSegundo() {
  console.log(await delay(1));
  console.log(await delay(2));
  console.log(await delay(3));
}

umPorSegundo();