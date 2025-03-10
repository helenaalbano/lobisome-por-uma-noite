let jogadores = [];
let cartas = ["Lobisomem", "Aldeão", "Vidente", "Caçador", "Aldeão"];

function adicionarJogador() {
    let nome = document.getElementById("nomeJogador").value.trim();
    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    if (jogadores.length >= 5) {
        alert("Máximo de 5 jogadores!");
        return;
    }

    jogadores.push({ nome: nome, carta: null, votos: 0 });
    atualizarListaJogadores();
    document.getElementById("nomeJogador").value = "";
}

function atualizarListaJogadores() {
    let lista = document.getElementById("listaJogadores");
    lista.innerHTML = "";

    jogadores.forEach(jogador => {
        let li = document.createElement("li");
        li.textContent = jogador.nome;
        lista.appendChild(li);
    });
}

function iniciarJogo() {
    if (jogadores.length < 3) {
        alert("Precisamos de pelo menos 3 jogadores!");
        return;
    }

    distribuirCartas();
    document.getElementById("entrada").style.display = "none";
    document.getElementById("iniciarJogo").style.display = "none";
    document.getElementById("jogo").style.display = "block";

    let nomeJogador = jogadores[0].nome;  
    let minhaCarta = jogadores[0].carta;  
    document.getElementById("minhaCarta").textContent = `${nomeJogador}, você é ${minhaCarta}`;

    iniciarContagem();
    mostrarOpcoesVotacao();
}

function distribuirCartas() {
    let cartasEmbaralhadas = [...cartas];
    jogadores.forEach(jogador => {
        let indice = Math.floor(Math.random() * cartasEmbaralhadas.length);
        jogador.carta = cartasEmbaralhadas.splice(indice, 1)[0];
    });
}

function iniciarContagem() {
    let tempo = 10;
    let timerElement = document.getElementById("timer");

    let intervalo = setInterval(() => {
        timerElement.textContent = `Tempo restante: ${tempo} segundos`;
        tempo--;

        if (tempo < 0) {
            clearInterval(intervalo);
            alert("Tempo acabou! Hora de votar!");
        }
    }, 1000);
}

function mostrarOpcoesVotacao() {
    let listaVotos = document.getElementById("opcoesVoto");
    listaVotos.innerHTML = "";

    jogadores.forEach(jogador => {
        let li = document.createElement("li");
        let btn = document.createElement("button");
        btn.textContent = jogador.nome;
        btn.onclick = () => votar(jogador.nome);
        li.appendChild(btn);
        listaVotos.appendChild(li);
    });
}

function votar(nomeVotado) {
    let jogador = jogadores.find(j => j.nome === nomeVotado);
    if (jogador) {
        jogador.votos++;
        alert(`Voto registrado para ${nomeVotado}`);
    }
}

function finalizarVotacao() {
    let maisVotado = jogadores.reduce((a, b) => (a.votos > b.votos ? a : b));
    alert(`${maisVotado.nome} foi eliminado! Ele era ${maisVotado.carta}`);

    if (maisVotado.carta === "Lobisomem") {
        alert("Os aldeões venceram!");
    } else {
        alert("O Lobisomem venceu!");
    }

    location.reload();  
}
