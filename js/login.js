function login() {
  const nomeUsuario = "Eduardo";
  const senhaUsuario = "senha";

  const usuario = prompt("Digite o nome do usuario: ");
  const senha = prompt("Digite a senha: ");

  if(usuario === nomeUsuario && senha === senhaUsuario) {
    alert("Você está cadastrado!");
  } else {
    alert("Você não está cadastrado!");
  }
}