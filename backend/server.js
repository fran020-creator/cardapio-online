import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import pedidosRoutes from './routes/pedidos.js';

// Carregar variáveis de ambiente
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB com sucesso!');
  })
  .catch((error) => {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
  });

// Rotas
app.use('/api/pedidos', pedidosRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({
    message: 'API do Cardápio Online funcionando!',
    endpoints: {
      'POST /api/pedidos': 'Criar novo pedido',
      'GET /api/pedidos': 'Listar todos os pedidos',
      'GET /api/pedidos/:id': 'Buscar pedido por ID',
      'PATCH /api/pedidos/:id/status': 'Atualizar status do pedido'
    }
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor'
  });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Rota não encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📱 API disponível em: http://localhost:${PORT}`);
}); 