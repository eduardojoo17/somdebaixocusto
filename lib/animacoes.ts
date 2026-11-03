export const animacao = (aberto: boolean, lado: "esquerda" | "direita") =>
  `flex flex-col lg:flex-row gap-4 px-4 md:px-0 overflow-hidden transition-all duration-[1800ms] ease-in-out ${
    aberto
      ? `max-h-[1500px] md:max-h-none md:max-w-[1000px] opacity-100 translate-x-0 ${
          lado === "esquerda" ? "md:mr-4" : "md:ml-4"
        }`
      : `max-h-0 md:max-h-none md:max-w-0 opacity-0 ${
          lado === "esquerda" ? "md:-translate-x-10" : "md:translate-x-10"
        }`
  }`;

export const iconeSocial = (visivel: boolean) =>
  `absolute top-1/2 -translate-y-1/2 transition-opacity duration-[1200ms] ease-in-out ${
    visivel ? "opacity-100" : "opacity-0 pointer-events-none"
  }`;

export const painelAfiliados = (aberto: boolean) =>
  `w-full transition-opacity duration-[1200ms] ease-in-out ${
    aberto
      ? "max-w-6xl opacity-100 px-4 py-4"
      : "max-w-0 max-h-0 overflow-hidden opacity-0"
  }`;
