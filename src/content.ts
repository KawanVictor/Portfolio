export type Lang = 'pt' | 'en';

interface Role {
  title: string;
  company: string;
  period: string;
  summary: string;
  items: string[];
}

interface Project {
  name: string;
  desc: string;
  tags: string[];
  url: string;
  kind: string;
  demoAnchor?: string;
  liveUrl?: string;
  liveLabel?: string;
  imageWide?: boolean;
  image?: string;
  imageAlt?: string;
}

interface TaggedCard {
  title: string;
  desc: string;
  tags: string[];
  kind?: string;
}

interface TextCard {
  title: string;
  desc: string;
}

export interface Content {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    interests: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    switchLang: string;
    switchLangLabel: string;
    backToTop: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    cvUrl: string;
    highlights: { value: string; label: string }[];
  };
  about: { title: string; paragraphs: string[]; quote: string };
  experience: {
    title: string;
    roles: Role[];
    competenciesTitle: string;
    competencies: TextCard[];
  };
  projects: {
    title: string;
    list: Project[];
    viewOnGithub: string;
    liveSite: string;
    othersLabel: string;
    others: { name: string; url: string }[];
    tryDemo: string;
    demo: {
      badge: string;
      title: string;
      intro: string;
      inputLabel: string;
      placeholder: string;
      run: string;
      examplesLabel: string;
      examples: string[];
      sqlLabel: string;
      paramsLabel: string;
      resultLabel: string;
      totalLabel: string;
      columns: { canal: string; equipamento: string; tipo_erro: string };
      empty: string;
      note: string;
    };
    more: string;
    workTitle: string;
    workNote: string;
    work: TaggedCard[];
  };
  skills: { title: string; groups: TaggedCard[] };
  education: { title: string; items: { title: string; desc: string; status: string }[] };
  interests: { title: string; list: TaggedCard[] };
  meta: { title: string; description: string };
  contact: { title: string; email: string; location: string; locationValue: string; whatsappMessage: string; whatsappCta: string };
  footer: string;
}

const projectUrls = {
  pccc: "https://github.com/KawanVictor/PC-Control-Center",
  pcccDownload: "https://github.com/KawanVictor/PC-Control-Center/releases/latest",
  sql: "https://github.com/KawanVictor/SQL-Interface",
  tetris: "https://github.com/KawanVictor/TetrisV2-java",
  destructor: "https://github.com/KawanVictor/GAME-DESTRUCTOR",
  chess: "https://github.com/KawanVictor/ChessGame",
  notas: "https://github.com/KawanVictor/Notas-Escolares",
  biblioteca: "https://github.com/KawanVictor/Biblioteca_Gamer",
  war: "https://github.com/KawanVictor/War"
};

const pt: Content = {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    skills: "Skills",
    education: "Formação",
    interests: "Interesses",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchLang: "EN",
    switchLangLabel: "Switch to English",
    backToTop: "Voltar ao topo"
  },
  hero: {
    eyebrow: "Desenvolvedor Full Stack · Telecom + Software",
    greeting: "Olá, eu sou o",
    lead: "Na equipe de Transformação Digital da Vivo (Telefônica Brasil), desenvolvo aplicações web de ponta a ponta: interfaces em React e TypeScript, APIs em Node.js, NestJS e Python, banco de dados e deploy com Docker e Kubernetes.",
    ctaProjects: "Ver Projetos em Destaque",
    ctaContact: "Entrar em Contato",
    ctaCv: "Baixar CV",
    cvUrl: "/cv/Kawan_Cavalcante_Curriculo_PT.pdf",
    highlights: [
      { value: "6 anos", label: "na Vivo (Telefônica Brasil)" },
      { value: "Full Stack", label: "React, TypeScript, Node.js, NestJS e Python" },
      { value: "DevOps & IA", label: "Docker, Kubernetes e integração de agentes de IA" },
      { value: "Observabilidade", label: "Grafana, Zabbix, OpenSearch e Graylog" }
    ]
  },
  about: {
    title: "Sobre Mim",
    paragraphs: [
      "Comecei na operação de telecom (N1/N2), lidando com monitoramento de ambientes críticos, incidentes e indicadores de SLA. Com o tempo, passei a resolver esses problemas com código. Hoje construo APIs, conectores e dashboards que reduzem trabalho manual e dão visibilidade para a operação.",
      "O que me diferencia: entendo tanto a rede quanto o software. Já trabalhei com IPTV/OTT e equipamentos Cisco, Nokia e Huawei, e hoje escrevo os sistemas que monitoram e automatizam esse ambiente.",
      "Busco posições de Desenvolvedor Backend / Full Stack, com interesse em DevOps, SRE e observabilidade. Estou aberto a trabalho remoto, híbrido ou presencial, em empresas no Brasil e no exterior."
    ],
    quote: "“Sempre busco aliar criatividade, técnica e trabalho em equipe para transformar ideias em soluções reais.”"
  },
  experience: {
    title: "Experiência Profissional",
    roles: [
      {
        title: "Analista Telecom Jr",
        company: "Telefônica Brasil (Vivo) · Equipe Transformação Digital · Engenharia de Transporte e Infraestrutura",
        period: "mar/25 – atual",
        summary: "Desenvolvimento de sistemas, integrações e automação para operação de rede e infraestrutura.",
        items: [
          "Desenvolvo conectores e integrações entre sistemas internos, com deploy em Docker e Kubernetes.",
          "Integro agentes de IA a fluxos operacionais de rede e infraestrutura.",
          "Criei sistema de monitoramento de infraestrutura (Node.js, TypeScript, React) sobre a API do Calicux.",
          "Desenvolvi API de Speedtest/Ookla em Python, com ingestão e análise no OpenSearch e Graylog."
        ]
      },
      {
        title: "Técnico Telecom Pleno",
        company: "Telefônica Brasil (Vivo) · O&M TV Transformation",
        period: "mar/23 – fev/25",
        summary: "Operação e transformação da plataforma de TV (IPTV), com foco em automação e indicadores.",
        items: [
          "Automatizei rotinas manuais da área de VOC (IPTV), após mapear as atividades do N1.",
          "Desenvolvi a aplicação VOC/Carimbo (TypeScript, React, banco de dados).",
          "Criei, com a área de Qualidade, o indicador KPI TV/BL de clientes afetados."
        ]
      },
      {
        title: "Suporte Técnico N1/N2",
        company: "Telefônica Brasil (Vivo) · Operação de TV · IPTV/OTT",
        period: "nov/20 – fev/23",
        summary: "Monitoramento e tratamento de incidentes em ambientes críticos de TV.",
        items: [
          "Monitorei ambientes críticos de TV (IPTV/OTT) com Grafana, Zabbix e DataMiner.",
          "Atuei no tratamento de incidentes em equipamentos Nokia, Cisco e Huawei.",
          "Acompanhei indicadores de KPI e SLA da operação."
        ]
      }
    ],
    competenciesTitle: "Principais Competências & Diferenciais",
    competencies: [
      { title: "Gestão de Incidentes & Troubleshooting Avançado:", desc: "resposta rápida em ambientes críticos." },
      { title: "Automação Operacional:", desc: "scripts e ferramentas para otimizar rotinas." },
      { title: "Comunicação e Liderança:", desc: "projetos de integração e treinamento interno." },
      { title: "Foco no Cliente:", desc: "entrega de valor e experiência mesmo sob pressão." },
      { title: "Aprimoramento Contínuo:", desc: "envolvimento em melhorias e métricas de SLA/SLO." }
    ]
  },
  projects: {
    title: "Projetos em Destaque",
    list: [
      {
        name: "PC Control Center",
        desc: "Central de monitoramento, otimização e personalização do Windows com dados reais do computador: desempenho, rede e aparelhos conectados, widgets de área de trabalho e cenários de um clique. Funciona sem administrador, faz backup antes de mexer no Registro e pede confirmação nas ações críticas.",
        tags: ["Python", "PySide6 (Qt 6)", "API do Windows", "SQLite", "ruff + mypy"],
        url: projectUrls.pccc,
        liveUrl: projectUrls.pcccDownload,
        liveLabel: "Baixar para Windows",
        kind: "App Desktop · Windows",
        image: "/projects/pc-control-center.webp",
        imageAlt: "Painel do PC Control Center com uso de CPU, memória, GPU, disco e rede em tempo real",
        imageWide: true
      },
      {
        name: "DESTRUCTOR",
        desc: "Jogo de ação e plataforma 2D no navegador em que você constrói paredes, armadilhas e torretas enquanto segura ondas de inimigos. Funciona no celular, com testes unitários e de navegador.",
        tags: ["TypeScript", "Phaser 3", "Vite", "Vitest", "Playwright"],
        url: projectUrls.destructor,
        liveUrl: "https://game-destructor.vercel.app",
        liveLabel: "Jogar agora",
        kind: "Jogo Web · No ar",
        image: "/projects/destructor.webp",
        imageAlt: "O chefe Titã chega enquanto as torretas defendem a colina",
        imageWide: true
      },
      {
        name: "SQL-Interface",
        desc: "Converte perguntas em português em consultas SQL sobre logs de falhas de transmissão. API com parser, gerador e validador de SQL, interface web e tudo sobe com um comando via Docker.",
        tags: ["Python", "FastAPI", "React", "MySQL", "Docker"],
        url: projectUrls.sql,
        kind: "Full Stack",
        demoAnchor: "#sql-demo",
        image: "/projects/sql-interface.webp",
        imageAlt: "Pergunta em português e a tabela de resultado com o total de falhas por canal",
        imageWide: true
      },
      {
        name: "Notas Escolares",
        desc: "Site para professores lançarem as notas de uma turma, calcularem as médias do trimestre e exportarem a planilha em CSV ou PDF. Cada professor entra com a própria conta e só enxerga os seus lançamentos.",
        tags: ["JavaScript", "Supabase", "PostgreSQL", "Testes + CI", "Vercel"],
        url: projectUrls.notas,
        liveUrl: "https://notas-escolares-iota.vercel.app",
        kind: "Aplicação Web · No ar",
        image: "/projects/notas-escolares.webp",
        imageAlt: "Planilha de lançamento de notas, com as médias coloridas por faixa",
        imageWide: true
      }
    ],
    liveSite: "Ver site",
    othersLabel: "Outros projetos:",
    others: [
      { name: "War (Python + Socket.IO)", url: projectUrls.war },
      { name: "Tetris Java PRO", url: projectUrls.tetris },
      { name: "ChessGame", url: projectUrls.chess },
      { name: "Biblioteca Gamer", url: projectUrls.biblioteca }
    ],
    viewOnGithub: "Ver no GitHub",
    tryDemo: "Testar a demo",
    demo: {
      badge: "Demo interativa",
      title: "SQL-Interface: pergunte em português",
      intro: "Escreva uma pergunta sobre os logs de falhas e veja o SQL que o projeto gera, com os valores separados em parâmetros para evitar SQL injection.",
      inputLabel: "Pergunta em português",
      placeholder: "Ex.: top canais com mais falhas nos últimos 7 dias",
      run: "Gerar SQL",
      examplesLabel: "Exemplos de perguntas",
      examples: [
        "top canais com mais falhas nos últimos 7 dias",
        "equipamentos com mais erros críticos",
        "falhas da Globo nos últimos 30 dias",
        "canais com menos falhas hoje",
        "erros de severidade alta por equipamento"
      ],
      sqlLabel: "SQL gerado",
      paramsLabel: "Parâmetros:",
      resultLabel: "Resultado",
      totalLabel: "Total",
      columns: { canal: "Canal", equipamento: "Equipamento", tipo_erro: "Tipo de erro" },
      empty: "Nenhum registro nos dados de exemplo para essa pergunta.",
      note: "Esta demo roda no seu navegador, com a mesma lógica do parser do projeto e as seis linhas de exemplo do repositório. A versão completa usa FastAPI, React e MySQL."
    },
    more: "Veja mais no",
    workTitle: "Entregas Profissionais",
    workNote: "Código interno da empresa, por isso não está público.",
    work: [
      {
        title: "Monitoramento de Infraestrutura",
        desc: "Painel de monitoramento de infraestrutura integrado à API do Calicux, centralizando o status dos ambientes em uma interface web.",
        tags: ["Node.js", "TypeScript", "React", "API Calicux"],
        kind: "Full Stack"
      },
      {
        title: "API de Speedtest/Ookla",
        desc: "API para coleta e análise de testes de velocidade, com ingestão de dados no OpenSearch e consulta via Graylog.",
        tags: ["Python", "OpenSearch", "Graylog"],
        kind: "Backend"
      },
      {
        title: "VOC/Carimbo",
        desc: "Aplicação web para a área de VOC da Vivo, focada em IPTV, com front-end em React e persistência em banco de dados.",
        tags: ["TypeScript", "React", "Banco de dados"],
        kind: "Full Stack"
      },
      {
        title: "Automação VOC",
        desc: "Automação de rotinas da área de VOC (IPTV), a partir do mapeamento das atividades do N1 e da definição de KPIs e SLAs.",
        tags: ["Automação", "KPI/SLA", "Processos"],
        kind: "Automação"
      },
      {
        title: "KPI TV/BL",
        desc: "Indicador de clientes afetados em TV e banda larga, construído em conjunto com a área de Qualidade.",
        tags: ["Indicadores", "Qualidade", "Dados"],
        kind: "Dados"
      }
    ]
  },
  skills: {
    title: "Principais Habilidades",
    groups: [
      {
        title: "Linguagens",
        desc: "As que uso no dia a dia e nos projetos pessoais.",
        tags: ["TypeScript", "JavaScript", "Python", "Go", "Java", "C#", "PHP (básico)"]
      },
      {
        title: "Frontend / Mobile",
        desc: "Interfaces web responsivas, painéis de indicadores e apps.",
        tags: ["React", "Vue", "Vite", "HTML", "CSS", "Expo"]
      },
      {
        title: "Backend",
        desc: "APIs REST, conectores e integrações entre sistemas.",
        tags: ["Node.js", "NestJS", "FastAPI", "APIs REST", "Integração de sistemas"]
      },
      {
        title: "Banco de Dados",
        desc: "Modelagem de dados e consultas.",
        tags: ["PostgreSQL", "MariaDB", "MySQL", "SQL", "Supabase"]
      },
      {
        title: "DevOps",
        desc: "Empacotamento e deploy de serviços.",
        tags: ["Docker", "Kubernetes", "Linux", "Git/GitHub", "Vercel"]
      },
      {
        title: "Testes & Qualidade",
        desc: "Testes automatizados rodando no CI a cada envio.",
        tags: ["pytest", "Vitest", "Playwright", "GitHub Actions"]
      },
      {
        title: "Observabilidade",
        desc: "Métricas, logs e KPIs para a operação.",
        tags: ["Grafana", "Zabbix", "DataMiner", "OpenSearch", "Graylog", "Calicux"]
      },
      {
        title: "Telecom",
        desc: "Operação de TV e redes, do monitoramento ao tratamento de incidentes.",
        tags: ["IPTV", "OTT", "Redes", "Nokia", "Cisco", "Huawei"]
      },
      {
        title: "IA & Automação",
        desc: "Integração de agentes de IA e automação de rotinas operacionais.",
        tags: ["Agentes de IA", "Automação de fluxos"]
      }
    ]
  },
  education: {
    title: "Formação",
    items: [
      { title: "Pós-graduação em Desenvolvimento de Sistemas com Python", desc: "", status: "Em andamento" },
      { title: "Engenharia de Software", desc: "Estácio · abr/2025 – abr/2029", status: "Cursando" },
      { title: "Tecnólogo em Análise e Desenvolvimento de Sistemas", desc: "Unicesumar · jan/2024 – jul/2026", status: "Concluído" },
      { title: "Tecnólogo em Mecatrônica", desc: "IFSP", status: "Concluído" },
      { title: "Certificações (Udemy)", desc: "Banco de Dados, Linux e Desenvolvimento Web", status: "Concluído" },
      { title: "Português nativo · Inglês avançado", desc: "", status: "Idiomas" }
    ]
  },
  interests: {
    title: "Interesses Pessoais",
    list: [
      { title: "Basquete", desc: "Tento assistir a todos os jogos da temporada e jogo sempre que dá.", tags: ["Golden State Warriors", "Shaquille O'Neal"] },
      { title: "Futebol", desc: "Assisto ao máximo de jogos, de qualquer campeonato, e não nego um estádio.", tags: ["São Paulo FC", "Barcelona"] },
      { title: "Fórmula 1", desc: "Acompanho há mais de 10 anos, com saudade da temporada de 2021.", tags: ["Mercedes", "Verstappen", "Senna", "Hamilton"] },
      { title: "Design & Layouts", desc: "Composições criativas e identidade visual.", tags: [] }
    ]
  },
  meta: {
    title: "Kawan Victor Cavalcante | Desenvolvedor Full Stack",
    description: "Portfólio de Kawan Victor Cavalcante - Desenvolvedor Full Stack com experiência em telecom: integrações entre sistemas, automações e ferramentas internas."
  },
  contact: {
    title: "Contato",
    email: "E-mail",
    location: "Localização",
    locationValue: "Curitiba, Paraná, Brasil",
    whatsappMessage: "Olá, Kawan! Vi seu portfólio e gostaria de conversar.",
    whatsappCta: "Enviar mensagem"
  },
  footer: "Inspirado por design e conteúdo digital"
};

const en: Content = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    interests: "Interests",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "PT",
    switchLangLabel: "Mudar para português",
    backToTop: "Back to top"
  },
  hero: {
    eyebrow: "Full Stack Developer · Telecom + Software",
    greeting: "Hi, I'm",
    lead: "On the Digital Transformation team at Vivo (Telefônica Brasil), I build web applications end to end: interfaces in React and TypeScript, APIs in Node.js, NestJS and Python, databases, and deployment with Docker and Kubernetes.",
    ctaProjects: "See Featured Projects",
    ctaContact: "Get in Touch",
    ctaCv: "Download Resume",
    cvUrl: "/cv/Kawan_Cavalcante_Resume_EN.pdf",
    highlights: [
      { value: "6 years", label: "at Vivo (Telefônica Brasil)" },
      { value: "Full Stack", label: "React, TypeScript, Node.js, NestJS and Python" },
      { value: "DevOps & AI", label: "Docker, Kubernetes and AI-agent integration" },
      { value: "Observability", label: "Grafana, Zabbix, OpenSearch and Graylog" }
    ]
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I started in telecom operations (L1/L2), handling monitoring of critical environments, incidents and SLA indicators. Over time, I began solving those problems with code. Today I build APIs, connectors and dashboards that cut manual work and give operations visibility.",
      "What sets me apart: I understand both the network and the software. I have worked with IPTV/OTT and Cisco, Nokia and Huawei equipment, and today I write the systems that monitor and automate that environment.",
      "I'm looking for Backend / Full Stack Developer roles, with an interest in DevOps, SRE and observability. I'm open to remote work and relocation, with companies in Brazil and abroad."
    ],
    quote: "“I always aim to combine creativity, technique and teamwork to turn ideas into real solutions.”"
  },
  experience: {
    title: "Professional Experience",
    roles: [
      {
        title: "Junior Telecom Analyst",
        company: "Telefônica Brasil (Vivo) · Digital Transformation Team · Transport and Infrastructure Engineering",
        period: "Mar 2025 – Present",
        summary: "Systems development, integrations and automation for network and infrastructure operations.",
        items: [
          "Build connectors and integrations between internal systems, deployed with Docker and Kubernetes.",
          "Integrate AI agents into network and infrastructure operations workflows.",
          "Built an infrastructure monitoring system (Node.js, TypeScript, React) on the Calicux API.",
          "Developed a Speedtest/Ookla API in Python, with ingestion and analysis in OpenSearch and Graylog."
        ]
      },
      {
        title: "Telecom Technician (Mid-level)",
        company: "Telefônica Brasil (Vivo) · TV Transformation O&M",
        period: "Mar 2023 – Feb 2025",
        summary: "Operations and transformation of the TV (IPTV) platform, focused on automation and metrics.",
        items: [
          "Automated manual routines for the VOC (IPTV) team after mapping L1 activities.",
          "Developed the VOC/Carimbo web application (TypeScript, React, database).",
          "Built the TV/Broadband affected-customer KPI together with the Quality team."
        ]
      },
      {
        title: "L1/L2 Technical Support",
        company: "Telefônica Brasil (Vivo) · TV Operations · IPTV/OTT",
        period: "Nov 2020 – Feb 2023",
        summary: "Monitoring and incident handling on mission-critical TV platforms.",
        items: [
          "Monitored mission-critical TV platforms (IPTV/OTT) with Grafana, Zabbix and DataMiner.",
          "Handled incidents on Nokia, Cisco and Huawei equipment.",
          "Tracked operational KPI and SLA performance."
        ]
      }
    ],
    competenciesTitle: "Key Strengths",
    competencies: [
      { title: "Incident Management & Advanced Troubleshooting:", desc: "fast response in critical environments." },
      { title: "Operational Automation:", desc: "scripts and tools to streamline routines." },
      { title: "Communication and Leadership:", desc: "integration projects and internal training." },
      { title: "Customer Focus:", desc: "delivering value and a good experience even under pressure." },
      { title: "Continuous Improvement:", desc: "involvement in improvements and SLA/SLO metrics." }
    ]
  },
  projects: {
    title: "Featured Projects",
    list: [
      {
        name: "PC Control Center",
        desc: "A Windows monitoring, tuning and customization hub that reads real data from the computer: performance, network and connected devices, desktop widgets and one-click scenes. Runs without admin rights, backs up the Registry before changing it and asks for confirmation on critical actions.",
        tags: ["Python", "PySide6 (Qt 6)", "Windows API", "SQLite", "ruff + mypy"],
        url: projectUrls.pccc,
        liveUrl: projectUrls.pcccDownload,
        liveLabel: "Download for Windows",
        kind: "Desktop App · Windows",
        image: "/projects/pc-control-center.webp",
        imageAlt: "PC Control Center dashboard with real-time CPU, memory, GPU, disk and network usage",
        imageWide: true
      },
      {
        name: "DESTRUCTOR",
        desc: "A 2D action platformer in the browser where you build walls, traps and turrets while holding off waves of enemies. Works on mobile, with unit and browser tests.",
        tags: ["TypeScript", "Phaser 3", "Vite", "Vitest", "Playwright"],
        url: projectUrls.destructor,
        liveUrl: "https://game-destructor.vercel.app",
        liveLabel: "Play now",
        kind: "Web Game · Live",
        image: "/projects/destructor.webp",
        imageAlt: "The Titan boss arrives while turrets defend the hill",
        imageWide: true
      },
      {
        name: "SQL-Interface",
        desc: "Turns questions written in Portuguese into SQL queries over broadcast failure logs. API with a parser, SQL builder and validator, a web interface, and everything starts with one Docker command.",
        tags: ["Python", "FastAPI", "React", "MySQL", "Docker"],
        url: projectUrls.sql,
        kind: "Full Stack",
        demoAnchor: "#sql-demo",
        image: "/projects/sql-interface.webp",
        imageAlt: "A question in Portuguese and the result table with the failure count per channel",
        imageWide: true
      },
      {
        name: "Notas Escolares",
        desc: "A site for teachers to enter a class's grades, calculate the term averages and export the sheet as CSV or PDF. Each teacher signs in with their own account and only sees their own records.",
        tags: ["JavaScript", "Supabase", "PostgreSQL", "Tests + CI", "Vercel"],
        url: projectUrls.notas,
        liveUrl: "https://notas-escolares-iota.vercel.app",
        kind: "Web App · Live",
        image: "/projects/notas-escolares.webp",
        imageAlt: "Grade entry sheet, with averages colored by range",
        imageWide: true
      }
    ],
    liveSite: "View site",
    othersLabel: "Other projects:",
    others: [
      { name: "War (Python + Socket.IO)", url: projectUrls.war },
      { name: "Tetris Java PRO", url: projectUrls.tetris },
      { name: "ChessGame", url: projectUrls.chess },
      { name: "Biblioteca Gamer", url: projectUrls.biblioteca }
    ],
    viewOnGithub: "View on GitHub",
    tryDemo: "Try the demo",
    demo: {
      badge: "Interactive demo",
      title: "SQL-Interface: ask in Portuguese",
      intro: "Type a question about the failure logs and see the SQL the project generates, with values kept as bound parameters to prevent SQL injection. The parser understands Portuguese.",
      inputLabel: "Question in Portuguese",
      placeholder: "e.g. top canais com mais falhas nos últimos 7 dias",
      run: "Generate SQL",
      examplesLabel: "Example questions",
      examples: [
        "top canais com mais falhas nos últimos 7 dias",
        "equipamentos com mais erros críticos",
        "falhas da Globo nos últimos 30 dias",
        "canais com menos falhas hoje",
        "erros de severidade alta por equipamento"
      ],
      sqlLabel: "Generated SQL",
      paramsLabel: "Parameters:",
      resultLabel: "Result",
      totalLabel: "Total",
      columns: { canal: "Channel", equipamento: "Equipment", tipo_erro: "Error type" },
      empty: "No records in the sample data for this question.",
      note: "This demo runs in your browser, using the same logic as the project's parser and the six sample rows from the repository. The full version uses FastAPI, React and MySQL."
    },
    more: "See more on",
    workTitle: "Professional Work",
    workNote: "Internal company code, so it is not public.",
    work: [
      {
        title: "Infrastructure Monitoring",
        desc: "Infrastructure monitoring dashboard integrated with the Calicux API, bringing environment status into a single web interface.",
        tags: ["Node.js", "TypeScript", "React", "Calicux API"],
        kind: "Full Stack"
      },
      {
        title: "Speedtest/Ookla API",
        desc: "API for collecting and analyzing network speed tests, with data ingestion into OpenSearch and querying through Graylog.",
        tags: ["Python", "OpenSearch", "Graylog"],
        kind: "Backend"
      },
      {
        title: "VOC/Carimbo",
        desc: "Web application for Vivo's internal VOC team, focused on IPTV, with a React front end and database persistence.",
        tags: ["TypeScript", "React", "Database"],
        kind: "Full Stack"
      },
      {
        title: "VOC Automation",
        desc: "Automated routines for the VOC (IPTV) team, based on mapping L1 activities and defining KPIs and SLAs.",
        tags: ["Automation", "KPI/SLA", "Processes"],
        kind: "Automation"
      },
      {
        title: "TV/Broadband KPI",
        desc: "Affected-customer metric for TV and broadband services, built together with the Quality team.",
        tags: ["Metrics", "Quality", "Data"],
        kind: "Data"
      }
    ]
  },
  skills: {
    title: "Core Skills",
    groups: [
      {
        title: "Languages",
        desc: "The ones I use day to day and in personal projects.",
        tags: ["TypeScript", "JavaScript", "Python", "Go", "Java", "C#", "PHP (basic)"]
      },
      {
        title: "Frontend / Mobile",
        desc: "Responsive web interfaces, KPI dashboards and apps.",
        tags: ["React", "Vue", "Vite", "HTML", "CSS", "Expo"]
      },
      {
        title: "Backend",
        desc: "REST APIs, connectors and system integrations.",
        tags: ["Node.js", "NestJS", "FastAPI", "REST APIs", "Systems integration"]
      },
      {
        title: "Databases",
        desc: "Data modeling and queries.",
        tags: ["PostgreSQL", "MariaDB", "MySQL", "SQL", "Supabase"]
      },
      {
        title: "DevOps",
        desc: "Packaging and deploying services.",
        tags: ["Docker", "Kubernetes", "Linux", "Git/GitHub", "Vercel"]
      },
      {
        title: "Testing & Quality",
        desc: "Automated tests running in CI on every push.",
        tags: ["pytest", "Vitest", "Playwright", "GitHub Actions"]
      },
      {
        title: "Observability",
        desc: "Metrics, logs and KPIs for operations.",
        tags: ["Grafana", "Zabbix", "DataMiner", "OpenSearch", "Graylog", "Calicux"]
      },
      {
        title: "Telecom",
        desc: "TV and network operations, from monitoring to incident handling.",
        tags: ["IPTV", "OTT", "Networking", "Nokia", "Cisco", "Huawei"]
      },
      {
        title: "AI & Automation",
        desc: "AI-agent integration and automation of operational routines.",
        tags: ["AI Agents", "Workflow automation"]
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      { title: "Graduate Certificate in Systems Development with Python", desc: "", status: "In progress" },
      { title: "B.Sc. Software Engineering", desc: "Estácio · Apr 2025 – Apr 2029 (expected)", status: "In progress" },
      { title: "Associate Degree in Systems Analysis and Development", desc: "Unicesumar · Jan 2024 – Jul 2026", status: "Completed" },
      { title: "Associate Degree in Mechatronics", desc: "IFSP", status: "Completed" },
      { title: "Certifications (Udemy)", desc: "Databases, Linux and Web Development", status: "Completed" },
      { title: "Portuguese (native) · English (advanced)", desc: "", status: "Languages" }
    ]
  },
  interests: {
    title: "Personal Interests",
    list: [
      { title: "Basketball", desc: "I try to watch every game of the season and play whenever I can.", tags: ["Golden State Warriors", "Shaquille O'Neal"] },
      { title: "Football", desc: "I watch as many matches as I can, whatever the competition, and never say no to a stadium.", tags: ["São Paulo FC", "Barcelona"] },
      { title: "Formula 1", desc: "Following it for over 10 years, still missing the 2021 season.", tags: ["Mercedes", "Verstappen", "Senna", "Hamilton"] },
      { title: "Design & Layouts", desc: "Creative compositions and visual identity.", tags: [] }
    ]
  },
  meta: {
    title: "Kawan Victor Cavalcante | Full Stack Developer",
    description: "Portfolio of Kawan Victor Cavalcante - Full Stack Developer with a telecom background: system integrations, automation and internal tools."
  },
  contact: {
    title: "Contact",
    email: "Email",
    location: "Location",
    locationValue: "Curitiba, Paraná, Brazil",
    whatsappMessage: "Hi Kawan! I saw your portfolio and would like to talk.",
    whatsappCta: "Send a message"
  },
  footer: "Inspired by design and digital content"
};

export const content: Record<Lang, Content> = { pt, en };
