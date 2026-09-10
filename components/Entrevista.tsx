import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Entrevista() {
  const { titulo, introducao, entrevistado, texto } = site.entrevista;

  // Quebra o texto colado em parágrafos sempre que há uma linha em branco
  const paragrafos = texto.split(/\n\s*\n/).filter(Boolean);

  // Divide as informações do entrevistado (separadas por "|") para criar "tags" visuais
  const tagsEntrevistado = entrevistado.split("|").map((t) => t.trim());

  return (
    <section
      id="entrevista"
      className="px-6 py-24 bg-gradient-to-b from-neutro-lilas to-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* === CABEÇALHO DA ENTREVISTA === */}
        <SectionReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-roxo-acao/10 text-roxo-acao text-sm font-bold tracking-widest uppercase mb-6">
              {introducao}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-roxo-profundo mb-8 leading-tight">
              {titulo}
            </h2>
            
            {/* Tags do Entrevistado */}
            <div className="flex flex-wrap justify-center gap-3">
              {tagsEntrevistado.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-branco-lilas border border-lilas/30 text-roxo-profundo px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-2"
                >
                  {/* Ícone sutil no primeiro item (nome) */}
                  {idx === 0 && (
                    <svg className="w-4 h-4 text-roxo-acao" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  )}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* === CONTEÚDO DA ENTREVISTA === */}
        <div className="space-y-6">
          {paragrafos.map((paragrafo, i) => {
            
            // 1. Separadores (⸻)
            if (paragrafo.trim() === "⸻") {
              return (
                <SectionReveal key={i} delay={0.1}>
                  <div className="flex items-center justify-center py-10 opacity-60">
                    <div className="h-px bg-lilas/50 w-full max-w-[150px]"></div>
                    <div className="mx-4 text-roxo-acao/50 text-xl">✦</div>
                    <div className="h-px bg-lilas/50 w-full max-w-[150px]"></div>
                  </div>
                </SectionReveal>
              );
            }

            // 2. Perguntas (Identifica padrão "1. Texto...")
            const matchPergunta = paragrafo.match(/^(\d+)\.\s(.*)/);
            if (matchPergunta) {
              const numero = matchPergunta[1];
              const textoPergunta = matchPergunta[2];
              return (
                <SectionReveal key={i} delay={0.1}>
                  <div className="flex gap-4 md:gap-6 items-start mt-12 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-roxo-acao text-white flex items-center justify-center font-display font-bold text-xl md:text-2xl shadow-lg border-4 border-white">
                      {numero}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-roxo-profundo leading-relaxed pt-2 md:pt-3">
                      {textoPergunta}
                    </h3>
                  </div>
                </SectionReveal>
              );
            }

            // 3. Respostas do Entrevistado (Identifica "Bedo:")
            if (paragrafo.startsWith("Bedo:")) {
              const resposta = paragrafo.replace(/^Bedo:\s*/, "");
              return (
                <SectionReveal key={i} delay={0.2}>
                  <div className="ml-4 md:ml-20 bg-white p-6 md:p-8 rounded-2xl rounded-tl-none shadow-sm border border-lilas/20 relative group hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    {/* Aspas decorativas no fundo */}
                    <div className="absolute top-2 right-6 text-8xl text-lilas/10 font-serif leading-none select-none group-hover:text-roxo-acao/10 transition-colors">
                      "
                    </div>
                    
                    <p className="text-roxo-acao font-bold mb-3 text-sm tracking-wide uppercase">
                      Resposta
                    </p>
                    <p className="text-cinza-roxo leading-relaxed whitespace-pre-line text-lg md:text-[1.1rem] relative z-10">
                      {resposta}
                    </p>
                  </div>
                </SectionReveal>
              );
            }

            // 4. Subtítulo Final
            if (paragrafo === "Mais do que um diagnóstico") {
              return (
                <SectionReveal key={i} delay={0.1}>
                  <h3 className="text-3xl md:text-4xl font-display text-roxo-profundo mt-20 mb-8 text-center relative inline-block left-1/2 -translate-x-1/2">
                    {paragrafo}
                    <div className="absolute -bottom-3 left-0 w-full h-1 bg-roxo-acao/20 rounded-full"></div>
                  </h3>
                </SectionReveal>
              );
            }

            // 5. Notas (iniciadas com "Nota:")
            if (paragrafo.startsWith("Nota:")) {
              return (
                <SectionReveal key={i} delay={0.1}>
                  <p className="text-sm md:text-base text-cinza-roxo/80 italic border-l-4 border-roxo-acao/40 pl-4 my-8 bg-branco-lilas/50 py-3 rounded-r-lg">
                    {paragrafo}
                  </p>
                </SectionReveal>
              );
            }

            // 6. Parágrafos Normais (Introdução e Conclusão)
            return (
              <SectionReveal key={i} delay={0.1}>
                <p className="text-cinza-roxo leading-relaxed text-lg md:text-[1.15rem]">
                  {paragrafo}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}