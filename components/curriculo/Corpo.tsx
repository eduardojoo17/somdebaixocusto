"use client";
import { useState } from "react";

type corpoProps = {
  secao: string;
};

const PIX_CHAVE = "1e36d8c1-cfdf-4f14-aea8-df81d47cb8e3";
const PIX_NOME = "João Eduardo Paiva da Costa";
const PIX_BANCO = "Mercado Pago";

const LINK_YOUTUBE = "https://www.youtube.com/@somdebaixocusto";
const LINK_INSTAGRAM = "https://www.instagram.com/somdebaixocusto";

const animacao = (aberto: boolean, lado: "esquerda" | "direita") =>
  `flex flex-col lg:flex-row gap-4 px-4 md:px-0 overflow-hidden transition-all duration-[1800ms] ease-in-out ${
    aberto
      ? `max-h-[1500px] md:max-h-none md:max-w-[1000px] opacity-100 translate-x-0 ${
          lado === "esquerda" ? "md:mr-4" : "md:ml-4"
        }`
      : `max-h-0 md:max-h-none md:max-w-0 opacity-0 ${
          lado === "esquerda" ? "md:-translate-x-10" : "md:translate-x-10"
        }`
  }`;

const iconeSocial = (visivel: boolean) =>
  `absolute top-1/2 -translate-y-1/2 transition-opacity duration-[1200ms] ease-in-out ${
    visivel ? "opacity-100" : "opacity-0 pointer-events-none"
  }`;

export default function Corpo({ secao }: corpoProps) {
  const [copiado, setCopiado] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CHAVE);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      alert("Não foi possível copiar. Copie a chave manualmente.");
    }
  };

  const cards = [
    {
      titulo: "Sobre o canal",
      texto:
        "Mostrar que dá para ter um bom timbre de baixo sem gastar uma fortuna.\n\nNo Som de Baixo Custo, o foco é o custo-benefício: testar com sinceridade, comparar e mostrar o que realmente vale o investimento.",
    },
    {
      titulo: "Conteúdo",
      texto:
        "Contrabaixo, pedaleiras e upgrades baratos.\n\nTestes da Tank B, da Zoom, Valeton e de outros equipamentos acessíveis, com dicas práticas e presets prontos para você baixar e usar.",
    },
  ];

  const presets = [
    {
      nome: "Presets Tank-B",
      pedaleira: "Tank B",
      descricao: "5 presets para você usar na tank-b.",
      imagem: "/tankB.png",
    },
    {
      nome: "Presets B1on/B1xon",
      pedaleira: "Zoom",
      descricao: "5 presets para você usar na zoom.",
      imagem: "/b1on.png",
    },
  ];

  const inicio = secao === "inicio";

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-4 md:py-0">
      <div className={animacao(secao === "sobre", "esquerda")}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover border"
              src="/me.png"
              alt="Foto do idealizador do canal"
            />
            <div>
              <h2 className="font-heading text-black font-bold text-xl">
                João Eduardo
              </h2>
              <p className="text-sm text-stone-500">Idealizador do canal</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {cards.map((n, i) => (
              <div key={i} className="w-full max-w-sm md:w-64 lg:w-72 shrink-0">
                <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
                  {n.titulo}
                </h3>
                <p className="text-sm text-stone-700 whitespace-pre-line">
                  {n.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center shrink-0">
        <a
          className={`${iconeSocial(inicio)} right-full mr-3 block w-12 h-12 md:w-16 md:h-16 border rounded-full overflow-hidden bg-white hover:scale-105`}
          href={LINK_YOUTUBE}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full h-full object-cover"
            src="/ytb-logo.png"
            alt="YouTube do Som de Baixo Custo"
          />
        </a>

        <img
          className="w-48 md:w-64 lg:w-80 rounded-b-full"
          src="/logo.png"
          alt="Logo Som de Baixo Custo"
        />

        <a
          className={`${iconeSocial(inicio)} left-full ml-3 block w-12 h-12 md:w-16 md:h-16 border rounded-full overflow-hidden bg-white hover:scale-105`}
          href={LINK_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full h-full object-cover"
            src="/inst-logo.jpg"
            alt="Instagram do Som de Baixo Custo"
          />
        </a>
      </div>

      <div className={animacao(secao === "downloads", "direita")}>
        <div className="w-full max-w-sm md:w-64 shrink-0 border rounded-2xl p-4 shadow bg-white">
          <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
            Apoie o canal
          </h3>
          <p className="text-sm text-stone-700 mt-2">
            Os presets são gratuitos. Se quiser ajudar o canal, pode fazer uma
            doação via Pix, mas é totalmente opcional.
          </p>
          <p className="text-sm text-stone-700 mt-2">
            Não pode doar? Sem problema: curtir, comentar e compartilhar os
            vídeos já ajuda muito.
          </p>

          <img
            className="w-40 h-40 mx-auto mt-3 bg-white p-2 border rounded-xl object-contain"
            src="/qr.jpeg"
            alt="QR code Pix para doação"
          />

          <p className="text-xs text-stone-500 mt-3 text-center">
            {PIX_BANCO} · {PIX_NOME}
          </p>
          <p className="text-xs text-stone-700 mt-1 text-center break-all">
            {PIX_CHAVE}
          </p>

          <button
            onClick={copiarPix}
            className="mt-3 w-full bg-stone-900 text-white rounded-2xl px-4 py-2 transform hover:-translate-y-0.5"
          >
            {copiado ? "Copiado!" : "Copiar chave Pix"}
          </button>

          <p className="text-xs text-stone-500 mt-2">
            Confira se o nome do recebedor aparece correto antes de pagar.
          </p>
        </div>

        {presets.map((p, i) => (
          <div
            key={i}
            className="w-full max-w-sm md:w-64 shrink-0 border rounded-2xl overflow-hidden shadow bg-white"
          >
            <img
              className="w-full h-52 object-cover"
              src={p.imagem}
              alt={`${p.nome} - ${p.pedaleira}`}
            />

            <div className="p-4">
              <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
                {p.nome}
              </h3>
              <p className="text-xs text-stone-500">{p.pedaleira}</p>
              <p className="text-sm text-stone-700 mt-2">{p.descricao}</p>
              <button className="mt-3 bg-stone-900 text-white rounded-2xl px-4 py-2 transform hover:-translate-y-0.5">
                Baixar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
