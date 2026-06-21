# Publicar fariasdigital.com.br

Site estático publicado em **https://fariasdigital.com.br/** via GitHub Pages (domínio customizado).

## 1. Registrar o domínio

1. Acesse um registrador brasileiro (Registro.br, Hostinger, Locaweb, etc.).
2. Pesquise e registre **fariasdigital.com.br** (~R$ 40/ano no Registro.br).
3. Guarde login e painel DNS do domínio.

## 2. Publicar no GitHub Pages

Repositório: **https://github.com/tofariasti/fariasdigital.com.br** (público — obrigatório no plano gratuito).

O deploy é automático via GitHub Actions (`.github/workflows/deploy-pages.yml`) a cada push na `main`.

URL principal: **https://fariasdigital.com.br/**  
Espelho GitHub Pages: **https://tofariasti.github.io/fariasdigital.com.br/**

O arquivo `CNAME` na raiz contém `fariasdigital.com.br`. O domínio customizado deve estar configurado em **Settings → Pages → Custom domain** no GitHub.

## 3. Configurar DNS (Registro.br)

No painel do domínio, crie estes registros:

| Tipo | Nome | Valor |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `tofariasti.github.io` |

> IPs oficiais do GitHub Pages — confira em [docs.github.com/pages/configuring-a-custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Propagação DNS: de algumas horas até 48 h.

## 4. HTTPS

No GitHub Pages, marque **Enforce HTTPS** após o certificado ser emitido (pode levar até 24 h após o DNS propagar).

## 5. Checklist pós-publicação

- [ ] Abrir https://fariasdigital.com.br no celular
- [ ] Testar botões de WhatsApp (mensagens pré-preenchidas)
- [ ] Cadastrar no [Google Search Console](https://search.google.com/search-console)
- [ ] Criar perfil no [Google Meu Negócio](https://business.google.com) com link do site
- [ ] Preencher `googleAnalyticsId` em [`src/data/hubConfig.ts`](../src/data/hubConfig.ts) (e espelhar em [`public/assets/js/config.js`](../public/assets/js/config.js) se outras landings usarem a API legada)

## Alternativa: hospedagem tradicional

Faça `npm run build` e envie o conteúdo de `dist/` via FTP para `public_html`. Aponte o DNS A para o IP do provedor.
