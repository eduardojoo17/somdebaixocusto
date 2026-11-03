import { useEffect, useState } from "react";

// Fica true só depois de `ms` com `ativo` ligado. Volta a false ao desligar.
export function useAtraso(ativo: boolean, ms: number) {
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    if (!ativo) return undefined;
    const t = setTimeout(() => setPronto(true), ms);
    return () => {
      clearTimeout(t);
      setPronto(false);
    };
  }, [ativo, ms]);

  return pronto;
}
