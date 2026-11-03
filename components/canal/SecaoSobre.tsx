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

export default function SecaoSobre() {
  return (
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
        {cards.map((c) => (
          <div
            key={c.titulo}
            className="w-full max-w-sm md:w-64 lg:w-72 shrink-0"
          >
            <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
              {c.titulo}
            </h3>
            <p className="text-sm text-stone-700 whitespace-pre-line">
              {c.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
