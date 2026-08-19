"use client";

import { useEffect, useState } from "react";
import site from "@/content/site.json";

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const [rolado, setRolado] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 12);
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const irPara = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setAberto(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        rolado
          ? "bg-branco-lilas/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(124,58,237,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => irPara("inicio")}
          className="font-display text-lg text-roxo-profundo tracking-tight"
        >
          {site.projeto.nome}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {site.navegacao.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => irPara(item.id)}
                className="text-sm text-cinza-roxo hover:text-roxo-acao transition-colors duration-200"
              >
                {item.rotulo}
              </button>
            </li>
          ))}
        </ul>

        {/* Botão menu mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu de navegação"
          aria-expanded={aberto}
        >
          <span
            className={`block w-6 h-0.5 bg-roxo-profundo transition-transform duration-300 ${
              aberto ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-roxo-profundo transition-opacity duration-300 ${
              aberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-roxo-profundo transition-transform duration-300 ${
              aberto ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile expandido */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          aberto ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 bg-branco-lilas">
          {site.navegacao.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => irPara(item.id)}
                className="w-full text-left py-2.5 text-sm text-cinza-roxo hover:text-roxo-acao"
              >
                {item.rotulo}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
