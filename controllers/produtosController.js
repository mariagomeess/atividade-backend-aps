const Produto = require('../models/Produto');

exports.getAllProdutos = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProduto = async (req, res) => {
    const { nome, descricao, quantidade, foto } = req.body;
    const newProduto = new Produto({ nome, descricao, quantidade, foto });

    try {
        const savedProduto = await newProduto.save();
        res.status(201).json(savedProduto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProduto = async (req, res) => {
    try {
        const updatedProduto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);
        res.json({ message: 'Produto deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
