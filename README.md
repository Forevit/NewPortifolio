# Eduardo Ferreira — Portfólio

Portfólio profissional de infraestrutura, redes e tecnologia. Next.js (App Router), TypeScript, React, Tailwind CSS v4 e Motion, com conteúdo local e integração de leitura com a API pública do GitHub.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build de produção

```bash
pnpm lint
pnpm build
pnpm start
```

## Onde editar o conteúdo

Todo o conteúdo fica em `content/` — não há banco de dados nem CMS.

| Arquivo | Conteúdo |
|---|---|
| `content/profile.ts` | Nome, textos de apresentação, formação, contatos |
| `content/experience.ts` | Timeline de experiência profissional |
| `content/projects.ts` | Projetos (lista, páginas individuais e destaque Paerro Tecnologia) |
| `content/courses.ts` | Cursos e certificações (`featured: true` aparece na Home) |
| `content/technologies.ts` | Tecnologias por contexto e vínculo com projetos/experiências |

Regras do conteúdo de projetos:

- Somente fatos reais. Campos opcionais (`problem`, `solution`, `implementation`, `cover`, `gallery`...) não são exibidos quando vazios.
- `tier: "principal"` gera a página completa; `tier: "menor"` gera uma página curta.
- Imagens de projetos ficam em `public/projects/`. Com `cover` definido, o projeto ganha preview no hover (desktop) e imagem inline (mobile).
- Pendências marcadas com `TODO(cliente)`.

## GitHub

`lib/github/index.ts` busca os repositórios de `Forevit` e revalida a cada hora. Repositórios novos aparecem automaticamente; para ocultar algum, adicione o nome em `HIDDEN`. `PINNED` define quais aparecem primeiro.

Opcional: defina `GITHUB_TOKEN` (token sem permissões) nas variáveis de ambiente da Vercel para evitar o limite de requisições anônimas da API.

## Estrutura

```text
app/          rotas, metadata, sitemap, robots, manifest e imagens Open Graph
components/   navigation, hero, projects, experience, technologies, github, courses, contact, footer, ui
content/      conteúdo do site
lib/          site (URL/metadata), github, og
public/       foto, imagens de projetos, favicons, llms.txt
```

## SEO e analytics

- Cada página usa `pageMetadata()` (`lib/site.ts`): title, description, canonical, Open Graph e Twitter.
- Dados estruturados: `Person` e `WebSite` no layout; `SoftwareSourceCode`/`CreativeWork` em cada projeto.
- `robots.txt`, `sitemap.xml` e `manifest.webmanifest` são gerados por `app/robots.ts`, `app/sitemap.ts` e `app/manifest.ts`.
- Google Analytics (`G-B4YV9LLZKP`) carregado pelo layout.
