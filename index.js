// Selecionando os elementos necessários
const tarefaInput = document.getElementById("tarefa");
const etiquetaInput = document.getElementById("etiqueta");
const listaTarefa = document.querySelector(".lista-tarefa ul"); // Selecionando a <ul> dentro da div "lista-tarefa"

// Função para adicionar uma nova tarefa
function adicionar() {
    const nomeTarefa = tarefaInput.value.trim(); // Nome da tarefa inserido pelo usuário
    const etiqueta = etiquetaInput.value.trim(); // Etiqueta inserida pelo usuário

    // Verifica se o campo está vazio
    if (nomeTarefa === "") {
        alert("Por favor, adicione o nome da tarefa.");
        return;
    }

    // Criando o elemento <li> da tarefa
    const novaTarefa = document.createElement("li");

    // Criando o conteúdo do <li> dinamicamente
    novaTarefa.innerHTML = `
        ${nomeTarefa}
        <div class="col-texs">
            <div class="status">
                <p>${etiqueta || "Sem etiqueta"}</p>
            </div>
            <div class="data">
                <p>Criado em: ${new Date().toLocaleDateString()}</p>
            </div>
        </div>
        <div class="button-conclui">
            <input type="button" value="Concluir" onclick="concluirTarefa(this)">
        </div>
    `;

    // Adicionando o novo <li> à lista de tarefas
    listaTarefa.appendChild(novaTarefa);

    // Limpa os campos de entrada após adicionar a tarefa
    tarefaInput.value = "";
    etiquetaInput.value = "";
}

// Função para concluir uma tarefa
function concluirTarefa(botao) {
    const tarefa = botao.closest("li"); // Seleciona o <li> mais próximo
    tarefa.classList.add("concluida"); // Adiciona a classe "concluida" para estilização

    
    botao.value = "✓";
    botao.style.backgroundColor = "#00D8A7"
    botao.style.width = "52px"
    botao.style.height = "52px"
    botao.style.borderRadius = "25px"
    botao.style.left = "-90px"
    

    
    ajustarPosicao(botao);

    
    
    atualizarContador();
}



function ajustarPosicao(botao) {
    if (window.innerWidth <= 400) {
        botao.style.position = "absolute"; // Garante que o posicionamento funcione
        botao.style.right = "-40px"; // Ajuste fino para telas pequenas
    } else if (window.innerWidth <= 600) {
        botao.style.right = "-30px"; // Ajuste intermediário
    } else {
        botao.style.right = "-58px"; // Posição padrão para telas grandes
    }
}

// Atualiza a posição dos botões ao redimensionar a tela
window.addEventListener("resize", () => {
    document.querySelectorAll(".concluida input[type='button']").forEach(ajustarPosicao);
});







// Função para atualizar o contador de tarefas concluídas
function atualizarContador() {
    const totalConcluidas = document.querySelectorAll(".lista-tarefa li.concluida").length; // Conta as tarefas concluídas
    document.querySelector("footer p").textContent = `${totalConcluidas} tarefa(s) concluída(s)`; // Atualiza o rodapé
}
