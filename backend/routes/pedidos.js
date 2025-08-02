import express from 'express';
import Pedido from '../models/Pedido.js';

const router = express.Router();

// Criar novo pedido
router.post('/', async (req, res) => {
  try {
    const { itens, total } = req.body;
    
    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Itens do pedido são obrigatórios' 
      });
    }

    if (!total || total <= 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Total do pedido é obrigatório e deve ser maior que zero' 
      });
    }

    const novoPedido = new Pedido({
      itens,
      total
    });

    const pedidoSalvo = await novoPedido.save();

    res.status(201).json({
      success: true,
      message: 'Pedido criado com sucesso!',
      pedido: pedidoSalvo
    });

  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// Buscar todos os pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      pedidos
    });

  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// Buscar pedido por ID
router.get('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    
    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: 'Pedido não encontrado'
      });
    }

    res.json({
      success: true,
      pedido
    });

  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// Atualizar status do pedido
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['pendente', 'preparando', 'pronto', 'entregue'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status inválido'
      });
    }

    const pedido = await Pedido.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!pedido) {
      return res.status(404).json({
        success: false,
        message: 'Pedido não encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Status atualizado com sucesso',
      pedido
    });

  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

export default router; 