import { usePresets } from "@/hooks/usePresets";
import ApoieCanal from "./ApoieCanal";
import PresetCard from "./PresetCard";

export default function SecaoDownloads() {
  const presets = usePresets();

  return (
    <>
      <ApoieCanal />
      {presets.map((p) => (
        <PresetCard key={p.id} preset={p} />
      ))}
    </>
  );
}
