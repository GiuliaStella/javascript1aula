const alunos = ["ana", "carlos", "mariana"];

console.log(`tenho uma lista : ${alunos} e a primeira posicao, usando [0], e : ${alunos[0]}`)

console.log(`a quantidades de itens na lista e ${alunos.lenght}`); // lenght eh o comprimento da ByteLengthQueuingStrategy, pega ate o maximo dela

alunos.push("pedro"); //novo item no final da lista
console.log(`a lista atualizada com .push() fica assim: ${alunos}`);

alunos.unshift("lucas"); //novo item no inicio da lista
console.log(`a lista atualizada com .unshifit() fica assim: ${alunos}`);

alunos.shift(); //remove o primeiro item
console.log(`a lista atualizada com .shift() fica assim: ${alunos}`);

alunos.pop(); //remove o ulyimo item da lista
console.log(`a lista atualizada com .pop() fica assim: ${alunos}`);

alunos.splice(1, 1)//=vai pegar a posicao inicial e a quantidade de itens para ser deletados no caso posicao 1= carlos e quantidade 1=so carlos se fosse 2 apagaria a mariana tambem
console.log(`a lista atualizada com .splice(1, 1) fica assim: ${alunos}`);

alunos.splice(1, 0, "carlos"); //1= inicio na posicao 1, 0= nao removo nada, "carlos"= adiciono carlos
console.log(`a lista atualizada com .splice(1, 0, "carlos") fica assim: ${alunos}`);

const primeiros = alunos.slice(0, 2); //pega o valor do indici inicial e para no valor de indice final, sem pegar o final, nesse caso pega ana e carlos
console.log(`%ctenho uma lista chamada : ${alunos}`, 
    'color: white; background: #oo7bff; padding: 8px; borde-radius: 4px; font-size: 16px;'); //console.log("%ctexto", "CSS qui");
console.log(`usando o .slice(0, 2) na lista alunos, tenho uma nova lista: ${primeiros}`);


// const listaAjustada = alunos.split(" , "); //cria um sepaeador p lista NAO FUNCIONOU NA AULA O PROF EXPLICA DEPOIS
// console.log(`a lista atualizada com .split() fica assim : ${listaAjustada}`);

console.log(`usando .indexOf("carlos") verifico em qual posicao esta esse item: ${alunos.indexOf("carlos")}`);

console.log(`usando .indexOf("pedro") verifico em qual posicao esta esse item: ${alunos.indexOf("pedro")}`); //a resposta e -1 e isso significa que pedro nao esta na lista

const posicao = alunos.indexOf("pedro");
if (posicao == -1 ){
    console.log("aluno nao encontrado!")
}
else{
    console.log(`aluno na posicao: ${posicao}`)
}

const exemploAluno = {
    nome: "ana",
    idade: "18",
    curso: "engenharia"
};
console.log(exemploAluno.nome);

class Aluno {
    constructor(nome, idade, curso){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
};

const aluno1 = new Aluno("lucas", 22, "geografia");
console.log(aluno1);
console.log(`pegando somente o nome: ${aluno1.nome}`);


const Alunos = [
    new Aluno("ana", 17, "dev. web"),
    new Aluno("carlos", 18, "js"),
    new Aluno("mariana", 19, "html"),
];

const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const inputCurso = document.querySelector("#curso");
const inputBusca = document.querySelector("#busca");

const listaAlunos = document.querySelector("#listaAlunos");
const total = document.querySelector("#total");
const mensagem = document.querySelector("#mensagem");

const btnAdicionarFinal = document.querySelector("#btnAdicionarFinal");
const btnAdicionarInicio = document.querySelector("#btnAdicionarInicio");
const btnRemoverPrimeiro = document.querySelector("#btnRemoverPrimeiro");
const btnRemoverUltimo = document.querySelector("#btnRemoverUltimo");

const btnBuscar = document.querySelector("#btnBuscar");
const btnRenoveNome = document.querySelector("#btnRemoverNome");
const btnMostrarParte = document.querySelector("#btnMostrarParte");

function limparCampos() {
  inputNome.value = "";
  inputIdade.value = "";
  inputCurso.value = "";
}

function criarAlunoPelosInputs() {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value);
  const curso = inputCurso.value;

  if (nome === "" || idade === 0 || curso === "") {
    mensagem.innerHTML = "Preencha todos os campos.";
    return null;
  }

  return new Aluno(nome, idade, curso);
}

function mostrarAlunos(lista) {
  listaAlunos.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    const aluno = lista[i];

    const { nome, idade, curso } = aluno;

    listaAlunos.innerHTML += `
      <li>
        <strong>${nome}</strong><br>
        Idade: ${idade}<br>
        Curso: ${curso}
      </li>
    `;
  }

  total.innerHTML = alunos.length;
}

btnAdicionarFinal.addEventListener("click", function () {
  const novoAluno = criarAlunoPelosInputs();

  if (novoAluno !== null) {
    alunos.push(novoAluno);
    mensagem.innerHTML = "Aluno adicionado no final da lista.";
    limparCampos();
    mostrarAlunos(alunos);
  }
});

btnAdicionarInicio.addEventListener("click", function () {
  const novoAluno = criarAlunoPelosInputs();

  if (novoAluno !== null) {
    alunos.unshift(novoAluno);
    mensagem.innerHTML = "Aluno adicionado no começo da lista.";
    limparCampos();
    mostrarAlunos(alunos);
  }
});

btnRemoverPrimeiro.addEventListener("click", function () {
  if (alunos.length > 0) {
    alunos.shift();
    mensagem.innerHTML = "Primeiro aluno removido.";
  } else {
    mensagem.innerHTML = "A lista já está vazia.";
  }

  mostrarAlunos(alunos);
});

btnRemoverUltimo.addEventListener("click", function () {
  if (alunos.length > 0) {
    alunos.pop();
    mensagem.innerHTML = "Último aluno removido.";
  } else {
    mensagem.innerHTML = "A lista já está vazia.";
  }

  mostrarAlunos(alunos);
});

btnBuscar.addEventListener("click", function () {
  const nomeBuscado = inputBusca.value;
  const nomes = [];

  for (let i = 0; i < alunos.length; i++) {
    nomes.push(alunos[i].nome);
  }

  const posicao = nomes.indexOf(nomeBuscado);

  if (posicao === -1) {
    mensagem.innerHTML = "Aluno não encontrado.";
  } else {
    mensagem.innerHTML = `Aluno encontrado na posição ${posicao}.`;
  }
});

btnRemoverNome.addEventListener("click", function () {
  const nomeBuscado = inputBusca.value;
  const nomes = [];

  let contador = 0;

  while (contador < alunos.length) {
    nomes.push(alunos[contador].nome);
    contador++;
  }

  const posicao = nomes.indexOf(nomeBuscado);

  if (posicao === -1) {
    mensagem.innerHTML = "Não foi possível remover. Aluno não encontrado.";
  } else {
    alunos.splice(posicao, 1);
    mensagem.innerHTML = "Aluno removido com sucesso.";
    mostrarAlunos(alunos);
  }
});

btnMostrarParte.addEventListener("click", function () {
  const primeirosAlunos = alunos.slice(0, 2);

  mensagem.innerHTML = "Mostrando apenas os 2 primeiros alunos.";
  mostrarAlunos(primeirosAlunos);
});

mostrarAlunos(alunos);

//https://github.com/ProfLucasSousa/metodos-array-desestruturacao-dom repo do prof p erminar dpsd