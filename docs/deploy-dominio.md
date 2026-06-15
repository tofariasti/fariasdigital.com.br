# Publicar fariasdigital.com.br

Site estático pronto para GitHub Pages ou qualquer hospedagem de arquivos estáticos.

## 1. Registrar o domínio

1. Acesse um registrador brasileiro (Registro.br, Hostinger, Locaweb, etc.).
2. Pesquise e registre **fariasdigital.com.br** (~R$ 40/ano no Registro.br).
3. Guarde login e painel DNS do domínio.

## 2. Publicar no GitHub Pages

Repositório: **https://github.com/tofariasti/meu-site** (público — obrigatório no plano gratuito).

O deploy é automático via GitHub Actions (`.github/workflows/deploy-pages.yml`) a cada push na `main`.

URL publicada: **https://tofariasti.github.io/meu-site/**

O arquivo `CNAME` na raiz já contém `fariasdigital.com.br`. Após configurar o DNS (passo 3), adicione o domínio em **Settings → Pages → Custom domain** no GitHub (se ainda não estiver).

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
- [ ] Preencher `googleAnalyticsId` em [`assets/js/config.js`](../assets/js/config.js) se quiser métricas

## Alternativa: hospedagem tradicional

Envie os arquivos da raiz (`index.html`, `sites/`, `drone/`, `sobre/`, `assets/`) via FTP para `public_html` de qualquer plano compartilhado. Aponte o DNS A para o IP do provedor.
