const express = require('express');
const router = express.Router();
const user = require('./model/user');

router.get('/', (req, res) => {
    res.json({ message: 'Minicurso API node' });
});

router.get('/usuario', async (req, res) => {
    const usuarios = await user.findAll({ raw: true });
    res.status(200).json(usuarios);
});

router.post('/usuario', async (req, res) => {
    const { nome, login, senha } = req.body;
    const novo_usuario = await user.create({ nome, login, senha });
    res.status(201).json(novo_usuario);
});

router.put('/usuario', async (req, res) => {
    const { id, nome, login, senha } = req.body;
    const usuario_atualizado = await user.update({ nome, login, senha }, { where: { id: id } });
    res.status(200).json(usuario_atualizado);
});

router.delete('/usuario/:id', async (req, res) => {
    const id = req.params.id;
    const usuarios_removidos = await user.destroy({ where: { id: id } });
    usuarios_removidos == 0 ? res.status(404).json("Usuário não encontrado") :
        res.status(200).json("Usuário removido");
});

module.exports = router;
