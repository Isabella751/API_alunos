const urlparametro = new URLSearchParams(window.location.search);
const id = urlparametro.get("id");

console.log("ID do aluno para editar:", id);

const API = 'http://localhost:3000/alunos';
const formAluno = document.getElementById("form-aluno");

async function carregarAluno() {
    if (!id) {
        alert("Aluno não selecionado para editar");
        return;
    }

    try {
        const resposta = await fetch(`${API}/${id}`);
        if (!resposta.ok) throw new Error("Erro ao buscar aluno");

        const aluno = await resposta.json();

        
        document.getElementById("id").value = aluno.id;
        document.getElementById("nome").value = aluno.nome;
        document.getElementById("cpf").value = aluno.cpf;
        document.getElementById("cep").value = aluno.cep || "";
        document.getElementById("uf").value = aluno.uf || "";
        document.getElementById("rua").value = aluno.rua || "";
        document.getElementById("numero").value = aluno.numero || "";
        document.getElementById("complemento").value = aluno.complemento || "";
    } catch (error) {
        console.error(error);
        alert("Erro ao carregar dados do aluno.");
    }
}

async function atualizarAluno(e) {
    e.preventDefault();

    const alunoAtualizado = {
        nome: document.getElementById("nome").value.trim(),
        cpf: document.getElementById("cpf").value.trim(),
        cep: document.getElementById("cep").value.trim(),
        uf: document.getElementById("uf").value.trim(),
        rua: document.getElementById("rua").value.trim(),
        numero: document.getElementById("numero").value.trim(),
        complemento: document.getElementById("complemento").value.trim()
    };

    try {
        const resposta = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alunoAtualizado)
        });

        if (resposta.ok) {
            alert("Aluno atualizado com sucesso!");
            window.location.href = "index.html"; 
        } else {
            alert("Erro ao atualizar aluno!");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro de conexão com servidor.");
    }
}

formAluno.addEventListener("submit", atualizarAluno);
carregarAluno();
