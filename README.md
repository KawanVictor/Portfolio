# Portfólio | Kawan Victor Cavalcante

**Desenvolvido em React + TypeScript + Vite**

🔗 **Acesse o site:** [kawanvictor.vercel.app](https://kawanvictor.vercel.app) · [English version](https://kawanvictor.vercel.app/en/)

[![CI](https://github.com/KawanVictor/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/KawanVictor/Portfolio/actions/workflows/ci.yml)

---

## ✨ Sobre

Bem-vindo ao meu portfólio! Sou Desenvolvedor Full Stack com experiência em telecom. Aqui apresento minha experiência profissional, minhas habilidades e meus projetos em destaque:

- [PC-Control-Center](https://github.com/KawanVictor/PC-Control-Center): central de monitoramento e personalização do Windows (Python + PySide6), com [instalador para download](https://github.com/KawanVictor/PC-Control-Center/releases/latest)
- [GAME-DESTRUCTOR](https://github.com/KawanVictor/GAME-DESTRUCTOR): jogo 2D no navegador (Phaser 3 + TypeScript), [jogável online](https://game-destructor.vercel.app)
- [SQL-Interface](https://github.com/KawanVictor/SQL-Interface): perguntas em português viram SQL parametrizado (FastAPI + React + MySQL), com demo interativa no próprio site
- [Notas-Escolares](https://github.com/KawanVictor/Notas-Escolares): lançamento de notas com login e Supabase, [no ar](https://notas-escolares-iota.vercel.app)

Outros: [War](https://github.com/KawanVictor/War), [TetrisV2-java](https://github.com/KawanVictor/TetrisV2-java), [ChessGame](https://github.com/KawanVictor/ChessGame) e [Biblioteca_Gamer](https://github.com/KawanVictor/Biblioteca_Gamer).

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) e [Vitest](https://vitest.dev/)
- CSS moderno (sem framework), fonte Inter servida pelo próprio site
- [Vercel](https://vercel.com/) (hospedagem, Web Analytics e Speed Insights)

---

## 📂 Estrutura do Projeto

```
├── index.html            # Página em português; o build gera também dist/en/index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── content.ts        # Todos os textos do site, em português e inglês
│   ├── lang.ts           # Idioma pelo endereço (/ e /en/) e geração do HTML em inglês
│   ├── components/       # Uma seção por arquivo: Header, HeroHighlight, About, Projects, SqlDemo, Skills...
│   ├── demo/             # Lógica da demo do SQL-Interface que roda no navegador
│   ├── *.test.ts         # Testes (Vitest)
│   └── styles/main.css
├── public/               # Currículos em PDF, imagens dos projetos (WebP), robots.txt e sitemap.xml
├── .github/workflows/ci.yml   # Lint, testes e build a cada push
├── eslint.config.js
├── tsconfig.json
└── vite.config.ts        # Inclui o plugin que gera a página /en/
```

---

## 🛠️ Como Rodar Localmente

Requer [Node.js](https://nodejs.org) 22 ou mais recente.

```bash
git clone https://github.com/KawanVictor/Portfolio.git
cd Portfolio
npm install
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173) (versão em inglês em [/en/](http://localhost:5173/en/)).

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm test` | Testes (parser da demo, idiomas e conteúdo) |
| `npm run lint` | ESLint |
| `npm run build` | Checagem de tipos e build de produção em `dist/` |
| `npm run preview` | Serve o build localmente |

---

## 📱 Funcionalidades & Diferenciais

- Versões em português (`/`) e inglês (`/en/`), cada uma com título, descrição e prévia de link próprias
- Demo interativa do SQL-Interface rodando no navegador, com os valores separados em parâmetros
- Interface responsiva, com menu acessível no celular (Esc ou toque fora fecham) e suporte a movimento reduzido
- SEO: `hreflang`, endereço canônico, `sitemap.xml` e dados estruturados (JSON-LD)
- Imagens em WebP e fonte servida pelo próprio site, sem depender do Google Fonts
- Testes automatizados e CI com lint, testes e build a cada push

---

## 📝 Contato

- [LinkedIn](https://www.linkedin.com/in/kawan-cavalcante/)
- [GitHub](https://github.com/KawanVictor)
- [Instagram](https://www.instagram.com/kavictor20/)
- E-mail: kawan.cavalcante@outlook.com

---

> Projeto de portfólio criado para exposição de experiências, aprendizados e conexões profissionais. Novos projetos e atualizações serão adicionados frequentemente.
