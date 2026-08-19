import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function OQueE() {
  const { titulo, paragrafos, destaques } = site.oQueE;

  return (
    <section id="o-que-e" className="px-6 py-24 bg-branco-lilas">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-8">
            {titulo}
          </h2>
        </SectionReveal>

        <div className="space-y-4 mb-12">
          {paragrafos.map((paragrafo, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <p className="text-cinza-roxo leading-relaxed text-lg">
                {paragrafo}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-5">
            {destaques.map((destaque, i) => (
              <div
                key={i}
                className="rounded-2xl bg-neutro-lilas p-6 border border-lilas/20"
              >
                <p className="font-display text-2xl text-roxo-acao mb-2">
                  {destaque.numero}
                </p>
                <p className="text-sm text-cinza-roxo leading-relaxed">
                  {destaque.legenda}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
