console.log("app.js funcionando");

async function carregarTabela() {
    try {
      const resposta = await fetch("http://localhost:3000/alunos");
      const ALUNOS = await resposta.json();
      console.log(ALUNOS); 

      const tbody = document.getElementById("tbody")

      tbody.innerHTML = "<tr><td colspan='10'>Carregando...</td></tr>"

      // setTimeout(() => {
        tbody.innerHTML = "";
        tbody.innerHTML = ALUNOS.map(a =>
          `<tr>
              <td>${a.id}</td>
              <td>${a.nome}</td>
              <td>${a.cpf}</td>
              <td>${a.cep}</td>
              <td>${a.uf}</td>
              <td>${a.rua}</td>
              <td>${a.numero}</td>
              <td>${a.complemento}</td>
              <td> 
                <button><a href="editar.html?id=${a.id}">Editar</a></button>
                <button onclick="excluirAluno(${a.id})">Excluir</button>
              </td>
          </tr>`
      ).join("");
      // }, 2000) // 2 segundos
      
    } catch (error) {
      console.error(error.message);
    }
}

async function excluirAluno(id) {
    if (!confirm("Tem certeza que deseja excluir este aluno?")) {
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: "DELETE"
        });

        if (resposta.ok) {
            alert("Aluno excluído com sucesso!");
            carregarTabela();
        } else {
            alert("Erro ao excluir aluno!");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro de conexão com servidor.");
    }
}

async function buscarAlunoPorId() {
    const id = document.getElementById("buscaId").value.trim();
    const resultadoDiv = document.getElementById("resultadoBusca");

    if (!id) {
        resultadoDiv.innerHTML = "<span style='color:red'>Digite um ID válido!</span>";
        return;
    }

    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`);

        if (resposta.ok) {
            const aluno = await resposta.json();
            resultadoDiv.innerHTML = `
                <p>ID: ${aluno.id}</p>
                <p>Nome: ${aluno.nome}</p>
                <p>CPF: ${aluno.cpf}</p>
                <p>CEP: ${aluno.cep || '-'}</p>
                <p>UF: ${aluno.uf || '-'}</p>
                <p>Rua: ${aluno.rua || '-'}</p>
                <p>Número: ${aluno.numero || '-'}</p>
                <p>Complemento: ${aluno.complemento || '-'}</p>
            `;
        } else if (resposta.status === 404) {
            resultadoDiv.innerHTML = "<span style='color:red'>Aluno não encontrado.</span>";
        } else {
            resultadoDiv.innerHTML = "<span style='color:red'>Erro ao buscar aluno.</span>";
        }
    } catch (error) {
        console.error("Erro:", error);
        resultadoDiv.innerHTML = "<span style='color:red'>Erro de conexão com servidor.</span>";
    }
}

carregarTabela();