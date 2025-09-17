console.log("app.js funcionando");

let alunos = [
  {
    "id": 1,
    "nome": "Vitor Lima",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T11:59:30.000Z",
    "update_at": "2025-09-16T11:59:30.000Z"
  },
  {
    "id": 2,
    "nome": "Wendel ",
    "cpf": "98765432100",
    "cep": "06000001",
    "uf": "SP",
    "rua": "Avenida Central",
    "numero": 123,
    "complemento": null,
    "create_at": "2025-09-16T11:59:30.000Z",
    "update_at": "2025-09-16T11:59:30.000Z"
  },
  {
    "id": 3,
    "nome": "Matheus",
    "cpf": "45678912399",
    "cep": "06000002",
    "uf": "SP",
    "rua": "Rua Nova",
    "numero": 123,
    "complemento": "Casa 1",
    "create_at": "2025-09-16T11:59:30.000Z",
    "update_at": "2025-09-16T11:59:30.000Z"
  },
  {
    "id": 4,
    "nome": "Vitor Lima",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T11:59:37.000Z",
    "update_at": "2025-09-16T11:59:37.000Z"
  },
  {
    "id": 5,
    "nome": "Wendel ",
    "cpf": "98765432100",
    "cep": "06000001",
    "uf": "SP",
    "rua": "Avenida Central",
    "numero": 123,
    "complemento": null,
    "create_at": "2025-09-16T11:59:37.000Z",
    "update_at": "2025-09-16T11:59:37.000Z"
  },
  {
    "id": 6,
    "nome": "VICTOR",
    "cpf": "45678912399",
    "cep": "06000002",
    "uf": "SP",
    "rua": "Rua Nova",
    "numero": 123,
    "complemento": "Casa 1",
    "create_at": "2025-09-16T11:59:37.000Z",
    "update_at": "2025-09-16T12:01:09.000Z"
  },
  {
    "id": 7,
    "nome": "Vitor Lima",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T11:59:45.000Z",
    "update_at": "2025-09-16T11:59:45.000Z"
  },
  {
    "id": 8,
    "nome": "Wendel ",
    "cpf": "98765432100",
    "cep": "06000001",
    "uf": "SP",
    "rua": "Avenida Central",
    "numero": 123,
    "complemento": null,
    "create_at": "2025-09-16T11:59:45.000Z",
    "update_at": "2025-09-16T11:59:45.000Z"
  },
  {
    "id": 9,
    "nome": "Matheus",
    "cpf": "45678912399",
    "cep": "06000002",
    "uf": "SP",
    "rua": "Rua Nova",
    "numero": 123,
    "complemento": "Casa 1",
    "create_at": "2025-09-16T11:59:45.000Z",
    "update_at": "2025-09-16T11:59:45.000Z"
  },
  {
    "id": 10,
    "nome": "Nicolas",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T14:03:19.000Z",
    "update_at": "2025-09-16T14:03:19.000Z"
  },
  {
    "id": 11,
    "nome": "Nicolas",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T14:05:57.000Z",
    "update_at": "2025-09-16T14:05:57.000Z"
  },
  {
    "id": 12,
    "nome": "Nicolas",
    "cpf": "12345678910",
    "cep": "06000000",
    "uf": "SP",
    "rua": "Rua Senai",
    "numero": 123,
    "complemento": "APTO 12",
    "create_at": "2025-09-16T14:06:28.000Z",
    "update_at": "2025-09-16T14:06:28.000Z"
  },
  {
    "id": 13,
    "nome": "Vitor",
    "cpf": "12345678901",
    "cep": "12345678",
    "uf": "SP",
    "rua": "RUA A",
    "numero": 1,
    "complemento": null,
    "create_at": "2025-09-17T11:10:58.000Z",
    "update_at": "2025-09-17T11:10:58.000Z"
  }
];

function carregarTabela(){
const tbody = document.getElementById("tbody")

tbody.innerHTML = "<tr><td colspan='10'>Carregando ...< /td></tr>"

    setTimeout(()=>{
    tbody.innerHTML = "";
    tbody.innerHTML = alunos.map(a =>
    <tr>
    <td>${a.id}</td>
    <td>${a.nome}</td>
    <td>${a.cpf}</td>
    <td>${a.cep}</td>
    <td>${a.uf}</td>
    <td>${a.rua} senai</td>
    <td>${a.numero}</td>
    <td>${a.complemento}</td>
    </tr>

).join("");

},5000) // 5 segundos

}

carregarTabela();
