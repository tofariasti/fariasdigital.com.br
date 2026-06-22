export type WhatsAppKey =
  | 'geral'
  | 'site'
  | 'drone'
  | 'pacoteLanding'
  | 'pacotePresenca'
  | 'pacoteLoja'
  | 'pacoteAutomacao'
  | 'pacoteDrone'

export type SeoPageKey =
  | 'home'
  | 'pacotes'
  | 'portfolio'
  | 'faq'
  | 'por-que-site'
  | 'drone'
  | 'sobre'

export interface Pacote {
  id: string
  nome: string
  preco: string
  valorPercebido?: string
  publico: string
  inclui: string[]
  naoInclui: string | null
  mensagemWhatsApp: WhatsAppKey
  destaque?: boolean
  badge?: string
}

export interface Demo {
  titulo: string
  segmento: string
  url: string
  descricao: string
  badge?: string
  preview?: boolean
  stack?: string[]
}

export interface Servico {
  id: string
  titulo: string
  descricao: string
  preco?: string
  href?: string
  externo?: boolean
  wa?: WhatsAppKey
  anchor?: string
}

export interface IntentItem {
  titulo: string
  descricao: string
  href?: string
  externo?: boolean
  wa?: WhatsAppKey
  anchor?: string
}

export interface ComparativoItem {
  titulo: string
  texto: string
}

export interface ProofBarItem {
  valor: number
  sufixo: string
  label: string
  icon?: string
}

export interface FaqItem {
  pergunta: string
  resposta: string
}

export interface CaseItem {
  titulo: string
  segmento: string
  descricao: string
  url?: string
}

export interface ProcessoStep {
  passo: string
  titulo: string
  texto: string
}

export interface CredibilidadeMarco {
  periodo: string
  titulo: string
  texto: string
}

export interface HubConfigType {
  nome: string
  marca: string
  marcaLogo: string
  marcaLogoFull: string
  marcaLogoIcon: string
  marcaLogoAlt: string
  whatsappIcon: string
  nomeCompleto: string
  dominio: string
  dominioHost: string
  cidadeRegiao: string
  empresaCnpj: string
  empresaEndereco: string
  email: string
  whatsappNumero: string
  whatsappExibicao: string
  mei: boolean
  emiteNF: boolean
  googleAnalyticsId: string
  mensagensWhatsApp: Record<WhatsAppKey, string>
  links: {
    techdrone360: string
    portfolio: string
    linkedin: string
    github: string
    instagramDrone: string
    youtubeDrone: string
  }
  pricingLanding: {
    preco: string
    precoCurto: string
    titulo: string
    lead: string
  }
  pacotesWeb: Pacote[]
  pacoteDrone: {
    nome: string
    preco: string
    publico: string
    inclui: string[]
    mensagemWhatsApp: WhatsAppKey
  }
  portfolio: {
    titulo: string
    tituloHighlight: string
    lead: string
    grupoDemos: { titulo: string; lead: string }
    badgeDemo: string
  }
  demos: Demo[]
  proofBar: ProofBarItem[]
  comparativoInstagram: {
    eyebrow: string
    titulo: string
    lead: string
    instagram: ComparativoItem[]
    site: ComparativoItem[]
    quote: { titulo: string; texto: string }
    stats: { valor: number; sufixo: string; texto: string; fonte: string }[]
    resumoLimite: number
    linkCompleto: string
  }
  intentItems: IntentItem[]
  servicos: Servico[]
  credibilidade: {
    titulo: string
    lead: string
    nota: string
    setores: string[]
    marcos: CredibilidadeMarco[]
  }
  cases: CaseItem[]
  processoWeb: ProcessoStep[]
  seo: {
    ogImage: string
    descriptionDefault: string
    geo: { region: string; placename: string; latitude: number; longitude: number }
    local: { cidade: string; uf: string; areaServed: string[] }
    sameAs: string[]
    paginas: Record<SeoPageKey, { title: string; description: string }>
    faq: FaqItem[]
  }
}
