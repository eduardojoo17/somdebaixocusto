import { lojas } from "@/data/afiliados";

export default function StoreBadge({ nome }: { nome: string }) {
  const cor = lojas[nome] ?? { fundo: "#e7e5e4", texto: "#44403c" };

  return (
    <span
      style={{ backgroundColor: cor.fundo, color: cor.texto }}
      className="inline-flex items-center gap-1.5 rounded-full pl-1 pr-2.5 py-0.5 text-xs font-bold"
    >
      <span
        style={{ backgroundColor: cor.texto, color: cor.fundo }}
        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] uppercase"
      >
        {nome.charAt(0)}
      </span>
      {nome}
    </span>
  );
}
