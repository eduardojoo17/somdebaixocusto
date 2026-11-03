import type { Afiliado } from "@/data/afiliados";
import Botao from "./Botao";
import StoreBadge from "./StoreBadge";

export default function AfiliadoCard({ afiliado: a }: { afiliado: Afiliado }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
      <img
        className="w-full h-40 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0"
        src={a.imagem}
        alt={a.nome}
      />

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
            {a.nome}
          </h3>
          <StoreBadge nome={a.loja} />
        </div>
        <p className="text-xs text-stone-500">{a.tipo}</p>
        {a.descricao && (
          <p className="text-sm text-stone-700 mt-1">{a.descricao}</p>
        )}
      </div>

      <div className="sm:shrink-0">
        <Botao href={a.url} externo>
          Ver preço na loja
        </Botao>
      </div>
    </li>
  );
}
