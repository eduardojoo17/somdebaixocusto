"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Afiliado } from "@/data/afiliados";
import { categorias } from "@/data/afiliados";
import Botao from "./Botao";
import StoreBadge from "./StoreBadge";

function idDoYoutube(url: string): string | null {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

const formatarPreco = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ModalProduto({
  afiliado: a,
  onFechar,
}: {
  afiliado: Afiliado;
  onFechar: () => void;
}) {
  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    document.addEventListener("keydown", aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [onFechar]);

  const videoId = a.video ? idDoYoutube(a.video) : null;
  const ofertas = [{ loja: a.loja, url: a.url }, ...(a.outrasOfertas ?? [])];
  const nomeCategoria = categorias.find((c) => c.slug === a.categoria)?.nome;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-end sm:items-center justify-center sm:p-4"
      onClick={onFechar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={a.nome}
        className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl w-full max-w-lg max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-stone-100 flex items-center justify-center p-4">
          <img
            src={a.imagem}
            alt={a.nome}
            className="max-h-48 sm:max-h-56 w-auto max-w-full object-contain"
          />
          <button
            onClick={onFechar}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-700 hover:text-orange-600 text-xl leading-none shadow"
          >
            ×
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-stone-500">
              {a.marca}
              {nomeCategoria ? ` · ${nomeCategoria}` : ""}
            </p>
            <h3 className="font-heading text-black font-bold text-xl uppercase tracking-wide">
              {a.nome}
            </h3>
            <p className="text-sm text-stone-500">{a.tipo}</p>
          </div>

          {a.status === "testado" && (
            <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700">
              Testado pelo canal
            </span>
          )}

          {a.descricao && (
            <p className="text-sm text-stone-700">{a.descricao}</p>
          )}

          {a.specs && Object.keys(a.specs).length > 0 && (
            <dl className="text-sm divide-y divide-stone-200 border rounded-xl overflow-hidden">
              {Object.entries(a.specs).map(([chave, valor]) => (
                <div
                  key={chave}
                  className="flex justify-between gap-4 px-3 py-2"
                >
                  <dt className="text-stone-500">{chave}</dt>
                  <dd className="text-stone-800 text-right">{valor}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* Lojas (agora acima do vídeo) */}
          <div className="space-y-2">
            {a.preco !== undefined && (
              <p className="text-xs text-stone-500">
                Preço de referência: {formatarPreco(a.preco)}. O valor pode
                variar na loja.
              </p>
            )}
            {ofertas.map((o) => (
              <div
                key={o.loja}
                className="flex items-center justify-between gap-3"
              >
                <StoreBadge nome={o.loja} />
                <Botao href={o.url} externo>
                  Ver preço na loja
                </Botao>
              </div>
            ))}
          </div>

          {/* Vídeo (só aparece se existir) */}
          {videoId && (
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Vídeo: ${a.nome}`}
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
