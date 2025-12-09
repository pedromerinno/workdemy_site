export type Language = 'pt' | 'en' | 'es'

export interface Translations {
  // Navigation
  nav: {
    inicio: string
    sobre: string
    comoFunciona: string
    beneficios: string
    depoimentos: string
    recursos: string
    planos: string
    entrar: string
    comecarAgora: string
    comecar: string
    saibaMais: string
    idioma: string
    selecionarIdioma: string
    idiomaAlterado: string
  }

  // Hero Section
  hero: {
    typewriter: string
    title: string
    description: string
    comecarAgora: string
    saibaMais: string
  }

  // O Problema Section
  problema: {
    subtitle: string
    title: string
    conhecimentoFragmentado: {
      title: string
      description: string
      link: string
    }
    lideresDesperdicam: {
      title: string
      description: string
      link: string
      tempoGasto: string
      horasSemanais: string
      maisLideres: string
    }
    onboardingLento: {
      title: string
      description: string
      link: string
      novoColaborador: string
      semanasProdutividade: string
    }
    cta: string
    problemas: {
      processosGuardados: string
      lideresRepetindo: string
      onboardingLento: string
      falhasOperacionais: string
      dificuldadeEscalar: string
    }
    status: {
      critico: string
      ineficiente: string
      lento: string
      risco: string
      escalabilidade: string
      fragmentado: string
      multiplasFontes: string
      emProcesso: string
      onboarding: string
    }
  }

  // IA Processos
  iaProcessos: {
    subtitle: string
    title: string
    aprendeDocumentos: {
      title: string
      description: string
    }
    estruturaConhecimento: {
      title: string
      description: string
    }
    ensinaInstrutor: {
      title: string
      description: string
    }
    evoluiEmpresa: {
      title: string
      description: string
    }
  }

  // Sequência de Imagens
  sequenciaImagens: {
    prefix: string
    textOptions: string[]
  }

  // Como Funciona
  comoFunciona: {
    subtitle: string
    title: string
    importeConteudos: {
      label: string
      description: string
      documentoProcessado: string
    }
    iaAnalisa: {
      label: string
      description: string
      agora: string
      analisando: string
      trilhaCriada: string
    }
    semFriccao: {
      title: string
      description: string
    }
    metricas: {
      label: string
      title: string
      subtitle: string
    }
    chart: {
      concluidos: string
      emAndamento: string
    }
  }

  // Recursos Principais
  recursos: {
    subtitle: string
    title: string
    iaCorporativa: {
      title: string
      description: string
    }
    criacaoAutomatica: {
      title: string
      description: string
    }
    assistente24h: {
      title: string
      description: string
    }
    quizzes: {
      title: string
      description: string
    }
    dashboards: {
      title: string
      description: string
    }
    onboardingAcelerado: {
      title: string
      description: string
    }
  }

  // Para Quem
  paraQuem: {
    title: string
    subtitle: string
    rh: {
      title: string
      description: string
    }
    lideres: {
      title: string
      description: string
    }
    operacoes: {
      title: string
      description: string
    }
    colaboradores: {
      title: string
      description: string
    }
  }

  // Planos
  planos: {
    subtitle: string
    title: string
    starter: {
      name: string
      description: string
      features: string[]
      cta: string
    }
    growth: {
      name: string
      description: string
      features: string[]
      cta: string
      popular: string
    }
    enterprise: {
      name: string
      description: string
      features: string[]
      cta: string
    }
  }

  // FAQ
  faq: {
    title: string
    items: Array<{
      pergunta: string
      resposta: string
    }>
  }

  // Depoimentos
  depoimentos: {
    subtitle: string
    title: string
  }

  // Resultados Esperados
  resultadosEsperados: {
    subtitle: string
    title: string
    items: string[]
  }

  // Treinamento Sem Fricção
  treinamentoSemFriccao: {
    subtitle: string
    title: string
  }

  // CTA Final
  ctaFinal: {
    title: string
    description: string
    button: string
  }

  // Footer
  footer: {
    description: string
    linksRapidos: string
    contato: string
    redesSociais: string
    direitosReservados: string
    termosUso: string
    politicaPrivacidade: string
  }

  // Cookie Consent
  cookieConsent: {
    title: string
    description: string
    acceptAll: string
    rejectAll: string
    moreOptions: string
  }

  // Chat Dialog
  chatDialog: {
    welcome: string
    question: string
    talkToAI: string
    signUp: string
    scheduleDemo: string
    needSupport: string
    privacyNotice: string
    privacyPolicy: string
    openChat: string
    close: string
  }
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      inicio: 'Início',
      sobre: 'Sobre',
      comoFunciona: 'Como Funciona',
      beneficios: 'Benefícios',
      depoimentos: 'Depoimentos',
      recursos: 'Recursos',
      planos: 'Planos',
      entrar: 'Entrar',
      comecarAgora: 'Começar agora',
      comecar: 'Começar',
      saibaMais: 'Saiba Mais',
      idioma: 'Idioma',
      selecionarIdioma: 'Selecionar idioma',
      idiomaAlterado: 'Idioma alterado para',
    },
    hero: {
      typewriter: 'O que você quer saber sobre a empresa?',
      title: 'Transforme seus processos em aprendizado vivo com uma IA feita para a sua empresa.',
      description: 'Uma plataforma que aprende com sua empresa e transforma conhecimento em treinamento inteligente, disponível 24 horas por dia para seus colaboradores.',
      comecarAgora: 'Começar Agora',
      saibaMais: 'Saiba Mais',
    },
    problema: {
      subtitle: 'Treinar times está mais difícil do que nunca',
      title: 'O conhecimento da sua empresa está espalhado. E isso custa caro.',
      conhecimentoFragmentado: {
        title: 'Conhecimento fragmentado em múltiplos lugares',
        description: 'Processos importantes ficam perdidos em PDFs, apresentações, áudios e conversas. Sem uma fonte única de verdade, colaboradores perdem tempo procurando informações e cometem erros por falta de acesso ao conhecimento correto.',
        link: 'Conheça a solução',
      },
      lideresDesperdicam: {
        title: 'Líderes desperdiçam tempo repetindo treinamentos',
        description: 'Sem uma plataforma centralizada, gestores e líderes precisam repetir os mesmos treinamentos manualmente para cada novo colaborador. Isso consome horas preciosas que poderiam ser investidas em estratégia e crescimento.',
        link: 'Ver como resolvemos',
        tempoGasto: 'Tempo gasto em treinamentos',
        horasSemanais: '/ 80h semanais',
        maisLideres: '+5 líderes',
      },
      onboardingLento: {
        title: 'Onboarding lento e inconsistente',
        description: 'Novos colaboradores levam semanas ou meses para se tornarem produtivos. A falta de um processo padronizado resulta em experiências inconsistentes e maior risco de erros operacionais.',
        link: 'Descubra a solução',
        novoColaborador: 'Novo colaborador',
        semanasProdutividade: 'Semanas para produtividade',
      },
      cta: 'Transforme conhecimento fragmentado em uma plataforma inteligente que escala com sua empresa.',
      problemas: {
        processosGuardados: 'Processos guardados em PDFs, apresentações, áudios e conversas',
        lideresRepetindo: 'Líderes gastam horas repetindo os mesmos treinamentos',
        onboardingLento: 'Onboarding lento e inconsistente',
        falhasOperacionais: 'Falhas operacionais por falta de orientação',
        dificuldadeEscalar: 'Dificuldade para escalar treinamentos quando a empresa cresce',
      },
      status: {
        critico: 'Crítico',
        ineficiente: 'Ineficiente',
        lento: 'Lento',
        risco: 'Risco',
        escalabilidade: 'Escalabilidade',
        fragmentado: 'Fragmentado',
        multiplasFontes: 'Múltiplas fontes',
        emProcesso: 'Em processo',
        onboarding: 'Onboarding',
      },
    },
    iaProcessos: {
      subtitle: 'Treinada com o DNA da sua empresa',
      title: 'IA que entende seus processos',
      aprendeDocumentos: {
        title: 'Aprende com seus documentos',
        description: 'A IA absorve documentos, fluxos, vídeos, políticas internas, playbooks e normas operacionais. Transforma conhecimento disperso em uma base unificada e acessível para toda a equipe.',
      },
      estruturaConhecimento: {
        title: 'Estrutura o conhecimento',
        description: 'Transforma tudo em trilhas de aprendizado coerentes por área, cargo e senioridade. A IA organiza o conhecimento de forma lógica e progressiva, facilitando o aprendizado contínuo.',
      },
      ensinaInstrutor: {
        title: 'Ensina como um instrutor experiente',
        description: 'Explica processos aos colaboradores como se fosse um instrutor interno experiente. Responde dúvidas em tempo real, adapta explicações ao nível de conhecimento e garante compreensão completa.',
      },
      evoluiEmpresa: {
        title: 'Evolui com sua empresa',
        description: 'Quanto mais conteúdos você envia, mais a IA se especializa na realidade da sua empresa. Aprende padrões, identifica necessidades e se torna cada vez mais precisa e útil para sua operação.',
      },
    },
    sequenciaImagens: {
      prefix: 'A Workdemy',
      textOptions: [
        'organiza o seu conhecimento',
        'aprende com ele',
        'treina o seu time de ponta a ponta',
      ],
    },
    comoFunciona: {
      subtitle: 'Do conteúdo ao resultado em cliques',
      title: 'Treinamento sem fricção',
      importeConteudos: {
        label: 'Importe Conteúdos',
        description: 'PDFs, vídeos, políticas internas, áudios, apresentações.',
        documentoProcessado: '📄 Documento processado',
      },
      iaAnalisa: {
        label: 'IA Analisa e Gera',
        description: 'A inteligência artificial processa seu conteúdo e cria trilhas de aprendizado automaticamente.',
        agora: 'Agora',
        analisando: 'Analisando documento e gerando trilha...',
        trilhaCriada: 'Trilha criada com sucesso! 5 módulos gerados automaticamente.',
      },
      semFriccao: {
        title: 'Sem Fricção',
        description: 'Automatizado',
      },
      metricas: {
        label: 'Métricas de Aprendizado',
        title: 'Acompanhe o progresso em tempo real.',
        subtitle: 'Identifique gargalos e otimize o treinamento.',
      },
      chart: {
        concluidos: 'Concluídos',
        emAndamento: 'Em Andamento',
      },
    },
    recursos: {
      subtitle: 'Recursos principais (IA first)',
      title: 'Tudo que um LMS sempre deveria ter — com IA no centro.',
      iaCorporativa: {
        title: 'IA corporativa treinada com seus conteúdos',
        description: 'Um "cérebro organizacional" acessível para todo colaborador.',
      },
      criacaoAutomatica: {
        title: 'Criação automática de trilhas e módulos',
        description: 'Transforme documentos soltos em jornadas completas.',
      },
      assistente24h: {
        title: 'Assistente de aprendizado 24h para cada colaborador',
        description: 'Dúvidas respondidas instantaneamente com base nos processos da sua empresa.',
      },
      quizzes: {
        title: 'Quizzes inteligentes',
        description: 'A IA cria perguntas, mede retenção e ajusta conteúdos conforme necessidade.',
      },
      dashboards: {
        title: 'Dashboards de conhecimento',
        description: 'Veja onde estão os riscos operacionais antes que eles aconteçam.',
      },
      onboardingAcelerado: {
        title: 'Onboarding acelerado',
        description: '70% menos tempo para colocar novos colaboradores na operação.',
      },
    },
    paraQuem: {
      title: 'Não é um LMS. É um sistema de inteligência para empresas que querem crescer.',
      subtitle: 'Para quem?',
      rh: {
        title: 'RH e People',
        description: 'Onboarding, trilhas, reciclagem, políticas obrigatórias.',
      },
      lideres: {
        title: 'Líderes e gestores',
        description: 'Menos tempo treinando, mais tempo liderando.',
      },
      operacoes: {
        title: 'Operações / Vendas / Suporte',
        description: 'Redução de erros, processos claros, padrões de qualidade.',
      },
      colaboradores: {
        title: 'Colaboradores',
        description: 'Aprendem mais rápido, com clareza e autonomia.',
      },
    },
    planos: {
      subtitle: 'Preços / Planos',
      title: 'Comece pequeno. Cresça ilimitado.',
      starter: {
        name: 'Starter',
        description: 'Para equipes que querem transformar documentos em trilhas rápidas.',
        features: [
          'IA básica para análise de documentos',
          'Criação de até 10 trilhas',
          'Até 50 colaboradores',
          'Dashboard básico',
          'Suporte por email',
        ],
        cta: 'Falar com o comercial',
      },
      growth: {
        name: 'Growth',
        description: 'IA completa + times + unidades + dashboards avançados.',
        features: [
          'IA completa treinada com seus conteúdos',
          'Trilhas ilimitadas',
          'Colaboradores ilimitados',
          'Dashboards avançados e analytics',
          'Assistente IA 24h',
          'Suporte prioritário',
          'Integrações básicas',
        ],
        cta: 'Falar com o comercial',
        popular: 'Mais popular',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'On-premise, segurança avançada, integrações e suporte dedicado.',
        features: [
          'Tudo do Growth',
          'Deploy on-premise',
          'Segurança e compliance avançados',
          'Integrações customizadas',
          'Suporte dedicado 24/7',
          'Treinamento da equipe',
          'SLA garantido',
        ],
        cta: 'Falar com o comercial',
      },
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          pergunta: 'Como a IA aprende com meus conteúdos?',
          resposta: 'A IA da Workdemy utiliza processamento de linguagem natural avançado para analisar seus documentos, vídeos, áudios e apresentações. Ela extrai conceitos, relaciona informações e constrói um modelo de conhecimento específico da sua empresa. Quanto mais conteúdo você fornece, mais precisa e especializada a IA se torna.',
        },
        {
          pergunta: 'A IA garante segurança e privacidade?',
          resposta: 'Sim. Todos os dados são processados com criptografia de ponta a ponta. No plano Enterprise, oferecemos deploy on-premise para máxima segurança. Seus conteúdos nunca são usados para treinar modelos genéricos e permanecem exclusivos da sua organização.',
        },
        {
          pergunta: 'Quanto tempo leva para implementar?',
          resposta: 'A implementação básica leva de 1 a 2 semanas. Começamos importando seus conteúdos principais e configurando as primeiras trilhas. A IA começa a aprender imediatamente e em poucos dias já está respondendo dúvidas dos colaboradores.',
        },
        {
          pergunta: 'Preciso reorganizar meus conteúdos antes?',
          resposta: 'Não é necessário. A IA da Workdemy foi projetada para trabalhar com conhecimento distribuído e desorganizado. Ela estrutura automaticamente seus documentos, identifica relacionamentos e cria trilhas coerentes, mesmo que os conteúdos estejam em formatos e locais diferentes.',
        },
        {
          pergunta: 'A Workdemy substitui treinamentos presenciais?',
          resposta: 'A Workdemy complementa e potencializa treinamentos presenciais. Ela garante que o conhecimento esteja sempre disponível, padroniza informações e reduz a carga de treinamentos repetitivos. Muitos clientes usam a IA para preparar colaboradores antes de treinamentos presenciais, tornando-os mais eficientes.',
        },
        {
          pergunta: 'Posso testar com só um time primeiro?',
          resposta: 'Claro! Recomendamos começar com um time piloto. Você pode importar conteúdos de uma área específica, criar trilhas para esse time e expandir gradualmente. A IA se adapta e aprende com cada novo conteúdo e time adicionado.',
        },
      ],
    },
    depoimentos: {
      subtitle: 'Depoimentos / Cases',
      title: 'O que empresas estão aprendendo com a IA da Workdemy',
    },
    resultadosEsperados: {
      subtitle: 'Resultados esperados',
      title: 'O efeito Workdemy',
      items: [
        'Onboarding reduzido em até 70%',
        'Erros operacionais caem drasticamente',
        'Menos dependência de líderes para treinar',
        'Conhecimento centralizado e vivo',
        'Colaboradores mais confiantes, rápidos e alinhados',
        'Cultura mais forte e replicável',
      ],
    },
    treinamentoSemFriccao: {
      subtitle: 'Soluções completas para aprimorar efetivamente seu treinamento virtual.',
      title: 'Treinamento sem fricção',
    },
    ctaFinal: {
      title: 'Sua empresa já tem conhecimento suficiente. Falta organizá-lo.',
      description: 'Transforme seus processos em aprendizado vivo com a IA da Workdemy.',
      button: 'Agendar uma demonstração',
    },
    footer: {
      description: 'Transformando profissionais em especialistas através de educação de qualidade.',
      linksRapidos: 'Links rápidos',
      contato: 'Contato',
      redesSociais: 'Redes sociais',
      direitosReservados: 'Todos os direitos reservados.',
      termosUso: 'Termos de uso',
      politicaPrivacidade: 'Política de privacidade',
    },
    cookieConsent: {
      title: 'Usamos cookies',
      description: 'Ao clicar em "Aceitar tudo", você concorda com o armazenamento de cookies em seu dispositivo para fins funcionais, analíticos e publicitários.',
      acceptAll: 'Aceitar tudo',
      rejectAll: 'Rejeitar tudo',
      moreOptions: 'Mais opções',
    },
    chatDialog: {
      welcome: 'Bem-vindo',
      question: 'Procurando por treinamentos corporativos, onboarding ou suporte?',
      talkToAI: 'Falar com nosso Assistente IA',
      signUp: 'Cadastrar-se na Workdemy',
      scheduleDemo: 'Agendar uma demonstração',
      needSupport: 'Preciso de suporte',
      privacyNotice: 'Esta conversa pode ser gravada conforme descrito em nossa',
      privacyPolicy: 'Política de Privacidade',
      openChat: 'Abrir chat',
      close: 'Fechar',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      sobre: 'About',
      comoFunciona: 'How It Works',
      beneficios: 'Benefits',
      depoimentos: 'Testimonials',
      recursos: 'Features',
      planos: 'Pricing',
      entrar: 'Sign In',
      comecarAgora: 'Get Started',
      comecar: 'Start',
      saibaMais: 'Learn More',
      idioma: 'Language',
      selecionarIdioma: 'Select language',
      idiomaAlterado: 'Language changed to',
    },
    hero: {
      typewriter: 'What do you want to know about the company?',
      title: 'Transform your processes into living learning with an AI made for your company.',
      description: 'A platform that learns from your company and transforms knowledge into intelligent training, available 24/7 for your employees.',
      comecarAgora: 'Get Started',
      saibaMais: 'Learn More',
    },
    problema: {
      subtitle: 'Training teams is harder than ever',
      title: 'Your company knowledge is scattered. And it costs dearly.',
      conhecimentoFragmentado: {
        title: 'Knowledge fragmented across multiple places',
        description: 'Important processes get lost in PDFs, presentations, audio files, and conversations. Without a single source of truth, employees waste time searching for information and make mistakes due to lack of access to correct knowledge.',
        link: 'See the solution',
      },
      lideresDesperdicam: {
        title: 'Leaders waste time repeating trainings',
        description: 'Without a centralized platform, managers and leaders need to manually repeat the same trainings for each new employee. This consumes precious hours that could be invested in strategy and growth.',
        link: 'See how we solve it',
        tempoGasto: 'Time spent on training',
        horasSemanais: '/ 80 weekly hours',
        maisLideres: '+5 leaders',
      },
      onboardingLento: {
        title: 'Slow and inconsistent onboarding',
        description: 'New employees take weeks or months to become productive. The lack of a standardized process results in inconsistent experiences and higher risk of operational errors.',
        link: 'Discover the solution',
        novoColaborador: 'New employee',
        semanasProdutividade: 'Weeks to productivity',
      },
      cta: 'Transform fragmented knowledge into an intelligent platform that scales with your company.',
      problemas: {
        processosGuardados: 'Processes stored in PDFs, presentations, audio files, and conversations',
        lideresRepetindo: 'Leaders spend hours repeating the same trainings',
        onboardingLento: 'Slow and inconsistent onboarding',
        falhasOperacionais: 'Operational failures due to lack of guidance',
        dificuldadeEscalar: 'Difficulty scaling trainings as the company grows',
      },
      status: {
        critico: 'Critical',
        ineficiente: 'Inefficient',
        lento: 'Slow',
        risco: 'Risk',
        escalabilidade: 'Scalability',
        fragmentado: 'Fragmented',
        multiplasFontes: 'Multiple sources',
        emProcesso: 'In progress',
        onboarding: 'Onboarding',
      },
    },
    iaProcessos: {
      subtitle: 'Trained with your company DNA',
      title: 'AI that understands your processes',
      aprendeDocumentos: {
        title: 'Learns from your documents',
        description: 'The AI absorbs documents, workflows, videos, internal policies, playbooks, and operational standards. Transforms scattered knowledge into a unified and accessible base for the entire team.',
      },
      estruturaConhecimento: {
        title: 'Structures knowledge',
        description: 'Transforms everything into coherent learning paths by area, role, and seniority. The AI organizes knowledge logically and progressively, facilitating continuous learning.',
      },
      ensinaInstrutor: {
        title: 'Teaches like an experienced instructor',
        description: 'Explains processes to employees as if it were an experienced internal instructor. Answers questions in real-time, adapts explanations to knowledge level, and ensures complete understanding.',
      },
      evoluiEmpresa: {
        title: 'Evolves with your company',
        description: 'The more content you send, the more the AI specializes in your company reality. Learns patterns, identifies needs, and becomes increasingly accurate and useful for your operations.',
      },
    },
    sequenciaImagens: {
      prefix: 'Workdemy',
      textOptions: [
        'organizes your knowledge',
        'learns from it',
        'trains your team end to end',
      ],
    },
    comoFunciona: {
      subtitle: 'From content to results in clicks',
      title: 'Frictionless training',
      importeConteudos: {
        label: 'Import Content',
        description: 'PDFs, videos, internal policies, audio files, presentations.',
        documentoProcessado: '📄 Document processed',
      },
      iaAnalisa: {
        label: 'AI Analyzes and Generates',
        description: 'Artificial intelligence processes your content and automatically creates learning paths.',
        agora: 'Now',
        analisando: 'Analyzing document and generating path...',
        trilhaCriada: 'Path created successfully! 5 modules generated automatically.',
      },
      semFriccao: {
        title: 'Frictionless',
        description: 'Automated',
      },
      metricas: {
        label: 'Learning Metrics',
        title: 'Track progress in real-time.',
        subtitle: 'Identify bottlenecks and optimize training.',
      },
      chart: {
        concluidos: 'Completed',
        emAndamento: 'In Progress',
      },
    },
    recursos: {
      subtitle: 'Main features (AI first)',
      title: 'Everything an LMS should always have — with AI at the center.',
      iaCorporativa: {
        title: 'Corporate AI trained with your content',
        description: 'An "organizational brain" accessible to every employee.',
      },
      criacaoAutomatica: {
        title: 'Automatic creation of paths and modules',
        description: 'Transform loose documents into complete journeys.',
      },
      assistente24h: {
        title: '24/7 learning assistant for each employee',
        description: 'Questions answered instantly based on your company processes.',
      },
      quizzes: {
        title: 'Smart quizzes',
        description: 'AI creates questions, measures retention, and adjusts content as needed.',
      },
      dashboards: {
        title: 'Knowledge dashboards',
        description: 'See where operational risks are before they happen.',
      },
      onboardingAcelerado: {
        title: 'Accelerated onboarding',
        description: '70% less time to get new employees into operations.',
      },
    },
    paraQuem: {
      title: "It's not an LMS. It's an intelligence system for companies that want to grow.",
      subtitle: 'For whom?',
      rh: {
        title: 'HR and People',
        description: 'Onboarding, paths, recycling, mandatory policies.',
      },
      lideres: {
        title: 'Leaders and managers',
        description: 'Less time training, more time leading.',
      },
      operacoes: {
        title: 'Operations / Sales / Support',
        description: 'Error reduction, clear processes, quality standards.',
      },
      colaboradores: {
        title: 'Employees',
        description: 'Learn faster, with clarity and autonomy.',
      },
    },
    planos: {
      subtitle: 'Pricing / Plans',
      title: 'Start small. Grow unlimited.',
      starter: {
        name: 'Starter',
        description: 'For teams that want to transform documents into quick paths.',
        features: [
          'Basic AI for document analysis',
          'Create up to 10 paths',
          'Up to 50 employees',
          'Basic dashboard',
          'Email support',
        ],
        cta: 'Talk to sales',
      },
      growth: {
        name: 'Growth',
        description: 'Complete AI + teams + units + advanced dashboards.',
        features: [
          'Complete AI trained with your content',
          'Unlimited paths',
          'Unlimited employees',
          'Advanced dashboards and analytics',
          '24/7 AI assistant',
          'Priority support',
          'Basic integrations',
        ],
        cta: 'Talk to sales',
        popular: 'Most popular',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'On-premise, advanced security, integrations, and dedicated support.',
        features: [
          'Everything from Growth',
          'On-premise deployment',
          'Advanced security and compliance',
          'Custom integrations',
          'Dedicated 24/7 support',
          'Team training',
          'Guaranteed SLA',
        ],
        cta: 'Talk to sales',
      },
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          pergunta: 'How does the AI learn from my content?',
          resposta: "Workdemy's AI uses advanced natural language processing to analyze your documents, videos, audio files, and presentations. It extracts concepts, relates information, and builds a knowledge model specific to your company. The more content you provide, the more accurate and specialized the AI becomes.",
        },
        {
          pergunta: 'Does the AI guarantee security and privacy?',
          resposta: 'Yes. All data is processed with end-to-end encryption. In the Enterprise plan, we offer on-premise deployment for maximum security. Your content is never used to train generic models and remains exclusive to your organization.',
        },
        {
          pergunta: 'How long does implementation take?',
          resposta: 'Basic implementation takes 1 to 2 weeks. We start by importing your main content and setting up the first paths. The AI starts learning immediately and within a few days is already answering employee questions.',
        },
        {
          pergunta: 'Do I need to reorganize my content first?',
          resposta: "It's not necessary. Workdemy's AI is designed to work with distributed and disorganized knowledge. It automatically structures your documents, identifies relationships, and creates coherent paths, even if content is in different formats and locations.",
        },
        {
          pergunta: 'Does Workdemy replace in-person training?',
          resposta: 'Workdemy complements and enhances in-person training. It ensures knowledge is always available, standardizes information, and reduces the burden of repetitive training. Many clients use the AI to prepare employees before in-person training, making them more efficient.',
        },
        {
          pergunta: 'Can I test with just one team first?',
          resposta: 'Of course! We recommend starting with a pilot team. You can import content from a specific area, create paths for that team, and gradually expand. The AI adapts and learns with each new content and team added.',
        },
      ],
    },
    depoimentos: {
      subtitle: 'Testimonials / Cases',
      title: 'What companies are learning with Workdemy AI',
    },
    resultadosEsperados: {
      subtitle: 'Expected results',
      title: 'The Workdemy effect',
      items: [
        'Onboarding reduced by up to 70%',
        'Operational errors drop drastically',
        'Less dependence on leaders for training',
        'Centralized and living knowledge',
        'More confident, faster, and aligned employees',
        'Stronger and replicable culture',
      ],
    },
    treinamentoSemFriccao: {
      subtitle: 'Complete solutions to effectively enhance your virtual training.',
      title: 'Frictionless training',
    },
    ctaFinal: {
      title: 'Your company already has enough knowledge. It just needs to be organized.',
      description: 'Transform your processes into living learning with Workdemy AI.',
      button: 'Schedule a demo',
    },
    footer: {
      description: 'Transforming professionals into specialists through quality education.',
      linksRapidos: 'Quick links',
      contato: 'Contact',
      redesSociais: 'Social media',
      direitosReservados: 'All rights reserved.',
      termosUso: 'Terms of use',
      politicaPrivacidade: 'Privacy policy',
    },
    cookieConsent: {
      title: 'We use cookies',
      description: 'By clicking "Accept all", you agree to the storage of cookies on your device for functional, analytical, and advertising purposes.',
      acceptAll: 'Accept all',
      rejectAll: 'Reject all',
      moreOptions: 'More options',
    },
    chatDialog: {
      welcome: 'Welcome',
      question: 'Looking for corporate training, onboarding, or support?',
      talkToAI: 'Talk to our AI Assistant',
      signUp: 'Sign up for Workdemy',
      scheduleDemo: 'Schedule a demo',
      needSupport: 'I need support',
      privacyNotice: 'This chat may be recorded as described in our',
      privacyPolicy: 'Privacy Policy',
      openChat: 'Open chat',
      close: 'Close',
    },
  },
  es: {
    // Spanish translations would go here when needed
    nav: {
      inicio: 'Inicio',
      sobre: 'Acerca de',
      comoFunciona: 'Cómo Funciona',
      beneficios: 'Beneficios',
      depoimentos: 'Testimonios',
      recursos: 'Recursos',
      planos: 'Planes',
      entrar: 'Entrar',
      comecarAgora: 'Comenzar ahora',
      comecar: 'Comenzar',
      saibaMais: 'Saber más',
      idioma: 'Idioma',
      selecionarIdioma: 'Seleccionar idioma',
      idiomaAlterado: 'Idioma cambiado a',
    },
    hero: {
      typewriter: '¿Qué quieres saber sobre la empresa?',
      title: 'Transforma tus procesos en aprendizaje vivo con una IA hecha para tu empresa.',
      description: 'Una plataforma que aprende de tu empresa y transforma el conocimiento en entrenamiento inteligente, disponible 24 horas al día para tus colaboradores.',
      comecarAgora: 'Comenzar Ahora',
      saibaMais: 'Saber Más',
    },
    problema: {
      subtitle: 'Entrenar equipos es más difícil que nunca',
      title: 'El conocimiento de tu empresa está disperso. Y eso cuesta caro.',
      conhecimentoFragmentado: {
        title: 'Conocimiento fragmentado en múltiples lugares',
        description: 'Los procesos importantes se pierden en PDFs, presentaciones, audios y conversaciones. Sin una única fuente de verdad, los colaboradores pierden tiempo buscando información y cometen errores por falta de acceso al conocimiento correcto.',
        link: 'Conoce la solución',
      },
      lideresDesperdicam: {
        title: 'Los líderes desperdician tiempo repitiendo entrenamientos',
        description: 'Sin una plataforma centralizada, los gerentes y líderes necesitan repetir manualmente los mismos entrenamientos para cada nuevo colaborador. Esto consume horas preciosas que podrían invertirse en estrategia y crecimiento.',
        link: 'Ver cómo lo resolvemos',
        tempoGasto: 'Tiempo gastado en entrenamientos',
        horasSemanais: '/ 80h semanales',
        maisLideres: '+5 líderes',
      },
      onboardingLento: {
        title: 'Onboarding lento e inconsistente',
        description: 'Los nuevos colaboradores tardan semanas o meses en volverse productivos. La falta de un proceso estandarizado resulta en experiencias inconsistentes y mayor riesgo de errores operacionales.',
        link: 'Descubre la solución',
        novoColaborador: 'Nuevo colaborador',
        semanasProdutividade: 'Semanas para productividad',
      },
      cta: 'Transforma conocimiento fragmentado en una plataforma inteligente que escala con tu empresa.',
      problemas: {
        processosGuardados: 'Procesos guardados en PDFs, presentaciones, audios y conversaciones',
        lideresRepetindo: 'Los líderes gastan horas repitiendo los mismos entrenamientos',
        onboardingLento: 'Onboarding lento e inconsistente',
        falhasOperacionais: 'Fallas operacionales por falta de orientación',
        dificuldadeEscalar: 'Dificultad para escalar entrenamientos cuando la empresa crece',
      },
      status: {
        critico: 'Crítico',
        ineficiente: 'Ineficiente',
        lento: 'Lento',
        risco: 'Riesgo',
        escalabilidade: 'Escalabilidad',
        fragmentado: 'Fragmentado',
        multiplasFontes: 'Múltiples fuentes',
        emProcesso: 'En proceso',
        onboarding: 'Onboarding',
      },
    },
    iaProcessos: {
      subtitle: 'Entrenada con el ADN de tu empresa',
      title: 'IA que entiende tus procesos',
      aprendeDocumentos: {
        title: 'Aprende con tus documentos',
        description: 'La IA absorbe documentos, flujos, videos, políticas internas, playbooks y normas operacionales. Transforma conocimiento disperso en una base unificada y accesible para todo el equipo.',
      },
      estruturaConhecimento: {
        title: 'Estructura el conocimiento',
        description: 'Transforma todo en rutas de aprendizaje coherentes por área, cargo y seniority. La IA organiza el conocimiento de forma lógica y progresiva, facilitando el aprendizaje continuo.',
      },
      ensinaInstrutor: {
        title: 'Enseña como un instructor experimentado',
        description: 'Explica procesos a los colaboradores como si fuera un instructor interno experimentado. Responde dudas en tiempo real, adapta explicaciones al nivel de conocimiento y garantiza comprensión completa.',
      },
      evoluiEmpresa: {
        title: 'Evoluciona con tu empresa',
        description: 'Cuanto más contenido envías, más se especializa la IA en la realidad de tu empresa. Aprende patrones, identifica necesidades y se vuelve cada vez más precisa y útil para tu operación.',
      },
    },
    sequenciaImagens: {
      prefix: 'Workdemy',
      textOptions: [
        'organiza tu conocimiento',
        'aprende de él',
        'entrena a tu equipo de punta a punta',
      ],
    },
    comoFunciona: {
      subtitle: 'Del contenido al resultado en clics',
      title: 'Entrenamiento sin fricción',
      importeConteudos: {
        label: 'Importar Contenidos',
        description: 'PDFs, videos, políticas internas, audios, presentaciones.',
        documentoProcessado: '📄 Documento procesado',
      },
      iaAnalisa: {
        label: 'IA Analiza y Genera',
        description: 'La inteligencia artificial procesa tu contenido y crea rutas de aprendizaje automáticamente.',
        agora: 'Ahora',
        analisando: 'Analizando documento y generando ruta...',
        trilhaCriada: '¡Ruta creada con éxito! 5 módulos generados automáticamente.',
      },
      semFriccao: {
        title: 'Sin Fricción',
        description: 'Automatizado',
      },
      metricas: {
        label: 'Métricas de Aprendizaje',
        title: 'Acompaña el progreso en tiempo real.',
        subtitle: 'Identifica cuellos de botella y optimiza el entrenamiento.',
      },
      chart: {
        concluidos: 'Completados',
        emAndamento: 'En Progreso',
      },
    },
    recursos: {
      subtitle: 'Recursos principales (IA first)',
      title: 'Todo lo que un LMS siempre debería tener — con IA en el centro.',
      iaCorporativa: {
        title: 'IA corporativa entrenada con tus contenidos',
        description: 'Un "cerebro organizacional" accesible para todo colaborador.',
      },
      criacaoAutomatica: {
        title: 'Creación automática de rutas y módulos',
        description: 'Transforma documentos sueltos en jornadas completas.',
      },
      assistente24h: {
        title: 'Asistente de aprendizaje 24h para cada colaborador',
        description: 'Dudas respondidas instantáneamente basadas en los procesos de tu empresa.',
      },
      quizzes: {
        title: 'Quizzes inteligentes',
        description: 'La IA crea preguntas, mide retención y ajusta contenidos según necesidad.',
      },
      dashboards: {
        title: 'Dashboards de conocimiento',
        description: 'Ve dónde están los riesgos operacionales antes de que sucedan.',
      },
      onboardingAcelerado: {
        title: 'Onboarding acelerado',
        description: '70% menos tiempo para poner nuevos colaboradores en operación.',
      },
    },
    paraQuem: {
      title: 'No es un LMS. Es un sistema de inteligencia para empresas que quieren crecer.',
      subtitle: '¿Para quién?',
      rh: {
        title: 'RRHH y People',
        description: 'Onboarding, rutas, reciclaje, políticas obligatorias.',
      },
      lideres: {
        title: 'Líderes y gerentes',
        description: 'Menos tiempo entrenando, más tiempo liderando.',
      },
      operacoes: {
        title: 'Operaciones / Ventas / Soporte',
        description: 'Reducción de errores, procesos claros, estándares de calidad.',
      },
      colaboradores: {
        title: 'Colaboradores',
        description: 'Aprenden más rápido, con claridad y autonomía.',
      },
    },
    planos: {
      subtitle: 'Precios / Planes',
      title: 'Comienza pequeño. Crece ilimitado.',
      starter: {
        name: 'Starter',
        description: 'Para equipos que quieren transformar documentos en rutas rápidas.',
        features: [
          'IA básica para análisis de documentos',
          'Creación de hasta 10 rutas',
          'Hasta 50 colaboradores',
          'Dashboard básico',
          'Soporte por email',
        ],
        cta: 'Hablar con comercial',
      },
      growth: {
        name: 'Growth',
        description: 'IA completa + equipos + unidades + dashboards avanzados.',
        features: [
          'IA completa entrenada con tus contenidos',
          'Rutas ilimitadas',
          'Colaboradores ilimitados',
          'Dashboards avanzados y analytics',
          'Asistente IA 24h',
          'Soporte prioritario',
          'Integraciones básicas',
        ],
        cta: 'Hablar con comercial',
        popular: 'Más popular',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'On-premise, seguridad avanzada, integraciones y soporte dedicado.',
        features: [
          'Todo del Growth',
          'Deploy on-premise',
          'Seguridad y compliance avanzados',
          'Integraciones personalizadas',
          'Soporte dedicado 24/7',
          'Entrenamiento del equipo',
          'SLA garantizado',
        ],
        cta: 'Hablar con comercial',
      },
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          pergunta: '¿Cómo aprende la IA con mis contenidos?',
          resposta: 'La IA de Workdemy utiliza procesamiento de lenguaje natural avanzado para analizar tus documentos, videos, audios y presentaciones. Extrae conceptos, relaciona información y construye un modelo de conocimiento específico de tu empresa. Cuanto más contenido proporcionas, más precisa y especializada se vuelve la IA.',
        },
        {
          pergunta: '¿La IA garantiza seguridad y privacidad?',
          resposta: 'Sí. Todos los datos se procesan con cifrado de extremo a extremo. En el plan Enterprise, ofrecemos deploy on-premise para máxima seguridad. Tus contenidos nunca se usan para entrenar modelos genéricos y permanecen exclusivos de tu organización.',
        },
        {
          pergunta: '¿Cuánto tiempo lleva implementar?',
          resposta: 'La implementación básica lleva de 1 a 2 semanas. Comenzamos importando tus contenidos principales y configurando las primeras rutas. La IA comienza a aprender inmediatamente y en pocos días ya está respondiendo dudas de los colaboradores.',
        },
        {
          pergunta: '¿Necesito reorganizar mis contenidos antes?',
          resposta: 'No es necesario. La IA de Workdemy fue diseñada para trabajar con conocimiento distribuido y desorganizado. Estructura automáticamente tus documentos, identifica relaciones y crea rutas coherentes, incluso si los contenidos están en formatos y lugares diferentes.',
        },
        {
          pergunta: '¿Workdemy reemplaza entrenamientos presenciales?',
          resposta: 'Workdemy complementa y potencia entrenamientos presenciales. Garantiza que el conocimiento esté siempre disponible, estandariza información y reduce la carga de entrenamientos repetitivos. Muchos clientes usan la IA para preparar colaboradores antes de entrenamientos presenciales, haciéndolos más eficientes.',
        },
        {
          pergunta: '¿Puedo probar con solo un equipo primero?',
          resposta: '¡Por supuesto! Recomendamos comenzar con un equipo piloto. Puedes importar contenidos de un área específica, crear rutas para ese equipo y expandir gradualmente. La IA se adapta y aprende con cada nuevo contenido y equipo agregado.',
        },
      ],
    },
    depoimentos: {
      subtitle: 'Testimonios / Casos',
      title: 'Lo que las empresas están aprendiendo con la IA de Workdemy',
    },
    resultadosEsperados: {
      subtitle: 'Resultados esperados',
      title: 'El efecto Workdemy',
      items: [
        'Onboarding reducido hasta en un 70%',
        'Los errores operacionales caen drásticamente',
        'Menos dependencia de líderes para entrenar',
        'Conocimiento centralizado y vivo',
        'Colaboradores más seguros, rápidos y alineados',
        'Cultura más fuerte y replicable',
      ],
    },
    treinamentoSemFriccao: {
      subtitle: 'Soluciones completas para mejorar efectivamente tu entrenamiento virtual.',
      title: 'Entrenamiento sin fricción',
    },
    ctaFinal: {
      title: 'Tu empresa ya tiene suficiente conocimiento. Falta organizarlo.',
      description: 'Transforma tus procesos en aprendizaje vivo con la IA de Workdemy.',
      button: 'Agendar una demostración',
    },
    footer: {
      description: 'Transformando profesionales en especialistas a través de educación de calidad.',
      linksRapidos: 'Enlaces rápidos',
      contato: 'Contacto',
      redesSociais: 'Redes sociales',
      direitosReservados: 'Todos los derechos reservados.',
      termosUso: 'Términos de uso',
      politicaPrivacidade: 'Política de privacidad',
    },
    cookieConsent: {
      title: 'Usamos cookies',
      description: 'Al hacer clic en "Aceptar todo", aceptas el almacenamiento de cookies en tu dispositivo para fines funcionales, analíticos y publicitarios.',
      acceptAll: 'Aceptar todo',
      rejectAll: 'Rechazar todo',
      moreOptions: 'Más opciones',
    },
    chatDialog: {
      welcome: 'Bienvenido',
      question: '¿Buscas capacitación corporativa, onboarding o soporte?',
      talkToAI: 'Hablar con nuestro Asistente IA',
      signUp: 'Registrarse en Workdemy',
      scheduleDemo: 'Agendar una demostración',
      needSupport: 'Necesito soporte',
      privacyNotice: 'Esta conversación puede ser grabada según se describe en nuestra',
      privacyPolicy: 'Política de Privacidad',
      openChat: 'Abrir chat',
      close: 'Cerrar',
    },
  },
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}

export function useTranslations(language: Language): Translations {
  return getTranslations(language)
}
