import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  itens: [{
    nome: {
      type: String,
      required: true
    },
    preco: {
      type: Number,
      required: true
    },
    quantidade: {
      type: Number,
      default: 1
    }
  }],
  total: {
    type: Number,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pendente', 'preparando', 'pronto', 'entregue'],
    default: 'pendente'
  }
}, {
  timestamps: true
});

export default mongoose.model('Pedido', pedidoSchema); 