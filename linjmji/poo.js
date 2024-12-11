class Tarefa {
  constructor(titulo, descricao, prazo, disciplina) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.prazo = prazo;
    this.disciplina = disciplina;
    this.status = "Pendente";
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  detalhes() {
    return `
        <strong>${this.titulo}</strong> (${this.status})<br>
        Descrição: ${this.descricao}<br>
        Prazo: ${this.prazo}<br>
        Disciplina: ${this.disciplina}`;
  }
}

class TarefaTeorica extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numPaginas) {
    super(titulo, descricao, prazo, disciplina);
    this.numPaginas = numPaginas;
  }
}

class TarefaPratica extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numExercicios) {
    super(titulo, descricao, prazo, disciplina);
    this.numExercicios = numExercicios;
  }
}

class TarefaRevisao extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numRevisoes) {
    super(titulo, descricao, prazo, disciplina);
    this.numRevisoes = numRevisoes;
  }
}

let listaTarefas = [];

function adicionarTarefa() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const prazo = document.getElementById("prazo").value;
  const disciplina = document.getElementById("disciplina").value;
  const tipo = document.getElementById("tipo").value;

  let novaTarefa;

  if (tipo === "teorica") {
    novaTarefa = new TarefaTeorica(titulo, descricao, prazo, disciplina, 0);
  } else if (tipo === "pratica") {
    novaTarefa = new TarefaPratica(titulo, descricao, prazo, disciplina, 0);
  } else {
    novaTarefa = new TarefaRevisao(titulo, descricao, prazo, disciplina, 0);
  }

  listaTarefas.push(novaTarefa);
  exibirTarefas();
  limparCampos();
}

function exibirTarefas() {
  const listaTarefasDiv = document.getElementById("listaTarefas");
  listaTarefasDiv.innerHTML = "";

  listaTarefas.forEach((tarefa, index) => {
    const tarefaItem = document.createElement("div");
    tarefaItem.classList.add("task-item");
    tarefaItem.innerHTML = `
            ${tarefa.detalhes()}<br>
            <button onclick="alterarStatus(${index})">Marcar como Concluída</button>
            <button onclick="removerTarefa(${index})">Remover</button>
        `;
    listaTarefasDiv.appendChild(tarefaItem);
  });
}

function alterarStatus(index) {
  listaTarefas[index].alterarStatus("Concluída");
  exibirTarefas();
}

function removerTarefa(index) {
  listaTarefas.splice(index, 1);
  exibirTarefas();
}

function limparCampos() {
  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("prazo").value = "";
  document.getElementById("disciplina").value = "";
  document.getElementById("tipo").value = "teorica";
}
function parabens(){
    let ctn = document.querySelector(".container")
    let btn = document.createElement("button");
    btn.textContent = "Concluir Projeto"
    btn.addEventListener("click",()=>{
        let img = document.createElement("img")
        img.src ="https://lh3.googleusercontent.com/a-/ALV-UjXtqpwdajT7AoA-GYyhxLBnDLHW4zN9PNFHtoVoVV2AwzY_mOw=s2048-c";
        img.style.maxWidth = "100%"
        let msg = document.createElement("h3")
        msg.innerHTML = "PARABENS VOCE CONCLUIU A TAREFA";
    }
)

    ctn.appendChild(btn)
}
parabens()