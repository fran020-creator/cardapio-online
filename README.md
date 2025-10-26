# 🍽️ Cardápio Online - Restaurante João & Fran

Sistema completo de cardápio online com frontend React e backend Node.js + MongoDB.

## 📋 Funcionalidades

- ✅ Cardápio digital interativo
- ✅ Carrinho de compras
- ✅ Finalização de pedidos
- ✅ Armazenamento no MongoDB
- ✅ API REST completa
- ✅ Interface responsiva

## 🚀 Como Executar

### Pré-requisitos

1. **Node.js** (versão 16 ou superior)
2. **MongoDB** (instalado e rodando localmente)
3. **Git** (para clonar o repositório)

### Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd cardapio-online
```

2. **Instale as dependências do frontend:**
```bash
npm install
```

3. **Instale as dependências do backend:**
```bash
cd backend
npm install
```

### Configuração do MongoDB

1. **Instale o MongoDB** (se ainda não tiver):
   - [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Ou use MongoDB Atlas (cloud)

2. **Configure o ambiente:**
```bash
# Copie o arquivo de exemplo
cd backend
cp config.example.env config.env

# Edite o arquivo config.env com suas configurações
```

3. **Inicie o MongoDB:**
```bash
# Windows
mongod

# Linux/Mac
sudo systemctl start mongod
```

### Executando o Projeto

1. **Inicie o backend:**
```bash
cd backend
npm run dev
```
O servidor estará disponível em: `http://localhost:3001`

2. **Em outro terminal, inicie o frontend:**
```bash
# Na pasta raiz do projeto
npm run dev
```
O frontend estará disponível em: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
cardapio-online/
├── src/                    # Frontend React
│   ├── components/         # Componentes React
│   ├── services/          # Serviços de API
│   └── data/              # Dados do cardápio
├── backend/               # Backend Node.js
│   ├── models/           # Modelos MongoDB
│   ├── routes/           # Rotas da API
│   └── server.js         # Servidor principal
└── public/               # Arquivos estáticos
```

## 🔧 API Endpoints

### Pedidos
- `POST /api/pedidos` - Criar novo pedido
- `GET /api/pedidos` - Listar todos os pedidos
- `GET /api/pedidos/:id` - Buscar pedido por ID
- `PATCH /api/pedidos/:id/status` - Atualizar status do pedido

### Exemplo de uso da API:

```javascript
// Criar pedido
const pedido = {
  itens: [
    { nome: "Pizza Margherita", preco: 25.90, quantidade: 1 },
    { nome: "Refrigerante", preco: 6.50, quantidade: 2 }
  ],
  total: 38.90
};

fetch('http://localhost:3001/api/pedidos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(pedido)
});
```

## 🗄️ Banco de Dados

O projeto usa **MongoDB** com as seguintes coleções:

### Pedidos
```javascript
{
  _id: ObjectId,
  itens: [
    {
      nome: String,
      preco: Number,
      quantidade: Number
    }
  ],
  total: Number,
  data: Date,
  status: String, // 'pendente', 'preparando', 'pronto', 'entregue'
  createdAt: Date,
  updatedAt: Date
}
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript
- **Vite** - Build tool
- **Axios** - Cliente HTTP
- **CSS3** - Estilização

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Mongoose** - ODM para MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Variáveis de ambiente

### Banco de Dados
- **MongoDB** - Banco de dados NoSQL

## 📱 Como Usar

1. **Acesse o cardápio:** Abra `http://localhost:5173`
2. **Adicione itens:** Clique em "Adicionar ao Carrinho" nos produtos
3. **Visualize o carrinho:** Veja os itens adicionados no painel lateral
4. **Finalize o pedido:** Clique em "Finalizar Pedido"
5. **Confirmação:** O pedido será salvo no MongoDB e você receberá um ID

## 🔍 Monitoramento

- **Console do navegador:** Logs das requisições
- **Terminal do backend:** Logs do servidor e MongoDB
- **MongoDB Compass:** Visualizar dados no banco

## 🚨 Solução de Problemas

### Backend não conecta ao MongoDB
```bash
# Verifique se o MongoDB está rodando
mongod --version

# Teste a conexão
mongo
```

### Frontend não acessa a API
```bash
# Verifique se o backend está rodando na porta 3001
curl http://localhost:3001
```

### Erro de CORS
- O backend já está configurado com CORS
- Verifique se as URLs estão corretas

## 📝 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Notificações em tempo real
- [ ] Integração com WhatsApp
- [ ] Sistema de pagamento
- [ ] Histórico de pedidos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ para o Restaurante João & Fran**
