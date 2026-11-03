"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Preset } from "@/types/preset";
import { ZOOM_ARQUIVO } from "@/lib/constantes";

const ehZoom = (pedaleira: string) => pedaleira.toLowerCase().includes("zoom");

// Card reserva caso a linha da Zoom não venha do banco.
const zoomReserva: Preset = {
  id: "zoom-reserva",
  nome: "presets zoom b1on",
  pedaleira: "zoom",
  descricao: "6 presets para b1on",
  arquivo_path: ZOOM_ARQUIVO,
  downloads: 0,
};

export function usePresets() {
  const [presets, setPresets] = useState<Preset[]>([]);

  useEffect(() => {
    supabase
      .from("presets")
      .select("id, nome, pedaleira, descricao, arquivo_path, downloads")
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (error) console.error("Erro ao buscar presets:", error);
        else setPresets(data ?? []);
      });
  }, []);

  const temZoom = presets.some((p) => ehZoom(p.pedaleira));
  return temZoom ? presets : [...presets, zoomReserva];
}
