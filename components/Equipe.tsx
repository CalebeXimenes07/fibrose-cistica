"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Equipe() {
  const { titulo, introducao, membros } = site.equipe;
  const trilhaRef = useRef<HTMLDivElement>(null);

  const rolar = (direcao: 1 | -1) => {
    trilhaRef.current?.scrollBy({ left: direcao * 240, behavior: "smooth" });
  };

  return (
    <section id="equipe" className="px-6 py-24 bg-neutro-lilas">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-2">
                {titulo}
              </h2>
              <p className="text-cinza-roxo text-lg">{introducao}</p>
            </div>

            <div className="hidden sm:flex gap-2 shrink-0 ml-6">
              <button
                onClick={() => rolar(-1)}
                aria-label="Ver integrante anterior"
                className="w-9 h-9 rounded-full border border-lilas/40 text-roxo-profundo hover:bg-lilas/10 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => rolar(1)}
                aria-label="Ver próximo integrante"
                className="w-9 h-9 rounded-full border border-lilas/40 text-roxo-profundo hover:bg-lilas/10 transition-colors"
              >
                ›
              </button>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div
            ref={trilhaRef}
            className="flex gap-6 overflow-x-auto pt-4 pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin]"
          >
            {membros.map((membro, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-36 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-lilas/30 flex items-center justify-center mb-3">
                  {membro.foto && !membro.foto.includes("placeholder") ? (
                    <Image
                      src={membro.foto}
                      alt={membro.nome}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-roxo-profundo font-display text-lg">
                      {membro.nome.charAt(0)}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-roxo-profundo">
                  {membro.nome}
                </p>
                <p className="text-xs text-cinza-roxo mt-0.5">
                  {membro.funcao}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}