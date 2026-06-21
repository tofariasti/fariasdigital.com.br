import { hubConfig } from '../data/hubConfig'
import type { SeoPageKey } from '../data/types'

export function getPageMeta(page: SeoPageKey) {
  const pagina = hubConfig.seo.paginas[page]
  const path = page === 'home' ? '/' : `/${page}/`
  const url = `${hubConfig.dominio}${path === '//' ? '/' : path}`

  return {
    title: pagina.title,
    description: pagina.description,
    canonical: url,
    ogImage: hubConfig.seo.ogImage,
  }
}

function businessEntity() {
  const seo = hubConfig.seo
  return {
    '@type': 'LocalBusiness',
    '@id': `${hubConfig.dominio}/#business`,
    name: hubConfig.marca,
    alternateName: hubConfig.nome,
    url: hubConfig.dominio,
    image: seo.ogImage,
    logo: `${hubConfig.dominio}/assets/img/logo-full.svg`,
    description: seo.descriptionDefault,
    email: hubConfig.email,
    telephone: '+55-51-99121-3724',
    priceRange: 'R$300-R$5000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: seo.local.cidade,
      addressRegion: seo.local.uf,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seo.geo.latitude,
      longitude: seo.geo.longitude,
    },
    areaServed: seo.local.areaServed.map((city) => ({
      '@type': 'City',
      name: `${city}, RS`,
    })),
    founder: {
      '@type': 'Person',
      name: hubConfig.nomeCompleto,
      url: `${hubConfig.dominio}/sobre/`,
    },
    sameAs: seo.sameAs,
    knowsAbout: [
      'Landing pages',
      'Desenvolvimento de sites',
      'Sites institucionais',
      'E-commerce',
      'Automação WhatsApp',
      'SEO',
      'Integrações API',
      'Captação aérea com drone',
    ],
  }
}

function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildJsonLd(page: SeoPageKey): object[] {
  const schemas: object[] = []
  const dominio = hubConfig.dominio

  if (page === 'home') {
    schemas.push({
      '@context': 'https://schema.org',
      '@graph': [
        businessEntity(),
        {
          '@type': 'WebSite',
          '@id': `${dominio}/#website`,
          url: dominio,
          name: hubConfig.marca,
          description: hubConfig.seo.descriptionDefault,
          publisher: { '@id': `${dominio}/#business` },
          inLanguage: 'pt-BR',
        },
      ],
    })
    return schemas
  }

  const pageNames: Record<SeoPageKey, string> = {
    home: 'Início',
    sites: 'Pacotes e preços',
    portfolio: 'Portfólio',
    faq: 'Perguntas frequentes',
    'por-que-site': 'Por que ter site',
    drone: 'Drone',
    sobre: 'Sobre',
  }

  const path = `/${page}/`
  schemas.push(
    breadcrumb([
      { name: 'Início', url: `${dominio}/` },
      { name: pageNames[page], url: `${dominio}${path}` },
    ]),
  )

  if (page === 'faq') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: hubConfig.seo.faq.map((item) => ({
        '@type': 'Question',
        name: item.pergunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.resposta,
        },
      })),
    })
  }

  return schemas
}
