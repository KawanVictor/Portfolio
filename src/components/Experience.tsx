function Experience() {
  const roles = [
    {
      title: "Analista Telecom Jr.",
      company: "Vivo (Telefônica Brasil)",
      period: "mar/25 – atual",
      summary: "Monitoramento em tempo real de redes digitais (banda larga, TV, voz) de clientes corporativos e residenciais.",
      items: [
        "Otimização dos fluxos de diagnóstico (reduzido em 30% o tempo de solução de incidentes críticos).",
        "Desenvolvimento de scripts para automação de registro/notificação de eventos.",
        "Liderança em projetos de documentação técnica e dashboards de indicadores operacionais.",
        "Gestão avançada de alarmes sistêmicos e relatórios semanais.",
        "Treinamento de novos colaboradores e incentivo à melhoria contínua."
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
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experiência Profissional</h2>

      <ol className="timeline">
        {roles.map((role, idx) => (
          <li className="timeline-item" key={idx}>
            <div className="card reveal">
              <div className="timeline-head">
                <h3>{role.title}</h3>
                <span className="timeline-period">{role.period}</span>
              </div>
              <p className="timeline-company">{role.company}</p>
              <p className="timeline-summary">{role.summary}</p>
              {role.items.length > 0 && (
                <ul>
                  {role.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="competencies card reveal">
        <h4>Principais Competências & Diferenciais</h4>
        <ul>
          <li>
            <b>Gestão de Incidentes & Troubleshooting Avançado:</b> resposta rápida em ambientes críticos.
          </li>
          <li>
            <b>Automação Operacional:</b> scripts e ferramentas para otimizar rotinas.
          </li>
          <li>
            <b>Comunicação e Liderança:</b> projetos de integração e treinamento interno.
          </li>
          <li>
            <b>Foco no Cliente:</b> entrega de valor e experiência mesmo sob pressão.
          </li>
          <li>
            <b>Aprimoramento Contínuo:</b> envolvimento em melhorias e métricas de SLA/SLO.
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Experience;
