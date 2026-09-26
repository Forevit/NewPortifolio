# Eduardo Ferreira — Portfólio

Portfólio profissional em Next.js, TypeScript e React, com conteúdo local e integração de leitura com a API pública do GitHub.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build de produção

```bash
pnpm build
pnpm start
```

O conteúdo profissional e acadêmico fica em `lib/content.ts`. A seleção de repositórios é consultada em `lib/github.ts` e atualizada a cada hora. A foto atual do portfólio está em `public/images/eduardo.jpg`.

## Arquivos públicos e analytics

- `robots.txt` e `sitemap.xml` são gerados pelo Next.js a partir de `app/robots.ts` e `app/sitemap.ts`.
- `llms.txt` fica em `public/llms.txt`.
- O Google Analytics (ID `G-B4YV9LLZKP`) é carregado pelo layout da aplicação.
- Coloque seus ícones diretamente na pasta `public/`: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `favicon-192x192.png` e `favicon-512x512.png`.
