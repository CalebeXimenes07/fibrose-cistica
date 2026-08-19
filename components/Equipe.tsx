import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Equipe() {
  const { titulo, introducao, membros } = site.equipe;

  return (
    <section id="equipe" className="px-6 py-24 bg-neutro-lilas">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-12">{introducao}</p>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {membros.map((membro, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="text-center">
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
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
