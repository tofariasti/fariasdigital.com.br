import { L } from '../i18n/types'
import { segmentLocalized } from './segmentsLocalized'


export const pricingLandingLocalized = {
  preco: L('a partir de R$ 300,00', 'from R$ 300', 'desde R$ 300'),
  precoCurto: L('R$ 300', 'R$ 300', 'R$ 300'),
  titulo: L('Landing pages personalizadas', 'Custom landing pages', 'Landing pages personalizadas'),
  lead: L(
    'Escolha o modelo do seu segmento — com ou sem painel para você atualizar sozinha.',
    'Pick a template for your industry — with or without a panel you can update yourself.',
    'Elija el modelo de su segmento — con o sin panel para actualizar usted mismo.',
  ),
}

export const pacotesWebLocalized = [
  {
    id: 'landing-page',
    nome: L('Landing Page', 'Landing Page', 'Landing Page'),
    preco: L('a partir de R$ 300', 'from R$ 300', 'desde R$ 300'),
    publico: L(
      'Negócios locais que querem presença rápida no Google',
      'Local businesses that want quick Google visibility',
      'Negocios locales que quieren presencia rápida en Google',
    ),
    inclui: [
      L('1 página focada em conversão (modelo do seu segmento)', '1 conversion-focused page (template for your industry)', '1 página enfocada en conversión (modelo de su segmento)'),
      L('Personalização com sua marca, textos e WhatsApp', 'Customization with your brand, copy and WhatsApp', 'Personalización con su marca, textos y WhatsApp'),
      L('Layout responsivo + SEO básico', 'Responsive layout + basic SEO', 'Layout responsivo + SEO básico'),
      L('1 rodada de ajustes após a entrega', '1 round of revisions after delivery', '1 ronda de ajustes tras la entrega'),
    ],
    naoInclui: L('Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)', 'Domain, hosting and professional photos (can be quoted separately)', 'Dominio, hosting y fotos profesionales (se pueden presupuestar aparte)'),
    mensagemWhatsApp: 'pacoteLanding',
    badge: L('Entrada', 'Starter', 'Entrada'),
    valorPercebido: L('Menos que 1 mês de anúncio no Instagram', 'Less than 1 month of Instagram ads', 'Menos que 1 mes de anuncio en Instagram'),
  },
  {
    id: 'landing-painel',
    nome: L('Landing + Painel', 'Landing + Panel', 'Landing + Panel'),
    preco: L('a partir de R$ 590', 'from R$ 590', 'desde R$ 590'),
    publico: L(
      'Quem quer autonomia para atualizar preços, textos e fotos — como no Instagram',
      'Those who want autonomy to update prices, copy and photos — like on Instagram',
      'Quien quiere autonomía para actualizar precios, textos y fotos — como en Instagram',
    ),
    inclui: [
      L('Tudo da Landing Page personalizada', 'Everything in the custom Landing Page', 'Todo de la Landing Page personalizada'),
      L('Painel simples no celular: textos, preços, fotos, horário e WhatsApp', 'Simple mobile panel: copy, prices, photos, hours and WhatsApp', 'Panel simple en el celular: textos, precios, fotos, horario y WhatsApp'),
      L('Você edita sozinha o que muda toda semana — sem chamar o desenvolvedor', 'You edit weekly changes yourself — without calling the developer', 'Usted edita sola lo que cambia cada semana — sin llamar al desarrollador'),
      L('Treinamento rápido na entrega + suporte humano quando precisar', 'Quick training at handoff + human support when needed', 'Capacitación rápida en la entrega + soporte humano cuando lo necesite'),
    ],
    naoInclui: L('Domínio e hospedagem (podem ser orçados à parte)', 'Domain and hosting (can be quoted separately)', 'Dominio y hosting (se pueden presupuestar aparte)'),
    mensagemWhatsApp: 'pacoteLandingAdmin',
    destaque: true,
    badge: L('Recomendado', 'Recommended', 'Recomendado'),
    valorPercebido: L('Autonomia de Instagram + site que vende no Google', 'Instagram-level autonomy + a website that sells on Google', 'Autonomía de Instagram + sitio que vende en Google'),
  },
  {
    id: 'site-institucional',
    nome: L('Site Institucional', 'Business Website', 'Sitio Institucional'),
    preco: L('a partir de R$ 1.490', 'from R$ 1,490', 'desde R$ 1.490'),
    valorPercebido: L('Presença profissional que vende por anos', 'Professional presence that sells for years', 'Presencia profesional que vende por años'),
    publico: L('Comércio local, clínicas, prestadores de serviço', 'Local retail, clinics, service providers', 'Comercio local, clínicas, prestadores de servicio'),
    inclui: [
      L('Site com múltiplas seções (serviços, sobre, contato, localização)', 'Website with multiple sections (services, about, contact, location)', 'Sitio con múltiples secciones (servicios, sobre, contacto, ubicación)'),
      L('Botão e formulário para WhatsApp com mensagem pronta', 'WhatsApp button and form with pre-filled message', 'Botón y formulario para WhatsApp con mensaje listo'),
      L('Layout responsivo (celular e computador)', 'Responsive layout (mobile and desktop)', 'Layout responsivo (celular y computador)'),
      L('SEO básico (título, descrição, Google)', 'Basic SEO (title, description, Google)', 'SEO básico (título, descripción, Google)'),
      L('1 rodada de ajustes após a entrega', '1 round of revisions after delivery', '1 ronda de ajustes tras la entrega'),
    ],
    naoInclui: L('Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)', 'Domain, hosting and professional photos (can be quoted separately)', 'Dominio, hosting y fotos profesionales (se pueden presupuestar aparte)'),
    mensagemWhatsApp: 'pacotePresenca',
  },
  {
    id: 'loja-essencial',
    nome: L('Loja Essencial', 'Essential Store', 'Tienda Esencial'),
    preco: L('a partir de R$ 2.990', 'from R$ 2,990', 'desde R$ 2.990'),
    valorPercebido: L('Catálogo online que vende 24h por dia', 'Online catalog that sells 24/7', 'Catálogo online que vende 24h al día'),
    publico: L('E-commerce e varejo local', 'E-commerce and local retail', 'E-commerce y retail local'),
    inclui: [
      L('Loja online / catálogo com até 50 produtos', 'Online store / catalog with up to 50 products', 'Tienda online / catálogo con hasta 50 productos'),
      L('Pedido e orçamento direto pelo WhatsApp', 'Orders and quotes directly via WhatsApp', 'Pedido y presupuesto directo por WhatsApp'),
      L('Páginas institucionais (sobre, contato, localização)', 'Institutional pages (about, contact, location)', 'Páginas institucionales (sobre, contacto, ubicación)'),
      L('Layout responsivo e SEO básico', 'Responsive layout and basic SEO', 'Layout responsivo y SEO básico'),
      L('1 rodada de ajustes após a entrega', '1 round of revisions after delivery', '1 ronda de ajustes tras la entrega'),
    ],
    naoInclui: L('Pagamento online integrado e ERP (sob consulta no pacote Sob medida)', 'Integrated online payment and ERP (available in Custom package)', 'Pago online integrado y ERP (bajo consulta en el paquete A medida)'),
    mensagemWhatsApp: 'pacoteLoja',
  },
  {
    id: 'sob-medida',
    nome: L('Sob medida', 'Custom', 'A medida'),
    preco: L('orçamento personalizado', 'custom quote', 'presupuesto personalizado'),
    valorPercebido: L('Solução exclusiva para escalar o negócio', 'Exclusive solution to scale your business', 'Solución exclusiva para escalar el negocio'),
    publico: L('E-commerce completo, automação e integrações', 'Full e-commerce, automation and integrations', 'E-commerce completo, automatización e integraciones'),
    inclui: [
      L('E-commerce com pagamento online (Mercado Pago, PagSeguro etc.)', 'E-commerce with online payment (Mercado Pago, PagSeguro, etc.)', 'E-commerce con pago online (Mercado Pago, PagSeguro, etc.)'),
      L('Automação de WhatsApp, formulários e fluxos de atendimento', 'WhatsApp automation, forms and support flows', 'Automatización de WhatsApp, formularios y flujos de atención'),
      L('Integrações (ERP, marketplaces, APIs)', 'Integrations (ERP, marketplaces, APIs)', 'Integraciones (ERP, marketplaces, APIs)'),
      L('Painel administrativo e manutenção contínua', 'Admin panel and ongoing maintenance', 'Panel administrativo y mantenimiento continuo'),
    ],
    naoInclui: null,
    mensagemWhatsApp: 'site',
  },
]

export const pacoteDroneLocalized = {
  nome: L('Drone Imóvel', 'Real Estate Drone', 'Dron Inmobiliario'),
  preco: L('a partir de R$ 650', 'from R$ 650', 'desde R$ 650'),
  publico: L('Imobiliárias, corretores e incorporadoras', 'Real estate agencies, brokers and developers', 'Inmobiliarias, corredores e incorporadoras'),
  inclui: [
    L('Fotos aéreas em alta resolução', 'High-resolution aerial photos', 'Fotos aéreas en alta resolución'),
    L('Vídeo editado (~45 segundos)', 'Edited video (~45 seconds)', 'Video editado (~45 segundos)'),
    L('Material pronto para anúncio e redes sociais', 'Material ready for ads and social media', 'Material listo para anuncio y redes sociales'),
    L('Planejamento de voo conforme legislação', 'Flight planning per regulations', 'Planificación de vuelo conforme legislación'),
    L('Nota fiscal', 'Official invoice', 'Factura oficial'),
  ],
  mensagemWhatsApp: 'pacoteDrone',
}

export const pacotesComputadorLocalized = [
  {
    id: 'manutencao',
    nome: L('Manutenção Preventiva', 'Preventive Maintenance', 'Mantenimiento Preventivo'),
    preco: L('a partir de R$ 80', 'from R$ 80', 'desde R$ 80'),
    publico: L('PC lento, aquecendo ou com poeira acumulada', 'Slow PC, overheating or dust buildup', 'PC lento, calentando o con polvo acumulado'),
    inclui: [
      L('Limpeza interna e troca de pasta térmica', 'Internal cleaning and thermal paste replacement', 'Limpieza interna y cambio de pasta térmica'),
      L('Otimização de inicialização e programas', 'Startup and program optimization', 'Optimización de inicio y programas'),
      L('Verificação de HD/SSD e memória RAM', 'HD/SSD and RAM check', 'Verificación de HD/SSD y memoria RAM'),
      L('Relatório do que foi feito', 'Report of work performed', 'Informe de lo realizado'),
    ],
    naoInclui: L('peças e licenças de software', 'parts and software licenses', 'piezas y licencias de software'),
    mensagemWhatsApp: 'pacoteManutencao',
  },
  {
    id: 'formatacao',
    nome: L('Formatação Completa', 'Full Format & Reinstall', 'Formateo Completo'),
    preco: L('a partir de R$ 120', 'from R$ 120', 'desde R$ 120'),
    badge: L('Mais pedido', 'Most requested', 'Más pedido'),
    destaque: true,
    publico: L('Windows lento, travando ou cheio de programas', 'Slow, freezing Windows or too many programs', 'Windows lento, colgando o lleno de programas'),
    inclui: [
      L('Formatação e instalação limpa do Windows', 'Clean Windows format and installation', 'Formateo e instalación limpia de Windows'),
      L('Drivers, atualizações e programas essenciais', 'Drivers, updates and essential programs', 'Drivers, actualizaciones y programas esenciales'),
      L('Orientação de backup antes do serviço', 'Backup guidance before service', 'Orientación de respaldo antes del servicio'),
      L('Testes de estabilidade antes da entrega', 'Stability tests before handoff', 'Pruebas de estabilidad antes de la entrega'),
    ],
    naoInclui: L('licença Windows (se necessário)', 'Windows license (if needed)', 'licencia Windows (si es necesaria)'),
    mensagemWhatsApp: 'pacoteFormatacao',
  },
  {
    id: 'completo',
    nome: L('Pacote Resgate', 'Rescue Package', 'Paquete Rescate'),
    preco: L('a partir de R$ 180', 'from R$ 180', 'desde R$ 180'),
    publico: L('Quem precisa formatar sem perder arquivos importantes', 'Those who need a format without losing important files', 'Quien necesita formatear sin perder archivos importantes'),
    inclui: [
      L('Backup dos arquivos importantes (documentos, fotos)', 'Backup of important files (documents, photos)', 'Respaldo de archivos importantes (documentos, fotos)'),
      L('Formatação completa + otimização', 'Full format + optimization', 'Formateo completo + optimización'),
      L('Instalação de programas que você usa no dia a dia', 'Installation of programs you use daily', 'Instalación de programas que usa a diario'),
      L('Configuração de impressora e Wi-Fi', 'Printer and Wi-Fi setup', 'Configuración de impresora y Wi-Fi'),
    ],
    naoInclui: null,
    mensagemWhatsApp: 'computador',
  },
]

export const processoComputadorLocalized = [
  {
    passo: '1',
    titulo: L('Você chama no WhatsApp', 'You message on WhatsApp', 'Usted escribe por WhatsApp'),
    texto: L('Descreva o problema (lentidão, vírus, tela azul). Respondo em até 24h com orientação inicial.', 'Describe the issue (slowness, virus, blue screen). I reply within 24h with initial guidance.', 'Describa el problema (lentitud, virus, pantalla azul). Respondo en hasta 24h con orientación inicial.'),
  },
  {
    passo: '2',
    titulo: L('Diagnóstico e orçamento', 'Diagnosis and quote', 'Diagnóstico y presupuesto'),
    texto: L('Combinamos o melhor serviço (manutenção, formatação ou pacote completo) com valor fechado — sem surpresas.', 'We pick the best service (maintenance, format or full package) with a fixed price — no surprises.', 'Definimos el mejor servicio (mantenimiento, formateo o paquete completo) con precio cerrado — sin sorpresas.'),
  },
  {
    passo: '3',
    titulo: L('Coleta ou atendimento', 'Pickup or on-site service', 'Recogida o atención'),
    texto: L('Atendo em Porto Alegre e região metropolitana. Também faço suporte remoto quando o caso permite.', 'I serve Porto Alegre and metro area. Remote support when the case allows.', 'Atiendo en Porto Alegre y región metropolitana. También soporte remoto cuando el caso lo permite.'),
  },
  {
    passo: '4',
    titulo: L('Entrega testada', 'Tested handoff', 'Entrega probada'),
    texto: L('Computador devolvido funcionando, com orientação do que foi feito e dicas para manter a performance.', 'Computer returned working, with a summary of work done and tips to keep performance.', 'Computadora devuelta funcionando, con resumen de lo hecho y consejos para mantener el rendimiento.'),
  },
]

export const faqComputadorLocalized = [
  {
    pergunta: L('Quanto tempo demora uma formatação?', 'How long does a format take?', '¿Cuánto demora un formateo?'),
    resposta: L(
      'Em média de 3 a 6 horas, dependendo do estado do equipamento e da quantidade de programas a instalar. Manutenção preventiva costuma levar 1 a 2 horas.',
      'On average 3 to 6 hours, depending on the machine state and programs to install. Preventive maintenance usually takes 1 to 2 hours.',
      'En promedio de 3 a 6 horas, según el estado del equipo y programas a instalar. El mantenimiento preventivo suele llevar 1 a 2 horas.',
    ),
  },
  {
    pergunta: L('Vou perder meus arquivos na formatação?', 'Will I lose my files when formatting?', '¿Perderé mis archivos al formatear?'),
    resposta: L(
      'Na formatação simples, sim — por isso oriento backup antes. No Pacote Resgate faço backup dos arquivos importantes (documentos, fotos) antes de formatar.',
      'With a simple format, yes — that is why I guide backup first. With the Rescue Package I back up important files (documents, photos) before formatting.',
      'En el formateo simple, sí — por eso oriento respaldo antes. En el Paquete Rescate hago respaldo de archivos importantes (documentos, fotos) antes de formatear.',
    ),
  },
  {
    pergunta: L('Você atende em domicílio?', 'Do you offer on-site service?', '¿Atiende a domicilio?'),
    resposta: L(
      'Sim, em Porto Alegre e região metropolitana (Canoas, Novo Hamburgo, Gravataí, entre outras). Também posso buscar e devolver o equipamento — combine pelo WhatsApp.',
      'Yes, in Porto Alegre and metro area (Canoas, Novo Hamburgo, Gravataí, among others). I can also pick up and return the machine — arrange via WhatsApp.',
      'Sí, en Porto Alegre y región metropolitana (Canoas, Novo Hamburgo, Gravataí, entre otras). También puedo buscar y devolver el equipo — coordinamos por WhatsApp.',
    ),
  },
  {
    pergunta: L('Qual versão do Windows você instala?', 'Which Windows version do you install?', '¿Qué versión de Windows instala?'),
    resposta: L(
      'Windows 10 ou 11 conforme o hardware suportar. Se precisar de licença oficial, oriento a compra — não incluo licença nos pacotes base.',
      'Windows 10 or 11 depending on hardware support. If you need an official license, I guide the purchase — license is not included in base packages.',
      'Windows 10 u 11 según lo que soporte el hardware. Si necesita licencia oficial, oriento la compra — la licencia no está incluida en los paquetes base.',
    ),
  },
  {
    pergunta: L('Emite nota fiscal?', 'Do you issue an official invoice?', '¿Emite factura oficial?'),
    resposta: L(
      'Sim. Sou MEI e emito Nota Fiscal para pessoa física e jurídica.',
      'Yes. I am a registered sole proprietor (MEI) and issue official invoices for individuals and companies.',
      'Sí. Soy MEI y emito factura oficial para persona física y jurídica.',
    ),
  },
]

export const portfolioLocalized = {
  titulo: L('Veja o que posso construir', 'See what I can build', 'Vea lo que puedo construir'),
  tituloHighlight: L('para o seu negócio', 'for your business', 'para su negocio'),
  lead: L(
    'Referências de layout, código e experiência no celular — para você avaliar a qualidade antes de pedir orçamento.',
    'Layout, code and mobile experience references — so you can assess quality before requesting a quote.',
    'Referencias de layout, código y experiencia en celular — para evaluar la calidad antes de pedir presupuesto.',
  ),
  grupoDemos: {
    titulo: L('Todos os modelos por segmento', 'All templates by industry', 'Todos los modelos por segmento'),
    lead: L(
      'Modelos prontos para avaliar layout e responsividade. Os com badge Landing + Admin incluem painel demo — é a prova do pacote Landing + Painel (a partir de R$ 590).',
      'Ready-made templates to preview layout and responsiveness. Those with the Landing + Admin badge include a demo panel — proof of the Landing + Panel package (from R$ 590).',
      'Modelos listos para evaluar layout y responsividad. Los con badge Landing + Admin incluyen panel demo — prueba del paquete Landing + Panel (desde R$ 590).',
    ),
  },
  grupoPainel: {
    titulo: L('Landing + Painel em ação', 'Landing + Panel in action', 'Landing + Panel en acción'),
    lead: L(
      'Abra o site e teste o painel no celular — preços, textos e fotos editáveis sem depender de desenvolvedor. É o que você leva no pacote a partir de R$ 590.',
      'Open the site and try the panel on your phone — editable prices, copy and photos without relying on a developer. That is what you get in the package from R$ 590.',
      'Abra el sitio y pruebe el panel en el celular — precios, textos y fotos editables sin depender del desarrollador. Es lo que incluye el paquete desde R$ 590.',
    ),
  },
  badgeDemo: L('Pronto para personalizar', 'Ready to customize', 'Listo para personalizar'),
}

export const demosLocalized = [
    {
      titulo: L(
        'Pet shop',
        'Pet shop',
        'Pet shop',
      ),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/amo-patas/',
      descricao: L(
        'Banho, tosa e agendamento pelo WhatsApp.',
        'Bath, grooming and booking via WhatsApp.',
        'Baño, tosa y agendamiento por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Loja de móveis',
        'Loja de móveis',
        'Loja de móveis',
      ),
      segmento: segmentLocalized.varejo,
      url: 'https://tofariasti.github.io/atacadao-miranda-moveis/',
      descricao: L(
        'Televendas, ofertas e localização da loja.',
        'Phone sales, deals and store location.',
        'Televentas, ofertas y ubicación de la tienda.',
      ),
    },
    {
      titulo: L(
        'Bazar de utilidades',
        'Bazar de utilidades',
        'Bazar de utilidades',
      ),
      segmento: segmentLocalized.varejo,
      url: 'https://tofariasti.github.io/bazar_do_alemao/',
      heroFeatured: true,
      descricao: L(
        'Ofertas, Instagram e horário de funcionamento.',
        'Deals, Instagram and opening hours.',
        'Ofertas, Instagram y horario de funcionamiento.',
      ),
    },
    {
      titulo: L(
        'Autopeças',
        'Autopeças',
        'Autopeças',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/dkautopecas/',
      descricao: L(
        'Catálogo, Shopee e contato rápido.',
        'Catalog, Shopee and quick contact.',
        'Catálogo, Shopee y contacto rápido.',
      ),
    },
    {
      titulo: L(
        'Oficina de motos',
        'Motorcycle workshop',
        'Taller de motos',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/performance-hyosung/',
      heroFeatured: true,
      descricao: L(
        'Revisão, performance e WhatsApp.',
        'Maintenance, performance and WhatsApp.',
        'Revisión, performance y WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Oficina de radiadores',
        'Oficina de radiadores',
        'Oficina de radiadores',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/radiadores-vitoria/',
      descricao: L(
        'Serviços, orçamento e localização.',
        'Services, quotes and location.',
        'Servicios, presupuesto y ubicación.',
      ),
    },
    {
      titulo: L(
        'Oficina Mecânica',
        'Oficina Mecânica',
        'Oficina Mecânica',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/oficinamecanica/',
      descricao: L(
        'Serviços automotivos especializados, agendamento online e orçamento via WhatsApp.',
        'Specialized auto services, online booking and quotes via WhatsApp.',
        'Servicios automotrices especializados, agendamiento online y presupuesto por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Locadora de Veículos',
        'Locadora de Veículos',
        'Locadora de Veículos',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/locadora-veiculos-landing/',
      descricao: L(
        'Frota premium, reserva estruturada via WhatsApp e planos diário/semanal/mensal.',
        'Premium fleet, structured booking via WhatsApp and daily/weekly/monthly plans.',
        'Flota premium, reserva estructurada por WhatsApp y planes diario/semanal/mensual.',
      ),
    },
    {
      titulo: L(
        'Locadora de Motor Home',
        'Locadora de Motor Home',
        'Locadora de Motor Home',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/aluguel-motorhome-landing/',
      descricao: L(
        'Frota de motor homes, planos flexíveis e reserva estruturada via WhatsApp para viagens pelo Brasil.',
        'Motor home fleet, flexible plans and structured WhatsApp booking for trips across Brazil.',
        'Flota de motor homes, planes flexibles y reserva estructurada por WhatsApp para viajes por Brasil.',
      ),
    },
    {
      titulo: L(
        'Picada Café — Turismo',
        'Picada Café — Turismo',
        'Picada Café — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-picada-cafe/',
      descricao: L(
        'Parque Jorge Kuhn, mirantes, festas coloniais e agendamento de visitas via WhatsApp na Serra Gaúcha.',
        'Jorge Kuhn Park, viewpoints, colonial festivals and visit booking via WhatsApp in Serra Gaúcha.',
        'Parque Jorge Kuhn, miradores, fiestas coloniales y agendamiento de visitas por WhatsApp en Serra Gaúcha.',
      ),
    },
    {
      titulo: L(
        'Canela — Turismo',
        'Canela — Turismo',
        'Canela — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-canela/',
      descricao: L(
        'Cascata do Caracol, Catedral de Pedra, Skyglass e Sonho de Natal — roteiro com formulário WhatsApp.',
        'Caracol Waterfall, Stone Cathedral, Skyglass and Christmas Dream — itinerary with WhatsApp form.',
        'Cascada del Caracol, Catedral de Piedra, Skyglass y Sueño de Navidad — itinerario con formulario WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Gramado — Turismo',
        'Gramado — Turismo',
        'Gramado — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-gramado/',
      descricao: L(
        'Natal Luz, Lago Negro, Mini Mundo e Rua Coberta — landing page animada para destinos serranos.',
        'Christmas Light, Black Lake, Mini World and Covered Street — animated landing for mountain destinations.',
        'Navidad Luz, Lago Negro, Mini Mundo y Calle Cubierta — landing animada para destinos serranos.',
      ),
    },
    {
      titulo: L(
        'Porto Alegre — Turismo',
        'Porto Alegre — Turismo',
        'Porto Alegre — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-porto-alegre/',
      descricao: L(
        'Orla do Guaíba, Mercado Público, Redenção e agenda cultural — turismo na capital gaúcha.',
        'Guaíba waterfront, Public Market, Redenção and cultural agenda — tourism in the state capital.',
        'Orilla del Guaíba, Mercado Público, Redenção y agenda cultural — turismo en la capital gaúcha.',
      ),
    },
    {
      titulo: L(
        'Passo Fundo — Turismo',
        'Passo Fundo — Turismo',
        'Passo Fundo — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-passo-fundo/',
      descricao: L(
        'Capital Nacional da Literatura, Parque da Gare, Roselândia e eventos culturais.',
        'National Capital of Literature, Gare Park, Roselândia and cultural events.',
        'Capital Nacional de la Literatura, Parque da Gare, Roselândia y eventos culturales.',
      ),
    },
    {
      titulo: L(
        'Ivoti — Turismo',
        'Ivoti — Turismo',
        'Ivoti — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-ivoti/',
      descricao: L(
        'Cidade das Flores: Núcleo Enxaimel, Ponte do Imperador, Feira das Flores e cultura alemã.',
        'City of Flowers: Enxaimel nucleus, Emperor Bridge, Flower Fair and German culture.',
        'Ciudad de las Flores: núcleo Enxaimel, Puente del Emperador, Feria de las Flores y cultura alemana.',
      ),
    },
    {
      titulo: L(
        'São Francisco de Paula — Turismo',
        'São Francisco de Paula — Turismo',
        'São Francisco de Paula — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-sao-francisco-de-paula/',
      descricao: L(
        'Lago São Bernardo, Mátria Parque de Flores, 8 Cachoeiras e ecoturismo nos Campos de Cima da Serra.',
        'São Bernardo Lake, Mátria Flower Park, 8 Waterfalls and ecotourism in Campos de Cima da Serra.',
        'Lago São Bernardo, Mátria Parque de Flores, 8 Cascadas y ecoturismo en Campos de Cima da Serra.',
      ),
    },
    {
      titulo: L(
        'Ametista do Sul — Turismo',
        'Ametista do Sul — Turismo',
        'Ametista do Sul — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-ametista-do-sul/',
      descricao: L(
        'Capital da ametista: minas, vinícolas subterrâneas, igreja de cristais e turismo geológico.',
        'Amethyst capital: mines, underground wineries, crystal church and geological tourism.',
        'Capital de la amatista: minas, bodegas subterráneas, iglesia de cristales y turismo geológico.',
      ),
    },
    {
      titulo: L(
        'Salto do Yucumã — Turismo',
        'Salto do Yucumã — Turismo',
        'Salto do Yucumã — Turismo',
      ),
      segmento: segmentLocalized.turismo,
      url: 'https://tofariasti.github.io/turismo-salto-do-yucuma/',
      descricao: L(
        'Maior queda longitudinal do mundo no Parque do Turvo — natureza na divisa com a Argentina.',
        'World\'s largest longitudinal drop at Turvo Park — nature on the border with Argentina.',
        'Mayor caída longitudinal del mundo en el Parque del Turvo — naturaleza en la frontera con Argentina.',
      ),
    },
    {
      titulo: L(
        'Estética Automotiva',
        'Estética Automotiva',
        'Estética Automotiva',
      ),
      segmento: segmentLocalized.automotivo,
      url: 'https://tofariasti.github.io/landing-estetica-automotiva/',
      descricao: L(
        'Detailing premium, polimento, vitrificação e galeria antes/depois com agendamento via WhatsApp.',
        'Premium detailing, polishing, coating and before/after gallery with WhatsApp booking.',
        'Detailing premium, pulido, vitrificación y galería antes/después con agendamiento por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Montador de Móveis',
        'Montador de Móveis',
        'Montador de Móveis',
      ),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/montadormoveis/',
      descricao: L(
        'Montagem profissional, orçamento via WhatsApp e galeria de trabalhos realizados.',
        'Professional assembly, quotes via WhatsApp and gallery of completed work.',
        'Montaje profesional, presupuesto por WhatsApp y galería de trabajos realizados.',
      ),
    },
    {
      titulo: L(
        'Escritório de Advocacia',
        'Escritório de Advocacia',
        'Escritório de Advocacia',
      ),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/advogado-landing-page/',
      descricao: L(
        'Áreas de atuação, consulta online e WhatsApp.',
        'Practice areas, online consultation and WhatsApp.',
        'Áreas de actuación, consulta online y WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Consultório Odontológico',
        'Consultório Odontológico',
        'Consultório Odontológico',
      ),
      segmento: segmentLocalized.saude,
      url: 'https://tofariasti.github.io/landing-dentista/',
      heroFeatured: true,
      descricao: L(
        'Serviços, depoimentos, antes/depois e agendamento pelo WhatsApp.',
        'Services, testimonials, before/after and booking via WhatsApp.',
        'Servicios, testimonios, antes/después y agendamiento por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Farmácia Vida & Saúde',
        'Farmácia Vida & Saúde',
        'Farmácia Vida & Saúde',
      ),
      segmento: segmentLocalized.saude,
      url: 'https://tofariasti.github.io/landing-farmacia/',
      heroFeatured: true,
      descricao: L(
        'Landing page para farmácia com delivery, manipulação e agendamento via WhatsApp.',
        'Pharmacy landing page with delivery, compounding and booking via WhatsApp.',
        'Landing page para farmacia con delivery, manipulación y agendamiento por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'PDV Pro — Sistema de Ponto de Venda',
        'PDV Pro — Sistema de Ponto de Venda',
        'PDV Pro — Sistema de Ponto de Venda',
      ),
      segmento: segmentLocalized.varejo,
      url: 'https://tofariasti.github.io/landing-pdv/',
      descricao: L(
        'Sistema PDV para varejo com caixa rápido, estoque integrado, NFC-e e agendamento de demo via WhatsApp.',
        'POS system for retail with fast checkout, integrated inventory, NFC-e and demo booking via WhatsApp.',
        'Sistema PDV para retail con caja rápida, stock integrado, NFC-e y agendamiento de demo por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Psicóloga',
        'Psicóloga',
        'Psicóloga',
      ),
      segmento: segmentLocalized.saude,
      url: 'https://tofariasti.github.io/landing-page-psicologa/',
      descricao: L(
        'Design moderno com gradientes suaves, terapias, especialidades, depoimentos e formulário WhatsApp integrado.',
        'Modern design with soft gradients, therapies, specialties, testimonials and integrated WhatsApp form.',
        'Diseño moderno con gradientes suaves, terapias, especialidades, testimonios y formulario WhatsApp integrado.',
      ),
    },
    {
      titulo: L('Nutricionista', 'Nutricionista', 'Nutricionista'),
      segmento: segmentLocalized.saude,
      url: 'https://tofariasti.github.io/landing-nutricionista/',
      heroFeatured: true,
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Landing page de conversão (IMC, WhatsApp, depoimentos) + painel administrativo demo para pacientes e planos alimentares — sem backend.',
        'Conversion landing (BMI, WhatsApp, testimonials) + demo admin panel for patients and meal plans — no backend.',
        'Landing de conversión (IMC, WhatsApp, testimonios) + panel administrativo demo para pacientes y planes alimentarios — sin backend.',
      ),
    },
    {
      titulo: L('Luna Valente — Astrologia', 'Luna Valente — Astrology', 'Luna Valente — Astrología'),
      segmento: segmentLocalized.astrologia,
      url: 'https://tofariasti.github.io/landing-astrologo/',
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Landing de conversão (SignFinder, WhatsApp) + painel demo para clientes, consultas e serviços astrológicos — sem backend.',
        'Conversion landing (SignFinder, WhatsApp) + demo panel for clients, sessions and astrology services — no backend.',
        'Landing de conversión (SignFinder, WhatsApp) + panel demo para clientes, consultas y servicios astrológicos — sin backend.',
      ),
    },
    {
      titulo: L('Cosmos Diário — Horóscopo', 'Cosmos Diário — Horoscope', 'Cosmos Diário — Horóscopo'),
      segmento: segmentLocalized.astrologia,
      url: 'https://tofariasti.github.io/landing-horoscopo/',
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Portal editorial (HoroscopePicker diário, WhatsApp) + painel demo para edições e leituras por signo — sem backend.',
        'Editorial portal (daily HoroscopePicker, WhatsApp) + demo panel for editions and per-sign readings — no backend.',
        'Portal editorial (HoroscopePicker diario, WhatsApp) + panel demo para ediciones y lecturas por signo — sin backend.',
      ),
    },
    {
      titulo: L('Céu & Números — Numerologia', 'Céu & Números — Numerology', 'Céu & Números — Numerología'),
      segmento: segmentLocalized.astrologia,
      url: 'https://tofariasti.github.io/landing-numerologia/',
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Landing de conversão (caminho de vida, WhatsApp) + painel demo para clientes, relatórios e serviços — sem backend.',
        'Conversion landing (life path calculator, WhatsApp) + demo panel for clients, reports and services — no backend.',
        'Landing de conversión (camino de vida, WhatsApp) + panel demo para clientes, informes y servicios — sin backend.',
      ),
    },
    {
      titulo: L('Bubble Wash Lavanderia', 'Bubble Wash Lavanderia', 'Bubble Wash Lavanderia'),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/landing-lavanderia/',
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Landing de conversão (simulador de orçamento, coleta & entrega, WhatsApp) + painel demo para clientes, pedidos e tabela de serviços — sem backend.',
        'Conversion landing (price calculator, pickup & delivery, WhatsApp) + demo panel for customers, orders and service pricing — no backend.',
        'Landing de conversión (simulador de presupuesto, recogida y entrega, WhatsApp) + panel demo para clientes, pedidos y tabla de servicios — sin backend.',
      ),
    },
    {
      titulo: L('Ótica Visão Clara', 'Ótica Visão Clara', 'Ótica Visão Clara'),
      segmento: segmentLocalized.saude,
      url: 'https://tofariasti.github.io/landing-otica/',
      badge: L('Landing + Admin', 'Landing + Admin', 'Landing + Admin'),
      descricao: L(
        'Landing de conversão (quiz de rosto, marcas, WhatsApp) + painel demo para clientes, pedidos/receitas e catálogo de armações — sem backend.',
        'Conversion landing (face quiz, brands, WhatsApp) + demo panel for clients, orders/prescriptions and frame catalog — no backend.',
        'Landing de conversión (quiz de rostro, marcas, WhatsApp) + panel demo para clientes, pedidos/recetas y catálogo de armazones — sin backend.',
      ),
    },
    {
      titulo: L(
        'Imobiliária',
        'Imobiliária',
        'Imobiliária',
      ),
      segmento: segmentLocalized.imoveis,
      url: 'https://tofariasti.github.io/landing-imobiliaria/',
      descricao: L(
        'Busca de imóveis, filtros, tour virtual e agendamento de visitas via WhatsApp.',
        'Property search, filters, virtual tour and visit booking via WhatsApp.',
        'Búsqueda de inmuebles, filtros, tour virtual y agendamiento de visitas por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Classificados',
        'Classificados',
        'Classificados',
      ),
      segmento: segmentLocalized.imoveis,
      url: 'https://tofariasti.github.io/landing-classificados/',
      heroFeatured: true,
      descricao: L(
        'Portal de classificados com anúncios por categoria, destaques e contato via WhatsApp.',
        'Classifieds portal with ads by category, featured listings and contact via WhatsApp.',
        'Portal de clasificados con anuncios por categoría, destacados y contacto por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'ShopStyle E-commerce',
        'ShopStyle E-commerce',
        'ShopStyle E-commerce',
      ),
      segmento: segmentLocalized.ecommerce,
      url: 'https://tofariasti.github.io/ecommerce/',
      heroFeatured: true,
      descricao: L(
        'Loja virtual completa com produtos, categorias, ofertas, depoimentos e pedidos via WhatsApp.',
        'Full online store with products, categories, deals, testimonials and orders via WhatsApp.',
        'Tienda virtual completa con productos, categorías, ofertas, testimonios y pedidos por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Catálogo Digital',
        'Catálogo Digital',
        'Catálogo Digital',
      ),
      segmento: segmentLocalized.ecommerce,
      url: 'https://tofariasti.github.io/catalogo-digital/',
      heroFeatured: true,
      descricao: L(
        'Catálogo de produtos premium com filtros por categoria, animações suaves e integração WhatsApp.',
        'Premium product catalog with category filters, smooth animations and WhatsApp integration.',
        'Catálogo de productos premium con filtros por categoría, animaciones suaves e integración WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Cardápio Digital',
        'Cardápio Digital',
        'Cardápio Digital',
      ),
      segmento: segmentLocalized.gastronomia,
      url: 'https://tofariasti.github.io/cardapio-digital/',
      heroFeatured: true,
      descricao: L(
        'Menu interativo com filtros por categoria, galeria de pratos e pedidos/reservas via WhatsApp.',
        'Interactive menu with category filters, dish gallery and orders/reservations via WhatsApp.',
        'Menú interactivo con filtros por categoría, galería de platos y pedidos/reservas por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Doce Encanto',
        'Doce Encanto',
        'Doce Encanto',
      ),
      segmento: segmentLocalized.gastronomia,
      url: 'https://tofariasti.github.io/lojadoces-landing/',
      descricao: L(
        'Loja de doces artesanais com catálogo, depoimentos, animações premium e pedidos via WhatsApp.',
        'Artisan candy shop with catalog, testimonials, premium animations and orders via WhatsApp.',
        'Tienda de dulces artesanales con catálogo, testimonios, animaciones premium y pedidos por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Marido de Aluguel',
        'Marido de Aluguel',
        'Marido de Aluguel',
      ),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/marido-aluguel/',
      descricao: L(
        'Reparos, instalações e manutenção residencial com formulário WhatsApp para agendamento.',
        'Repairs, installations and home maintenance with WhatsApp form for booking.',
        'Reparaciones, instalaciones y mantenimiento residencial con formulario WhatsApp para agendamiento.',
      ),
    },
    {
      titulo: L(
        'Super Bom Preço',
        'Super Bom Preço',
        'Super Bom Preço',
      ),
      segmento: segmentLocalized.varejo,
      url: 'https://tofariasti.github.io/supermercado-landing/',
      heroFeatured: true,
      descricao: L(
        'Ofertas da semana, departamentos, entrega agendada ou retirada na loja via WhatsApp.',
        'Weekly deals, departments, scheduled delivery or in-store pickup via WhatsApp.',
        'Ofertas de la semana, departamentos, entrega programada o retiro en tienda por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Barbearia',
        'Barbearia',
        'Barbearia',
      ),
      segmento: segmentLocalized.servicos,
      url: 'https://tofariasti.github.io/landing-barbearia/',
      heroFeatured: true,
      descricao: L(
        'Cortes premium, barba, galeria de trabalhos e agendamento estruturado via WhatsApp.',
        'Premium cuts, beard, work gallery and structured booking via WhatsApp.',
        'Cortes premium, barba, galería de trabajos y agendamiento estructurado por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Igreja Nova Vida',
        'Igreja Nova Vida',
        'Igreja Nova Vida',
      ),
      segmento: segmentLocalized.institucional,
      url: 'https://tofariasti.github.io/landing-igreja/',
      descricao: L(
        'Programação de cultos, ministérios, depoimentos e agendamento de visita via WhatsApp.',
        'Service schedule, ministries, testimonials and visit booking via WhatsApp.',
        'Programación de cultos, ministerios, testimonios y agendamiento de visita por WhatsApp.',
      ),
    },
    {
      titulo: L(
        'Academia de Artes Marciais',
        'Academia de Artes Marciais',
        'Academia de Artes Marciais',
      ),
      segmento: segmentLocalized.esporte,
      url: 'https://tofariasti.github.io/landing-lutas/',
      heroFeatured: true,
      descricao: L(
        'Modalidades, planos, professores e agendamento de aula experimental via WhatsApp.',
        'Disciplines, plans, instructors and trial class booking via WhatsApp.',
        'Modalidades, planes, profesores y agendamiento de clase experimental por WhatsApp.',
      ),
    }
]

export const proofBarLocalized = [
  { valor: 10, sufixo: '+', label: L('Anos em sistemas web corporativos', 'Years in corporate web systems', 'Años en sistemas web corporativos'), icon: '◆' },
  { valor: 40, sufixo: '+', label: L('Modelos por segmento disponíveis', 'Templates by industry available', 'Modelos por segmento disponibles'), icon: '◆' },
  { valor: 100, sufixo: '%', label: L('Atendimento direto com o desenvolvedor', 'Direct contact with the developer', 'Atención directa con el desarrollador'), icon: '◆' },
]

export const comparativoInstagramLocalized = {
  eyebrow: L('Instagram não é estratégia', 'Instagram is not a strategy', 'Instagram no es estrategia'),
  titulo: L(
    'Por que sua empresa não pode depender só do Instagram',
    'Why your business cannot rely on Instagram alone',
    'Por qué su empresa no puede depender solo de Instagram',
  ),
  lead: L(
    'O Instagram é importante. Mas se for sua única presença digital, você está perdendo clientes, dinheiro e controle sobre o seu negócio.',
    'Instagram matters. But if it is your only digital presence, you are losing customers, money and control over your business.',
    'Instagram es importante. Pero si es su única presencia digital, está perdiendo clientes, dinero y control sobre su negocio.',
  ),
  instagram: [
    { titulo: L('Publica e edita sozinho', 'Publish and edit on your own', 'Publica y edita solo'), texto: L('Foto, legenda e story em minutos — direto do celular, sem depender de ninguém. Essa facilidade é real e vale muito.', 'Photo, caption and story in minutes — straight from your phone, no one else needed. That ease is real and valuable.', 'Foto, leyenda e story en minutos — directo del celular, sin depender de nadie. Esa facilidad es real y vale mucho.') },
    { titulo: L('Não aparece no Google', 'Does not appear on Google', 'No aparece en Google'), texto: L('97% das pessoas pesquisam no Google antes de comprar. Se você não tem site, não existe.', '97% of people search on Google before buying. Without a website, you do not exist.', '97% de las personas buscan en Google antes de comprar. Sin sitio web, no existe.') },
    { titulo: L('Você não é dono da audiência', 'You do not own the audience', 'No es dueño de la audiencia'), texto: L('Instagram pode banir, mudar regras ou sumir. Seu trabalho de anos pode desaparecer em um clique.', 'Instagram can ban, change rules or disappear. Years of work can vanish in one click.', 'Instagram puede banear, cambiar reglas o desaparecer. Años de trabajo pueden desaparecer en un clic.') },
    { titulo: L('Alcance orgânico despencou', 'Organic reach has plummeted', 'El alcance orgánico cayó'), texto: L('Menos de 10% dos seus seguidores veem seus posts. Instagram quer que você pague anúncios.', 'Less than 10% of followers see your posts. Instagram wants you to pay for ads.', 'Menos del 10% de sus seguidores ven sus publicaciones. Instagram quiere que pague anuncios.') },
    { titulo: L('Link na bio não converte', 'Link in bio does not convert', 'El enlace en la bio no convierte'), texto: L('Cliente tem que clicar no perfil, depois na bio, depois escolher. Você perde venda no caminho.', 'Customers must click profile, then bio, then choose. You lose sales along the way.', 'El cliente debe clicar perfil, luego bio, luego elegir. Pierde ventas en el camino.') },
    { titulo: L('Amadores têm o mesmo visual que você', 'Amateurs look the same as you', 'Los aficionados se ven igual que usted'), texto: L('No Instagram, qualquer perfil parece igual. Não transmite autoridade nem diferencia sua marca.', 'On Instagram, every profile looks the same. It does not convey authority or differentiate your brand.', 'En Instagram, cualquier perfil parece igual. No transmite autoridad ni diferencia su marca.') },
    { titulo: L('Sem controle sobre vendas', 'No control over sales', 'Sin control sobre ventas'), texto: L('Não há carrinho, pagamento automatizado, relatório de vendas ou automação de pós-venda.', 'No cart, automated payment, sales reports or post-sale automation.', 'No hay carrito, pago automatizado, informes de ventas ni automatización postventa.') },
  ],
  site: [
    { titulo: L('Aparece no Google 24h por dia', 'Visible on Google 24/7', 'Aparece en Google 24h al día'), texto: L('Clientes encontram você quando precisam. SEO traz visitas grátis, sem depender de algoritmo.', 'Customers find you when they need you. SEO brings free visits without relying on algorithms.', 'Los clientes lo encuentran cuando lo necesitan. SEO trae visitas gratis, sin depender del algoritmo.') },
    { titulo: L('Você atualiza sem depender de dev', 'You update without relying on a dev', 'Usted actualiza sin depender del dev'), texto: L('Com o pacote Landing + Painel, muda preços, textos e fotos do celular — a autonomia do Instagram aplicada ao que vende.', 'With the Landing + Panel package, change prices, copy and photos from your phone — Instagram-level autonomy for what actually sells.', 'Con el paquete Landing + Panel, cambia precios, textos y fotos desde el celular — la autonomía de Instagram aplicada a lo que vende.') },
    { titulo: L('Você é dono do canal', 'You own the channel', 'Es dueño del canal'), texto: L('Seu domínio, seu conteúdo, sua lista de clientes. Ninguém pode tirar isso de você.', 'Your domain, your content, your customer list. No one can take that away.', 'Su dominio, su contenido, su lista de clientes. Nadie puede quitárselo.') },
    { titulo: L('100% do público vê seu conteúdo', '100% of visitors see your content', '100% del público ve su contenido'), texto: L('Não existe algoritmo cortando seu alcance. Quem acessa, vê tudo que você quer mostrar.', 'No algorithm cutting your reach. Visitors see everything you want to show.', 'No hay algoritmo cortando su alcance. Quien accede, ve todo lo que quiere mostrar.') },
    { titulo: L('Leva direto para a conversão', 'Leads straight to conversion', 'Lleva directo a la conversión'), texto: L('Botões de WhatsApp, formulários estratégicos e páginas que vendem. Menos cliques, mais venda.', 'WhatsApp buttons, strategic forms and pages that sell. Fewer clicks, more sales.', 'Botones de WhatsApp, formularios estratégicos y páginas que venden. Menos clics, más venta.') },
    { titulo: L('Transmite profissionalismo e confiança', 'Conveys professionalism and trust', 'Transmite profesionalismo y confianza'), texto: L('Clientes levam mais a sério empresas com site. Design exclusivo posiciona você como referência.', 'Customers take businesses with a website more seriously. Exclusive design positions you as a reference.', 'Los clientes toman más en serio las empresas con sitio web. Diseño exclusivo lo posiciona como referencia.') },
    { titulo: L('Vende enquanto você dorme', 'Sells while you sleep', 'Vende mientras duerme'), texto: L('Catálogo online, checkout automático, cupons, relatórios, integração com ERP e pagamento.', 'Online catalog, automatic checkout, coupons, reports, ERP and payment integration.', 'Catálogo online, checkout automático, cupones, informes, integración con ERP y pago.') },
  ],
  quote: {
    titulo: L('A verdade que ninguém te conta:', 'The truth no one tells you:', 'La verdad que nadie le cuenta:'),
    texto: L(
      '<strong>Instagram é onde você publica rápido.</strong> Site é onde o cliente <strong>decide contratar</strong> — e com o painel, você atualiza preços e textos com a mesma liberdade. Os dois juntos, não um no lugar do outro.',
      '<strong>Instagram is where you post fast.</strong> Your website is where customers <strong>decide to hire you</strong> — and with the panel, you update prices and copy with the same freedom. Use both, not one instead of the other.',
      '<strong>Instagram es donde publica rápido.</strong> El sitio es donde el cliente <strong>decide contratar</strong> — y con el panel, actualiza precios y textos con la misma libertad. Los dos juntos, no uno en lugar del otro.',
    ),
  },
  stats: [
    { valor: 81, sufixo: '%', texto: L('das pessoas pesquisam online antes de visitar uma empresa física', 'of people search online before visiting a physical business', 'de las personas buscan online antes de visitar una empresa física'), fonte: L('Google / Ipsos', 'Google / Ipsos', 'Google / Ipsos') },
    { valor: 75, sufixo: '%', texto: L('julgam a credibilidade de uma empresa pelo design do site', 'judge a company\'s credibility by website design', 'juzgan la credibilidad de una empresa por el diseño del sitio'), fonte: L('Stanford Web Credibility Research', 'Stanford Web Credibility Research', 'Stanford Web Credibility Research') },
    { valor: 70, sufixo: '%', texto: L('dos brasileiros usam o Google para encontrar produtos e serviços locais', 'of Brazilians use Google to find local products and services', 'de los brasileños usan Google para encontrar productos y servicios locales'), fonte: L('Think with Google Brasil', 'Think with Google Brazil', 'Think with Google Brasil') },
    { valor: 93, sufixo: '%', texto: L('das experiências online começam com um mecanismo de busca', 'of online experiences start with a search engine', 'de las experiencias online comienzan con un buscador'), fonte: L('BrightEdge', 'BrightEdge', 'BrightEdge') },
  ],
  resumoLimite: 3,
  linkCompleto: '/por-que-site/',
}

export const intentItemsLocalized = [
  { titulo: L('Atualizar sozinha', 'Update on your own', 'Actualizar sola'), descricao: L('Painel simples para mudar preços, textos e fotos — sem depender do desenvolvedor.', 'Simple panel to change prices, copy and photos — without relying on the developer.', 'Panel simple para cambiar precios, textos y fotos — sin depender del desarrollador.'), href: '/pacotes/#pacotes' },
  { titulo: L('Presença no Google', 'Google visibility', 'Presencia en Google'), descricao: L('Aparecer quando o cliente pesquisa seu serviço no Google.', 'Show up when customers search for your service on Google.', 'Aparecer cuando el cliente busca su servicio en Google.'), href: '/#site-vs-instagram' },
  { titulo: L('Vender pelo WhatsApp', 'Sell via WhatsApp', 'Vender por WhatsApp'), descricao: L('Formulários e botões que levam o visitante direto para conversa.', 'Forms and buttons that take visitors straight to a conversation.', 'Formularios y botones que llevan al visitante directo a la conversación.'), href: '/pacotes/#pacotes' },
  { titulo: L('Loja online', 'Online store', 'Tienda online'), descricao: L('Catálogo de produtos com pedido ou orçamento pelo WhatsApp.', 'Product catalog with orders or quotes via WhatsApp.', 'Catálogo de productos con pedido o presupuesto por WhatsApp.'), href: '/pacotes/#pacotes' },
  { titulo: L('Integrações & sistemas', 'Integrations & systems', 'Integraciones y sistemas'), descricao: L('APIs, pagamento online, ERP e automação avançada.', 'APIs, online payment, ERP and advanced automation.', 'APIs, pago online, ERP y automatización avanzada.'), href: '/pacotes/#pacotes' },
  { titulo: L('Drone 4K', '4K Drone', 'Dron 4K'), descricao: L('Fotos e vídeos aéreos para imóveis, obras e empresas.', 'Aerial photos and videos for real estate, construction and businesses.', 'Fotos y videos aéreos para inmuebles, obras y empresas.'), href: 'https://techdrone360.com.br/', externo: true },
]

export const servicosLocalized = [
  { id: 'landing-painel', titulo: L('Landing + Painel', 'Landing + Panel', 'Landing + Panel'), descricao: L('Site que você mesma atualiza — preços, textos e fotos direto do celular.', 'A website you update yourself — prices, copy and photos from your phone.', 'Sitio que usted misma actualiza — precios, textos y fotos directo del celular.'), preco: L('a partir de R$ 590', 'from R$ 590', 'desde R$ 590'), href: '/pacotes/#pacotes' },
  { id: 'landing', titulo: L('Landing Pages', 'Landing Pages', 'Landing Pages'), descricao: L('Páginas estratégicas para captar leads e vender mais pelo WhatsApp.', 'Strategic pages to capture leads and sell more via WhatsApp.', 'Páginas estratégicas para captar leads y vender más por WhatsApp.'), preco: L('a partir de R$ 300', 'from R$ 300', 'desde R$ 300'), href: '/portfolio/' },
  { id: 'institucional', titulo: L('Sites institucionais', 'Business websites', 'Sitios institucionales'), descricao: L('Presença profissional com múltiplas seções, SEO e credibilidade.', 'Professional presence with multiple sections, SEO and credibility.', 'Presencia profesional con múltiples secciones, SEO y credibilidad.'), preco: L('a partir de R$ 1.490', 'from R$ 1,490', 'desde R$ 1.490'), href: '/pacotes/#pacotes' },
  { id: 'ecommerce', titulo: L('E-commerce', 'E-commerce', 'E-commerce'), descricao: L('Loja virtual, catálogo de produtos e pedidos pelo WhatsApp ou pagamento online.', 'Online store, product catalog and orders via WhatsApp or online payment.', 'Tienda virtual, catálogo de productos y pedidos por WhatsApp o pago online.'), preco: L('a partir de R$ 2.990', 'from R$ 2,990', 'desde R$ 2.990'), href: '/pacotes/#pacotes' },
  { id: 'whatsapp', titulo: L('Automação WhatsApp', 'WhatsApp automation', 'Automatización WhatsApp'), descricao: L('Formulários inteligentes, mensagens prontas e fluxos que agilizam o atendimento.', 'Smart forms, ready messages and flows that speed up support.', 'Formularios inteligentes, mensajes listos y flujos que agilizan la atención.'), preco: L('sob medida', 'custom', 'a medida'), wa: 'pacoteAutomacao' },
  { id: 'integracoes', titulo: L('Integrações & APIs', 'Integrations & APIs', 'Integraciones y APIs'), descricao: L('Pagamento online, ERP, marketplaces e sistemas Laravel sob medida.', 'Online payment, ERP, marketplaces and custom Laravel systems.', 'Pago online, ERP, marketplaces y sistemas Laravel a medida.'), preco: L('sob medida', 'custom', 'a medida'), wa: 'site' },
  { id: 'drone', titulo: L('Imagens aéreas', 'Aerial imagery', 'Imágenes aéreas'), descricao: L('Fotos e vídeos com drone para imóveis, obras e empresas.', 'Drone photos and videos for real estate, construction and businesses.', 'Fotos y videos con dron para inmuebles, obras y empresas.'), preco: L('a partir de R$ 650', 'from R$ 650', 'desde R$ 650'), href: 'https://techdrone360.com.br/', externo: true },
  { id: 'computadores', titulo: L('Manutenção de PC', 'PC maintenance', 'Mantenimiento de PC'), descricao: L('Formatação, limpeza, remoção de vírus e upgrade SSD/RAM.', 'Format, cleaning, virus removal and SSD/RAM upgrade.', 'Formateo, limpieza, eliminación de virus y upgrade SSD/RAM.'), preco: L('a partir de R$ 80', 'from R$ 80', 'desde R$ 80'), href: '/computadores/' },
]

export const credibilidadeLocalized = {
  titulo: L('Mais que sites bonitos', 'More than pretty websites', 'Más que sitios bonitos'),
  lead: L(
    'Antes de atender PMEs com a Farias Digital, atuei por mais de 10 anos em times corporativos — implementando APIs, integrações e módulos estratégicos dentro de projetos maiores, sempre em colaboração com outras áreas.',
    'Before serving SMBs with Farias Digital, I spent 10+ years on corporate teams — implementing APIs, integrations and strategic modules within larger projects, always collaborating with other areas.',
    'Antes de atender PYMES con Farias Digital, actué más de 10 años en equipos corporativos — implementando APIs, integraciones y módulos estratégicos en proyectos mayores, siempre en colaboración con otras áreas.',
  ),
  nota: L(
    'Os marcos abaixo referem-se à minha atuação profissional em equipe. Não representam entrega solo do site ou sistema completo de cada empresa.',
    'The milestones below refer to my professional work on teams. They do not represent solo delivery of each company\'s full website or system.',
    'Los hitos abajo se refieren a mi actuación profesional en equipo. No representan entrega en solitario del sitio o sistema completo de cada empresa.',
  ),
  setores: [
    L('Agronegócio', 'Agribusiness', 'Agronegocio'),
    L('Saúde', 'Healthcare', 'Salud'),
    L('Governo', 'Government', 'Gobierno'),
    L('Pagamentos', 'Payments', 'Pagos'),
    L('Logística', 'Logistics', 'Logística'),
    L('SaaS corporativo', 'Corporate SaaS', 'SaaS corporativo'),
  ],
  marcos: [
    { periodo: '2015–2017', titulo: L('Inmetro · Cronotacógrafo', 'Inmetro · Tachograph', 'Inmetro · Cronotacógrafo'), texto: L('Contribuição no desenvolvimento de funcionalidades do sistema governamental de metrologia legal (PHP e Oracle), em equipe multidisciplinar.', 'Contributed to features of the government legal metrology system (PHP and Oracle), on a multidisciplinary team.', 'Contribución en el desarrollo de funcionalidades del sistema gubernamental de metrología legal (PHP y Oracle), en equipo multidisciplinar.') },
    { periodo: '2018–2020', titulo: L('Ticket Log · Pagamentos', 'Ticket Log · Payments', 'Ticket Log · Pagos'), texto: L('Atuação em módulos críticos de frotas e meios de pagamento — manutenção evolutiva, regras de negócio e sustentação em produção.', 'Worked on critical fleet and payment modules — evolutionary maintenance, business rules and production support.', 'Actuación en módulos críticos de flotas y medios de pago — mantenimiento evolutivo, reglas de negocio y soporte en producción.') },
    { periodo: '2020–2024', titulo: L('Stargrid · Healthtech', 'Stargrid · Healthtech', 'Stargrid · Healthtech'), texto: L('Participação no backend da plataforma SaaS de escalas hospitalares — APIs Laravel, filas RabbitMQ e persistência híbrida.', 'Backend work on the hospital scheduling SaaS platform — Laravel APIs, RabbitMQ queues and hybrid persistence.', 'Participación en el backend de la plataforma SaaS de escalas hospitalarias — APIs Laravel, colas RabbitMQ y persistencia híbrida.') },
    { periodo: '2024–atual', titulo: L('Yara Brasil · Agronegócio', 'Yara Brazil · Agribusiness', 'Yara Brasil · Agronegocio'), texto: L('Implementação de API Laravel offline-first, pipelines de integração Salesforce e camada de observabilidade — alocado no time de produto.', 'Laravel offline-first API, Salesforce integration pipelines and observability layer — allocated to the product team.', 'Implementación de API Laravel offline-first, pipelines de integración Salesforce y capa de observabilidad — asignado al equipo de producto.') },
  ],
}

export const casesLocalized = [
  { titulo: L('TechDrone360', 'TechDrone360', 'TechDrone360'), segmento: L('Captação aérea · Em produção', 'Aerial capture · Live', 'Captación aérea · En producción'), descricao: L('Site comercial com portfólio, vídeos 4K, SEO local e conversão via WhatsApp — meu próprio negócio de drone.', 'Commercial site with portfolio, 4K videos, local SEO and WhatsApp conversion — my own drone business.', 'Sitio comercial con portafolio, videos 4K, SEO local y conversión por WhatsApp — mi propio negocio de dron.'), url: 'https://techdrone360.com.br' },
  { titulo: L('IBGE Localidades', 'IBGE Localidades', 'IBGE Localidades'), segmento: L('React · TypeScript · Open Source', 'React · TypeScript · Open Source', 'React · TypeScript · Open Source'), descricao: L('Mapa interativo consumindo a API de Localidades do IBGE — prova de qualidade em frontend e integração.', 'Interactive map consuming the IBGE Localities API — proof of frontend and integration quality.', 'Mapa interactivo consumiendo la API de Localidades del IBGE — prueba de calidad en frontend e integración.'), url: 'https://tofariasti.github.io/ibge-localidades/' },
]

export const processoWebLocalized = [
  { passo: '1', titulo: L('Conversa rápida', 'Quick chat', 'Conversación rápida'), texto: L('Você conta seu negócio e objetivo pelo WhatsApp — sem compromisso.', 'You share your business and goals via WhatsApp — no commitment.', 'Cuenta su negocio y objetivo por WhatsApp — sin compromiso.') },
  { passo: '2', titulo: L('Proposta clara', 'Clear proposal', 'Propuesta clara'), texto: L('Envio escopo, prazo e investimento fechados, sem surpresas.', 'I send scope, timeline and fixed investment — no surprises.', 'Envío alcance, plazo e inversión cerrados, sin sorpresas.') },
  { passo: '3', titulo: L('Desenvolvimento', 'Development', 'Desarrollo'), texto: L('Montagem do site com foco em gerar contato e credibilidade.', 'Building the site focused on generating contact and credibility.', 'Montaje del sitio enfocado en generar contacto y credibilidad.') },
  { passo: '4', titulo: L('Publicação', 'Launch', 'Publicación'), texto: L('Site no ar no seu domínio (ex.: .com.br), com orientação para Google Meu Negócio.', 'Site live on your domain (e.g. .com.br), with Google Business Profile guidance.', 'Sitio en línea en su dominio (ej.: .com.br), con orientación para Google Business Profile.') },
]

export const cidadeRegiaoLocalized = L('Atendimento em todo o Brasil', 'Serving all of Brazil', 'Atención en todo Brasil')
