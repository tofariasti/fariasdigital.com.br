import { getHubConfig } from '../data/hubConfig'
import type { SeoPageKey } from '../data/types'
import type { Locale } from '../i18n/types'
import { hreflang, localizedPath } from '../i18n/types'
import { uiCopy } from '../data/uiCopy'

function pageLabel(page: SeoPageKey, locale: Locale): string {
  return uiCopy.breadcrumb[page][locale]
}

export function getPageMeta(page: SeoPageKey, locale: Locale) {
  const config = getHubConfig(locale)
  const pagina = config.seo.paginas[page]
  const path = page === 'home' ? '/' : `/${page}/`
  const localized = localizedPath(path, locale)
  const url = `${config.dominio}${localized === '/' ? '' : localized}`.replace(/([^:]\/)\/+/g, '$1')

  return {
    title: pagina.title,
    description: pagina.description,
    canonical: url.endsWith('/') ? url : `${url}/`,
    ogImage: config.seo.ogImage,
    locale,
  }
}

export function getHreflangAlternates(page: SeoPageKey) {
  const path = page === 'home' ? '/' : `/${page}/`
  const locales: Locale[] = ['pt', 'en', 'es']
  const domain = getHubConfig('pt').dominio

  return locales.map((locale) => {
    const localized = localizedPath(path, locale)
    const url = `${domain}${localized === '/' ? '/' : localized}`
    return {
      hreflang: hreflang(locale),
      href: url.endsWith('/') ? url : `${url}/`,
    }
  })
}

function businessEntity(locale: Locale) {
  const config = getHubConfig(locale)
  const seo = config.seo
  return {
    '@type': 'LocalBusiness',
    '@id': `${config.dominio}/#business`,
    name: config.marca,
    alternateName: config.nome,
    url: config.dominio,
    image: seo.ogImage,
    logo: `${config.dominio}/assets/img/logo-full.svg`,
    description: seo.descriptionDefault,
    email: config.email,
    telephone: '+55-51-99121-3724',
    priceRange: 'R$450-R$5000',
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
      name: config.nomeCompleto,
      url: `${config.dominio}${localizedPath('/sobre/', locale)}`,
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

export function buildJsonLd(page: SeoPageKey, locale: Locale): object[] {
  const schemas: object[] = []
  const config = getHubConfig(locale)
  const dominio = config.dominio
  const inLanguage = locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es' : 'en'

  if (page === 'home') {
    schemas.push({
      '@context': 'https://schema.org',
      '@graph': [
        businessEntity(locale),
        {
          '@type': 'WebSite',
          '@id': `${dominio}/#website`,
          url: dominio,
          name: config.marca,
          description: config.seo.descriptionDefault,
          publisher: { '@id': `${dominio}/#business` },
          inLanguage,
        },
      ],
    })
    return schemas
  }

  const pageNames = pageLabel

  const path = localizedPath(`/${page}/`, locale)
  const pageUrl = `${dominio}${path === '/' ? '/' : path}`

  schemas.push(
    breadcrumb([
      { name: pageNames('home', locale), url: `${dominio}${localizedPath('/', locale)}` },
      { name: pageNames(page, locale), url: pageUrl },
    ]),
  )

  if (page === 'faq') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage,
      mainEntity: config.seo.faq.map((item) => ({
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
