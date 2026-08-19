import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Sintomas() {
  const { titulo, introducao, itens } = site.sintomas;

  return (
    <section id="sintomas" className="px-6 py-24 bg-neutro-lilas">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-12 max-w-2xl">
            {introducao}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {itens.map((item, i) => (
            <SectionReveal key={item.titulo} delay={i * 0.08}>
              <div className="rounded-2xl bg-branco-lilas p-6 h-full border border-lilas/20">
                <h3 className="font-display text-xl text-roxo-acao mb-2">
                  {item.titulo}
                </h3>
                <p className="text-cinza-roxo leading-relaxed text-sm">
                  {item.descricao}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
