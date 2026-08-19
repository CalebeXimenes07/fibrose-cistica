// A partir do Tailwind CSS v4, a configuração de cores e fontes
// não fica mais aqui — fica direto em app/globals.css, dentro do
// bloco @theme. Este arquivo é mantido vazio/mínimo só para
// compatibilidade; não precisa editá-lo.
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
