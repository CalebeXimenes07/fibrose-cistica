import site from "@/content/site.json";

export default function Rodape() {
  return (
    <footer className="px-6 py-10 bg-roxo-profundo text-branco-lilas/70 text-center text-sm">
      <p className="font-display text-branco-lilas text-base mb-2">
        {site.projeto.nome}
      </p>
      <p>Projeto de extensão universitária sobre Fibrose Cística.</p>
    </footer>
  );
}
