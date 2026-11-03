"use client";
import type { Secao } from "@/types/secao";
import { useAtraso } from "@/hooks/useAtraso";
import { animacao, painelAfiliados } from "@/lib/animacoes";
import SecaoSobre from "./SecaoSobre";
import LogoComRedes from "./LogoComRedes";
import SecaoDownloads from "./SecaoDownloads";
import PainelAfiliados from "./PainelAfiliados";

type CorpoProps = {
  secao: Secao;
};

export default function Corpo({ secao }: CorpoProps) {
  const afiliados = secao === "afiliados";
  const logoSumiu = useAtraso(afiliados, 1000);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-4 md:py-0">
      <div className={animacao(secao === "sobre", "esquerda")}>
        <SecaoSobre />
      </div>

      <LogoComRedes
        mostrarRedes={secao === "inicio"}
        esmaecido={afiliados}
        removido={logoSumiu}
      />

      <div className={animacao(secao === "downloads", "direita")}>
        <SecaoDownloads />
      </div>

      <div className={painelAfiliados(afiliados && logoSumiu)}>
        <PainelAfiliados />
      </div>
    </div>
  );
}
