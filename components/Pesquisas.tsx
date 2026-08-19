import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Pesquisas() {
  const { titulo, introducao, topicos } = site.pesquisas;

  return (
    <section id="pesquisas" className="px-6 py-24 bg-branco-lilas">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-10 leading-relaxed">
            {introducao}
          </p>
        </SectionReveal>

        <ul className="space-y-4">
          {topicos.map((topico, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <li className="flex gap-3 items-start">
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-roxo-acao mt-2.5 shrink-0"
                />
                <p className="text-cinza-roxo leading-relaxed">{topico}</p>
              </li>
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
