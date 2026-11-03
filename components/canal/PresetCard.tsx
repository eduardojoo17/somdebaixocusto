import { supabase } from "@/lib/supabase";
import { BUCKET } from "@/lib/constantes";
import type { Preset } from "@/types/preset";
import Botao from "./Botao";

const ehZoom = (pedaleira: string) => pedaleira.toLowerCase().includes("zoom");

const imagemDaPedaleira = (pedaleira: string) =>
  ehZoom(pedaleira) ? "/b1on.png" : "/tankB.png";

const urlDownload = (caminho: string) =>
  supabase.storage.from(BUCKET).getPublicUrl(caminho, { download: true }).data
    .publicUrl;

export default function PresetCard({ preset }: { preset: Preset }) {
  return (
    <div className="w-full max-w-sm md:w-64 shrink-0 border rounded-2xl overflow-hidden shadow bg-white">
      <img
        className="w-full h-52 object-cover"
        src={imagemDaPedaleira(preset.pedaleira)}
        alt={`${preset.nome} - ${preset.pedaleira}`}
      />
      <div className="p-4">
        <h3 className="font-heading text-black font-bold text-lg uppercase tracking-wide">
          {preset.nome}
        </h3>
        <p className="text-xs text-stone-500">{preset.pedaleira}</p>
        {preset.descricao && (
          <p className="text-sm text-stone-700 mt-2">{preset.descricao}</p>
        )}
        <div className="mt-3">
          {preset.arquivo_path ? (
            <Botao href={urlDownload(preset.arquivo_path)}>Baixar</Botao>
          ) : (
            <Botao disabled>Indisponível</Botao>
          )}
        </div>
      </div>
    </div>
  );
}
