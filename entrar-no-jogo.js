function entrarPartidaPublica() {
    let nickname = document.getElementById("nickname").value;
    if (nickname === "") {
        alert("Por favor, insira seu nickname!");
        return;
    }
    window.location.href = "index.html";
}

function mostrarCampoPrivado() {
    document.getElementById("partidaPrivada").classList.remove("hidden");
    document.getElementById("criarSala").classList.add("hidden");
    document.getElementById("senhaSala").classList.add("hidden");
}

function entrarSalaPrivada() {
    let nickname = document.getElementById("nickname").value;
    let codigo = document.getElementById("codigoSala").value;
    if (nickname === "" || codigo === "") {
        alert("Por favor, insira seu nickname e código da sala!");
        return;
    }
    alert(`${nickname} entrou na sala privada ${codigo}`);
}

function mostrarCriarSala() {
    document.getElementById("criarSala").classList.remove("hidden");
    document.getElementById("partidaPrivada").classList.add("hidden");
    document.getElementById("senhaSala").classList.add("hidden");
}

function criarSalaComSenha() {
    document.getElementById("senhaSala").classList.remove("hidden");
}

function criarSalaSemSenha() {
    let nickname = document.getElementById("nickname").value;
    if (nickname === "") {
        alert("Por favor, insira seu nickname!");
        return;
    }
    alert(`${nickname} criou uma sala sem senha!`);
}

function CriacaoSala() {
    let nickname = document.getElementById("nickname").value;
    let senha = document.getElementById("senha").value;
    if (nickname === "" || senha === "") {
        alert("Por favor, insira seu nickname e uma senha!");
        return;
    }
    alert(`${nickname} criou uma sala com senha: ${senha}`);
}
/*
function salaCriada {
    window.location.href = "index.html";
}*/