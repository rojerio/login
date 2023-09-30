const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");
let usuarios = [];

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
if (bancoDeDados == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
} else {
    // Lógica para verificar as credenciais de login
    for (let usuario of bancoDeDados) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você logou!";
            localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href = "./home/home.html"
            break;
        }
    }
    alert(mensagem);
}

}
function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        // Lógica para registrar o usuário
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
if (bancoDeDados == null) {
    bancoDeDados = [];
}
bancoDeDados.push(usuario);
localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
alert("Usuário cadastrado com sucesso!");
        window.location.href="index.html"
    } else {
        alert("As senhas são diferentes!");
    }
    
}