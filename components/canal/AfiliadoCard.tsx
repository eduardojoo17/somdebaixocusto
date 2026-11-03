"use client";

import { useState } from "react";
import type { Afiliado } from "@/data/afiliados";
import { categorias } from "@/data/afiliados";
import StoreBadge from "./StoreBadge";
import ModalProduto from "./ModalProduto";

const formatarPreco = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function AfiliadoCard({ afiliado: a }: { afiliado: Afiliado }) {
  const [aberto, setAberto] = useState(false);
  const nomeCategoria = categorias.find((c) => c.slug === a.categoria)?.nome;

  return (
    <li>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="group w-full h-full flex flex-col text-left bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-orange-300 transition"
      >
        <div className="relative h-24 sm:h-28 bg-stone-100 flex items-center justify-center p-2">
          <img
            src={a.imagem}
            alt={a.nome}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {a.status === "testado" && (
            <span className="absolute top-1.5 left-1.5 text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-orange-500 text-white shadow">
              Testado
            </span>
          )}
        </div>

        <div className="p-2.5 flex flex-col gap-0.5 flex-1">
          <p className="text-[10px] uppercase tracking-wide text-stone-500 truncate">
            {a.marca}
            {nomeCategoria ? ` · ${nomeCategoria}` : ""}
          </p>
          <h3 className="font-heading text-black font-bold text-sm leading-tight uppercase tracking-wide">
            {a.nome}
          </h3>

          <div className="mt-auto pt-1.5 flex items-center justify-between gap-2">
            <StoreBadge nome={a.loja} />
            {a.preco !== undefined && (
              <span className="text-xs font-semibold text-stone-800">
                {formatarPreco(a.preco)}
              </span>
            )}
          </div>
        </div>
      </button>

      {aberto && (
        <ModalProduto afiliado={a} onFechar={() => setAberto(false)} />
      )}
    </li>
  );
}
