# 📝 API ToDo - Node.js + Express

Projeto simples de uma API RESTful para gerenciamento de tarefas (ToDo List), desenvolvido com **Node.js** e **Express**.

Este projeto foi criado como parte da disciplina **"Elaborar Projetos de Sistemas"** no curso técnico em **Desenvolvimento de Sistemas**.

---

## 📚 Funcionalidades

A API permite:

- ✅ Listar todas as tarefas
- ➕ Criar nova tarefa
- ❌ Deletar uma tarefa por ID
- 📡 Retornar status HTTP corretos

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JSON como estrutura de dados

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-todo.git
cd api-todo
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

A API estará disponível em:  
👉 `http://localhost:3000`

---

## 🔍 Endpoints da API

### ▶️ `GET /tarefas`

Lista todas as tarefas cadastradas.

**Resposta Exemplo:**
```json
[
  { "id": 1, "titulo": "Estudar Node.js", "concluida": false }
]
```

---

### 🆕 `POST /tarefas`

Cria uma nova tarefa.

**Requisição:**
```json
{
  "titulo": "Fazer o exercício de API",
  "concluida": false
}
```

**Resposta:**
```json
{
  "id": 3,
  "titulo": "Fazer o exercício de API",
  "concluida": false
}
```

---

### ❌ `DELETE /tarefas/:id`

Deleta uma tarefa pelo ID.

**Resposta de sucesso:** `204 No Content`  
**Erro:** `404 Not Found` caso o ID não exista.

---

## 🧪 Testando a API

Você pode utilizar:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- `curl` no terminal
- Aplicativos frontend ou mobile

---

## 📌 Sugestões de Melhorias

- [ ] Adicionar edição de tarefas (`PUT /tarefas/:id`)
- [ ] Implementar autenticação com JWT
- [ ] Persistência com banco de dados (MongoDB ou SQLite)
- [ ] Filtro de tarefas concluídas

---

## 👨‍🏫 Projeto Educacional

Este projeto foi desenvolvido com fins didáticos, como parte da formação técnica de jovens a partir de 16 anos, utilizando **metodologias ativas de ensino** e foco em **projetos práticos**.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.  
Sinta-se livre para contribuir, clonar e modificar!
