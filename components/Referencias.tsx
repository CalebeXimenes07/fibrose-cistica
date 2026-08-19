import SectionReveal from "@/components/SectionReveal";
import site from "@/content/site.json";

export default function Referencias() {
  const { titulo, introducao, lista } = site.referencias;

  return (
    <section id="referencias" className="px-6 py-24 bg-branco-lilas">
      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-roxo-profundo mb-4">
            {titulo}
          </h2>
          <p className="text-cinza-roxo text-lg mb-10">{introducao}</p>
        </SectionReveal>

        <ol className="space-y-4">
          {lista.map((ref, i) => (
            <SectionReveal key={ref.titulo} delay={i * 0.08}>
              <li className="rounded-2xl bg-neutro-lilas p-5 border border-lilas/20">
                <p className="text-roxo-profundo font-medium mb-1">
                  {ref.titulo}
                </p>
                <p className="text-sm text-cinza-roxo mb-3">
                  {ref.autores} · {ref.ano}
                </p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-roxo-acao hover:underline"
                >
                  Acessar fonte original ↗
                </a>
              </li>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
