"use client";

import { motion } from "framer-motion";
import site from "@/content/site.json";

/**
 * Assinatura visual da página: anéis concêntricos finos que se expandem
 * e contraem lentamente atrás do título, como uma respiração — sutil,
 * não-literal, sem desenhar um pulmão explícito.
 */
function AneisRespiracao() {
  const aneis = [0, 1, 2];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {aneis.map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-roxo-acao/25"
          style={{ width: 260 + i * 140, height: 260 + i * 140 }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-gradient-to-b from-branco-lilas to-neutro-lilas"
    >
      <AneisRespiracao />

      <div className="relative max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-roxo-acao mb-5"
        >
          Projeto de Extensão Universitária
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl leading-[1.1] text-roxo-profundo mb-6"
        >
          {site.projeto.nome}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display italic text-xl md:text-2xl text-roxo-acao mb-6 leading-snug"
        >
          &ldquo;{site.projeto.slogan}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-cinza-roxo max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {site.projeto.descricaoCurta}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("o-que-e")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full bg-roxo-acao text-white font-medium hover:bg-roxo-profundo transition-colors duration-300"
          >
            Saiba o que é
          </button>
          <button
            onClick={() =>
              document
                .getElementById("referencias")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full border border-roxo-acao/40 text-roxo-profundo font-medium hover:border-roxo-acao hover:bg-lilas/10 transition-colors duration-300"
          >
            Ver fontes científicas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
