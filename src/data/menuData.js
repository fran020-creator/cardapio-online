const menu = [
  {
    categoria: "Entradas",
    itens: [
      {
        id: 1,
        nome: "Bruschetta Mediterrânea",
        descricao: "Pão italiano crocante, tomate confit, manjericão fresco, azeite extravirgem e toque de alho.",
        preco: 28.00,
        imagem: "/bruschetta.jpg",
        icones: ["vegetariano"]
      },
      {
        id: 2,
        nome: "Tábua de Frios Gourmet",
        descricao: "Seleção de queijos nobres, presunto parma, frutas secas, castanhas e geleia artesanal.",
        preco: 54.00,
        imagem: "/tabua.jpeg",
        icones: ["sem_gluten"]
      },
      {
        id: 3,
        nome: "Salada Caprese Premium",
        descricao: "Mussarela de búfala, tomates heirloom, pesto de manjericão e redução de balsâmico.",
        preco: 32.00,
        imagem: "/caprese.png",
        icones: ["vegetariano", "sem_gluten"]
      }
    ]
  },
  {
    categoria: "Pratos Principais",
    itens: [
      {
        id: 4,
        nome: "Risoto de Camarão ao Limone",
        descricao: "Arroz arbório cremoso, camarões salteados, raspas de limão siciliano e toque de vinho branco.",
        preco: 74.00,
        imagem: "/risoto_camarao.jpg",
        icones: []
      },
      {
        id: 5,
        nome: "Filé ao Molho Madeira & Purê Trufado",
        descricao: "Filé mignon alto, molho madeira artesanal, purê de batata com azeite trufado e legumes salteados.",
        preco: 89.00,
        imagem: "/file_madeira.jpg",
        icones: ["sem_gluten"]
      },
      {
        id: 6,
        nome: "Lasanha Vegetariana de Abobrinha",
        descricao: "Lâminas de abobrinha, ricota temperada, molho pomodoro rústico e parmesão gratinado.",
        preco: 59.00,
        imagem: "/lasanha-veg.jpg",
        icones: ["vegetariano"]
      }
    ]
  },
  {
    categoria: "Sobremesas",
    itens: [
      {
        id: 7,
        nome: "Brownie Belga com Sorvete",
        descricao: "Brownie de chocolate belga, sorvete de creme artesanal e calda quente de chocolate.",
        preco: 29.00,
        imagem: "/brownie.jpg",
        icones: []
      },
      {
        id: 8,
        nome: "Panna Cotta de Baunilha",
        descricao: "Clássica panna cotta italiana, coulis de frutas vermelhas e hortelã fresca.",
        preco: 27.00,
        imagem: "/pannacotta.jpg",
        icones: ["sem_gluten"]
      },
      {
        id: 9,
        nome: "Mousse de Maracujá Gourmet",
        descricao: "Mousse aerada de maracujá, crocante de castanhas e calda de frutas tropicais.",
        preco: 25.00,
        imagem: "/mousse_maracuja.jpg",
        icones: ["sem_gluten", "vegetariano"]
      }
    ]
  },
  {
    categoria: "Bebidas",
    itens: [
      {
        id: 10,
        nome: "Suco Natural de Frutas",
        descricao: "Escolha entre laranja, abacaxi, morango ou limonada suíça, feito na hora.",
        preco: 12.00,
        imagem: "/sucos.jpg",
        icones: ["vegetariano", "sem_gluten"]
      },
      {
        id: 11,
        nome: "Drink Lagoa Azul",
        descricao: "Drinks combinando ingredientes como vodka, curaçau blue, limonada e laranja",
        preco: 28.00,
        imagem: "/lagoa_azul.jpg",
        icones: []
      },
      {
        id: 12,
        nome: "Vinho Seleção Especial",
        descricao: "Taça de vinho tinto, branco ou rosé, rótulos selecionados pela casa.",
        preco: 32.00,
        imagem: "/vinho.jpg",
        icones: ["sem_gluten"]
      },
      {
        id: 13,
        nome: "Refrigerante",
        descricao: "Coca-Cola, Guaraná, Sprite ou água com gás.",
        preco: 9.00,
        imagem: "/refrigerante.jpg",
        icones: []
      }
    ]
  }
];

export default menu;

