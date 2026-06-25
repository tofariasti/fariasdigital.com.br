import { L } from '../i18n/types'
import {
  casesLocalized,
  cidadeRegiaoLocalized,
  comparativoInstagramLocalized,
  credibilidadeLocalized,
  demosLocalized,
  intentItemsLocalized,
  pacoteDroneLocalized,
  pacotesComputadorLocalized,
  processoComputadorLocalized,
  faqComputadorLocalized,
  pacotesWebLocalized,
  portfolioLocalized,
  pricingLandingLocalized,
  processoWebLocalized,
  proofBarLocalized,
  servicosLocalized,
  testimonialsLocalized,
} from './hubConfigContentLocalized'

const HUB_DOMINIO = 'https://fariasdigital.com.br';
const HUB_DOMINIO_HOST = 'fariasdigital.com.br';

/** Source config with Localized<T> fields; resolved per locale via getHubConfig(). */
export const hubConfigLocalized = {
  nome: 'Tiago Farias',
  marca: 'Farias Digital',
  marcaLogo: '/assets/img/logo-full.svg',
  marcaLogoFull: '',
  marcaLogoIcon: '/assets/img/logo-icon.svg',
  marcaLogoAlt: 'Farias Digital',
  whatsappIcon: '/assets/img/whatsapp-icon.svg',
  nomeCompleto: 'Tiago O. de Farias',
  fotoPerfil: '/assets/img/tiago-farias.png',
  dominio: HUB_DOMINIO,
  dominioHost: HUB_DOMINIO_HOST,
  cidadeRegiao: cidadeRegiaoLocalized,
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
    geral: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e gostaria de conversar sobre um projeto.`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like to discuss a project.`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y me gustaría conversar sobre un proyecto.`,
    ),
    site: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento.

Para agilizar, já tenho:
• Tipo de negócio:
• O que preciso (site / landing / e-commerce / automação WhatsApp):
• Quantidade de produtos (se loja online):
• Tenho domínio? (sim/não)
• Prazo desejado:

Obrigado!`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like a quote.

To speed things up:
• Business type:
• What I need (website / landing / e-commerce / WhatsApp automation):
• Number of products (if online store):
• Do I have a domain? (yes/no)
• Desired timeline:

Thank you!`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y quiero un presupuesto.

Para agilizar:
• Tipo de negocio:
• Qué necesito (sitio / landing / e-commerce / automatización WhatsApp):
• Cantidad de productos (si tienda online):
• ¿Tengo dominio? (sí/no)
• Plazo deseado:

¡Gracias!`,
    ),
    drone: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento de captação com drone.

Para agilizar:
• Tipo: (imóvel / Airbnb / obra / evento / empresa / outro)
• O que precisa: (fotos / vídeo / fotos + vídeo)
• Local (cidade e endereço ou referência):
• Data ou período:

Obrigado!`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like a drone aerial quote.

To speed things up:
• Type: (property / Airbnb / construction / event / business / other)
• Needed: (photos / video / photos + video)
• Location (city and address or reference):
• Date or time window:

Thank you!`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y quiero presupuesto de captación con dron.

Para agilizar:
• Tipo: (inmueble / Airbnb / obra / evento / empresa / otro)
• Necesito: (fotos / video / fotos + video)
• Local (ciudad y dirección o referencia):
• Fecha o período:

¡Gracias!`,
    ),
    pacoteLanding: L(
      'Olá! Tenho interesse em uma landing page personalizada (a partir de R$ 300). Gostaria de um orçamento.',
      'Hi! I am interested in a custom landing page (from R$ 300). I would like a quote.',
      '¡Hola! Me interesa una landing page personalizada (desde R$ 300). Me gustaría un presupuesto.',
    ),
    pacoteLandingAdmin: L(
      'Olá! Tenho interesse no pacote Landing + Painel (a partir de R$ 590) — quero atualizar textos e preços sozinha. Gostaria de um orçamento.',
      'Hi! I am interested in the Landing + Panel package (from R$ 590) — I want to update copy and prices myself. I would like a quote.',
      '¡Hola! Me interesa el paquete Landing + Panel (desde R$ 590) — quiero actualizar textos y precios sola. Me gustaría un presupuesto.',
    ),
    pacotePresenca: L(
      'Olá! Tenho interesse no pacote Site Institucional (site completo com WhatsApp). Gostaria de um orçamento.',
      'Hi! I am interested in the Business Website package (full site with WhatsApp). I would like a quote.',
      '¡Hola! Me interesa el paquete Sitio Institucional (sitio completo con WhatsApp). Me gustaría un presupuesto.',
    ),
    pacoteLoja: L(
      'Olá! Tenho interesse no pacote Loja Essencial (e-commerce / catálogo online). Gostaria de um orçamento.',
      'Hi! I am interested in the Essential Store package (e-commerce / online catalog). I would like a quote.',
      '¡Hola! Me interesa el paquete Tienda Esencial (e-commerce / catálogo online). Me gustaría un presupuesto.',
    ),
    pacoteAutomacao: L(
      'Olá! Tenho interesse em automação de WhatsApp (formulários, mensagens automáticas ou integração). Gostaria de um orçamento.',
      'Hi! I am interested in WhatsApp automation (forms, auto-replies or integration). I would like a quote.',
      '¡Hola! Me interesa automatización de WhatsApp (formularios, mensajes automáticos o integración). Me gustaría un presupuesto.',
    ),
    pacoteDrone: L(
      'Olá! Tenho interesse no pacote Drone Imóvel (fotos + vídeo aéreo). Gostaria de um orçamento.',
      'Hi! I am interested in the Real Estate Drone package (aerial photos + video). I would like a quote.',
      '¡Hola! Me interesa el paquete Dron Inmobiliario (fotos + video aéreo). Me gustaría un presupuesto.',
    ),
    computador: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST}/computadores/ e preciso de ajuda com meu computador.

Para agilizar:
• Problema: (lento / vírus / tela azul / não liga / outro)
• Marca e modelo (se souber):
• Precisa de backup de arquivos? (sim/não)
• Cidade/bairro:

Obrigado!`,
      `Hi! I saw ${HUB_DOMINIO_HOST}/computadores/ and need help with my computer.

To speed things up:
• Issue: (slow / virus / blue screen / won't boot / other)
• Brand and model (if known):
• Need file backup? (yes/no)
• City/neighborhood:

Thank you!`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST}/computadores/ y necesito ayuda con mi computadora.

Para agilizar:
• Problema: (lento / virus / pantalla azul / no enciende / otro)
• Marca y modelo (si sabe):
• ¿Necesita respaldo de archivos? (sí/no)
• Ciudad/barrio:

¡Gracias!`,
    ),
    pacoteFormatacao: L(
      'Olá! Tenho interesse no pacote Formatação Completa (a partir de R$ 120). Gostaria de um orçamento.',
      'Hi! I am interested in the Full Format package (from R$ 120). I would like a quote.',
      '¡Hola! Me interesa el paquete Formateo Completo (desde R$ 120). Me gustaría un presupuesto.',
    ),
    pacoteManutencao: L(
      'Olá! Tenho interesse no pacote Manutenção Preventiva (a partir de R$ 80). Gostaria de um orçamento.',
      'Hi! I am interested in the Preventive Maintenance package (from R$ 80). I would like a quote.',
      '¡Hola! Me interesa el paquete Mantenimiento Preventivo (desde R$ 80). Me gustaría un presupuesto.',
    ),
  },

  links: {
    techdrone360: 'https://techdrone360.com.br',
    portfolio: 'https://tofariasti.github.io/',
    linkedin: 'https://www.linkedin.com/in/tiago-farias1985',
    github: 'https://github.com/tofariasti',
    instagramDrone: 'https://www.instagram.com/techdrone360/',
    youtubeDrone: 'https://www.youtube.com/@techdrone360',
  },

  pricingLanding: pricingLandingLocalized,

  pacotesWeb: pacotesWebLocalized,

  pacoteDrone: pacoteDroneLocalized,

  pacotesComputador: pacotesComputadorLocalized,

  processoComputador: processoComputadorLocalized,

  faqComputador: faqComputadorLocalized,

  portfolio: portfolioLocalized,

  demos: demosLocalized,

  proofBar: proofBarLocalized,

  comparativoInstagram: comparativoInstagramLocalized,

  intentItems: intentItemsLocalized,

  servicos: servicosLocalized,

  credibilidade: credibilidadeLocalized,

  cases: casesLocalized,

  testimonials: testimonialsLocalized,

  processoWeb: processoWebLocalized,


  seo: {
    ogImage: HUB_DOMINIO + '/assets/img/og-image.png',
    descriptionDefault: L(
      'Sites, e-commerce, automação de WhatsApp e imagens aéreas com drone. MEI com Nota Fiscal.',
      'Websites, e-commerce, WhatsApp automation and aerial drone imagery. Sole proprietor with official invoice.',
      'Sitios, e-commerce, automatización de WhatsApp e imágenes aéreas con dron. MEI con factura oficial.',
    ),
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
        title: L(
          'Farias Digital | Landing Pages e Sites Profissionais',
          'Farias Digital | Professional Landing Pages & Websites',
          'Farias Digital | Landing Pages y Sitios Profesionales',
        ),
        description: L(
          'Landing pages a partir de R$ 300, sites institucionais, e-commerce e automação WhatsApp. MEI · Nota Fiscal · Orçamento grátis.',
          'Landing pages from R$ 300, business websites, e-commerce and WhatsApp automation. Official invoice · Free quote.',
          'Landing pages desde R$ 300, sitios institucionales, e-commerce y automatización WhatsApp. Factura oficial · Presupuesto gratis.',
        ),
      },
      pacotes: {
        title: L(
          'Landing Page e Criação de Sites | Farias Digital',
          'Landing Pages & Website Development | Farias Digital',
          'Landing Page y Creación de Sitios | Farias Digital',
        ),
        description: L(
          'Landing pages a partir de R$ 300 · Sites institucionais a partir de R$ 1.490. E-commerce, automação WhatsApp e SEO básico.',
          'Landing pages from R$ 300 · Business websites from R$ 1,490. E-commerce, WhatsApp automation and basic SEO.',
          'Landing pages desde R$ 300 · Sitios institucionales desde R$ 1.490. E-commerce, automatización WhatsApp y SEO básico.',
        ),
      },
      drone: {
        title: L(
          'Drone para Imóveis e Empresas | Farias Digital',
          'Drone for Real Estate & Business | Farias Digital',
          'Dron para Inmuebles y Empresas | Farias Digital',
        ),
        description: L(
          'Fotos e vídeos aéreos 4K com drone DJI para imóveis, Airbnb, obras e eventos. A partir de R$ 650. Nota Fiscal.',
          '4K aerial photos and videos with DJI drone for real estate, Airbnb, construction and events. From R$ 650. Official invoice.',
          'Fotos y videos aéreos 4K con dron DJI para inmuebles, Airbnb, obras y eventos. Desde R$ 650. Factura oficial.',
        ),
      },
      computadores: {
        title: L(
          'Formatação e Manutenção de Computadores | Farias Digital',
          'Computer Format & Maintenance | Farias Digital',
          'Formateo y Mantenimiento de Computadoras | Farias Digital',
        ),
        description: L(
          'Formatação Windows, limpeza, remoção de vírus e upgrade SSD. A partir de R$ 80. Porto Alegre e região. Nota Fiscal.',
          'Windows format, cleaning, virus removal and SSD upgrade. From R$ 80. Porto Alegre and metro area. Official invoice.',
          'Formateo Windows, limpieza, eliminación de virus y upgrade SSD. Desde R$ 80. Porto Alegre y región. Factura oficial.',
        ),
      },
      sobre: {
        title: L(
          'Sobre a Farias Digital | Tiago Farias — MEI',
          'About Farias Digital | Tiago Farias — Sole Proprietor',
          'Sobre Farias Digital | Tiago Farias — MEI',
        ),
        description: L(
          'Tiago Farias — desenvolvedor web sênior e operador de drone certificado. 10+ anos em Laravel, APIs e integrações. MEI com emissão de Nota Fiscal.',
          'Tiago Farias — senior web developer and certified drone operator. 10+ years in Laravel, APIs and integrations. Official invoice available.',
          'Tiago Farias — desarrollador web senior y operador de dron certificado. Más de 10 años en Laravel, APIs e integraciones. Emisión de factura oficial.',
        ),
      },
      portfolio: {
        title: L(
          'Portfólio de Sites e Landing Pages | Farias Digital',
          'Website & Landing Page Portfolio | Farias Digital',
          'Portafolio de Sitios y Landing Pages | Farias Digital',
        ),
        description: L(
          'Exemplos de landing pages por segmento e projetos em produção. Personalização a partir de R$ 300.',
          'Landing page examples by industry and live projects. Customization from R$ 300.',
          'Ejemplos de landing pages por segmento y proyectos en producción. Personalización desde R$ 300.',
        ),
      },
      faq: {
        title: L(
          'Perguntas Frequentes — Sites e Landing Pages | Farias Digital',
          'FAQ — Websites & Landing Pages | Farias Digital',
          'Preguntas Frecuentes — Sitios y Landing Pages | Farias Digital',
        ),
        description: L(
          'Dúvidas sobre preços, prazos, SEO, domínio e hospedagem. Landing pages a partir de R$ 300.',
          'Questions about pricing, timelines, SEO, domain and hosting. Landing pages from R$ 300.',
          'Dudas sobre precios, plazos, SEO, dominio y hosting. Landing pages desde R$ 300.',
        ),
      },
      'por-que-site': {
        title: L(
          'Por que ter site além do Instagram | Farias Digital',
          'Why have a website beyond Instagram | Farias Digital',
          'Por qué tener sitio web además de Instagram | Farias Digital',
        ),
        description: L(
          'Comparativo Instagram vs site profissional — presença no Google, conversão no WhatsApp e credibilidade para PMEs.',
          'Instagram vs professional website — Google visibility, WhatsApp conversion and credibility for SMBs.',
          'Comparativo Instagram vs sitio profesional — presencia en Google, conversión en WhatsApp y credibilidad para PYMES.',
        ),
      },
    },
    faq: [
      {
        pergunta: L(
          'Quanto custa um site profissional?',
          'How much does a professional website cost?',
          '¿Cuánto cuesta un sitio web profesional?',
        ),
        resposta: L(
          'Landing pages personalizadas começam a partir de R$ 300. O pacote Landing + Painel (a partir de R$ 590) inclui painel no celular para você editar textos, preços e fotos sozinha. Sites institucionais começam a partir de R$ 1.490. E-commerce e integrações são orçados conforme escopo.',
          'Custom landing pages start from R$ 300. The Landing + Panel package (from R$ 590) includes a mobile panel so you can edit copy, prices and photos yourself. Business websites start from R$ 1,490. E-commerce and integrations are quoted by scope.',
          'Las landing pages personalizadas comienzan desde R$ 300. El paquete Landing + Panel (desde R$ 590) incluye panel en el celular para editar textos, precios y fotos sola. Los sitios institucionales comienzan desde R$ 1.490. E-commerce e integraciones se presupuestan según alcance.',
        ),
      },
      {
        pergunta: L(
          'Consigo atualizar o site sozinha, como no Instagram?',
          'Can I update the website myself, like on Instagram?',
          '¿Puedo actualizar el sitio sola, como en Instagram?',
        ),
        resposta: L(
          'Sim — no pacote Landing + Painel você edita do celular o que muda com frequência: textos, preços, fotos, horário e WhatsApp. Na landing simples (R$ 300), alterações posteriores são via suporte. Instagram continua ideal para posts do dia a dia; o site concentra o que vende e aparece no Google.',
          'Yes — with the Landing + Panel package you edit from your phone what changes often: copy, prices, photos, hours and WhatsApp. On the simple landing (R$ 300), later changes go through support. Instagram remains ideal for daily posts; the website holds what sells and ranks on Google.',
          'Sí — en el paquete Landing + Panel edita desde el celular lo que cambia seguido: textos, precios, fotos, horario y WhatsApp. En la landing simple (R$ 300), los cambios posteriores son vía soporte. Instagram sigue ideal para publicaciones diarias; el sitio concentra lo que vende y aparece en Google.',
        ),
      },
      {
        pergunta: L(
          'Qual a diferença entre landing page e site institucional?',
          'What is the difference between a landing page and a business website?',
          '¿Cuál es la diferencia entre landing page y sitio institucional?',
        ),
        resposta: L(
          'A landing page (a partir de R$ 300) é uma página única focada em conversão. O pacote Landing + Painel (a partir de R$ 590) acrescenta autonomia para você editar conteúdo. O site institucional (a partir de R$ 1.490) tem mais seções (serviços, sobre, contato, localização) para quem precisa de presença completa.',
          'A landing page (from R$ 300) is a single conversion-focused page. The Landing + Panel package (from R$ 590) adds autonomy to edit content yourself. A business website (from R$ 1,490) has more sections (services, about, contact, location) for businesses that need a full presence.',
          'La landing page (desde R$ 300) es una página única enfocada en conversión. El paquete Landing + Panel (desde R$ 590) añade autonomía para editar contenido. El sitio institucional (desde R$ 1.490) tiene más secciones (servicios, sobre, contacto, ubicación) para quien necesita presencia completa.',
        ),
      },
      {
        pergunta: L(
          'A Farias Digital emite nota fiscal?',
          'Does Farias Digital issue official invoices?',
          '¿Farias Digital emite factura oficial?',
        ),
        resposta: L(
          'Sim. Sou MEI (Microempreendedor Individual) e emito Nota Fiscal para pessoa física e jurídica — ideal para empresas que precisam de documentação formal.',
          'Yes. I am a registered sole proprietor (MEI) and issue official invoices for individuals and companies — ideal for businesses that need formal documentation.',
          'Sí. Soy MEI (Microemprendedor Individual) y emito factura para persona física y jurídica — ideal para empresas que necesitan documentación formal.',
        ),
      },
      {
        pergunta: L(
          'Quanto tempo leva para colocar meu site no ar?',
          'How long does it take to launch my website?',
          '¿Cuánto tiempo lleva publicar mi sitio?',
        ),
        resposta: L(
          'Landing pages costumam ficar prontas em 5 a 10 dias úteis. Sites institucionais e e-commerce levam de 7 a 21 dias, dependendo do escopo e da agilidade no envio de textos e fotos. Prazo exato vem fechado na proposta.',
          'Landing pages are usually ready in 5 to 10 business days. Business websites and e-commerce take 7 to 21 days, depending on scope and how quickly you provide copy and photos. Exact timeline is confirmed in the proposal.',
          'Las landing pages suelen estar listas en 5 a 10 días hábiles. Sitios institucionales y e-commerce tardan de 7 a 21 días, según alcance y rapidez en el envío de textos y fotos. El plazo exacto se confirma en la propuesta.',
        ),
      },
      {
        pergunta: L(
          'O site aparece no Google?',
          'Will my website appear on Google?',
          '¿El sitio aparecerá en Google?',
        ),
        resposta: L(
          'Todos os pacotes incluem SEO básico: título, descrição, URLs amigáveis e configuração para indexação. Também oriento sobre Google Meu Negócio e Search Console para acelerar a presença local.',
          'All packages include basic SEO: title, description, friendly URLs and indexing setup. I also guide you on Google Business Profile and Search Console to accelerate local visibility.',
          'Todos los paquetes incluyen SEO básico: título, descripción, URLs amigables y configuración para indexación. También oriento sobre Google Business Profile y Search Console para acelerar la presencia local.',
        ),
      },
      {
        pergunta: L(
          'Domínio e hospedagem estão inclusos?',
          'Are domain and hosting included?',
          '¿Están incluidos dominio y hosting?',
        ),
        resposta: L(
          'Não estão inclusos nos pacotes base, mas posso orientar a contratação ou gerenciar para você (domínio .com.br + hospedagem a partir de ~R$ 150/ano). Informo tudo no orçamento antes de iniciar.',
          'They are not included in base packages, but I can guide you or manage it for you (.com.br domain + hosting from ~R$ 150/year). Everything is disclosed in the quote before we start.',
          'No están incluidos en los paquetes base, pero puedo orientar la contratación o gestionarlo por usted (dominio .com.br + hosting desde ~R$ 150/año). Informo todo en el presupuesto antes de iniciar.',
        ),
      },
    ],
  },
}
