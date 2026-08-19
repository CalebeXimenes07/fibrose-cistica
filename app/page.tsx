import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OQueE from "@/components/OQueE";
import Sintomas from "@/components/Sintomas";
import Diagnostico from "@/components/Diagnostico";
import Tratamento from "@/components/Tratamento";
import Pesquisas from "@/components/Pesquisas";
import Projeto from "@/components/Projeto";
import Materiais from "@/components/Materiais";
import Equipe from "@/components/Equipe";
import Referencias from "@/components/Referencias";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OQueE />
      <Sintomas />
      <Diagnostico />
      <Tratamento />
      <Pesquisas />
      <Projeto />
      <Materiais />
      <Equipe />
      <Referencias />
      <Rodape />
    </main>
  );
}
