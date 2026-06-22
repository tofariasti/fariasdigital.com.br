# Checklist de acessibilidade — Farias Digital Hub

## Estrutura

- [x] HTML semântico (`header`, `main`, `footer`, `nav`, `section`)
- [x] Um `h1` por página
- [x] Hierarquia de headings coerente
- [x] Landmarks ARIA em navegação (`aria-label="Principal"`)
- [x] WhatsApp flutuante dentro de `<aside aria-label="Contato rápido">`

## Navegação

- [x] Skip links implícitos via foco visível em links
- [x] Menu mobile com `aria-expanded` e `aria-controls`
- [x] Links externos com `rel="noopener noreferrer"`

## Mídia

- [x] Imagens decorativas com `alt=""` ou `aria-hidden`
- [x] Logos com `aria-label` descritivo
- [x] Iframes de demo com `title` descritivo

## Formulários e interação

- [x] FAQ accordion com `aria-expanded` nos botões
- [x] Botões de filtro do portfólio com texto visível
- [x] CTAs WhatsApp com texto ou `aria-label`

## Motion

- [x] Animações respeitam `prefers-reduced-motion`
- [x] Marquee decorativo com `aria-label`

## Contraste e foco

- [x] Tokens de cor com contraste adequado (texto claro sobre fundo escuro)
- [x] Estados `:focus-visible` nos controles interativos (CSS global)

## Testes automatizados

- Vitest: utilitários WhatsApp, config, SEO
- Playwright + axe-core: home, pacotes, portfolio, FAQ
- Viewports: 390px, 768px, 1280px (via projetos Playwright)
