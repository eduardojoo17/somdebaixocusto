import { listaAfiliados } from "@/data/afiliados";
import AfiliadoCard from "./AfiliadoCard";

export default function PainelAfiliados() {
  return (
    <>
      <h2 className="font-heading text-black font-bold text-2xl uppercase tracking-wide">
        Equipamentos de baixo custo
      </h2>
      <p className="text-sm text-stone-600 mt-1 mb-4">
        Ao comprar por estes links, o canal ganha uma pequena comissão, sem
        custo extra para você.
      </p>

      <ul className="divide-y divide-stone-200 border rounded-2xl shadow bg-white overflow-hidden">
        {listaAfiliados.map((a) => (
          <AfiliadoCard key={a.nome} afiliado={a} />
        ))}
      </ul>
    </>
  );
}
