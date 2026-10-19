"use client";
type cabecaProps = {
  selecionar: (nome: string) => void;
};

export default function Cabeca({ selecionar }: cabecaProps) {
  const menuTopo = [
    { id: "inicio", texto: "Início" },
    { id: "sobre", texto: "Sobre" },
    { id: "downloads", texto: "Downloads" },
    { id: "afiliados", texto: "Equipo de Baixo Custo" },
  ];

  return (
    <header className="flex flex-row flex-wrap text-center text-white gap-2 p-2 bg-stone-900 justify-end font-heading tracking-wide">
      {menuTopo.map((n) => (
        <button
          className="border shadow hover:shadow p-2 rounded-2xl transform hover:-translate-y-0.5 transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500"
          key={n.id}
          onClick={() => selecionar(n.id)}
        >
          {n.texto}
        </button>
      ))}
    </header>
  );
}
