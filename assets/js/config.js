/**
 * Tiago Farias — Hub comercial
 * Altere aqui antes de publicar em tiagofarias.com.br
 */
const HubConfig = {
  nome: 'Tiago Farias',
  nomeCompleto: 'Tiago O. de Farias',
  dominio: 'https://tiagofarias.com.br',
  cidadeRegiao: 'Porto Alegre e região metropolitana',
  email: 'tiago.farias.poa@gmail.com',
  whatsappNumero: '5551989030405',
  whatsappExibicao: '(51) 98903-0405',
  mei: true,
  emiteNF: true,

  googleAnalyticsId: '',

  mensagensWhatsApp: {
    geral: 'Olá! Vi o site tiagofarias.com.br e gostaria de conversar sobre um projeto.',
    site: `Olá! Vi o site tiagofarias.com.br e quero orçamento.

Para agilizar, já tenho:
• Tipo de negócio:
• O que preciso (site / landing / e-commerce / automação WhatsApp):
• Quantidade de produtos (se loja online):
• Tenho domínio? (sim/não)
• Prazo desejado:

Obrigado!`,
    drone: `Olá! Vi o site tiagofarias.com.br e quero orçamento de captação com drone.

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
    nota: 'Transparência: os modelos por segmento usam marcas fictícias. Os demais itens são projetos que desenvolvi por conta própria — não são cases de clientes pagantes.',
    grupoProjetos: {
      titulo: 'Desenvolvimento próprio',
      lead: 'Sites e aplicações que criei para mostrar minha stack — incluindo meu serviço de drone.',
    },
    grupoDemos: {
      titulo: 'Modelos por segmento',
      lead: 'Landing pages de referência. Ao contratar, o site sai com a marca, textos e fotos da sua empresa.',
    },
    badgeProjeto: 'Projeto próprio',
    badgeDemo: 'Modelo — personalizável',
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
      titulo: 'Pet shop',
      segmento: 'Serviços locais',
      url: 'https://tofariasti.github.io/amo-patas/site/',
      descricao: 'Banho, tosa e agendamento pelo WhatsApp.',
    },
    {
      titulo: 'Loja de móveis',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/atacadao-miranda-moveis/site/',
      descricao: 'Televendas, ofertas e localização da loja.',
    },
    {
      titulo: 'Bazar de utilidades',
      segmento: 'Comércio de bairro',
      url: 'https://tofariasti.github.io/bazar_do_alemao/site/',
      descricao: 'Ofertas, Instagram e horário de funcionamento.',
    },
    {
      titulo: 'Autopeças',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/dkautopecas/site/',
      descricao: 'Catálogo, Shopee e contato rápido.',
    },
    {
      titulo: 'Concessionária',
      segmento: 'Motos',
      url: 'https://tofariasti.github.io/performance-hyosung/site/',
      descricao: 'Modelos, financiamento e WhatsApp.',
    },
    {
      titulo: 'Oficina de radiadores',
      segmento: 'Serviços automotivos',
      url: 'https://tofariasti.github.io/radiadores-vitoria/site/',
      descricao: 'Serviços, orçamento e localização.',
    },
  ],

  processoWeb: [
    { passo: '1', titulo: 'Conversa rápida', texto: 'Você conta seu negócio e objetivo pelo WhatsApp — sem compromisso.' },
    { passo: '2', titulo: 'Proposta clara', texto: 'Envio escopo, prazo e investimento fechados, sem surpresas.' },
    { passo: '3', titulo: 'Desenvolvimento', texto: 'Montagem do site com foco em gerar contato e credibilidade.' },
    { passo: '4', titulo: 'Publicação', texto: 'Site no ar, com orientação para domínio e Google Meu Negócio.' },
  ],
};
