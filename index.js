const express = require('express');
const app = express();
app.use(express.json());

let tarefas = [
  { id: 1, titulo: "Estudar Node.js", concluida: false },
  { id: 2, titulo: "Fazer exercício de API", concluida: true }
];

// GET - Listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.status(200).json(tarefas);
});

// POST - Adicionar nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, concluida } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: "Título é obrigatório" });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: concluida || false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// DELETE - Deletar uma tarefa por ID
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefas.splice(index, 1);
  res.status(204).send();
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});