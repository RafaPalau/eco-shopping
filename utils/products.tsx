import { colors } from "@mui/material";

export const products = [
  {
    id: "56541as841scax45c",
    name: "Shampoo Orgânico",
    description: "Shampoo feito com ingredientes naturais e orgânicos.",
    price: 29.99,
    brand: "EcoBeauty",
    category: "Cuidados Pessoais",
    color: "Green",
    inStock: true,
    images: [
      {
        image:
          "https://useorganico.vtexassets.com/arquivos/ids/170505-800-auto?v=638285047144130000&width=800&height=auto&aspect=true",
      },
      {
        image:
          "https://useorganico.vtexassets.com/arquivos/ids/170505-800-auto?v=638285047144130000&width=800&height=auto&aspect=true",
      },
    ],
  },
  {
    id: "56541ass841cax45c",
    name: "Camiseta de Algodão Orgânico",
    description: "Camiseta confortável feita de algodão 100% orgânico.",
    price: 49.99,
    brand: "GreenWear",
    category: "Moda Sustentável",
    inStock: true,
    colors: "#008000",
    images: [
      {
        image:
          "https://useorganico.vtexassets.com/arquivos/ids/170505-800-auto?v=638285047144130000&width=800&height=auto&aspect=true",
      },
      {
        image: "https://example.com/images/shampoo-green.jpg",
      },
    ],
  },
  {
    id: "56541ass841cax4asd5c",
    name: "Escova de Dente de Bambu",
    description: "Escova de dente ecológica feita de bambu sustentável.",
    price: 9.99,
    brand: "EcoDental",
    category: "Cuidados Pessoais",
    inStock: false,
    images: [
      {
        image:
          "https://useorganico.vtexassets.com/arquivos/ids/170505-800-auto?v=638285047144130000&width=800&height=auto&aspect=true",
      },
      {
        image: "https://example.com/images/shampoo-green.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Sacola Reutilizável",
    description: "Sacola feita de materiais reciclados, perfeita para compras.",
    price: 14.99,
    brand: "EcoBag",
    category: "Utensílios Domésticos",
    inStock: true,
    images: [
      {
        image:
          "https://useorganico.vtexassets.com/arquivos/ids/170505-800-auto?v=638285047144130000&width=800&height=auto&aspect=true",
      },
      {
        image: "https://example.com/images/shampoo-green.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Composteira Doméstica",
    description:
      "Composteira ideal para transformar resíduos orgânicos em adubo.",
    price: 79.99,
    brand: "GreenCycle",
    category: "Jardinagem e Horta",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/composter.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Lâmpada LED Sustentável",
    description: "Lâmpada LED de baixo consumo energético.",
    price: 12.99,
    brand: "EcoLight",
    category: "Casa e Decoração",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/led-bulb.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Ração Orgânica para Cães",
    description: "Ração nutritiva feita com ingredientes orgânicos.",
    price: 59.99,
    brand: "EcoPet",
    category: "Produtos para Pets",
    inStock: false,
    images: [
      {
        image: "https://example.com/images/dog-food.jpg",
      },
    ],
    reviews: [
      {
        id: 1,
        userId: 1,
        productId: 7,
        rating: 4,
        comment: "Excelente produto, meu cão adorou!",
        createdDate: "2023-07-22",
        user: {
          id: 1,
          name: "João Silva",
          email: "joao@example.com",
          emailVerified: null,
          image: "https://example.com/images/user1.jpg",
          hashedPassword: null,
          createdAt: "2023-01-15",
          updatedAt: "2023-01-15",
          role: "USER",
        },
      },
    ],
  },
  {
    id: 8,
    name: "Garrafa de Água Reutilizável",
    description:
      "Garrafa de água feita de material reciclado, ideal para uso diário.",
    price: 19.99,
    brand: "EcoDrink",
    category: "Utensílios Domésticos",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/reusable-bottle.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Papel Higiênico Reciclado",
    description:
      "Papel higiênico feito de materiais reciclados, suave e sustentável.",
    price: 4.99,
    brand: "EcoPaper",
    category: "Higiene e Limpeza",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/recycled-toilet-paper.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Bolsa de Compras Reutilizável",
    description: "Bolsa de compras durável feita de material reciclado.",
    price: 9.99,
    brand: "EcoBag",
    category: "Utensílios Domésticos",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/shopping-bag.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Detergente Ecológico",
    description:
      "Detergente biodegradável e ecológico, seguro para o meio ambiente.",
    price: 6.99,
    brand: "EcoClean",
    category: "Higiene e Limpeza",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/eco-detergent.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Brinquedo para Gatos de Material Reciclado",
    description:
      "Brinquedo divertido e sustentável para gatos, feito de material reciclado.",
    price: 12.99,
    brand: "EcoPet",
    category: "Produtos para Pets",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/cat-toy.jpg",
      },
    ],
  },
  {
    id: 13,
    name: "Sabonete Natural",
    description:
      "Sabonete artesanal feito com ingredientes naturais e sem químicos agressivos.",
    price: 7.99,
    brand: "EcoSoap",
    category: "Cuidados Pessoais",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/natural-soap.jpg",
      },
    ],
  },
  {
    id: 14,
    name: "Caderno de Papel Reciclado",
    description:
      "Caderno ecológico feito de papel reciclado, ideal para anotações diárias.",
    price: 5.99,
    brand: "EcoNote",
    category: "Material Escolar Sustentável",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/recycled-notebook.jpg",
      },
    ],
  },
  {
    id: 15,
    name: "Máscara Facial Orgânica",
    description:
      "Máscara facial feita com ingredientes orgânicos para um cuidado suave com a pele.",
    price: 14.99,
    brand: "EcoBeauty",
    category: "Cuidados Pessoais",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/organic-face-mask.jpg",
      },
    ],
  },
  {
    id: 16,
    name: "Toalha de Bambu",
    description:
      "Toalha macia e absorvente feita de fibras de bambu sustentável.",
    price: 24.99,
    brand: "EcoHome",
    category: "Casa e Decoração",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/bamboo-towel.jpg",
      },
    ],
  },
  {
    id: 17,
    name: "Óculos de Sol de Madeira",
    description: "Óculos de sol elegantes feitos de madeira sustentável.",
    price: 39.99,
    brand: "EcoStyle",
    category: "Moda Sustentável",
    inStock: true,
    images: [
      {
        image: "https://example.com/images/wooden-sunglasses.jpg",
      },
    ],
    reviews: [
      {
        id: 2,
        userId: 2,
        productId: 17,
        rating: 5,
        comment: "Muito bonitos e confortáveis, adoro o design sustentável!",
        createdDate: "2023-07-21",
        user: {
          id: 2,
          name: "Maria Oliveira",
          email: "maria@example.com",
          emailVerified: null,
          image: "https://example.com/images/user2.jpg",
          hashedPassword: null,
          createdAt: "2023-02-10",
          updatedAt: "2023-02-10",
          role: "USER",
        },
      },
    ],
  },
];
