class Tarefa {
  constructor(titulo, descricao, prazo, disciplina) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.prazo = prazo;
    this.disciplina = disciplina;
    this.status = "Pendente";
    this.tipo = document.getElementById("tipo").value;
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  detalhes() {
    return `
        <strong>${this.titulo}</strong> (${this.status})<br>
        Descrição: ${this.descricao}<br>
        Prazo: ${this.prazo}<br>
        Disciplina: ${this.disciplina}<br>
        Tipo: ${this.tipo}`;
  }
}

class TarefaTeorica extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numPaginas) {
    super(titulo, descricao, prazo, disciplina);
    this.numPaginas = numPaginas;
  }
  detalhes() {
    return `${super.detalhes()}<br>
    Numero de Paginas: ${this.numPaginas}`;
  }
}

class TarefaPratica extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numExercicios) {
    super(titulo, descricao, prazo, disciplina);
    this.numExercicios = numExercicios;
  }
  detalhes() {
    return `${super.detalhes()}<br>
        Numero de Exericios: ${this.numExercicios}`;
  }
}

class TarefaRevisao extends Tarefa {
  constructor(titulo, descricao, prazo, disciplina, numRevisoes) {
    super(titulo, descricao, prazo, disciplina);
    this.numRevisoes = numRevisoes;
  }
  detalhes() {
    return `${super.detalhes()}<br>
        Numero Revisoes: ${this.numRevisoes}`;
  }
}

let listaTarefas = [];
function atualizarPlaceholder() {
  const tipo = document.getElementById("tipo").value;
  const numInput = document.getElementById("num");

  if (tipo === "teorica") {
    numInput.placeholder = "Número de Páginas";
  } else if (tipo === "pratica") {
    numInput.placeholder = "Número de Exercícios";
  } else if (tipo === "revisao") {
    numInput.placeholder = "Número de Revisões";
  }
}
function adicionarTarefa() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const prazo = document.getElementById("prazo").value;
  const disciplina = document.getElementById("disciplina").value;
  const tipo = document.getElementById("tipo").value;
  const num = document.getElementById("num").value;


  if (!titulo || !descricao || !prazo || !disciplina || !num) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  let novaTarefa;

 
  if (tipo === "teorica") {
    novaTarefa = new TarefaTeorica(titulo, descricao, prazo, disciplina, num);
  } else if (tipo === "pratica") {
    novaTarefa = new TarefaPratica(titulo, descricao, prazo, disciplina, num);
  } else if (tipo === "revisao") {
    novaTarefa = new TarefaRevisao(titulo, descricao, prazo, disciplina, num);
  }

  listaTarefas.push(novaTarefa); 
  exibirTarefas();
  limparCampos();
}

function exibirTarefas() {
  const listaTarefasDiv = document.getElementById("listaTarefas");
  listaTarefasDiv.innerHTML = ""; 

  listaTarefas.forEach((tarefa, indice) => {
    const tarefaItem = document.createElement("div");
    tarefaItem.classList.add("task-item");
    tarefaItem.innerHTML = `
            ${tarefa.detalhes()}<br>
            <button onclick="alterarStatus(${indice})">Marcar como Concluída</button>
            <button onclick="removerTarefa(${indice})">Remover</button>
        `;
    listaTarefasDiv.appendChild(tarefaItem);
  });
}

function alterarStatus(indice) {
  listaTarefas[indice].alterarStatus("Concluída");
  exibirTarefas();
}

function removerTarefa(indice) {
  listaTarefas.splice(indice, 1);
  exibirTarefas();
}

function limparCampos() {
  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("prazo").value = "";
  document.getElementById("disciplina").value = "";
  document.getElementById("tipo").value = "teorica";
  document.querySelector("#num").value = undefined;
  atualizarPlaceholder()
}

function parabens() {
  let ctn = document.querySelector(".container");
  let btn = document.createElement("button");
  btn.textContent = "Concluir Projeto";
  btn.addEventListener("click", () => {
    if (!ctn.querySelector("img") && !ctn.querySelector("h3")) {
      let img = document.createElement("img");
      img.src =
        "https://lh3.googleusercontent.com/a-/ALV-UjXtqpwdajT7AoA-GYyhxLBnDLHW4zN9PNFHtoVoVV2AwzY_mOw=s2048-c";
      img.style.maxWidth = "100%";
      let msg = document.createElement("h3");
      msg.innerHTML = "PARABENS VOCE CONCLUIU O PROJETO!";
      ctn.appendChild(msg);
      ctn.appendChild(img);
    }
  });
  ctn.appendChild(btn);
}
parabens();
