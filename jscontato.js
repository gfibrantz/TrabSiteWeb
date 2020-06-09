function validarForm() {
    var a = document.forms["formulario"]["pnome"].value;
    var b = document.forms["formulario"]["sobrenome"].value;
    var c = document.forms["formulario"]["email"].value;
    var d = document.forms["formulario"]["comment"].value;
    if (a == "") {
        alert("Nome precisa ser preenchido!");
        return false;
    }
    if (b == "") {
        alert("Sobrenome precisa ser preenchido!");
        return false;
    }
    if (c == "") {
        alert("Favor informar um email válido!");
        return false;
    }
    if (d == "") {
        alert("Favor informar um comentário!");
        return false;
    }
}

function alerta() {
    alert("Envie um e-mail para restauracar@yahoo.com informando o seu Telefone!")
}