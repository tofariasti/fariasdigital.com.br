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
    pacotePresenca: 'Olá! Tenho interesse no pacote Presença Digital (site com WhatsApp). Gostaria de um orçamento.',
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

  pacotesWeb: [
    {
      id: 'presenca-digital',
      nome: 'Presença Digital',
      preco: 'a partir de R$ 1.490',
      publico: 'Comércio local, clínicas, prestadores de serviço',
      inclui: [
        'Landing page de 1 página focada em conversão',
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
      destaque: true,
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
      titulo: 'Sites por segmento',
      lead: 'Landing pages prontas para você ver layout e responsividade. Ao contratar, adapto com a marca, textos e fotos da sua empresa.',
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
        title: 'Farias Digital | Sites, E-commerce e Drone em Porto Alegre',
        description: 'Criação de sites, lojas online, automação de WhatsApp e fotos aéreas com drone para empresas em Porto Alegre e região. MEI · Nota Fiscal · Orçamento grátis.',
      },
      sites: {
        title: 'Criação de Sites e Loja Online em Porto Alegre | Farias Digital',
        description: 'Sites profissionais, landing pages e e-commerce a partir de R$ 1.490. Automação de WhatsApp, SEO básico e layout mobile. Porto Alegre e região metropolitana.',
      },
      drone: {
        title: 'Drone para Imóveis e Empresas em Porto Alegre | Farias Digital',
        description: 'Fotos e vídeos aéreos 4K com drone DJI para imóveis, Airbnb, obras e eventos. A partir de R$ 650. Nota Fiscal. Porto Alegre e região.',
      },
      sobre: {
        title: 'Sobre a Farias Digital | Tiago Farias — MEI, Porto Alegre',
        description: 'Tiago Farias — desenvolvedor web e operador de drone certificado em Porto Alegre. Mais de 10 anos em sistemas web. MEI com emissão de Nota Fiscal.',
      },
    },
    faq: [
      {
        pergunta: 'Quanto custa um site profissional em Porto Alegre?',
        resposta: 'Os pacotes começam a partir de R$ 300,00. Projetos com pagamento online, integrações ou automação avançada são orçados sob medida.',
      },
      {
        pergunta: 'A Farias Digital emite nota fiscal?',
        resposta: 'Sim. Sou MEI (Microempreendedor Individual) e emito Nota Fiscal para pessoa física e jurídica — ideal para empresas que precisam de documentação formal.',
      },
      {
        pergunta: 'Quanto tempo leva para colocar meu site no ar?',
        resposta: 'Landing pages e sites institucionais costumam ficar prontos em 7 a 15 dias úteis, dependendo do escopo e da agilidade no envio de textos e fotos. Prazo exato vem fechado na proposta.',
      },
      {
        pergunta: 'O site aparece no Google?',
        resposta: 'Todos os pacotes incluem SEO básico: título, descrição, URLs amigáveis e configuração para indexação. Também oriento sobre Google Meu Negócio e Search Console para acelerar a presença local.',
      },
    ],
  },
};
