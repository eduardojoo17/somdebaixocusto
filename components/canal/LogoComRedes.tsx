import { LINK_YOUTUBE, LINK_INSTAGRAM } from "@/lib/constantes";
import { iconeSocial } from "@/lib/animacoes";

type Props = {
  mostrarRedes: boolean;
  esmaecido: boolean;
  removido: boolean;
};

const estiloIcone =
  "block w-12 h-12 md:w-16 md:h-16 border rounded-full overflow-hidden bg-white hover:scale-105";

export default function LogoComRedes({
  mostrarRedes,
  esmaecido,
  removido,
}: Props) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-opacity duration-[1000ms] ease-in-out ${
        esmaecido ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${removido ? "hidden" : ""}`}
    >
      <a
        className={`${iconeSocial(mostrarRedes)} right-full mr-3 ${estiloIcone}`}
        href={LINK_YOUTUBE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full h-full object-cover"
          src="/ytb-logo.png"
          alt="YouTube do Som de Baixo Custo"
        />
      </a>

      <img
        className="w-48 md:w-64 lg:w-80 rounded-b-full"
        src="/logo.png"
        alt="Logo Som de Baixo Custo"
      />

      <a
        className={`${iconeSocial(mostrarRedes)} left-full ml-3 ${estiloIcone}`}
        href={LINK_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full h-full object-cover"
          src="/inst-logo.jpg"
          alt="Instagram do Som de Baixo Custo"
        />
      </a>
    </div>
  );
}
