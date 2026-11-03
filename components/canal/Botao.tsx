type BotaoProps = {
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  externo?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base = "inline-block rounded-2xl px-4 py-2 text-white";

export default function Botao({
  href,
  onClick,
  disabled,
  externo,
  className = "",
  children,
}: BotaoProps) {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...(externo && {
          target: "_blank",
          rel: "sponsored noopener noreferrer",
        })}
        className={`${base} bg-stone-900 transform hover:-translate-y-0.5 ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${
        disabled
          ? "bg-stone-400 cursor-not-allowed"
          : "bg-stone-900 transform hover:-translate-y-0.5"
      } ${className}`}
    >
      {children}
    </button>
  );
}
