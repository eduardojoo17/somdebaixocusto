"use client";
import Cabeca from "@/components/curriculo/Cabeca";
import Corpo from "@/components/curriculo/Corpo";
import { useState } from "react";

export default function Curriculo() {
  const [secao, setSecao] = useState<string>("inicio");

  return (
    <div className="min-h-screen flex flex-col bg-pastel">
      <Cabeca selecionar={setSecao} />

      <p className="text-center text-sm">seção atual: {secao}</p>

      <main className="flex-1 flex items-center">
        <Corpo secao={secao} />
      </main>
    </div>
  );
}
