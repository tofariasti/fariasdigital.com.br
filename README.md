# fariasdigital.com.br — Hub comercial

Site hub para prospecção local: **sites/e-commerce** + **captação aérea** (TechDrone360).

**Site publicado:** [tofariasti.github.io/meu-site](https://tofariasti.github.io/meu-site/)  
**Domínio alvo:** [fariasdigital.com.br](https://fariasdigital.com.br) (após configurar DNS)  
**Repositório:** [github.com/tofariasti/meu-site](https://github.com/tofariasti/meu-site)  
**WhatsApp:** (51) 98903-0405

## Páginas

| URL | Conteúdo |
|-----|----------|
| `/` | Home — dois serviços, exemplos, CTA |
| `/sites/` | Pacotes web, processo, galeria de demos |
| `/drone/` | Resumo + link para [techdrone360.com.br](https://techdrone360.com.br) |
| `/sobre/` | MEI, NF, contato |

## Estrutura

```
meu-site/
├── index.html
├── sites/index.html
├── drone/index.html
├── sobre/index.html
├── assets/css/main.css
├── assets/js/config.js      ← alterar WhatsApp, preços, demos
├── assets/js/main.js
├── flyer/                   ← material para impressão
├── docs/
│   ├── CNAME.example
│   ├── deploy-dominio.md
│   ├── pacotes.md
│   └── prospeccao-piloto.md
├── sitemap.xml
└── robots.txt
```

## Configuração

Edite [`assets/js/config.js`](assets/js/config.js):

- `whatsappNumero` — número com DDI
- `pacotesWeb` — nomes, preços e entregáveis
- `demos` — links das landing pages de exemplo
- `googleAnalyticsId` — opcional

## Publicar

Instruções completas em [`docs/deploy-dominio.md`](docs/deploy-dominio.md).

Resumo: push na `main` publica automaticamente em **https://tofariasti.github.io/meu-site/** via GitHub Actions.

## Testar localmente

```bash
cd /home/tiago/Development/ladingpages/meu-site
python3 -m http.server 8888
```

Abra http://localhost:8888

## Flyer

Material A6 frente/verso: [`flyer/index.html`](flyer/index.html) → exportar PDF e imprimir.

## Pacotes (referência)

| Pacote | A partir de |
|--------|-------------|
| Presença Digital | R$ 1.490 |
| Loja Essencial | R$ 2.990 |
| Drone Imóvel | R$ 650 |

Detalhes em [`docs/pacotes.md`](docs/pacotes.md).

## Links relacionados

- Portfólio técnico (CLT): [tofariasti.github.io](https://tofariasti.github.io/)
- Drone (marca dedicada): [techdrone360.com.br](https://techdrone360.com.br/)
