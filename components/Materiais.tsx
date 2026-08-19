import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Materiais() {
  const { titulo, introducao, arquivos } = site.materiais;

  return (
    <section id="materiais" className="px-6 py-24 bg-branco-lilas">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-10">{introducao}</p>
        </SectionReveal>

        <div className="space-y-3">
          {arquivos.map((arquivo, i) => (
            <SectionReveal key={arquivo.titulo} delay={i * 0.08}>
              <a
                href={arquivo.url}
                download
                className="flex items-center justify-between gap-4 rounded-2xl bg-neutro-lilas p-5 border border-lilas/20 hover:border-roxo-acao/50 transition-colors"
              >
                <div>
                  <p className="text-roxo-profundo font-medium">
                    {arquivo.titulo}
                  </p>
                  <p className="text-xs text-cinza-roxo mt-1">
                    {arquivo.tipo}
                  </p>
                </div>
                <span className="px-4 py-2 rounded-full bg-roxo-acao text-white text-sm shrink-0">
                  Baixar
                </span>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
