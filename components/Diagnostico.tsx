import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Diagnostico() {
  const { titulo, introducao, etapas } = site.diagnostico;

  return (
    <section id="diagnostico" className="px-6 py-24 bg-branco-lilas">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-12 max-w-2xl">
            {introducao}
          </p>
        </SectionReveal>

        <div className="space-y-4">
          {etapas.map((etapa, i) => (
            <SectionReveal key={etapa.titulo} delay={i * 0.08}>
              <div className="flex gap-5 items-start rounded-2xl bg-neutro-lilas p-6 border border-lilas/20">
                <span className="font-display text-2xl text-lilas shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg text-roxo-profundo mb-1">
                    {etapa.titulo}
                  </h3>
                  <p className="text-cinza-roxo leading-relaxed text-sm">
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
