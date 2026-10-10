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
  contact: { title: string; email: string; location: string; locationValue: string };
  footer: string;
}

const projectUrls = {
  sql: "https://github.com/KawanVictor/SQL-Interface",
  tetris: "https://github.com/KawanVictor/TetrisV2-java",
  chess: "https://github.com/KawanVictor/ChessGame",
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
      { value: "5+ anos", label: "na Vivo (Telefônica Brasil)" },
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
      "Busco posições de Desenvolvedor Backend / Full Stack, com interesse em DevOps, SRE e observabilidade. Tenho preferência por trabalho remoto e estou aberto a empresas no Brasil e no exterior."
    ],
    quote: "“Sempre busco aliar criatividade, técnica e trabalho em equipe para transformar ideias em soluções reais.”"
  },
  experience: {
    title: "Experiência Profissional",
    roles: [
      {
        title: "Analista Telecom Jr.",
        company: "Vivo (Telefônica Brasil) · Equipe de Transformação Digital",
        period: "mar/25 – atual",
        summary: "Desenvolvimento de integrações entre sistemas, automações e ferramentas internas para operação de rede.",
        items: [
          "Conectores e integração de sistemas: APIs REST entre plataformas de rede, monitoramento e ferramentas internas.",
          "Integração de agentes de IA para automação de rotinas operacionais.",
          "Empacotamento e deploy de serviços com Docker e Kubernetes.",
          "Observabilidade com Grafana, Zabbix, OpenSearch e Graylog para métricas, logs e KPIs.",
          "Painel de monitoramento de infraestrutura que centraliza o status dos equipamentos (Node.js, TypeScript, React).",
          "Automação de tarefas repetitivas do N1, com acompanhamento de KPI/SLA."
        ]
      },
      {
        title: "Técnico Corporativo Telecom PL",
        company: "Vivo (Telefônica Brasil)",
        period: "mar/23 – fev/25",
        summary: "Apoio às equipes de campo na configuração/manutenção de redes empresariais.",
        items: [
          "Implantação de rotinas de backup/restauração de sistemas críticos.",
          "Participação em comitês de resposta a incidentes, propondo soluções preventivas.",
          "Análise de logs, performance de rede, homologação de atualizações."
        ]
      },
      {
        title: "Atendente de Suporte de Operações",
        company: "Vivo (Telefônica Brasil)",
        period: "nov/20 – mar/23",
        summary: "Ponto de contato para clientes com falhas em serviços.",
        items: [
          "Atendimento humanizado e ótimo índice de satisfação.",
          "Desenvolvimento de playbooks de troubleshooting técnico.",
          "Triagem de chamados, priorização e follow-up para times especializados."
        ]
      },
      {
        title: "Agente de Call Center",
        company: "Brasil Telecom Call Center S.A",
        period: "ago/20 – nov/20",
        summary: "Atendimento técnico de 1º nível para usuários de serviços digitais, orientação didática e encaminhamento assertivo.",
        items: []
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
        name: "SQL-Interface",
        desc: "Converte perguntas em português em consultas SQL sobre logs de falhas de transmissão. API com parser, gerador e validador de SQL, interface web e tudo sobe com um comando via Docker.",
        tags: ["Python", "FastAPI", "React", "MySQL", "Docker"],
        url: projectUrls.sql,
        kind: "Full Stack",
        demoAnchor: "#sql-demo"
      },
      {
        name: "War",
        desc: "Jogo de tabuleiro War (inspirado em Risk) com motor de regras próprio, modo interativo no terminal e servidor web para partidas online em tempo real.",
        tags: ["Python", "Flask", "Socket.IO"],
        url: projectUrls.war,
        kind: "Backend · WebSocket"
      },
      {
        name: "Tetris Java PRO",
        desc: "Tetris com interface gráfica Swing, cinco modos de jogo, peça fantasma, hold e ranking das melhores pontuações salvo em PostgreSQL. Projeto final de Programação Orientada a Objetos.",
        tags: ["Java", "Swing", "PostgreSQL", "POO"],
        url: projectUrls.tetris,
        kind: "Desktop · Java",
        image: "/projects/tetris.png",
        imageAlt: "Tela do jogo Tetris Java PRO"
      },
      {
        name: "ChessGame",
        desc: "Xadrez com interface gráfica para dois jogadores ou contra a IA (minimax com poda alfa-beta). Aplica as regras oficiais, incluindo roque, en passant e promoção, detecta xeque-mate e empates e permite desfazer jogadas.",
        tags: ["Java", "Swing", "IA Minimax", "POO"],
        url: projectUrls.chess,
        kind: "Desktop · Java"
      }
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
        desc: "Painel que consome a API de monitoramento da rede e centraliza o status dos equipamentos.",
        tags: ["Node.js", "TypeScript", "React"],
        kind: "Full Stack"
      },
      {
        title: "API de Speedtest",
        desc: "Coleta e indexa medições de velocidade para análise de qualidade.",
        tags: ["Python", "OpenSearch", "Graylog"],
        kind: "Backend"
      },
      {
        title: "KPIs de TV e Banda Larga",
        desc: "Indicadores de clientes afetados, desenvolvidos junto com a área de Qualidade.",
        tags: ["TypeScript", "React", "SQL"],
        kind: "Full Stack"
      },
      {
        title: "Automação de N1",
        desc: "Mapeamento das atividades do N1 e automação de tarefas repetitivas, com acompanhamento de KPI/SLA.",
        tags: ["TypeScript", "Python"],
        kind: "Backend"
      }
    ]
  },
  skills: {
    title: "Principais Habilidades",
    groups: [
      {
        title: "Frontend",
        desc: "Interfaces web responsivas e painéis de indicadores.",
        tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"]
      },
      {
        title: "Backend",
        desc: "APIs REST, conectores e integrações entre sistemas.",
        tags: ["Node.js", "NestJS", "Python", "FastAPI", "REST APIs"]
      },
      {
        title: "Banco de Dados",
        desc: "Modelagem de dados e consultas.",
        tags: ["PostgreSQL", "MySQL", "MariaDB", "SQL"]
      },
      {
        title: "DevOps",
        desc: "Empacotamento e deploy de serviços.",
        tags: ["Docker", "Kubernetes", "Linux", "Git"]
      },
      {
        title: "Observabilidade",
        desc: "Métricas, logs e KPIs para a operação.",
        tags: ["Grafana", "Zabbix", "OpenSearch", "Graylog"]
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
      { title: "Engenharia de Software", desc: "Estácio · 2025–2029", status: "Em andamento" },
      { title: "Análise e Desenvolvimento de Sistemas", desc: "Unicesumar", status: "Concluído" },
      { title: "Certificações", desc: "Banco de Dados, Linux e Desenvolvimento Web", status: "Concluído" }
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
    locationValue: "Curitiba, Paraná, Brasil"
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
      { value: "5+ years", label: "at Vivo (Telefônica Brasil)" },
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
      "I'm looking for Backend / Full Stack Developer roles, with an interest in DevOps, SRE and observability. I prefer remote work and I'm open to companies in Brazil and abroad."
    ],
    quote: "“I always aim to combine creativity, technique and teamwork to turn ideas into real solutions.”"
  },
  experience: {
    title: "Professional Experience",
    roles: [
      {
        title: "Junior Telecom Analyst",
        company: "Vivo (Telefônica Brasil) · Digital Transformation team",
        period: "Mar 2025 – present",
        summary: "Building system integrations, automation and internal tools for network operations.",
        items: [
          "Connectors and system integration: REST APIs between network platforms, monitoring and internal tools.",
          "AI-agent integrations to automate operational routines.",
          "Packaging and deploying services with Docker and Kubernetes.",
          "Observability with Grafana, Zabbix, OpenSearch and Graylog for metrics, logs and KPIs.",
          "Infrastructure monitoring dashboard that centralizes equipment status (Node.js, TypeScript, React).",
          "Automation of repetitive L1 tasks, with KPI/SLA tracking."
        ]
      },
      {
        title: "Corporate Telecom Technician (Mid-level)",
        company: "Vivo (Telefônica Brasil)",
        period: "Mar 2023 – Feb 2025",
        summary: "Support for field teams in configuring and maintaining enterprise networks.",
        items: [
          "Rolled out backup/restore routines for critical systems.",
          "Took part in incident response committees, proposing preventive solutions.",
          "Log analysis, network performance and validation of updates."
        ]
      },
      {
        title: "Operations Support Agent",
        company: "Vivo (Telefônica Brasil)",
        period: "Nov 2020 – Mar 2023",
        summary: "Point of contact for customers with service failures.",
        items: [
          "Customer-focused service with a high satisfaction rate.",
          "Wrote technical troubleshooting playbooks.",
          "Ticket triage, prioritization and follow-up with specialized teams."
        ]
      },
      {
        title: "Call Center Agent",
        company: "Brasil Telecom Call Center S.A",
        period: "Aug 2020 – Nov 2020",
        summary: "First-level technical support for users of digital services, with clear guidance and accurate escalation.",
        items: []
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
        name: "SQL-Interface",
        desc: "Turns questions written in Portuguese into SQL queries over broadcast failure logs. API with a parser, SQL builder and validator, a web interface, and everything starts with one Docker command.",
        tags: ["Python", "FastAPI", "React", "MySQL", "Docker"],
        url: projectUrls.sql,
        kind: "Full Stack",
        demoAnchor: "#sql-demo"
      },
      {
        name: "War",
        desc: "The board game War (inspired by Risk) with its own rules engine, an interactive terminal mode and a web server for real-time online matches.",
        tags: ["Python", "Flask", "Socket.IO"],
        url: projectUrls.war,
        kind: "Backend · WebSocket"
      },
      {
        name: "Tetris Java PRO",
        desc: "Tetris with a Swing GUI, five game modes, ghost piece, hold and a high-score ranking stored in PostgreSQL. Final project for an Object-Oriented Programming course.",
        tags: ["Java", "Swing", "PostgreSQL", "OOP"],
        url: projectUrls.tetris,
        kind: "Desktop · Java",
        image: "/projects/tetris.png",
        imageAlt: "Tetris Java PRO gameplay screen"
      },
      {
        name: "ChessGame",
        desc: "Chess with a GUI for two players or against an AI (minimax with alpha-beta pruning). Applies the official rules, including castling, en passant and promotion, detects checkmate and draws, and lets you undo moves.",
        tags: ["Java", "Swing", "Minimax AI", "OOP"],
        url: projectUrls.chess,
        kind: "Desktop · Java"
      }
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
        desc: "Dashboard that consumes the network monitoring API and centralizes equipment status.",
        tags: ["Node.js", "TypeScript", "React"],
        kind: "Full Stack"
      },
      {
        title: "Speedtest API",
        desc: "Collects and indexes speed measurements for quality analysis.",
        tags: ["Python", "OpenSearch", "Graylog"],
        kind: "Backend"
      },
      {
        title: "TV and Broadband KPIs",
        desc: "Affected-customer indicators, built together with the Quality team.",
        tags: ["TypeScript", "React", "SQL"],
        kind: "Full Stack"
      },
      {
        title: "L1 Automation",
        desc: "Mapping of L1 activities and automation of repetitive tasks, with KPI/SLA tracking.",
        tags: ["TypeScript", "Python"],
        kind: "Backend"
      }
    ]
  },
  skills: {
    title: "Core Skills",
    groups: [
      {
        title: "Frontend",
        desc: "Responsive web interfaces and KPI dashboards.",
        tags: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"]
      },
      {
        title: "Backend",
        desc: "REST APIs, connectors and system integrations.",
        tags: ["Node.js", "NestJS", "Python", "FastAPI", "REST APIs"]
      },
      {
        title: "Databases",
        desc: "Data modeling and queries.",
        tags: ["PostgreSQL", "MySQL", "MariaDB", "SQL"]
      },
      {
        title: "DevOps",
        desc: "Packaging and deploying services.",
        tags: ["Docker", "Kubernetes", "Linux", "Git"]
      },
      {
        title: "Observability",
        desc: "Metrics, logs and KPIs for operations.",
        tags: ["Grafana", "Zabbix", "OpenSearch", "Graylog"]
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
      { title: "Postgraduate degree in Systems Development with Python", desc: "", status: "In progress" },
      { title: "Software Engineering", desc: "Estácio · 2025–2029", status: "In progress" },
      { title: "Systems Analysis and Development", desc: "Unicesumar", status: "Completed" },
      { title: "Certifications", desc: "Databases, Linux and Web Development", status: "Completed" }
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
    locationValue: "Curitiba, Paraná, Brazil"
  },
  footer: "Inspired by design and digital content"
};

export const content: Record<Lang, Content> = { pt, en };
