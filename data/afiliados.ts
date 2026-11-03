export type Categoria = {
  slug: string;
  nome: string;
};

export const categorias: Categoria[] = [
  { slug: "pedaleiras", nome: "Pedaleiras" },
  { slug: "pedais", nome: "Pedais" },
  { slug: "gravacao", nome: "Gravação" },
  { slug: "diy", nome: "DIY e componentes" },
  { slug: "captadores", nome: "Captadores" },
  { slug: "pontes-tarraxas", nome: "Pontes e tarraxas" },
  { slug: "encordoamento", nome: "Encordoamento" },
  { slug: "amplificadores", nome: "Amplificadores" },
];

export type Oferta = {
  loja: string;
  url: string;
};

export type Afiliado = {
  nome: string;
  marca: string;
  tipo: string;
  categoria: string; // slug de uma categoria
  status: "selecionado" | "testado";
  loja: string;
  descricao: string;
  url: string;
  imagem: string;
  preco?: number; // opcional, digitado por você (valor de referência)
  video?: string; // link do YouTube, opcional
  criadoEm: string; // AAAA-MM-DD
  specs?: Record<string, string>;
  outrasOfertas?: Oferta[]; // mesmo produto em outras lojas
};

export const listaAfiliados: Afiliado[] = [
  {
    nome: "M-Vave Blackbox",
    marca: "M-Vave",
    tipo: "Pedal multiefeitos",
    categoria: "pedaleiras",
    status: "selecionado",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/2fknT58",
    imagem: "/afiliados/a(1).png",
    criadoEm: "2026-10-01",
  },
  {
    nome: "M-Vave Tank-B",
    marca: "M-Vave",
    tipo: "Pedaleira para baixo",
    categoria: "pedaleiras",
    status: "testado",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/1rGncSv",
    imagem: "/afiliados/a(2).png",
    criadoEm: "2026-10-02",
    video: "https://youtu.be/JxLdE6KOGiY?si=GcEC4DSeIR57HM88",
  },
  {
    nome: "Sonicake Octaver",
    marca: "Sonicake",
    tipo: "Pedal de oitava",
    categoria: "pedais",
    status: "testado",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c34DoSSL",
    imagem: "/afiliados/a(3).png",
    criadoEm: "2026-10-03",
    video: "https://youtu.be/MJ4O9eLOMdc?si=CvgyFQh07lF9nRlg",
  },
  {
    nome: "Valeton GP-5",
    marca: "Valeton",
    tipo: "Multiefeitos",
    categoria: "pedaleiras",
    status: "selecionado",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c4sfYVhl",
    imagem: "/afiliados/a(4).png",
    criadoEm: "2026-10-04",
  },
  {
    nome: "Cuvave Bass",
    marca: "Cuvave",
    tipo: "Pedaleira para baixo",
    categoria: "pedaleiras",
    status: "testado",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/2f9CSY6",
    imagem: "/afiliados/a(5).png",
    criadoEm: "2026-10-05",
    video: "https://youtu.be/fbWK65G0s58?si=rpFCdqFa3REEeGsZ",
  },
  {
    nome: "Valeton GP-50",
    marca: "Valeton",
    tipo: "Multiefeitos",
    categoria: "pedaleiras",
    status: "selecionado",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c4dffwXF",
    imagem: "/afiliados/a(6).png",
    criadoEm: "2026-10-06",
  },
  {
    nome: "Guyker Tarraxas para Baixo",
    marca: "Guyker",
    tipo: "Tarraxas",
    categoria: "pontes-tarraxas",
    status: "selecionado",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c4OcpJlH",
    imagem: "/afiliados/guyker.jpg",
    criadoEm: "2026-11-03",
  },
  {
    nome: "Fleor Captador Alnico 5",
    marca: "Fleor",
    tipo: "Captador para baixo de 4 cordas",
    categoria: "captadores",
    status: "testado",
    loja: "AliExpress",
    descricao: "",
    url: "https://s.click.aliexpress.com/e/_c36xqoUr",
    imagem: "/afiliados/Fleor.jpg",
    criadoEm: "2026-11-03",
    video: "https://youtu.be/ClzMjQ2SJyE?si=QHK_VsDZGkpVHR_p",
  },
  {
    nome: "Solez Encordoamento 4 Cordas",
    marca: "Solez",
    tipo: "Encordoamento para baixo de 4 cordas",
    categoria: "encordoamento",
    status: "selecionado",
    loja: "Mercado Livre",
    descricao: "",
    url: "https://meli.la/1vD4Hze",
    imagem: "/afiliados/solez.png",
    criadoEm: "2026-11-03",
  },
];

export const lojas: Record<string, { fundo: string; texto: string }> = {
  "Mercado Livre": { fundo: "#FFE600", texto: "#2D3277" },
  AliExpress: { fundo: "#E62E04", texto: "#FFFFFF" },
};
