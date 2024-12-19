const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));  // Aumentando o limite de tamanho
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  // Para dados enviados via URL encoded
app.use(express.static('public'));

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))//Log de confirmação da conexão
    .catch(err => console.log(err));//Tratamento de erro caso a conexão falhe 
    
// Rotas
const produtoRoutes = require('./routes/produtos');
app.use('/api/produtos', produtoRoutes);//Todas as rotas de produtos comecarão com /api

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:3000 ${PORT}`));
