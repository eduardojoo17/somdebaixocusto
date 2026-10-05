# 🎸 Som de BAIXO custo

> Bom som não precisa de equipamento caro. Precisa de **estudo, ouvido e um bom ajuste**.

Este é o site do canal **[Som de BAIXO custo](https://www.youtube.com/@somdebaixocusto)** no YouTube.

A ideia do projeto é simples: **facilitar o estudo de instrumentos** e ajudar você a **tirar um timbre bom com equipamento barato** — baixo, pedaleiras, pedais e o que você tiver em casa.

Aqui você encontra:

- 📖 **Sobre** – o que é o canal e a proposta do projeto
- 🎛️ **Presets para download** – timbres prontos para pedaleiras baratas (Tank B, Zoom G1on...), é só baixar, carregar e tocar
- ❤️ **Apoie o canal** – via Pix, se o conteúdo te ajudou

---

## 🛠️ Tecnologias

| Tecnologia                                       | Pra que serve aqui                                        |
| ------------------------------------------------ | --------------------------------------------------------- |
| [Next.js](https://nextjs.org)                    | Base do site (páginas, rotas e performance)               |
| [React](https://react.dev) + TypeScript          | Componentes da interface, com tipagem pra evitar bug bobo |
| [Supabase](https://supabase.com)                 | Banco de dados onde ficam guardados os presets            |
| [Geist](https://vercel.com/font) via `next/font` | Fonte do site, carregada de forma otimizada               |
| [Vercel](https://vercel.com)                     | Hospedagem                                                |

---

## 🚀 Como rodar o projeto

1. Clone o repositório e instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env.local` na raiz com as chaves do seu projeto Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev / pnpm dev / bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

Pode editar a página principal em `app/page.tsx` — ela atualiza sozinha enquanto você salva.

---

## 🧠 Entendendo o código

Pra quem quer aprender (ou mexer no projeto), é assim que as peças se encaixam:

```
app/
├── layout.tsx   → estrutura comum a todas as páginas (fonte, <html>, <body>)
├── page.tsx     → a página inicial do site
└── ...          → outras seções (sobre, downloads, apoio)
```

### `app/layout.tsx`

É o "molde" do site. Tudo que aparece em todas as páginas (fonte, estilos globais, estrutura do HTML) fica aqui. O Next.js usa o `next/font` para carregar a fonte Geist já otimizada, sem aquele "pulo" de texto quando a página abre.

### `app/page.tsx`

É a página que você vê em `/`. Cada pasta dentro de `app/` com um `page.tsx` vira uma rota do site automaticamente — esse é o sistema de rotas do Next.js.

### Presets e Supabase

Os presets **não ficam escritos no código**: ficam numa tabela chamada `presets` no Supabase, com estas colunas:

| Coluna      | O que guarda                                |
| ----------- | ------------------------------------------- |
| `id`        | Identificador único do preset               |
| `nome`      | Nome do timbre                              |
| `pedaleira` | Para qual pedaleira ele serve (ex.: Tank B) |
| `estilo`    | Estilo do som (rock, funk, gospel...)       |

O site busca essa tabela e monta os cards na tela. Quando um preset novo é adicionado no banco, ele **aparece sozinho no site**, sem precisar mexer no código. O botão **Baixar** entrega o arquivo do preset escolhido.

Exemplo simplificado de como a busca funciona:

```ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// Busca todos os presets cadastrados
const { data: presets } = await supabase.from("presets").select("*");
```

> 💡 Quando uma pedaleira ainda não tem presets cadastrados, o site mostra um card de **"em breve"** no lugar.

---

## 🤝 Quer ajudar?

- Se inscreva no canal e conte pra um amigo que toca 🎸
- Sugira um preset ou uma pedaleira que você gostaria de ver aqui
- Apoie o projeto pelo Pix, na seção de apoio do site

---

## ☁️ Deploy

O jeito mais fácil de publicar é pela [Vercel](https://vercel.com/new). Lembre de cadastrar as variáveis de ambiente do Supabase nas configurações do projeto. Mais detalhes na [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

**Som de BAIXO custo** — porque o som bom está no ajuste, não na etiqueta de preço. 🔊
