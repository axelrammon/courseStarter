class Usuario {
  constructor(email, senha, admin) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    if (this.admin === true) {
      return true;
    } else {
      return false;
    }
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const u = new Usuario('asfnoaf', 'senha');
const a = new Admin('afdadff', 'sefada');

console.log(u.isAdmin());
console.log(a.isAdmin());