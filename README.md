# fariasdigital.com.br — Hub comercial

Site hub para prospecção local: **sites/e-commerce** + **captação aérea** (TechDrone360).

**Site publicado:** [fariasdigital.com.br](https://fariasdigital.com.br/)  
**Repositório:** [github.com/tofariasti/fariasdigital.com.br](https://github.com/tofariasti/fariasdigital.com.br)  
**WhatsApp:** (51) 99121-3724

## Stack

React 19 · TypeScript · Vite · React Router · Framer Motion · GitHub Pages

## Páginas

| URL | Conteúdo |
|-----|----------|
| `/` | Home — hero, comparativo, serviços e CTAs |
| `/sites/` | Serviços, pacotes, processo |
| `/portfolio/` | 40+ demos por segmento e cases |
| `/por-que-site/` | Comparativo Instagram vs site |
| `/faq/` | Perguntas frequentes |
| `/drone/` | Captação aérea + TechDrone360 |
| `/sobre/` | MEI, NF, contato |

## Desenvolvimento local

```bash
npm ci
npm run dev          # http://localhost:5173
npm run build        # gera dist/
npm run preview      # preview do build
npm test             # Vitest
npm run test:e2e     # Playwright (build + serve dist antes)
```

Preview com rotas SPA:

```bash
npm run build && npx serve dist -l 8765 -s
```

## Configuração

Edite [`src/data/hubConfig.ts`](src/data/hubConfig.ts):

- `whatsappNumero` — número com DDI
- `pacotesWeb` — nomes, preços e entregáveis
- `demos` — links das landing pages de exemplo
- `googleAnalyticsId` — GA4

Demos externas consomem [`public/assets/js/config.js`](public/assets/js/config.js) — mantenha em sync com `hubConfig.ts` ao adicionar segmentos.

Gerar PNG/ICO a partir dos SVGs:

```bash
npm run assets:generate
```

## Publicar

Push na `main` dispara CI: testes → build → deploy de `dist/` no GitHub Pages.

Domínio customizado: [`public/CNAME`](public/CNAME) → `fariasdigital.com.br`  
Fallback SPA: [`public/404.html`](public/404.html)

Detalhes em [`docs/deploy-dominio.md`](docs/deploy-dominio.md).

## Testes

| Tipo | Comando |
|------|---------|
| Unitários | `npm test` |
| E2E + a11y | `npm run build && npx serve dist -l 8765 -s & npm run test:e2e` |

Playwright cobre 7 rotas, axe-core (iframe excluído), links, imagens e responsividade.

## Responsividade

| Viewport | Dispositivo | Status |
|----------|-------------|--------|
| 390×844 | Mobile (iPhone 14) | OK |
| 768×1024 | Tablet (iPad) | OK |
| 1280×800 | Desktop | OK |

## Acessibilidade

Checklist em [`docs/a11y-checklist.md`](docs/a11y-checklist.md).  
Testes axe-core em `/`, `/sites/`, `/portfolio/`, `/faq/`.

## Estrutura

```
fariasdigital.com.br/
├── src/                 # React SPA (Vite root)
│   ├── pages/
│   ├── components/
│   ├── data/hubConfig.ts
│   └── styles/global.css
├── public/              # Assets estáticos + CNAME + 404 SPA
├── e2e/                 # Playwright
├── docs/
└── dist/                # Build (gitignored)
```

## Flyer

Material A6: [`public/flyer/index.html`](public/flyer/index.html)

## Pacotes (referência)

| Pacote | A partir de |
|--------|-------------|
| Landing Page | R$ 300 |
| Site Institucional | R$ 1.490 |
| Loja Essencial | R$ 2.990 |
| Drone Imóvel | R$ 650 |

Detalhes em [`docs/pacotes.md`](docs/pacotes.md).

## Links relacionados

- Portfólio técnico: [tofariasti.github.io](https://tofariasti.github.io/)
- Drone: [techdrone360.com.br](https://techdrone360.com.br/)
