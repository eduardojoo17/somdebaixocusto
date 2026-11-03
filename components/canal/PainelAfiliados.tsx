"use client";

import { useMemo, useState } from "react";
import { listaAfiliados, categorias } from "@/data/afiliados";
import AfiliadoCard from "./AfiliadoCard";

type Ordem = "recentes" | "nome";

// remove acentos e deixa minúsculo, para a busca achar "pedaleira" e "Pedaléira"
const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function PainelAfiliados() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<string>("todos");
  const [ordem, setOrdem] = useState<Ordem>("recentes");

  const categoriasComProduto = categorias.filter((c) =>
    listaAfiliados.some((a) => a.categoria === c.slug),
  );
  const totalTestados = listaAfiliados.filter(
    (a) => a.status === "testado",
  ).length;

  const visiveis = useMemo(() => {
    const termo = normalizar(busca.trim());

    const filtrados = listaAfiliados.filter((a) => {
      if (filtro === "testados" && a.status !== "testado") return false;
      if (filtro !== "todos" && filtro !== "testados" && a.categoria !== filtro)
        return false;
      if (!termo) return true;
      return normalizar(`${a.nome} ${a.marca} ${a.tipo}`).includes(termo);
    });

    return [...filtrados].sort((x, y) =>
      ordem === "nome"
        ? x.nome.localeCompare(y.nome, "pt-BR")
        : y.criadoEm.localeCompare(x.criadoEm),
    );
  }, [busca, filtro, ordem]);

  const chip = (ativo: boolean) =>
    `shrink-0 px-3 py-1.5 rounded-full text-sm border transition-colors ${
      ativo
        ? "bg-orange-500 border-orange-500 text-white"
        : "bg-white border-stone-300 text-stone-700 hover:border-orange-500 hover:text-orange-600"
    }`;

  return (
    <>
      <h2 className="font-heading text-black font-bold text-2xl uppercase tracking-wide">
        Equipamentos de baixo custo
      </h2>
      <p className="text-sm text-stone-600 mt-1">
        Ao comprar por estes links, o canal ganha uma pequena comissão, sem
        custo extra para você.
      </p>

      <p className="text-sm text-stone-600 mt-3 mb-4">
        <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-orange-500 text-white mr-1.5 align-middle">
          Testado
        </span>
        foi usado e mostrado em vídeo no canal. Os demais não têm o selo, mas
        também foram escolhidos a dedo: só entram na lista equipamentos com boa
        reputação e bom custo-benefício.
      </p>

      {/* Busca */}
      <div className="relative mb-3">
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar pedal, pedaleira, marca..."
          aria-label="Buscar equipamentos"
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      {/* Filtros */}
      <div className="flex gap-2 overflow-x-auto pb-3">
        <button
          className={chip(filtro === "todos")}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>

        {totalTestados > 0 && (
          <button
            className={chip(filtro === "testados")}
            onClick={() => setFiltro("testados")}
          >
            Testados pelo canal
          </button>
        )}

        {categoriasComProduto.map((c) => (
          <button
            key={c.slug}
            className={chip(filtro === c.slug)}
            onClick={() => setFiltro(c.slug)}
          >
            {c.nome}
          </button>
        ))}
      </div>

      {/* Contagem e ordenação */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <p className="text-sm text-stone-500">
          {visiveis.length} {visiveis.length === 1 ? "produto" : "produtos"}
        </p>

        <label className="flex items-center gap-2 text-sm text-stone-500">
          Ordenar
          <select
            value={ordem}
            onChange={(e) => setOrdem(e.target.value as Ordem)}
            className="rounded-lg border border-stone-300 bg-white px-2 py-1 text-sm text-stone-800 focus:outline-none focus:border-orange-500"
          >
            <option value="recentes">Mais recentes</option>
            <option value="nome">Nome (A–Z)</option>
          </select>
        </label>
      </div>

      {/* Grade */}
      {visiveis.length > 0 ? (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(8.5rem,9.5rem))] justify-center sm:justify-start gap-2.5 sm:gap-3">
          {visiveis.map((a) => (
            <AfiliadoCard key={a.nome} afiliado={a} />
          ))}
        </ul>
      ) : (
        <div className="border rounded-2xl bg-white p-8 text-center text-sm text-stone-500">
          Nenhum produto encontrado.{" "}
          <button
            className="text-orange-600 underline"
            onClick={() => {
              setBusca("");
              setFiltro("todos");
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}
