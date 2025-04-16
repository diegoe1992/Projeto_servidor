require('dotenv').config();
const express = require('express');
const app = express();
const PORTA = process.env.PORT || 3000;


// Middleware para interpretar JSON
app.use(express.json());
// Rota de sucesso (200 OK)
app.get('/sucesso', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Requisição processada com sucesso!"
    });
});
// Rota de criação de recurso (201 Created)
app.post('/criar', (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({
            status: "error",
            message: "Nome e email são obrigatórios!"
        });
    }
    res.status(201).json({
        status: "success",
        message: "Usuário criado com sucesso!",
        data: { nome, email }
    });
});

app.put('/alterar', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Alterado com sucesso!"
    });
});

app.delete('/delete', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Deletado com sucesso!"
    });
});
// Rota de erro (400 Bad Request)
app.get('/erro', (req, res) => {
    res.status(400).json({
        status: "error",
        message: "Requisição inválida! Verifique os parâmetros enviados."
    });
});
// Rota não encontrada (404 Not Found)
app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Rota não encontrada! Verifique o URL."
    });

});
// Iniciando o servidor na porta 3000
app.listen(PORTA, () => {
    console.log(`Servidor redando na porta ${PORTA}`)
});
