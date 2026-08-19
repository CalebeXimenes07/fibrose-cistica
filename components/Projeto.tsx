"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Projeto() {
  const { titulo, sobre, registros } = site.projeto;
  const trilhaRef = useRef<HTMLDivElement>(null);

  const rolar = (direcao: 1 | -1) => {
    trilhaRef.current?.scrollBy({ left: direcao * 300, behavior: "smooth" });
  };

  return (
    <section id="projeto" className="px-6 py-24 bg-neutro-lilas">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-6">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg leading-relaxed max-w-2xl mb-12">
            {sobre}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg text-roxo-profundo">
              Registros fotográficos
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => rolar(-1)}
                aria-label="Ver registro anterior"
                className="w-9 h-9 rounded-full border border-lilas/40 text-roxo-profundo hover:bg-lilas/10 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => rolar(1)}
                aria-label="Ver próximo registro"
                className="w-9 h-9 rounded-full border border-lilas/40 text-roxo-profundo hover:bg-lilas/10 transition-colors"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={trilhaRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin]"
          >
            {registros.map((registro, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-64 rounded-2xl overflow-hidden border border-lilas/20 bg-branco-lilas"
              >
                {/* Troque o placeholder por uma foto real: adicione "foto": "/images/projeto/nome-do-arquivo.jpg" no content/site.json */}
                <div className="h-40 bg-lilas/20 flex items-center justify-center text-cinza-roxo text-xs overflow-hidden">
                  {registro.foto ? (
                    <Image
                      src={registro.foto}
                      alt={registro.legenda}
                      width={256}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "Foto do projeto"
                  )}
                </div>
                <p className="p-4 text-sm text-cinza-roxo">
                  {registro.legenda}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
