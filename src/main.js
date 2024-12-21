function limparFormulario() {
  document.querySelector("form").reset();
}

const colaboradores = [];

// Função para salvar um colaborador
function salvarColaborador() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cpf = document.getElementById("cpf").value;
  const cargo = document.getElementById("cargo").value;
  const salario = document.getElementById("salario").value;

  if (nome && sobrenome && email && telefone && cpf && cargo && salario) {
    // Adiciona o colaborador ao array
    colaboradores.push({
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      cargo,
      salario,
    });
    atualizarTabela();
    limparFormulario();
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}

// Função para remover um colaborador
function removerColaborador(index) {
  colaboradores.splice(index, 1);
  atualizarTabela();
}

// Função para atualizar a tabela
function atualizarTabela() {
  const tabela = document
    .getElementById("tabela-colaboradores")
    .getElementsByTagName("tbody")[0];
  tabela.innerHTML = ""; // Limpa a tabela

  colaboradores.forEach((colaborador, index) => {
    const linha = tabela.insertRow();
    linha.innerHTML = `
          <td>${colaborador.nome}</td>
          <td>${colaborador.sobrenome}</td>
          <td>${colaborador.email}</td>
          <td>${colaborador.telefone}</td>
          <td>${colaborador.cpf}</td>
          <td>${colaborador.cargo}</td>
          <td>${colaborador.salario}</td>
          <td>
            <button onclick="removerColaborador(${index})">Remover</button>
          </td>
        `;
  });
}
