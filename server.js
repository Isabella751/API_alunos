// importando express
const express = require("express");
// cria aplicação
const app = express();
app.set('json spaces', 2)
app.use(express.json())
const porta = 3000;

const alunos = [
    {
        id: 1,
        nome: "Maria Silva",
        cpf: "12345678901",
        cep: "01234567",
        uf: "SP",
        rua: "Av. Central",
        numero: 123,
        complemento: "Apto 12"
    },
    {
        id: 2,
        nome: "Lucas",
        cpf: "13568454619",
        cep: "0678057",
        uf: "SP",
        rua: "Rua paranaense",
        numero: 673,
        complemento: "Casa"
    }
]

app.get("/alunos", (req, res) => {
    res.json(alunos)
      
})

app.get("/alunos/:id",(req,res) =>{
    const id = parseInt(req.params.id)
    const aluno = alunos.find( (aluno => aluno.id === id))
    if(aluno){
        res.json(aluno)
    }else{
        res.status(404).json(
            {erro: "Aluno não encontrado."}
        )
    }
})

app.post("/alunos", (req, res) => {
    const {nome, cpf, cep, uf, rua, numero, complemento} = req.body;
    const cpfDoAluno = alunos.find( (aluno => aluno.cpf === cpf))
    if(!nome || !cpf || !cep || !uf || !rua || !numero){
        return res.status(400).json({
            erro: "Nome, cpf, uf, rua e número são obrigatórios."
        })
    }
    else if (cpf.length !== 11){
        return res.status(400).json({
            erro: "CPF inválido."
        })
    }
    else if(cpfDoAluno){
        return res.status(409).json({
            erro: "CPF duplicado."
        })
    }
    else if (cep.length !== 8){
        return res.status(400).json({
            erro: "CEP inválido."
        })
    }
    else if (uf.length !== 2){
        return res.status(400).json({
            erro: "UF inválido."
        })
    }
    else if (!Number.isInteger(Number(numero))) {
    return res.status(400).json({
        erro: "Número inválido. Deve ser um número inteiro."
    })
    }

    else{
    const id = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1

    const novoAluno = {id, nome, cpf, cep, uf, rua, numero, complemento}

    alunos.push(novoAluno)

    res.status(201).json({
        mensagem: "Aluno Cadastrado com sucesso!",
        aluno: novoAluno
    })
    }
})

app.put("/alunos/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const {nome, cpf, cep, uf, rua, numero, complemento} = req.body;

    if(!nome || !cpf || !cep || !uf || !rua || !numero){
        return res.status(400).json({
            erro: "Nome, cpf, uf, rua e número são obrigatórios."
        })
    }
    else if (cpf.length !== 11){
        return res.status(400).json({
            erro: "CPF inválido."
        })
        
    }
    else if (cep.length !== 8){
        return res.status(400).json({
            erro: "CEP inválido."
        })
    }
    else if (uf.length !== 2){
        return res.status(400).json({
            erro: "UF inválido."
        })
    }  
    else if (!Number.isInteger(Number(numero))) {
    return res.status(400).json({
        erro: "Número inválido. Deve ser um número inteiro."
    })
    }

    const aluno = alunos.find(aluno => aluno.id === id)

    if(!aluno){
         return res.status(400).json({
            erro: "Aluno não encontrado."
        })
    }
    else{
    aluno.nome = nome;
    aluno.cpf = cpf;
    aluno.cep = cep;
    aluno.uf = uf;
    aluno.rua = rua;
    aluno.numero = numero;
    aluno.complemento = complemento;

    res.json({
        mensagem: "Aluno Atualizado com sucesso!"
    })
    }
})

app.delete("/alunos/:id", (req, res)=>{ // Consertar a mensagem do deletado com sucesso
    const id = parseInt(req.params.id);

    const indice = alunos.findIndex(a => a.id === id)

    if( indice === -1){
        return res.status(404).json({
            mensagem :"Aluno não encontrado."
        })
    }
    else{
    alunos.splice(indice,1);
    res.status(204).json({
        mensagem: "Aluno deletado com sucesso!"
    })
    }
})

app.listen(porta, () => console.log(`Servidor rodando http://localhost:${porta}/`));""