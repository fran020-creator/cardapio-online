import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para logs de requisições
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 Requisição: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptor para logs de respostas
api.interceptors.response.use(
  (response) => {
    console.log(`✅ Resposta: ${response.status} ${response.statusText}`);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const pedidosService = {
  // Criar novo pedido
  criarPedido: async (pedidoData) => {
    try {
      const response = await api.post('/pedidos', pedidoData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao criar pedido');
    }
  },

  // Buscar todos os pedidos
  buscarPedidos: async () => {
    try {
      const response = await api.get('/pedidos');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar pedidos');
    }
  },

  // Buscar pedido por ID
  buscarPedidoPorId: async (id) => {
    try {
      const response = await api.get(`/pedidos/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar pedido');
    }
  },

  // Atualizar status do pedido
  atualizarStatus: async (id, status) => {
    try {
      const response = await api.patch(`/pedidos/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao atualizar status');
    }
  }
};

export default api; 