# Prompts ChatGPT Images — Instagram Farias Digital

> Uso interno · Complemento de [`instagram-editorial.md`](instagram-editorial.md)  
> Ferramenta: **[MyHub IA → Imagens](https://myhub.ia.br/images)** (modelo GPT Image)  
> Logo para anexar nos prompts: `public/assets/img/logo-icon.svg` ou `logo-full.svg`

---

## MyHub IA — configurações

Interface: **Imagens** no menu lateral · campo *“Descreva a imagem que você quer criar…”*

| Peça | Proporção | Qualidade | Modo |
|------|-----------|-----------|------|
| Capas de destaque | **1:1** | Média ou Alta | Automático |
| Stories (gancho / CTA) | **9:16** | Média | Automático |
| Carrossel feed | **1:1** | Média | Automático |
| Thumbnail Reel | **9:16** | Baixa (rascunho) / Média (publicar) | Automático |
| Post de lançamento / prova social | **1:1** ou **9:16** | Média ou Alta | Automático |

**Qualidade “Baixa”:** serve para testar composição e texto. **Suba para Média/Alta** antes de publicar no Instagram — ícones e tipografia ficam mais nítidos, especialmente após crop circular nas capas.

### Fluxo no MyHub

1. Escolha a **proporção** antes de gerar (1:1 ou 9:16).
2. Cole o **bloco de estilo** (Neon ou Flat — ver abaixo) + prompt do slide.
3. Se o MyHub permitir **anexar imagem de referência**, use o logo SVG exportado como PNG ou um slide já aprovado + *“mesmo estilo desta imagem”*.
4. Gere **um slide por vez** nos carrosséis; anexe o anterior na próxima geração.
5. Texto em PT-BR errado → regenere **sem texto** e finalize no Canva (Plus Jakarta Sans).
6. **Stories 2–4 e Reels:** não gere aqui; grave a demo real em 390px.

### Dois estilos — quando usar cada um

| Estilo | Onde usar | Evitar em |
|--------|-----------|-----------|
| **Neon Premium** | Post “É OFICIAL”, lançamento do perfil, carrossel apresentação sem. 1, cases (TechDrone360), peças com mockup laptop/celular | Capas de destaque (ficam poluídas no crop circular) |
| **Editorial Flat** | Capas dos 11 destaques, carrosséis educativos (mitos IG vs site), stories gancho/CTA, enquetes/quiz | — |

Manter **consistência dentro de cada série** (todos os slides de um carrossel no mesmo estilo).

---

## Como usar

1. **Anexe o logo** (quando possível) e peça: *“Use exatamente este logo, monograma FD”*.
2. **Escolha Neon ou Flat** conforme a tabela acima.
3. **Cole o bloco de estilo** + prompt específico no MyHub.
4. **Gere um slide por vez**; anexe o anterior para consistência.
5. **Revise texto em PT-BR** — Canva como fallback.
6. **Stories 2–4 e Reels:** screen record (ver checklist no editorial).

### Paleta (referência)

| Token | Hex | Uso |
|-------|-----|-----|
| Fundo | `#070b12` | Background principal (Flat) |
| Fundo neon | `#0a0614` – `#12082a` | Preto com glow roxo (Neon) |
| Cyan | `#22d3ee` | Títulos, ícones, glow secundário |
| Violeta / roxo neon | `#a78bfa` – `#9333ea` | Acentos, glow principal |
| Texto | `#f8fafc` | Headlines |
| WhatsApp | `#25d366` | Botões CTA |

---

## Bloco-mestre — Neon Premium (MyHub)

Estilo alinhado às peças já geradas (roxo/cyan glow, tech premium). Use em **lançamento, apresentação e cases**.

```
Estilo visual Farias Digital — Neon Premium:
- Fundo escuro quase preto com glow roxo (#9333ea) e cyan (#22d3ee) nas bordas e reflexos
- Iluminação dramática, high-tech, premium B2B para PMEs brasileiras
- Tipografia sans-serif bold branca nos títulos, secundários em cyan ou roxo claro
- Mockups 3D discretos de laptop e smartphone mostrando site genérico (sem texto legível na tela)
- Logo monograma "FD" ou "Farias Digital" com gradiente cyan→roxo
- Composição limpa apesar do glow — um foco principal por imagem
- Formato: [1:1 quadrado | 9:16 vertical]
- Texto em português do Brasil, curto e legível
- Sem QR code inventado, sem watermark, sem rostos genéricos sorrindo em todas as peças
```

### Negative prompt — Neon

```
Evitar: texto ilegível ou em inglês, logos diferentes do FD/Farias Digital, clutter com muitos ícones,
watermark, UI de site com texto borrado, estilo meme, clipart infantil, cores quentes (laranja, vermelho),
múltiplas pessoas stock, QR code falso, excesso de elementos competindo com o título.
```

---

## Bloco-mestre — Editorial Flat

Estilo minimalista do plano editorial. Use em **capas de destaque, educativos e stories**.

```
Estilo visual Farias Digital — Editorial Flat:
- Fundo navy (#070b12), estética tech B2B limpa para PMEs brasileiras
- Acentos cyan (#22d3ee) e violeta (#a78bfa), layout flat sem glow exagerado
- Tipografia sans-serif moderna bold (Plus Jakarta Sans ou similar)
- Muito espaço negativo, ícones line-art minimalistas
- Logo: quadrado arredondado com borda gradiente cyan→violeta e monograma "FD"
- Sem fotos de pessoas, sem mockup 3D de iPhone
- Formato: [1:1 | 9:16]
- Texto em português do Brasil
```

### Negative prompt — Flat

```
Evitar: texto ilegível ou em inglês, logos falsos, rostos stock, mockups realistas de iPhone,
glow neon pesado, clutter visual, watermark, UI inventada, estilo meme, clipart infantil,
cores fora da paleta, fontes script/cursiva.
```

---

## Posts de lançamento (Neon Premium)

Peças para os primeiros dias do perfil — complementam o carrossel da Semana 1.

### É OFICIAL — estreia do perfil (1:1)

**MyHub:** 1:1 · Média/Alta

```
Post Instagram quadrado 1:1, estilo Neon Premium Farias Digital.
Título grande branco com destaque roxo: "É OFICIAL! ESTAMOS AQUI!"
Subtítulo cyan: "Farias Digital"
Lista com ícones minimalistas: Sites · Lojas Online · Design · Resultados
Mockup 3D de laptop e smartphone com site genérico (telas sem texto legível).
Glow roxo nas bordas, fundo escuro. Logo FD canto superior.
[bloco Neon] [negative Neon]
```

### Perfil + URL (1:1) — capa alternativa / avatar

**MyHub:** 1:1 · Alta

```
Imagem quadrada 1:1, círculo central com glow roxo e anel cyan.
Monograma "FD" grande gradiente cyan→roxo no centro.
Texto abaixo: "fariasdigital.com.br" em branco clean.
Fundo escuro, estilo logo reveal premium, sem outros elementos.
Ideal para foto de perfil ou story de lançamento.
[bloco Neon] [negative Neon]
```

### Sites que geram resultados (9:16 ou 1:1)

**MyHub:** 9:16 para story · 1:1 para feed

```
Peça vertical 9:16 Neon Premium.
Título topo: "SITES QUE GERAM RESULTADOS" — "RESULTADOS" em roxo destaque.
Grid de ícones serviços: Automação · Landing Pages · Lojas Online · Design.
Mockup laptop com site genérico. Rodapé: botão verde WhatsApp + "fariasdigital.com.br".
Glow roxo/cyan, fundo escuro tech.
[bloco Neon] [negative Neon]
```

### Drone / TechDrone360 (1:1 ou 16:9 crop)

**MyHub:** 1:1 · Média — Semana 4, destaque Projetos reais

```
Banner quadrado Neon Premium.
Título: "FILMAGEM E FOTOGRAFIA AÉREA" — "DRONE PROFISSIONAL" em roxo grande.
Foto estilo cinematográfico de drone em voo (equipamento profissional, cidade ao fundo desfocada).
Badge canto: "Case real · TechDrone360". Logo Farias Digital discreto.
[bloco Neon] [negative Neon]
```

---


## O que gerar com IA vs gravar

| Peça | IA | Produção |
|------|:--:|----------|
| Capa destaque (11) | ✓ | — |
| Story 1 gancho | ✓ | — |
| Story 5 CTA | ✓ | — |
| Stories 2–4 demos | — | Screen record 390px |
| Reels | — | Screen record; IA só thumbnail |
| Carrosséis feed | ✓ | Substituir wireframes por prints reais quando possível |
| Enquete / quiz story | ✓ | Adicionar sticker nativo no Instagram |

---

## Capas dos destaques (1080×1080)

> **MyHub:** 1:1 · **Alta** · estilo **Editorial Flat** (ou Neon simplificado abaixo)  
> Centro seguro para crop circular. Ícone no meio; nome curto opcional abaixo.

**Neon simplificado** (se preferir glow nas capas — manter ícone único central, sem laptop/pessoa):

```
Capa destaque Instagram 1:1, crop circular, Neon simplificado.
Fundo escuro, glow roxo suave atrás de um único ícone line-art cyan central: [ÍCONE DO SEGMENTO].
Opcional: nome "[NOME]" em branco abaixo, fonte pequena.
Sem mockups, sem pessoas, sem texto extra. Logo FD muito pequeno no canto.
[bloco Flat] [negative Flat]
```

### 1. Orçamento

```
Capa destaque Instagram 1080x1080, centro seguro para crop circular.
Marca Farias Digital: fundo navy #070b12.
Ícone minimalista line-art cyan (#22d3ee): etiqueta de preço ou símbolo R$.
Opcional: palavra "Orçamento" em branco abaixo do ícone, fonte sans-serif bold pequena.
Flat, profissional, sem foto.
[bloco Flat] [negative Flat]
```

### 2. Saúde

```
Capa destaque Instagram 1080x1080, crop circular.
Fundo navy #070b12. Ícone cyan: cruz médica estilizada ou estetoscópio minimalista line-art.
Opcional: "Saúde" em branco abaixo.
[bloco Flat] [negative Flat]
```

### 3. Automotivo

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: chave inglesa + engrenagem minimalista.
Opcional: "Automotivo" abaixo.
[bloco Flat] [negative Flat]
```

### 4. Varejo

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: sacola de compras ou carrinho de supermercado line-art.
Opcional: "Varejo" abaixo.
[bloco Flat] [negative Flat]
```

### 5. Turismo

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: montanhas + pin de mapa minimalista.
Opcional: "Turismo" abaixo.
[bloco Flat] [negative Flat]
```

### 6. Serviços

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: ferramentas cruzadas ou ícone de serviço genérico (chave + escova).
Opcional: "Serviços" abaixo.
[bloco Flat] [negative Flat]
```

### 7. Comércio digital

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: carrinho online + garfo/garfo digital (e-commerce + gastronomia).
Opcional: "Comércio" abaixo (máx. 10 caracteres).
[bloco Flat] [negative Flat]
```

### 8. Imóveis

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: casa com chave ou prédio minimalista.
Opcional: "Imóveis" abaixo.
[bloco Flat] [negative Flat]
```

### 9. Projetos reais

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: foguete/check + badge "case real" ou drone estilizado.
Opcional: "Projetos" abaixo.
[bloco Flat] [negative Flat]
```

### 10. Como funciona

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Ícone cyan: 4 círculos numerados 1-2-3-4 conectados por linha horizontal.
Opcional: "Como func." abaixo.
[bloco Flat] [negative Flat]
```

### 11. Sobre

```
Capa destaque 1080x1080, crop circular.
Fundo navy. Logo FD centralizado maior que os outros destaques, borda gradiente cyan-violeta.
Opcional: "Sobre" abaixo.
[bloco Flat] [negative Flat]
```

---

## Stories — templates por destaque

> **MyHub:** stories gancho e CTA → **9:16** · Média · estilo **Editorial Flat**

Roteiro fixo: **Story 1 (IA) → 2–4 (gravação) → Story 5 (IA)**.

### Story 1 — Gancho (1080×1920)

Substitua `[SEGMENTO]`, `[ÍCONE]` e `[HEADLINE]` conforme a tabela.

```
Story Instagram vertical 9:16, slide de abertura.
Fundo navy #070b12 com grid sutil tech.
Logo Farias Digital pequeno topo esquerdo (anexo).
Headline grande branco: "[HEADLINE]"
Subheadline cyan: "a partir de R$ 450"
Ícone ilustrativo minimalista do segmento [ÍCONE] à direita ou centro inferior.
Rodapé discreto cinza: "fariasdigital.com.br"
Estilo editorial SaaS B2B, sem foto de pessoa, sem mockup de celular.
[bloco Flat] [negative Flat]
```

| Destaque | HEADLINE | ÍCONE |
|----------|----------|-------|
| Orçamento | Pacotes para o seu negócio | etiqueta R$ |
| Saúde | Site para Saúde | cruz / estetoscópio |
| Automotivo | Site Automotivo | chave inglesa |
| Varejo | Site para Varejo | sacola / carrinho |
| Turismo | Site para Turismo | montanhas + pin |
| Serviços | Site para Serviços | ferramentas |
| Comércio digital | Loja online e cardápio | carrinho + garfo |
| Imóveis | Site Imobiliário | casa + chave |
| Projetos reais | Projetos em produção | drone / check |
| Como funciona | Como funciona | 4 passos numerados |
| Sobre | Quem somos | logo FD grande |

**Orçamento — variação story 1 (pacotes):**

```
Story 9:16. Headline: "Landing a partir de R$ 450". Sub cyan: "Site institucional R$ 1.990".
Três linhas com bullet cyan: "Modelo do seu segmento" / "WhatsApp integrado" / "40+ demos".
Logo FD topo. [bloco Flat] [negative Flat]
```

### Stories 2–4 — Demos (NÃO usar IA)

Gravar no celular ou DevTools 390px. Demos prioritárias por destaque:

| Destaque | Story 2 | Story 3 | Story 4 |
|----------|---------|---------|---------|
| Orçamento | Pacote landing | Site institucional | Portfólio scroll |
| Saúde | Nutricionista ★ | Dentista ★ | Ótica ★ |
| Automotivo | Oficina ★ | Autopeças ★ | Estética automotiva ★ |
| Varejo | Supermercado ★ | Loja móveis ★ | PDV Pro |
| Turismo | Gramado ★ | Canela ★ | Motor Home ★ |
| Serviços | Barbearia ★ | Pet shop ★ | Lavanderia ★ |
| Comércio digital | Cardápio ★ | E-commerce ★ | Catálogo |
| Imóveis | Imobiliária ★ | Classificados ★ | Detalhe formulário |
| Projetos reais | TechDrone360 ★ | IBGE Localidades | Scroll case |
| Como funciona | Passo 1 Conversa | Passo 2 Proposta | Passo 3 Dev + 4 Publicação |
| Sobre | Porto Alegre + Brasil | Emite NF | 40+ modelos |

URLs das demos: ver [`instagram-editorial.md`](instagram-editorial.md) §3.

### Story 5 — CTA (1080×1920)

```
Story Instagram 9:16, slide CTA final.
Fundo navy, faixa central sutil cyan/violeta.
Texto grande branco: "Quero um assim"
Botão verde arredondado (#25d366): "Chamar no WhatsApp"
Seta para baixo indicando posição do link sticker.
Logo Farias Digital pequeno rodapé.
Minimalista, pouco texto, alta legibilidade.
[bloco Flat] [negative Flat]
```

**Variações de CTA:**

| Destaque | Texto alternativo |
|----------|-------------------|
| Orçamento | "Pedir orçamento" |
| Projetos reais | "Conversar sobre projeto" |
| Como funciona | "Iniciar pelo WhatsApp" |
| Semana 4 stories | "Orçamento em 24h" |

---

## Calendário — prompts slide a slide

### Semana 1 — Fundação do perfil

> **Carrossel apresentação (seg):** estilo **Neon Premium** · MyHub 1:1 Média/Alta  
> **Carrossel mitos (sex):** estilo **Editorial Flat** · MyHub 1:1 Média

#### Seg — Carrossel apresentação (5 slides, 1:1 · Neon)

**Slide 1**
```
Carrossel Instagram 1:1, slide 1 de 5, série apresentação Neon Premium Farias Digital.
Fundo escuro com glow roxo nas bordas. Logo FD centralizado com gradiente cyan→roxo.
Título branco: "Sites e landing pages para PMEs"
Subtítulo cyan: "Farias Digital"
Mockup discreto laptop+celular canto inferior (telas sem texto legível).
[bloco Neon] [negative Neon]
```

**Slide 2**
```
Slide 2 de 5, mesma série Neon [anexo slide 1].
Título: "40+ modelos por segmento"
Grid 3x3 ícones minimalistas cyan com glow suave (saúde, auto, loja, turismo, pet).
[bloco Neon] [negative Neon]
```

**Slide 3**
```
Slide 3 de 5, mesma série Neon [anexo].
Número grande gradiente cyan→roxo: "R$ 450"
Texto branco: "Landing page personalizada"
Texto menor cyan: "Modelo do seu segmento"
[bloco Neon] [negative Neon]
```

**Slide 4**
```
Slide 4 de 5, mesma série Neon [anexo].
Título: "WhatsApp integrado"
Botão verde arredondado + ícone balão. Texto: "Cliente fala direto com você"
Glow roxo de fundo sutil.
[bloco Neon] [negative Neon]
```

**Slide 5**
```
Slide 5 de 5, mesma série Neon [anexo].
Título: "Veja o modelo do seu negócio"
Seta para baixo + "Link na bio"
URL: fariasdigital.com.br/portfolio — glow cyan no link.
[bloco Neon] [negative Neon]
```

#### Seg — Carrossel apresentação Flat (5 slides, 1:1)

**Slide 1**
```
Carrossel Instagram 1:1, slide 1 de 5, série apresentação Flat Farias Digital.
Fundo navy. Logo FD centralizado grande.
Título branco: "Sites e landing pages para PMEs"
Subtítulo cyan: "Farias Digital"
Barra inferior fina cyan. [bloco Flat] [negative Flat]
```

**Slide 2**
```
Slide 2 de 5, mesma série visual [anexo slide 1].
Título: "40+ modelos por segmento"
Grid 3x3 de ícones minimalistas cyan (saúde, auto, loja, turismo, pet, etc.).
[bloco Flat] [negative Flat]
```

**Slide 3**
```
Slide 3 de 5, mesma série [anexo].
Número grande cyan: "R$ 450"
Texto branco: "Landing page personalizada"
Texto menor: "Modelo do seu segmento"
[bloco Flat] [negative Flat]
```

**Slide 4**
```
Slide 4 de 5, mesma série [anexo].
Título: "WhatsApp integrado"
Ícone botão verde arredondado + ícone balão de conversa.
Texto: "Cliente fala direto com você"
[bloco Flat] [negative Flat]
```

**Slide 5**
```
Slide 5 de 5, mesma série [anexo].
Título: "Veja o modelo do seu negócio"
Seta para baixo + "Link na bio"
URL discreta: fariasdigital.com.br/portfolio
[bloco Flat] [negative Flat]
```

#### Qua — Reel Nutricionista

> **MyHub:** thumbnail 9:16 Baixa/Média · vídeo = screen record

**Thumbnail (opcional, 9:16):**
```
Thumbnail Reel vertical. Fundo navy.
Wireframe abstrato de tela mobile (barras horizontais + bloco verde = WhatsApp).
Overlay topo: "Site para Nutricionista". Badge: "Landing + Admin".
Logo FD. Sem mockup iPhone realista. [bloco Flat] [negative Flat]
```

**Vídeo:** gravar https://tofariasti.github.io/landing-nutricionista/ — hero → scroll → botão WhatsApp.

#### Sex — Carrossel Instagram vs site (5 slides · Flat)

> **MyHub:** 1:1 · Média · estilo **Editorial Flat**

**Slide 1**
```
Carrossel 1080x1080, slide 1 de 5, série "mitos do site".
Título bold branco: "Instagram sozinho não basta"
Subtítulo cinza: "3 mitos que custam clientes"
Ícone Instagram estilizado + alerta cyan. [bloco Flat] [negative Flat]
```

**Slide 2**
```
Slide 2 de 5 [anexo]. Título: "Seu negócio não aparece no Google"
Ícone lupa com X sutil. Texto menor: "Redes sociais ≠ busca orgânica". [bloco Flat] [negative Flat]
```

**Slide 3**
```
Slide 3 de 5 [anexo]. Título: "Link na bio não converte"
Ícone link quebrado ou funil vazio. Texto: "Um clique a mais = cliente a menos". [bloco Flat] [negative Flat]
```

**Slide 4**
```
Slide 4 de 5 [anexo]. Título: "Site com WhatsApp direto"
Funil cheio + botão verde WA. Texto: "Cliente na conversa em 1 toque". [bloco Flat] [negative Flat]
```

**Slide 5**
```
Slide 5 de 5 [anexo]. Título: "40+ modelos no portfólio"
Grid 6 mini-cards abstratos cyan. "Link na bio" com seta. [bloco Flat] [negative Flat]
```

#### Stories da semana (IA)

**Enquete — bastidores:**
```
Story 9:16. Fundo navy. Texto branco: "Qual segmento é o seu negócio?"
Área inferior vazia reservada para sticker de enquete Instagram.
Ícones pequenos dos segmentos nas laterais. Logo FD topo. [bloco Flat] [negative Flat]
```

**Bastidores montando destaques:**
```
Story 9:16. Fundo navy. Texto: "Montando os destaques do perfil"
Ilustração flat de círculos alinhados (capas de destaque) em cyan.
Estilo bastidor/creating content. [bloco Flat] [negative Flat]
```

---

### Semana 2 — Alta conversão local

#### Seg — Reel Oficina Mecânica

**Thumbnail:**
```
Thumbnail Reel. Overlay: "Site para Oficina Mecânica". Wireframe mobile + botão verde.
Logo FD. [bloco Flat] [negative Flat]
```

**Vídeo:** https://tofariasti.github.io/oficinamecanica/

#### Qua — Carrossel 3 demos Saúde (4 slides: capa + 3 demos)

**Slide 1 (capa)**
```
Carrossel 1080x1080, slide 1 de 4, série demos Saúde.
Título: "3 modelos para Saúde"
Sub: "Prontos para personalizar". Ícone cruz cyan. [bloco Flat] [negative Flat]
```

**Slide 2 — Dentista**
```
Slide 2 de 4 [anexo]. Título: "Consultório Odontológico"
Área central: wireframe abstrato tela mobile (linhas + botão verde).
Badge canto: "Modelo pronto". Rodapé: Farias Digital. [bloco Flat] [negative Flat]
```
→ Substituir wireframe por screenshot real de landing-dentista.

**Slide 3 — Farmácia**
```
Slide 3 de 4 [anexo]. Título: "Farmácia Vida & Saúde". Mesmo layout wireframe. [bloco Flat] [negative Flat]
```

**Slide 4 — Psicóloga**
```
Slide 4 de 4 [anexo]. Título: "Consultório Psicóloga"
CTA: "Quer um assim? Link na bio". [bloco Flat] [negative Flat]
```

#### Sex — Reel Varejo

**Thumbnail:** `"Site para Supermercado"` ou `"Loja de Móveis"`.  
**Vídeo:** supermercado-landing ou atacadao-miranda-moveis.

#### Stories — Poll

```
Story 9:16. Pergunta grande branca: "Sua empresa aparece no Google?"
Fundo navy, ícone Google estilizado cyan (sem logo oficial).
Área inferior vazia para sticker enquete Sim/Não. [bloco Flat] [negative Flat]
```

---

### Semana 3 — Turismo + serviços

#### Seg — Reel Gramado ou Canela

**Thumbnail:**
```
Thumbnail Reel. Overlay: "Site para Gramado" (ou Canela).
Silhueta montanhas cyan + wireframe mobile. Texto: "Animações da landing". [bloco Flat] [negative Flat]
```

**Vídeo:** turismo-gramado ou turismo-canela — destacar animações.

#### Qua — Carrossel Serviços (4 slides)

**Slide 1:** `"3 modelos para Serviços"` — ícone ferramentas.  
**Slide 2:** `"Pet Shop"` — wireframe + ícone pata.  
**Slide 3:** `"Barbearia"` — wireframe + ícone tesoura.  
**Slide 4:** `"Bubble Wash Lavanderia"` — badge `"Landing + Admin"` + CTA link na bio.

(Prompt de cada slide: mesmo padrão do carrossel Saúde, trocando título e ícone.)

#### Sex — Reel Cardápio digital

**Thumbnail:** `"Cardápio Digital"` + ícone garfo/prato.  
**Vídeo:** cardapio-digital — mostrar filtro de pratos.

#### Stories — Quiz

```
Story 9:16. Título: "Landing ou site institucional?"
Dois blocos lado a lado: esquerda cyan "Landing R$ 450", direita violeta "Institucional R$ 1.990".
Área inferior vazia para sticker quiz Instagram. [bloco Flat] [negative Flat]
```

---

### Semana 4 — Prova social + fechamento

#### Seg — Carrossel TechDrone360 (4 slides · Neon)

> **MyHub:** 1:1 · Média · alternativa ao Reel · estilo **Neon Premium**

**Slide 1**
```
Carrossel 1:1, slide 1 de 4, série case real Neon Premium.
Título: "Projeto em produção"
Sub: "TechDrone360". Drone cinematográfico com glow roxo. Badge: "Case real".
[bloco Neon] [negative Neon]
```

**Slide 2**
```
Slide 2 de 4, mesma série Neon [anexo]. Título: "Site profissional no ar"
Mockup laptop com site genérico. URL: techdrone360.com.br em cyan.
[bloco Neon] [negative Neon]
```

**Slide 3**
```
Slide 3 de 4, mesma série Neon [anexo]. Título: "Captação com drone"
Foto equipamento drone profissional. Texto: "Serviço completo".
[bloco Neon] [negative Neon]
```

**Slide 4**
```
Slide 4 de 4, mesma série Neon [anexo]. CTA: "Quer um projeto assim?" Botão verde WA.
[bloco Neon] [negative Neon]
```

**Reel (preferido):** gravar scroll de https://techdrone360.com.br

#### Qua — Carrossel Imóveis (4 slides)

**Slide 1:** `"Sites para Imobiliária"` — ícone casa.  
**Slide 2:** `"Imobiliária"` — wireframe listagem imóveis.  
**Slide 3:** `"Classificados"` — wireframe grid anúncios.  
**Slide 4:** CTA `"Orçamento para corretores"` + link bio `?segmento=imoveis`.

#### Sex — Reel Ótica / Nutricionista + Admin

**Thumbnail:**
```
Thumbnail Reel. Overlay: "Landing + Admin". Badge violeta canto superior.
Sub: "Nutricionista" ou "Ótica Visão Clara". Wireframe mobile. [bloco Flat] [negative Flat]
```

**Vídeo:** landing-otica ou landing-nutricionista — mostrar painel admin se possível.

#### Stories — CTA forte

```
Story 9:16. Fundo navy com borda cyan sutil.
Headline grande: "Orçamento em 24h"
Sub: "Landing a partir de R$ 450"
Botão verde: "Chamar no WhatsApp"
Urgência profissional, sem countdown falso. [bloco Flat] [negative Flat]
```

---

## Prompt canivete (iteração rápida)

```
Crie [capa destaque | story gancho | story CTA | slide carrossel | thumbnail reel]
para Farias Digital (@fariasdigital.com.br).

Segmento: [SEGMENTO]
Formato: [1080x1920 | 1080x1080]
Texto na imagem: "[TEXTO EXATO]" (ou: sem texto — área vazia para Canva)
Elemento visual: [descrição]
Slide [N] de [TOTAL] — consistência com [anexo]

[bloco Flat] [negative Flat]
```

ou, para estilo Neon:

```
[bloco Neon] [negative Neon]
```

---

## Pós-produção

| Etapa | Ferramenta | Notas |
|-------|------------|-------|
| Geração | **MyHub IA** | Proporção e qualidade conforme tabela no topo |
| Texto final | Canva / Figma | Plus Jakarta Sans, cores hex acima |
| Logo | SVG do repo | Sobrepor no Canva se o MyHub errar o FD |
| Demos nos slides | Screenshot | DevTools 390px ou celular |
| Reels | CapCut / IG | Screen record + legenda do editorial §5 |
| Publicar | Instagram | Arquivar story no destaque no mesmo dia |

### Checklist rápido

- [ ] Capa destaque gerada e crop testado (círculo)
- [ ] Stories 1 e 5 com logo real sobreposto se IA errar
- [ ] Stories 2–4 gravados com scroll + WhatsApp visível
- [ ] Carrossel: prints reais substituindo wireframes
- [ ] Legenda copiada de [`instagram-editorial.md`](instagram-editorial.md) §5
- [ ] Link sticker / bio com UTM opcional: `?utm_source=instagram&utm_medium=bio`

---

## Referências

| Recurso | Arquivo / URL |
|---------|---------------|
| Ferramenta de geração | [myhub.ia.br/images](https://myhub.ia.br/images) |
| Plano editorial completo | [`instagram-editorial.md`](instagram-editorial.md) |
| Logo ícone | `public/assets/img/logo-icon.svg` |
| Logo completo | `public/assets/img/logo-full.svg` |
| Pacotes e preços | [`pacotes.md`](pacotes.md) |
| Mockup visual interativo | Canvas `instagram-editorial-mockup.canvas.tsx` |

---

*Última atualização: junho/2026 — MyHub IA (GPT Image) · estilos Neon Premium + Editorial Flat.*
