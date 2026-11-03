"use client";
import { useState } from "react";
import { PIX_CHAVE, PIX_NOME, PIX_BANCO } from "@/lib/constantes";
import Botao from "./Botao";

export default function ApoieCanal() {
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

  return (
    <div className="w-full max-w-sm md:w-64 shrink-0 border rounded-2xl p-4 shadow bg-white">
      <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
        Apoie o canal
      </h3>
      <p className="text-sm text-stone-700 mt-2">
        Os presets são gratuitos. Se quiser ajudar o canal, pode fazer uma
        doação via Pix, mas é totalmente opcional.
      </p>
      <p className="text-sm text-stone-700 mt-2">
        Não pode doar? Sem problema: curtir, comentar e compartilhar os vídeos
        já ajuda muito.
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

      <Botao onClick={copiarPix} className="mt-3 w-full">
        {copiado ? "Copiado!" : "Copiar chave Pix"}
      </Botao>

      <p className="text-xs text-stone-500 mt-2">
        Confira se o nome do recebedor aparece correto antes de pagar.
      </p>
    </div>
  );
}
