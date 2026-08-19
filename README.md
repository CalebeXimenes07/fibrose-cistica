# Site — Projeto de Extensão: Fibrose Cística

Site one-page em Next.js (App Router) + Tailwind CSS + Framer Motion.

## Por que essa stack

- **Next.js**: gera um site rápido, ótimo para SEO (importante — muita gente vai chegar aqui pelo Google buscando "sintomas fibrose cística" etc).
- **Conteúdo em JSON separado da interface**: todo o texto, links de referências, fotos da equipe e do projeto ficam em `/content/*.json`. O grupo NÃO precisa mexer em código para atualizar texto — só editar esses arquivos (ou, no futuro, conectar a um CMS como Sanity/Decap que edita esses mesmos dados visualmente).
- **Framer Motion**: anima os elementos suavemente ao rolar a página, sem ser exagerado.

## Estrutura de pastas

```
fibrose-cistica/
├── app/
│   ├── layout.tsx          # layout raiz, fontes, metadata SEO
│   ├── page.tsx            # monta a página juntando todas as seções
│   └── globals.css         # tokens de cor, tipografia, tailwind
├── components/
│   ├── Nav.tsx              # menu fixo com rolagem suave
│   ├── Hero.tsx              # seção "Início"
│   ├── SectionReveal.tsx    # wrapper de animação fade/slide reutilizável
│   ├── (próximos: OQueE.tsx, Sintomas.tsx, Diagnostico.tsx,
│   │   Tratamento.tsx, Pesquisas.tsx, Projeto.tsx, Materiais.tsx,
│   │   Equipe.tsx, Referencias.tsx — mesmo padrão do Hero)
├── content/
│   ├── site.json            # nome do projeto, slogan, textos de cada seção
│   ├── equipe.json          # membros da equipe (nome, foto, função)
│   ├── projeto.json         # fotos/registros do projeto de extensão
│   ├── materiais.json       # arquivos para download (PDFs, etc.)
│   └── referencias.json     # fontes científicas (título, autores, link, ano)
└── public/images/
    ├── equipe/               # fotos da equipe
    └── projeto/              # fotos do projeto de extensão
```

## Como o grupo vai atualizar o conteúdo (sem programar)

**Curto prazo (agora):** abrir os arquivos `.json` dentro de `/content` em qualquer editor de texto (até o Bloco de Notas funciona) e trocar os valores entre aspas. A estrutura de cada campo está comentada abaixo. Nenhum componente precisa ser tocado.

**Médio prazo (recomendado):** conectar ao **Decap CMS** (gratuito, guarda tudo no GitHub, interface visual tipo formulário) ou **Sanity** (interface mais bonita, plano gratuito generoso). Como todo o conteúdo já está isolado em JSON com essa mesma forma, a migração é só apontar o CMS para gerar esses arquivos — não precisa reescrever nenhum componente React.

## Rodando localmente

```bash
npx create-next-app@latest fibrose-cistica --typescript --tailwind --app
cd fibrose-cistica
npm install framer-motion
# copiar os arquivos deste pacote para dentro do projeto criado
npm run dev
```
