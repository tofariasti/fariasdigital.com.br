/**
 * Farias Digital — Hub comercial
 * Configuração central: WhatsApp, pacotes, demos e domínio
 */
const HUB_DOMINIO = 'https://fariasdigital.com.br';
const HUB_DOMINIO_HOST = 'fariasdigital.com.br';

const HubConfig = {
  nome: 'Tiago Farias',
  marca: 'Farias Digital',
  marcaLogo: '/assets/img/logo-header.png',
  marcaLogoFull: '/assets/img/logo.png',
  marcaLogoIcon: '/assets/img/logo-icon.png',
  marcaLogoAlt: 'Farias Digital — Tecnologia, Estratégia, Resultados',
  whatsappIcon: '/assets/img/whatsapp-icon.svg',
  nomeCompleto: 'Tiago O. de Farias',
  dominio: HUB_DOMINIO,
  dominioHost: HUB_DOMINIO_HOST,
  cidadeRegiao: 'Porto Alegre e região metropolitana',
  email: 'tiago.farias.poa@gmail.com',
  whatsappNumero: '5551991213724',
  whatsappExibicao: '(51) 99121-3724',
  mei: true,
  emiteNF: true,

  googleAnalyticsId: '',

  mensagensWhatsApp: {
    geral: `Olá! Vi o site ${HUB_DOMINIO_HOST} e gostaria de conversar sobre um projeto.`,
    site: `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento.

Para agilizar, já tenho:
• Tipo de negócio:
• O que preciso (site / landing / e-commerce / automação WhatsApp):
• Quantidade de produtos (se loja online):
• Tenho domínio? (sim/não)
• Prazo desejado:

Obrigado!`,
    drone: `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento de captação com drone.

Para agilizar:
• Tipo: (imóvel / Airbnb / obra / evento / empresa / outro)
• O que precisa: (fotos / vídeo / fotos + vídeo)
• Local (cidade e endereço ou referência):
• Data ou período:

Obrigado!`,
    pacoteLanding: 'Olá! Tenho interesse em uma landing page personalizada (a partir de R$ 300). Gostaria de um orçamento.',
    pacotePresenca: 'Olá! Tenho interesse no pacote Site Institucional (site completo com WhatsApp). Gostaria de um orçamento.',
    pacoteLoja: 'Olá! Tenho interesse no pacote Loja Essencial (e-commerce / catálogo online). Gostaria de um orçamento.',
    pacoteAutomacao: 'Olá! Tenho interesse em automação de WhatsApp (formulários, mensagens automáticas ou integração). Gostaria de um orçamento.',
    pacoteDrone: 'Olá! Tenho interesse no pacote Drone Imóvel (fotos + vídeo aéreo). Gostaria de um orçamento.',
  },

  links: {
    techdrone360: 'https://techdrone360.com.br',
    portfolio: 'https://tofariasti.github.io/',
    linkedin: 'https://www.linkedin.com/in/tiagofarias/',
    github: 'https://github.com/tofariasti',
    instagramDrone: 'https://www.instagram.com/techdrone360/',
    youtubeDrone: 'https://www.youtube.com/@techdrone360',
  },

  pricingLanding: {
    preco: 'a partir de R$ 300,00',
    precoCurto: 'R$ 300',
    titulo: 'Landing pages personalizadas',
    lead: 'Escolha o modelo do seu segmento e adapto com sua marca, textos e WhatsApp.',
  },

  pacotesWeb: [
    {
      id: 'landing-page',
      nome: 'Landing Page',
      preco: 'a partir de R$ 300',
      publico: 'Negócios locais que querem presença rápida no Google',
      inclui: [
        '1 página focada em conversão (modelo do seu segmento)',
        'Personalização com sua marca, textos e WhatsApp',
        'Layout responsivo + SEO básico',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)',
      mensagemWhatsApp: 'pacoteLanding',
      destaque: true,
      badge: 'Melhor custo-benefício',
    },
    {
      id: 'site-institucional',
      nome: 'Site Institucional',
      preco: 'a partir de R$ 1.490',
      publico: 'Comércio local, clínicas, prestadores de serviço',
      inclui: [
        'Site com múltiplas seções (serviços, sobre, contato, localização)',
        'Botão e formulário para WhatsApp com mensagem pronta',
        'Layout responsivo (celular e computador)',
        'SEO básico (título, descrição, Google)',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)',
      mensagemWhatsApp: 'pacotePresenca',
    },
    {
      id: 'loja-essencial',
      nome: 'Loja Essencial',
      preco: 'a partir de R$ 2.990',
      publico: 'E-commerce e varejo local',
      inclui: [
        'Loja online / catálogo com até 50 produtos',
        'Pedido e orçamento direto pelo WhatsApp',
        'Páginas institucionais (sobre, contato, localização)',
        'Layout responsivo e SEO básico',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Pagamento online integrado e ERP (sob consulta no pacote Sob medida)',
      mensagemWhatsApp: 'pacoteLoja',
    },
    {
      id: 'sob-medida',
      nome: 'Sob medida',
      preco: 'orçamento personalizado',
      publico: 'E-commerce completo, automação e integrações',
      inclui: [
        'E-commerce com pagamento online (Mercado Pago, PagSeguro etc.)',
        'Automação de WhatsApp, formulários e fluxos de atendimento',
        'Integrações (ERP, marketplaces, APIs)',
        'Painel administrativo e manutenção contínua',
      ],
      naoInclui: null,
      mensagemWhatsApp: 'site',
    },
  ],

  pacoteDrone: {
    nome: 'Drone Imóvel',
    preco: 'a partir de R$ 650',
    publico: 'Imobiliárias, corretores e incorporadoras',
    inclui: [
      'Fotos aéreas em alta resolução',
      'Vídeo editado (~45 segundos)',
      'Material pronto para anúncio e redes sociais',
      'Planejamento de voo conforme legislação',
      'Nota fiscal',
    ],
    mensagemWhatsApp: 'pacoteDrone',
  },

  portfolio: {
    titulo: 'Veja o que posso construir',
    tituloHighlight: 'para o seu negócio',
    lead: 'Referências de layout, código e experiência no celular — para você avaliar a qualidade antes de pedir orçamento.',
    grupoProjetos: {
      titulo: 'Projetos em produção',
      lead: 'Sites e aplicações web que desenvolvi — incluindo meu serviço de captação aérea.',
    },
    grupoDemos: {
      titulo: 'Landing pages por segmento',
      lead: 'Modelos prontos para você ver layout e responsividade. Ao contratar, personalizo com a identidade da sua empresa — a partir de R$ 300,00.',
    },
    badgeProjeto: 'Em produção',
    badgeDemo: 'Pronto para personalizar',
  },

  projetos: [
    {
      titulo: 'IBGE Localidades',
      segmento: 'React · TypeScript · API',
      url: 'https://tofariasti.github.io/ibge-localidades/',
      github: 'https://github.com/tofariasti/ibge-localidades',
      descricao: 'Mapa interativo do Brasil consumindo a API de Localidades do IBGE — regiões, UFs e municípios.',
      stack: ['React', 'Vite', 'TypeScript', 'Docker'],
      badge: 'Projeto pessoal',
    },
    {
      titulo: 'TechDrone360',
      segmento: 'Landing page · SEO · Drone',
      url: 'https://techdrone360.com.br',
      github: 'https://github.com/tofariasti/techdrone360',
      descricao: 'Meu site comercial de captação aérea — portfólio, vídeos, WhatsApp e SEO.',
      stack: ['HTML', 'Tailwind', 'JavaScript'],
      badge: 'Meu negócio',
    },
    {
      titulo: 'Copa 2026',
      segmento: 'Full stack · API REST',
      github: 'https://github.com/tofariasti/copa2026',
      descricao: 'Portal com API Laravel, SPA React, bolão e newsletter — estudo de arquitetura full stack.',
      stack: ['Laravel', 'React', 'MySQL', 'Docker'],
      preview: false,
      badge: 'Projeto pessoal',
    },
  ],

  demos: [
    {
      titulo: 'CRM Pro',
      segmento: 'Gestão',
      url: 'https://tofariasti.github.io/crm/',
      descricao: 'Dashboard interativo com gráficos, métricas e integração WhatsApp para gestão de clientes.',
    },
    {
      titulo: 'Pet shop',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/amo-patas/',
      descricao: 'Banho, tosa e agendamento pelo WhatsApp.',
    },
    {
      titulo: 'Loja de móveis',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/atacadao-miranda-moveis/',
      descricao: 'Televendas, ofertas e localização da loja.',
    },
    {
      titulo: 'Bazar de utilidades',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/bazar_do_alemao/',
      descricao: 'Ofertas, Instagram e horário de funcionamento.',
    },
    {
      titulo: 'Autopeças',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/dkautopecas/',
      descricao: 'Catálogo, Shopee e contato rápido.',
    },
    {
      titulo: 'Concessionária',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/performance-hyosung/',
      descricao: 'Modelos, financiamento e WhatsApp.',
    },
    {
      titulo: 'Oficina de radiadores',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/radiadores-vitoria/',
      descricao: 'Serviços, orçamento e localização.',
    },
    {
      titulo: 'Oficina Mecânica',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/oficinamecanica/',
      descricao: 'Serviços automotivos especializados, agendamento online e orçamento via WhatsApp.',
    },
    {
      titulo: 'Locadora de Veículos',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/locadora-veiculos-landing/',
      descricao: 'Frota premium, reserva estruturada via WhatsApp e planos diário/semanal/mensal.',
    },
    {
      titulo: 'Locadora de Motor Home',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/aluguel-motorhome-landing/',
      descricao: 'Frota de motor homes, planos flexíveis e reserva estruturada via WhatsApp para viagens pelo Brasil.',
    },
    {
      titulo: 'Picada Café — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-picada-cafe/',
      descricao: 'Parque Jorge Kuhn, mirantes, festas coloniais e agendamento de visitas via WhatsApp na Serra Gaúcha.',
    },
    {
      titulo: 'Canela — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-canela/',
      descricao: 'Cascata do Caracol, Catedral de Pedra, Skyglass e Sonho de Natal — roteiro com formulário WhatsApp.',
    },
    {
      titulo: 'Gramado — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-gramado/',
      descricao: 'Natal Luz, Lago Negro, Mini Mundo e Rua Coberta — landing page animada para destinos serranos.',
    },
    {
      titulo: 'Porto Alegre — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-porto-alegre/',
      descricao: 'Orla do Guaíba, Mercado Público, Redenção e agenda cultural — turismo na capital gaúcha.',
    },
    {
      titulo: 'Passo Fundo — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-passo-fundo/',
      descricao: 'Capital Nacional da Literatura, Parque da Gare, Roselândia e eventos culturais.',
    },
    {
      titulo: 'Ivoti — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-ivoti/',
      descricao: 'Cidade das Flores: Núcleo Enxaimel, Ponte do Imperador, Feira das Flores e cultura alemã.',
    },
    {
      titulo: 'São Francisco de Paula — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-sao-francisco-de-paula/',
      descricao: 'Lago São Bernardo, Mátria Parque de Flores, 8 Cachoeiras e ecoturismo nos Campos de Cima da Serra.',
    },
    {
      titulo: 'Ametista do Sul — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-ametista-do-sul/',
      descricao: 'Capital da ametista: minas, vinícolas subterrâneas, igreja de cristais e turismo geológico.',
    },
    {
      titulo: 'Salto do Yucumã — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-salto-do-yucuma/',
      descricao: 'Maior queda longitudinal do mundo no Parque do Turvo — natureza na divisa com a Argentina.',
    },
    {
      titulo: 'Estética Automotiva',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/landing-estetica-automotiva/',
      descricao: 'Detailing premium, polimento, vitrificação e galeria antes/depois com agendamento via WhatsApp.',
    },
    {
      titulo: 'Montador de Móveis',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/montadormoveis/',
      descricao: 'Montagem profissional, orçamento via WhatsApp e galeria de trabalhos realizados.',
    },
    {
      titulo: 'Escritório de Advocacia',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/advogado-landing-page/',
      descricao: 'Áreas de atuação, consulta online e WhatsApp.',
    },
    {
      titulo: 'Consultório Odontológico',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-dentista/',
      descricao: 'Serviços, depoimentos, antes/depois e agendamento pelo WhatsApp.',
    },
    {
      titulo: 'Farmácia Vida & Saúde',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-farmacia/',
      descricao: 'Landing page para farmácia com delivery, manipulação e agendamento via WhatsApp.',
    },
    {
      titulo: 'PDV Pro — Sistema de Ponto de Venda',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/landing-pdv/',
      descricao: 'Sistema PDV para varejo com caixa rápido, estoque integrado, NFC-e e agendamento de demo via WhatsApp.',
    },
    {
      titulo: 'Psicóloga',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-page-psicologa/',
      descricao: 'Design moderno com gradientes suaves, terapias, especialidades, depoimentos e formulário WhatsApp integrado.',
    },
    {
      titulo: 'Imobiliária',
      segmento: 'Imóveis',
      url: 'https://tofariasti.github.io/landing-imobiliaria/',
      descricao: 'Busca de imóveis, filtros, tour virtual e agendamento de visitas via WhatsApp.',
    },
    {
      titulo: 'Classificados',
      segmento: 'Imóveis',
      url: 'https://tofariasti.github.io/landing-classificados/',
      descricao: 'Portal de classificados com anúncios por categoria, destaques e contato via WhatsApp.',
    },
    {
      titulo: 'ShopStyle E-commerce',
      segmento: 'E-commerce',
      url: 'https://tofariasti.github.io/ecommerce/',
      descricao: 'Loja virtual completa com produtos, categorias, ofertas, depoimentos e pedidos via WhatsApp.',
    },
    {
      titulo: 'Catálogo Digital',
      segmento: 'E-commerce',
      url: 'https://tofariasti.github.io/catalogo-digital/',
      descricao: 'Catálogo de produtos premium com filtros por categoria, animações suaves e integração WhatsApp.',
    },
    {
      titulo: 'Cardápio Digital',
      segmento: 'Gastronomia',
      url: 'https://tofariasti.github.io/cardapio-digital/',
      descricao: 'Menu interativo com filtros por categoria, galeria de pratos e pedidos/reservas via WhatsApp.',
    },
    {
      titulo: 'Doce Encanto',
      segmento: 'Gastronomia',
      url: 'https://tofariasti.github.io/lojadoces-landing/',
      descricao: 'Loja de doces artesanais com catálogo, depoimentos, animações premium e pedidos via WhatsApp.',
    },
    {
      titulo: 'Marido de Aluguel',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/marido-aluguel/',
      descricao: 'Reparos, instalações e manutenção residencial com formulário WhatsApp para agendamento.',
    },
    {
      titulo: 'Super Bom Preço',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/supermercado-landing/',
      descricao: 'Ofertas da semana, departamentos, entrega agendada ou retirada na loja via WhatsApp.',
    },
    {
      titulo: 'Barbearia',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/landing-barbearia/',
      descricao: 'Cortes premium, barba, galeria de trabalhos e agendamento estruturado via WhatsApp.',
    },
    {
      titulo: 'Igreja Nova Vida',
      segmento: 'Institucional',
      url: 'https://tofariasti.github.io/landing-igreja/',
      descricao: 'Programação de cultos, ministérios, depoimentos e agendamento de visita via WhatsApp.',
    },
    {
      titulo: 'Academia de Artes Marciais',
      segmento: 'Esporte',
      url: 'https://tofariasti.github.io/landing-lutas/',
      descricao: 'Modalidades, planos, professores e agendamento de aula experimental via WhatsApp.',
    },
  ],

  proofBar: [
    { valor: 10, sufixo: '+', label: 'Anos em sistemas web corporativos' },
    { valor: 40, sufixo: '+', label: 'Modelos por segmento disponíveis' },
    { valor: 100, sufixo: '%', label: 'Atendimento direto com o desenvolvedor' },
  ],

  intentItems: [
    {
      titulo: 'Presença no Google',
      descricao: 'Aparecer quando o cliente pesquisa seu serviço na região.',
      anchor: '#pacotes',
      wa: 'pacoteLanding',
    },
    {
      titulo: 'Vender pelo WhatsApp',
      descricao: 'Formulários e botões que levam o visitante direto para conversa.',
      anchor: '#pacotes',
      wa: 'pacotePresenca',
    },
    {
      titulo: 'Loja online',
      descricao: 'Catálogo de produtos com pedido ou orçamento pelo WhatsApp.',
      anchor: '#pacotes',
      wa: 'pacoteLoja',
    },
    {
      titulo: 'Integrações & sistemas',
      descricao: 'APIs, pagamento online, ERP e automação avançada.',
      anchor: '#pacotes',
      wa: 'site',
    },
    {
      titulo: 'Drone 4K',
      descricao: 'Fotos e vídeos aéreos para imóveis, obras e empresas.',
      href: 'https://techdrone360.com.br/',
      externo: true,
    },
  ],

  servicos: [
    {
      id: 'landing',
      titulo: 'Landing Pages',
      descricao: 'Páginas estratégicas para captar leads e vender mais pelo WhatsApp.',
      preco: 'a partir de R$ 300',
      anchor: '#portfolio',
    },
    {
      id: 'institucional',
      titulo: 'Sites institucionais',
      descricao: 'Presença profissional com múltiplas seções, SEO e credibilidade.',
      preco: 'a partir de R$ 1.490',
      anchor: '#pacotes',
    },
    {
      id: 'ecommerce',
      titulo: 'E-commerce',
      descricao: 'Loja virtual, catálogo de produtos e pedidos pelo WhatsApp ou pagamento online.',
      preco: 'a partir de R$ 2.990',
      anchor: '#pacotes',
    },
    {
      id: 'whatsapp',
      titulo: 'Automação WhatsApp',
      descricao: 'Formulários inteligentes, mensagens prontas e fluxos que agilizam o atendimento.',
      preco: 'sob medida',
      wa: 'pacoteAutomacao',
    },
    {
      id: 'integracoes',
      titulo: 'Integrações & APIs',
      descricao: 'Pagamento online, ERP, marketplaces e sistemas Laravel sob medida.',
      preco: 'sob medida',
      wa: 'site',
    },
    {
      id: 'drone',
      titulo: 'Imagens aéreas',
      descricao: 'Fotos e vídeos com drone para imóveis, obras e empresas.',
      preco: 'a partir de R$ 650',
      href: 'https://techdrone360.com.br/',
      externo: true,
    },
  ],

  credibilidade: {
    titulo: 'Mais que sites bonitos',
    lead: 'Por trás da Farias Digital há mais de 10 anos desenvolvendo sistemas corporativos — APIs, integrações e plataformas críticas em produção.',
    setores: ['Agronegócio', 'Saúde', 'Governo', 'Pagamentos', 'Logística', 'SaaS corporativo'],
    marcos: [
      { periodo: '2015–2017', titulo: 'Inmetro · Cronotacógrafo', texto: 'Sistema governamental de metrologia legal com PHP e Oracle.' },
      { periodo: '2018–2020', titulo: 'Ticket Log · Pagamentos', texto: 'Sistemas críticos de frotas e meios de pagamento — alta disponibilidade.' },
      { periodo: '2020–2024', titulo: 'Stargrid · Healthtech', texto: 'Plataforma SaaS para escalas hospitalares com APIs Laravel e RabbitMQ.' },
      { periodo: '2024–atual', titulo: 'Yara Brasil · Agronegócio', texto: 'API Laravel offline-first, integrações Salesforce e observabilidade em produção.' },
    ],
  },

  cases: [
    {
      titulo: 'TechDrone360',
      segmento: 'Captação aérea · Em produção',
      descricao: 'Site comercial com portfólio, vídeos 4K, SEO local e conversão via WhatsApp — meu próprio negócio de drone.',
      url: 'https://techdrone360.com.br',
    },
    {
      titulo: 'IBGE Localidades',
      segmento: 'React · TypeScript · Open Source',
      descricao: 'Mapa interativo consumindo a API de Localidades do IBGE — prova de qualidade em frontend e integração.',
      url: 'https://tofariasti.github.io/ibge-localidades/',
    },
  ],

  processoWeb: [
    { passo: '1', titulo: 'Conversa rápida', texto: 'Você conta seu negócio e objetivo pelo WhatsApp — sem compromisso.' },
    { passo: '2', titulo: 'Proposta clara', texto: 'Envio escopo, prazo e investimento fechados, sem surpresas.' },
    { passo: '3', titulo: 'Desenvolvimento', texto: 'Montagem do site com foco em gerar contato e credibilidade.' },
    { passo: '4', titulo: 'Publicação', texto: 'Site no ar no seu domínio (ex.: .com.br), com orientação para Google Meu Negócio.' },
  ],

  seo: {
    ogImage: HUB_DOMINIO + '/assets/img/og-image.png',
    descriptionDefault: 'Sites, e-commerce, automação de WhatsApp e imagens aéreas com drone em Porto Alegre e região. MEI com Nota Fiscal.',
    geo: {
      region: 'BR-RS',
      placename: 'Porto Alegre',
      latitude: -30.0346,
      longitude: -51.2177,
    },
    local: {
      cidade: 'Porto Alegre',
      uf: 'RS',
      areaServed: [
        'Porto Alegre',
        'Canoas',
        'Novo Hamburgo',
        'Gravataí',
        'Cachoeirinha',
        'Viamão',
        'Alvorada',
        'São Leopoldo',
        'Esteio',
        'Sapucaia do Sul',
      ],
    },
    sameAs: [
      'https://www.linkedin.com/in/tiagofarias/',
      'https://github.com/tofariasti',
      'https://techdrone360.com.br',
      'https://www.instagram.com/techdrone360/',
      'https://www.youtube.com/@techdrone360',
    ],
    paginas: {
      home: {
        title: 'Farias Digital | Landing Pages e Sites em Porto Alegre',
        description: 'Landing pages a partir de R$ 300, sites institucionais, e-commerce e automação WhatsApp em Porto Alegre e região. MEI · Nota Fiscal · Orçamento grátis.',
      },
      sites: {
        title: 'Landing Page e Criação de Sites em Porto Alegre | Farias Digital',
        description: 'Landing pages a partir de R$ 300 · Sites institucionais a partir de R$ 1.490. E-commerce, automação WhatsApp e SEO básico. Porto Alegre e região metropolitana.',
      },
      drone: {
        title: 'Drone para Imóveis e Empresas em Porto Alegre | Farias Digital',
        description: 'Fotos e vídeos aéreos 4K com drone DJI para imóveis, Airbnb, obras e eventos. A partir de R$ 650. Nota Fiscal. Porto Alegre e região.',
      },
      sobre: {
        title: 'Sobre a Farias Digital | Tiago Farias — MEI, Porto Alegre',
        description: 'Tiago Farias — desenvolvedor web sênior e operador de drone certificado em Porto Alegre. 10+ anos em Laravel, APIs e integrações. MEI com emissão de Nota Fiscal.',
      },
    },
    faq: [
      {
        pergunta: 'Quanto custa um site profissional em Porto Alegre?',
        resposta: 'Landing pages personalizadas começam a partir de R$ 300,00 — ideal para presença rápida no Google com WhatsApp integrado. Sites institucionais com múltiplas seções começam a partir de R$ 1.490. E-commerce e projetos com integrações são orçados conforme escopo.',
      },
      {
        pergunta: 'Qual a diferença entre landing page e site institucional?',
        resposta: 'A landing page (a partir de R$ 300) é uma página única focada em conversão — escolho um modelo do seu segmento e personalizo com sua marca. O site institucional (a partir de R$ 1.490) tem mais seções (serviços, sobre, contato, localização) e transmite mais credibilidade para negócios que precisam de presença completa.',
      },
      {
        pergunta: 'A Farias Digital emite nota fiscal?',
        resposta: 'Sim. Sou MEI (Microempreendedor Individual) e emito Nota Fiscal para pessoa física e jurídica — ideal para empresas que precisam de documentação formal.',
      },
      {
        pergunta: 'Quanto tempo leva para colocar meu site no ar?',
        resposta: 'Landing pages costumam ficar prontas em 5 a 10 dias úteis. Sites institucionais e e-commerce levam de 7 a 21 dias, dependendo do escopo e da agilidade no envio de textos e fotos. Prazo exato vem fechado na proposta.',
      },
      {
        pergunta: 'O site aparece no Google?',
        resposta: 'Todos os pacotes incluem SEO básico: título, descrição, URLs amigáveis e configuração para indexação. Também oriento sobre Google Meu Negócio e Search Console para acelerar a presença local.',
      },
      {
        pergunta: 'Domínio e hospedagem estão inclusos?',
        resposta: 'Não estão inclusos nos pacotes base, mas posso orientar a contratação ou gerenciar para você (domínio .com.br + hospedagem a partir de ~R$ 150/ano). Informo tudo no orçamento antes de iniciar.',
      },
    ],
  },
};
