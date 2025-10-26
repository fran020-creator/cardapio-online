# 🚀 Guia Rápido - Cardápio Online

## 📋 O que foi criado

✅ **Backend completo** com Node.js + Express + MongoDB
✅ **API REST** para gerenciar pedidos
✅ **Integração frontend-backend** com Axios
✅ **Modelo de dados** para pedidos no MongoDB
✅ **Sistema de finalização** que salva no banco

## 🔧 Como executar

### 1. Instalar dependências

```bash
# Frontend (na pasta raiz)
npm install

# Backend
cd backend
npm install
```

### 2. Configurar MongoDB

**Opção A - Local:**
```bash
# Instale o MongoDB e execute:
mongod
```

**Opção B - MongoDB Atlas (nuvem):**
1. Crie conta em [MongoDB Atlas](https://cloud.mongodb.com)
2. Crie um cluster gratuito
3. Copie a string de conexão
4. Edite `backend/config.env` com sua URL

### 3. Executar o projeto

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## 📱 Como usar

1. **Acesse:** `http://localhost:5173`
2. **Adicione produtos** ao carrinho
3. **Clique em "Finalizar Pedido"**
4. **O pedido será salvo no MongoDB** com ID único

## 🔍 Verificar se está funcionando

### Backend:
- Acesse: `http://localhost:3001`
- Deve mostrar a documentação da API

### MongoDB:
- Use MongoDB Compass para visualizar os dados
- Conecte em: `mongodb://localhost:27017/cardapio_restaurante`

## 📊 Estrutura dos dados

Cada pedido salvo no MongoDB:
```javascript
{
  _id: "ID_UNICO",
  itens: [
    { nome: "Pizza Margherita", preco: 25.90, quantidade: 1 },
    { nome: "Refrigerante", preco: 6.50, quantidade: 2 }
  ],
  total: 38.90,
  data: "2024-01-15T10:30:00Z",
  status: "pendente",
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-01-15T10:30:00Z"
}
```

## 🛠️ Endpoints da API

- `POST /api/pedidos` - Criar pedido
- `GET /api/pedidos` - Listar todos
- `GET /api/pedidos/:id` - Buscar por ID
- `PATCH /api/pedidos/:id/status` - Atualizar status

## 🚨 Solução de problemas

### Erro de conexão com MongoDB:
```bash
# Verifique se o MongoDB está rodando
mongod --version
```

### Erro de CORS:
- O backend já está configurado com CORS
- Verifique se as URLs estão corretas

### Frontend não carrega:
```bash
# Verifique se o Vite está rodando
npm run dev
```

## 🎯 Próximos passos

1. **Teste o sistema** adicionando produtos e finalizando pedidos
2. **Verifique no MongoDB** se os dados estão sendo salvos
3. **Personalize** o cardápio conforme necessário
4. **Adicione funcionalidades** como painel administrativo

---

**✅ Sistema pronto para uso!** 