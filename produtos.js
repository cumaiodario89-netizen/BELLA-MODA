// ===== CONFIGURAÇÃO DA LOJA (editar aqui) =====
const LOJA = {
  nome: "Bella Moda",
  whatsapp: "258867355701",           // número com 258, sem + nem espaços
  cidade: "Xai-Xai",
  horario: "Segunda a sábado, 8h às 18h",
  instagram: "",                       // ex: "bellamoda.mz" (vazio esconde o link)
  pagamentos: [                        // só informação, sem integração
    { nome: "M-Pesa", numero: "85 109 9124" },
    { nome: "e-Mola", numero: "86 735 5701" },
    { nome: "Pagamento na entrega" }
  ],
  entregas: [
    { zona: "Xai-Xai (centro)", preco: "100 MT" },
    { zona: "Arredores de Xai-Xai", preco: "200 MT" },
    { zona: "Outras províncias", preco: "A combinar" }
  ],
  trocas: "Aceitamos trocas de tamanho em até 3 dias, com a peça sem uso e com etiqueta."
};

// ===== PRODUTOS =====
// Os preços abaixo são de exemplo: trocar pelos preços reais em MZN.
// estado: "" | "novo" | "ultimas" | "esgotado"
// img: fotos dentro da pasta img/ (a primeira é a principal)
const PRODUTOS = [
  { id: 1, nome: "Camisola tricot laços rosa", categoria: "Camisolas", preco: 1200, tamanhos: ["S","M","L"], cores: "Rosa, Azul", estado: "novo", img: ["camisola-rosa.webp"] },
  { id: 2, nome: "Saia plissada estampada", categoria: "Saias", preco: 1450, tamanhos: ["S","M","L"], cores: "Preto e branco", estado: "", img: ["saia-plissada.webp"] },
  { id: 3, nome: "Blazer botões dourados", categoria: "Casacos", preco: 2200, tamanhos: ["S","M","L","XL"], cores: "Roxo, Preto, Verde, Azul, Laranja, Castanho", estado: "novo", img: ["blazer-roxo.webp"] },
  { id: 4, nome: "Casaco comprido com cinto", categoria: "Casacos", preco: 2900, tamanhos: ["S","M","L","XL"], cores: "Camel, Preto, Vermelho, Castanho, Cinzento", estado: "", img: ["casaco-camel.webp"] },
  { id: 5, nome: "Jaqueta preta efeito couro", categoria: "Casacos", preco: 3200, tamanhos: ["M","L","XL"], cores: "Preto", estado: "ultimas", img: ["jaqueta-preta.webp"] },
  { id: 6, nome: "Conjunto cetim e renda", categoria: "Conjuntos", preco: 3400, tamanhos: ["S","M","L","XL"], cores: "Laranja, Castanho", estado: "", img: ["conjunto-cetim.webp"] }
];
