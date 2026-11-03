export type Afiliado = {
  nome: string;
  tipo: string;
  loja: string;
  descricao: string;
  url: string;
  imagem: string;
};

export const listaAfiliados: Afiliado[] = [
  {
    nome: "M-Vave Blackbox",
    tipo: "Pedal multiefeitos",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/2fknT58",
    imagem: "/afiliados/a(1).png",
  },
  {
    nome: "M-Vave Tank-B",
    tipo: "Pedaleira para baixo",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/1eZohWE",
    imagem: "/afiliados/a(2).png",
  },
  {
    nome: "Sonicake Octaver",
    tipo: "Pedal de oitava",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c3jtNdkt",
    imagem: "/afiliados/a(3).png",
  },
  {
    nome: "Valeton GP-5",
    tipo: "Multiefeitos",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/1UetE6K",
    imagem: "/afiliados/a(4).png",
  },
  {
    nome: "M-Vave Cube Baby Bass",
    tipo: "Mini amplificador",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/2f9CSY6",
    imagem: "/afiliados/a(5).png",
  },
  {
    nome: "Valeton GP-50",
    tipo: "Multiefeitos",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c4dffwXF",
    imagem: "/afiliados/a(6).png",
  },
];

export const lojas: Record<string, { fundo: string; texto: string }> = {
  "Mercado Livre": { fundo: "#FFE600", texto: "#2D3277" },
  AliExpress: { fundo: "#E62E04", texto: "#FFFFFF" },
};
