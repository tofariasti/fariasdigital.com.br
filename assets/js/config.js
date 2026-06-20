/**
 * Farias Digital — Hub comercial
 * Configuração central: WhatsApp, pacotes, demos e domínio
 */
const HUB_DOMINIO = 'https://fariasdigital.com.br';
const HUB_DOMINIO_HOST = 'fariasdigital.com.br';

const HubConfig = {
  nome: 'Tiago Farias',
  marca: 'Farias Digital',
  marcaLogo: '/assets/img/logo-full.svg',
  marcaLogoFull: '',
  marcaLogoIcon: '/assets/img/logo-icon.svg',
  marcaLogoAlt: 'Farias Digital',
  whatsappIcon: '/assets/img/whatsapp-icon.svg',
  nomeCompleto: 'Tiago O. de Farias',
  dominio: HUB_DOMINIO,
  dominioHost: HUB_DOMINIO_HOST,
  cidadeRegiao: 'Atendimento em todo o Brasil',
  empresaCnpj: '37.481.999/0001-48',
  empresaEndereco: 'Av. Baltazar de Oliveira Garcia, 2478',
  email: 'fariasdigitalnaweb@gmail.com',
  whatsappNumero: '5551991213724',
  whatsappExibicao: '(51) 99121-3724',
  mei: true,
  emiteNF: true,

  // Google Analytics 4 — mesma propriedade GA4 do ecossistema Farias Digital / TechDrone360
  googleAnalyticsId: 'G-P5H2B88DE0',

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
    linkedin: 'https://www.linkedin.com/in/tiago-farias1985',
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
    grupoDemos: {
      titulo: 'Landing pages por segmento',
      lead: 'Modelos prontos para você ver layout e responsividade. Ao contratar, personalizo com a identidade da sua empresa — a partir de R$ 300,00.',
    },
    badgeDemo: 'Pronto para personalizar',
  },

  demos: [
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

  comparativoInstagram: {
    eyebrow: 'Instagram não é estratégia',
    titulo: 'Por que sua empresa não pode depender só do Instagram',
    lead: 'O Instagram é importante. Mas se for sua única presença digital, você está perdendo clientes, dinheiro e controle sobre o seu negócio.',
    instagram: [
      { titulo: 'Não aparece no Google', texto: '97% das pessoas pesquisam no Google antes de comprar. Se você não tem site, não existe.' },
      { titulo: 'Você não é dono da audiência', texto: 'Instagram pode banir, mudar regras ou sumir. Seu trabalho de anos pode desaparecer em um clique.' },
      { titulo: 'Alcance orgânico despencou', texto: 'Menos de 10% dos seus seguidores veem seus posts. Instagram quer que você pague anúncios.' },
      { titulo: 'Link na bio não converte', texto: 'Cliente tem que clicar no perfil, depois na bio, depois escolher. Você perde venda no caminho.' },
      { titulo: 'Amadores têm o mesmo visual que você', texto: 'No Instagram, qualquer perfil parece igual. Não transmite autoridade nem diferencia sua marca.' },
      { titulo: 'Sem controle sobre vendas', texto: 'Não há carrinho, pagamento automatizado, relatório de vendas ou automação de pós-venda.' },
    ],
    site: [
      { titulo: 'Aparece no Google 24h por dia', texto: 'Clientes encontram você quando precisam. SEO traz visitas grátis, sem depender de algoritmo.' },
      { titulo: 'Você é dono do canal', texto: 'Seu domínio, seu conteúdo, sua lista de clientes. Ninguém pode tirar isso de você.' },
      { titulo: '100% do público vê seu conteúdo', texto: 'Não existe algoritmo cortando seu alcance. Quem acessa, vê tudo que você quer mostrar.' },
      { titulo: 'Leva direto para a conversão', texto: 'Botões de WhatsApp, formulários estratégicos e páginas que vendem. Menos cliques, mais venda.' },
      { titulo: 'Transmite profissionalismo e confiança', texto: 'Clientes levam mais a sério empresas com site. Design exclusivo posiciona você como referência.' },
      { titulo: 'Vende enquanto você dorme', texto: 'Catálogo online, checkout automático, cupons, relatórios, integração com ERP e pagamento.' },
    ],
    quote: {
      titulo: 'A verdade que ninguém te conta:',
      texto: '<strong>Instagram serve para engajamento.</strong> Site serve para <strong>vender</strong>. São complementares, não concorrentes. Empresas sérias têm os dois — mas o site é a base. É ali que o cliente decide contratar ou não.',
    },
    stats: [
      { valor: 81, sufixo: '%', texto: 'das pessoas pesquisam online antes de visitar uma empresa física', fonte: 'Google / Ipsos' },
      { valor: 75, sufixo: '%', texto: 'julgam a credibilidade de uma empresa pelo design do site', fonte: 'Stanford Web Credibility Research' },
      { valor: 70, sufixo: '%', texto: 'dos brasileiros usam o Google para encontrar produtos e serviços locais', fonte: 'Think with Google Brasil' },
      { valor: 93, sufixo: '%', texto: 'das experiências online começam com um mecanismo de busca', fonte: 'BrightEdge' },
    ],
    resumoLimite: 3,
    linkCompleto: '/por-que-site/',
  },

  intentItems: [
    {
      titulo: 'Presença no Google',
      descricao: 'Aparecer quando o cliente pesquisa seu serviço no Google.',
      href: '/#site-vs-instagram',
    },
    {
      titulo: 'Vender pelo WhatsApp',
      descricao: 'Formulários e botões que levam o visitante direto para conversa.',
      href: '/sites/#pacotes',
    },
    {
      titulo: 'Loja online',
      descricao: 'Catálogo de produtos com pedido ou orçamento pelo WhatsApp.',
      href: '/sites/#pacotes',
    },
    {
      titulo: 'Integrações & sistemas',
      descricao: 'APIs, pagamento online, ERP e automação avançada.',
      href: '/sites/#pacotes',
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
      href: '/portfolio/',
    },
    {
      id: 'institucional',
      titulo: 'Sites institucionais',
      descricao: 'Presença profissional com múltiplas seções, SEO e credibilidade.',
      preco: 'a partir de R$ 1.490',
      href: '/sites/#pacotes',
    },
    {
      id: 'ecommerce',
      titulo: 'E-commerce',
      descricao: 'Loja virtual, catálogo de produtos e pedidos pelo WhatsApp ou pagamento online.',
      preco: 'a partir de R$ 2.990',
      href: '/sites/#pacotes',
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
    lead: 'Antes de atender PMEs com a Farias Digital, atuei por mais de 10 anos em times corporativos — implementando APIs, integrações e módulos estratégicos dentro de projetos maiores, sempre em colaboração com outras áreas.',
    nota: 'Os marcos abaixo referem-se à minha atuação profissional em equipe. Não representam entrega solo do site ou sistema completo de cada empresa.',
    setores: ['Agronegócio', 'Saúde', 'Governo', 'Pagamentos', 'Logística', 'SaaS corporativo'],
    marcos: [
      { periodo: '2015–2017', titulo: 'Inmetro · Cronotacógrafo', texto: 'Contribuição no desenvolvimento de funcionalidades do sistema governamental de metrologia legal (PHP e Oracle), em equipe multidisciplinar.' },
      { periodo: '2018–2020', titulo: 'Ticket Log · Pagamentos', texto: 'Atuação em módulos críticos de frotas e meios de pagamento — manutenção evolutiva, regras de negócio e sustentação em produção.' },
      { periodo: '2020–2024', titulo: 'Stargrid · Healthtech', texto: 'Participação no backend da plataforma SaaS de escalas hospitalares — APIs Laravel, filas RabbitMQ e persistência híbrida.' },
      { periodo: '2024–atual', titulo: 'Yara Brasil · Agronegócio', texto: 'Implementação de API Laravel offline-first, pipelines de integração Salesforce e camada de observabilidade — alocado no time de produto.' },
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
    descriptionDefault: 'Sites, e-commerce, automação de WhatsApp e imagens aéreas com drone. MEI com Nota Fiscal.',
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
      'https://www.linkedin.com/in/tiago-farias1985',
      'https://github.com/tofariasti',
      'https://techdrone360.com.br',
      'https://www.instagram.com/techdrone360/',
      'https://www.youtube.com/@techdrone360',
    ],
    paginas: {
      home: {
        title: 'Farias Digital | Landing Pages e Sites Profissionais',
        description: 'Landing pages a partir de R$ 300, sites institucionais, e-commerce e automação WhatsApp. MEI · Nota Fiscal · Orçamento grátis.',
      },
      sites: {
        title: 'Landing Page e Criação de Sites | Farias Digital',
        description: 'Landing pages a partir de R$ 300 · Sites institucionais a partir de R$ 1.490. E-commerce, automação WhatsApp e SEO básico.',
      },
      drone: {
        title: 'Drone para Imóveis e Empresas | Farias Digital',
        description: 'Fotos e vídeos aéreos 4K com drone DJI para imóveis, Airbnb, obras e eventos. A partir de R$ 650. Nota Fiscal.',
      },
      sobre: {
        title: 'Sobre a Farias Digital | Tiago Farias — MEI',
        description: 'Tiago Farias — desenvolvedor web sênior e operador de drone certificado. 10+ anos em Laravel, APIs e integrações. MEI com emissão de Nota Fiscal.',
      },
      portfolio: {
        title: 'Portfólio de Sites e Landing Pages | Farias Digital',
        description: 'Exemplos de landing pages por segmento e projetos em produção. Personalização a partir de R$ 300.',
      },
      faq: {
        title: 'Perguntas Frequentes — Sites e Landing Pages | Farias Digital',
        description: 'Dúvidas sobre preços, prazos, SEO, domínio e hospedagem. Landing pages a partir de R$ 300.',
      },
      'por-que-site': {
        title: 'Por que ter site além do Instagram | Farias Digital',
        description: 'Comparativo Instagram vs site profissional — presença no Google, conversão no WhatsApp e credibilidade para PMEs.',
      },
    },
    faq: [
      {
        pergunta: 'Quanto custa um site profissional?',
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
