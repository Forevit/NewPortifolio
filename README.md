# Eduardo Ferreira — Portfólio

Portfólio profissional de Eduardo Ferreira, desenvolvido para apresentar experiência, projetos, tecnologias e formação na área de Tecnologia da Informação.

O projeto é focado em **suporte técnico, infraestrutura, redes, virtualização, segurança e automação**.

🌐 **Site:** https://eduardoferreira.space

🐙 **GitHub:** https://github.com/Forevit

💼 **LinkedIn:** https://www.linkedin.com/in/carloseduardorodriguesferreira/

---

## 🛠️ Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Motion
- Next.js App Router
- GitHub API
- Schema.org
- Google Analytics 4
- Vercel

---

## 📁 Estrutura

```text
.
├── app/
│   ├── contato/
│   ├── cursos/
│   ├── experiencia/
│   ├── projetos/
│   ├── sobre/
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── robots.ts
│   ├── sitemap.ts
│   └── opengraph-image.tsx
│
├── components/
│   ├── contact/
│   ├── courses/
│   ├── experience/
│   ├── github/
│   ├── hero/
│   ├── navigation/
│   ├── projects/
│   ├── technologies/
│   ├── footer/
│   └── ui/
│
├── content/
│   ├── courses.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── technologies.ts
│
├── lib/
│   ├── github/
│   ├── og/
│   └── site.ts
│
├── public/
│   ├── projects/
│   ├── favicon/
│   ├── humans.txt
│   └── llms.txt
│
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 📄 Conteúdo

O conteúdo do portfólio é mantido diretamente no diretório `content/`.

Não existe banco de dados ou CMS para o conteúdo principal do site.

| Arquivo | Função |
|---|---|
| `content/profile.ts` | Informações pessoais, apresentação, formação e contatos |
| `content/experience.ts` | Experiência profissional |
| `content/projects.ts` | Projetos apresentados no portfólio |
| `content/courses.ts` | Cursos e certificações |
| `content/technologies.ts` | Tecnologias organizadas por área |

---

## 🚀 Desenvolvimento

### Requisitos

- Node.js (versão LTS recomendada)
- pnpm

### Instalação

```bash
 npm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Opcional — aumenta o limite de requisições da API do GitHub
GITHUB_TOKEN=seu_token_aqui

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-B4YV9LLZKP
```

### Ambiente de desenvolvimento

```bash
 npm dev
```

O projeto ficará disponível em:

```text
http://localhost:3000
```

### Lint

```bash
 npm lint
```

### Build

```bash
 npm build
```

### Produção

```bash
 npm start
```

---

## 📂 Projetos

Os projetos são definidos em:

```text
content/projects.ts
```

Cada projeto pode possuir:

- título;
- contexto;
- tecnologias;
- resumo;
- problema;
- solução;
- implementação;
- imagens;
- links;
- projetos relacionados.

### Níveis de projeto

```ts
tier: "principal"
```

Projetos principais possuem uma página mais completa.

```ts
tier: "menor"
```

Projetos secundários ou ainda em desenvolvimento possuem uma apresentação mais compacta.

---

## 🖼️ Imagens

As imagens utilizadas nas páginas de projetos ficam em:

```text
public/projects/
```

Os projetos podem utilizar imagens de capa e galerias.

Exemplo:

```ts
cover: {
  src: "/projects/exemplo.svg",
  alt: "Descrição da imagem",
  width: 680,
  height: 1180,
  kind: "diagram",
}
```

---

## 💻 GitHub

O portfólio possui integração com a API pública do GitHub para apresentar os repositórios públicos da conta:

```text
Forevit
```

A integração permite:

- buscar repositórios automaticamente;
- apresentar informações atualizadas;
- destacar determinados projetos;
- ocultar repositórios que não devem aparecer no portfólio.

A implementação está em:

```text
lib/github/
```

Opcionalmente, pode ser configurado um `GITHUB_TOKEN` para aumentar o limite de requisições da API (ver seção [Variáveis de ambiente](#variáveis-de-ambiente)).

---

## 🔎 SEO

O projeto possui recursos de SEO integrados ao Next.js.

### Metadata

As páginas utilizam:

- títulos personalizados;
- descrições;
- URLs canônicas;
- Open Graph;
- Twitter Cards.

A configuração principal está em:

```text
lib/site.ts
```

### Sitemap

O sitemap é gerado automaticamente pelo Next.js:

```text
app/sitemap.ts
```

Disponível em:

```text
https://eduardoferreira.space/sitemap.xml
```

As páginas individuais dos projetos são adicionadas automaticamente a partir de:

```text
content/projects.ts
```

### Robots

O arquivo `robots.txt` é gerado por:

```text
app/robots.ts
```

Disponível em:

```text
https://eduardoferreira.space/robots.txt
```

### Dados estruturados

O site utiliza Schema.org para fornecer informações estruturadas aos mecanismos de busca.

Entre os dados utilizados estão:

- `Person`
- `WebSite`
- dados estruturados relacionados aos projetos

---

## 🤖 Arquivos de descoberta

### `llms.txt`

O arquivo:

```text
public/llms.txt
```

fornece uma representação textual das principais informações e páginas do portfólio, facilitando a interpretação do conteúdo por ferramentas e sistemas de IA.

### `humans.txt`

O arquivo:

```text
public/humans.txt
```

contém informações sobre autoria e desenvolvimento do site.

---

## 📊 Google Analytics

O site utiliza **Google Analytics 4**.

O identificador utilizado atualmente é:

```text
G-B4YV9LLZKP
```

A configuração está centralizada em:

```text
lib/site.ts
```

e o carregamento ocorre no layout principal:

```text
app/layout.tsx
```

---

## 🎨 Interface

O projeto utiliza:

- Tailwind CSS para estilização;
- Motion para animações;
- Lucide React para ícones;
- componentes reutilizáveis;
- design responsivo para desktop e dispositivos móveis.

---

## ☁️ Deploy

O projeto foi desenvolvido para deploy na **Vercel**.

Após o deploy, as principais rotas públicas ficam disponíveis em:

```text
https://eduardoferreira.space
https://eduardoferreira.space/robots.txt
https://eduardoferreira.space/sitemap.xml
```

---

## 🤝 Contribuição

Este é um projeto pessoal e não aceita contribuições externas no momento. Sugestões e observações podem ser abertas via [Issues](https://github.com/Forevit/NewPortifolio/issues).

---

## 👤 Autores

**Eduardo Ferreira**

Técnico de TI com atuação em:

- Suporte técnico
- Infraestrutura
- Redes
- Virtualização
- Segurança
- Automação

📍 Fortaleza, Ceará — Brasil

**Guilherme Martins**

- Desenvolvimento Full Stack
- Desenvolvimento Web
- UX/UI Design
- Inteligência Artificial
- Automação e integração de sistemas
- Desenvolvimento e integração de soluções com IA

📍 Fortaleza, Ceará — Brasil


---

## 📜 Licença

Este repositório representa o portfólio pessoal de Eduardo Ferreira.

O código-fonte e os conteúdos aqui presentes **não podem ser reutilizados, copiados ou adaptados** como portfólio de terceiros sem autorização prévia do autor. Trechos de código genéricos podem ser usados como referência de estudo, desde que não configurem cópia integral do projeto.
