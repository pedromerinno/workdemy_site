# Workdemy - Site Institucional

Site institucional moderno e responsivo para a plataforma de educação corporativa Workdemy. Desenvolvido com Next.js 14, React, TypeScript e Tailwind CSS, seguindo princípios de design moderno inspirados em Apple, Nubank e Google Material Design.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Sistema de Internacionalização](#sistema-de-internacionalização)
- [Design System](#design-system)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Arquitetura de Componentes](#arquitetura-de-componentes)
- [Configurações](#configurações)
- [Desenvolvimento](#desenvolvimento)

## 🎯 Visão Geral

O Workdemy é uma plataforma de educação corporativa que utiliza Inteligência Artificial para transformar processos e conhecimento empresarial em treinamentos inteligentes. Este site institucional apresenta a solução de forma clara e moderna, destacando os principais benefícios e diferenciais da plataforma.

### Objetivo

Criar uma experiência digital premium que comunique efetivamente:
- O problema que a Workdemy resolve
- Como a IA transforma conhecimento em treinamento
- Benefícios para diferentes perfis de usuários
- Planos e preços
- Prova social através de depoimentos

## 🚀 Tecnologias

### Core
- **Next.js 14** - Framework React com App Router e Server Components
- **React 18** - Biblioteca de interface de usuário
- **TypeScript 5.3** - Tipagem estática para maior segurança e produtividade

### Estilização
- **Tailwind CSS 3.3** - Framework CSS utilitário
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade cross-browser

### UI Components
- **shadcn/ui** - Componentes UI modernos e acessíveis
- **Radix UI** - Primitivos acessíveis (Avatar, Slot)
- **Lucide React** - Biblioteca de ícones moderna

### Animações e Interatividade
- **Framer Motion 10** - Animações suaves e performáticas
- **Recharts 3.5** - Gráficos e visualizações de dados

### Utilitários
- **class-variance-authority** - Gerenciamento de variantes de componentes
- **clsx** - Utilitário para construção de classes CSS
- **tailwind-merge** - Merge inteligente de classes Tailwind

## 📁 Estrutura do Projeto

```
workdemy-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout raiz com providers
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globais e variáveis CSS
│   └── icon.svg           # Favicon
│
├── components/             # Componentes React
│   ├── ui/                # Componentes base (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── hero-section.tsx
│   │   ├── mockup.tsx
│   │   └── ...
│   │
│   ├── Header.tsx         # Menu de navegação
│   ├── HeroSection.tsx    # Seção hero principal
│   ├── OProblema.tsx      # Seção "O Problema"
│   ├── IAProcessos.tsx    # Seção sobre IA
│   ├── ComoFunciona.tsx   # Seção "Como Funciona"
│   ├── RecursosPrincipais.tsx
│   ├── ParaQuem.tsx
│   ├── ResultadosEsperados.tsx
│   ├── Depoimentos.tsx
│   ├── Planos.tsx
│   ├── FAQ.tsx
│   ├── CTAFinal.tsx
│   ├── Footer.tsx
│   └── CookieConsent.tsx
│
├── contexts/               # Contextos React
│   └── LanguageContext.tsx  # Gerenciamento de idiomas
│
├── hooks/                  # Custom hooks
│   └── useTranslations.ts   # Hook para traduções
│
├── lib/                    # Utilitários e helpers
│   ├── translations.ts     # Sistema de traduções (pt/en/es)
│   └── utils.ts            # Funções utilitárias
│
├── public/                 # Arquivos estáticos
│   └── assets/             # Imagens, ícones, etc.
│
├── components.json         # Configuração shadcn/ui
├── next.config.js         # Configuração Next.js
├── tailwind.config.js     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
└── package.json           # Dependências e scripts
```

## ✨ Funcionalidades

### Seções Principais

1. **Hero Section** - Apresentação inicial com typewriter effect e CTA
2. **O Problema** - Identificação dos desafios que a Workdemy resolve
3. **IA Processos** - Explicação de como a IA funciona
4. **Como Funciona** - Processo em etapas com animações
5. **Recursos Principais** - Features principais da plataforma
6. **Para Quem** - Públicos-alvo (RH, Líderes, Operações, Colaboradores)
7. **Resultados Esperados** - Benefícios e métricas
8. **Depoimentos** - Prova social com avaliações
9. **Planos** - Opções de assinatura (Starter, Growth, Enterprise)
10. **FAQ** - Perguntas frequentes em formato acordeão
11. **CTA Final** - Chamada para ação final
12. **Footer** - Links, contato e redes sociais

### Features Técnicas

- ✅ **Internacionalização (i18n)** - Suporte para Português, Inglês e Espanhol
- ✅ **Navegação Suave** - Scroll suave entre seções com âncoras
- ✅ **Menu Responsivo** - Menu mobile com animações
- ✅ **Animações Performáticas** - Framer Motion e CSS animations
- ✅ **Acessibilidade** - ARIA labels, keyboard navigation, semântica HTML
- ✅ **SEO Otimizado** - Metadata, estrutura semântica
- ✅ **Performance** - Otimizações Next.js, lazy loading
- ✅ **Cookie Consent** - Banner de consentimento de cookies
- ✅ **Design Responsivo** - Mobile-first approach

## 🌍 Sistema de Internacionalização

O projeto possui um sistema completo de i18n com suporte a 3 idiomas:

### Idiomas Suportados
- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

### Implementação

#### Context Provider
```typescript
// contexts/LanguageContext.tsx
- Gerencia o idioma atual
- Persiste preferência no localStorage
- Atualiza atributo lang do HTML para acessibilidade
```

#### Hook de Traduções
```typescript
// hooks/useTranslations.ts
import { useTranslations } from '@/hooks/useTranslations'

const t = useTranslations()
// Acessa traduções baseadas no idioma atual
```

#### Arquivo de Traduções
```typescript
// lib/translations.ts
- Contém todas as traduções organizadas por seção
- Type-safe com TypeScript
- Fácil manutenção e extensão
```

### Uso nos Componentes

```tsx
'use client'
import { useTranslations } from '@/hooks/useTranslations'

export function MeuComponente() {
  const t = useTranslations()
  
  return (
    <h1>{t.hero.title}</h1>
  )
}
```

## 🎨 Design System

### Paleta de Cores

```css
/* Cores Principais */
--background: #F8F7F4 (Bege claro)
--foreground: #000000 (Preto)
--primary: hsl(30, 66%, 46%) (Laranja)
--accent: #FF8C5A (Laranja claro)

/* Escala Bege */
beige-50: #FAF8F5
beige-100: #F5F0EA
beige-200: #E8E0D6
...
beige-950: #0F0D0A
```

### Tipografia

- **Fonte Principal**: Inter (system font stack)
- **Hierarquia**:
  - Títulos grandes: `text-6xl` com `tracking-tight`
  - Subtítulos: `text-2xl` / `text-3xl`
  - Corpo: `text-base` / `text-lg`

### Princípios de Design

Inspirado em:
- **Apple** - Simplicidade, polimento, microinterações elegantes
- **Nubank** - Clareza, organização, foco em UX
- **Google Material Design** - Sistemas escaláveis, semântica
- **Airbnb & Linear** - Minimalismo funcional

### Componentes UI

O projeto utiliza **shadcn/ui**, uma coleção de componentes reutilizáveis construídos com:
- Radix UI (acessibilidade)
- Tailwind CSS (estilização)
- Class Variance Authority (variantes)

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório** (se aplicável)
```bash
git clone [repository-url]
cd workdemy-site
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🛠️ Scripts Disponíveis

```json
{
  "dev": "next dev --turbo",        // Desenvolvimento com Turbo
  "dev:standard": "next dev",        // Desenvolvimento padrão
  "build": "next build",             // Build para produção
  "start": "next start",             // Executa build de produção
  "lint": "next lint",               // Executa ESLint
  "clean": "rm -rf .next"            // Remove pasta .next
}
```

### Recomendações

- Use `npm run dev` para desenvolvimento (mais rápido com Turbo)
- Use `npm run dev:standard` se houver problemas com Turbo
- Execute `npm run build` antes de fazer deploy

## 🏗️ Arquitetura de Componentes

### Estrutura de Componentes

#### Componentes de Página
Componentes principais que compõem a página (`components/*.tsx`):
- Cada seção é um componente independente
- Responsáveis por sua própria lógica e estilos
- Utilizam o hook `useTranslations` para i18n

#### Componentes UI Base
Componentes reutilizáveis em `components/ui/`:
- Baseados em shadcn/ui
- Altamente customizáveis
- Acessíveis por padrão

### Padrões de Código

#### Client Components
```tsx
'use client' // Necessário para hooks e interatividade
```

#### Server Components
```tsx
// Por padrão no Next.js 14 App Router
// Não precisa de 'use client'
```

### Exemplo de Componente

```tsx
'use client'

import { useTranslations } from '@/hooks/useTranslations'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const t = useTranslations()
  
  return (
    <section className="min-h-screen flex items-center">
      <h1>{t.hero.title}</h1>
      <Button>{t.hero.comecarAgora}</Button>
    </section>
  )
}
```

## ⚙️ Configurações

### Next.js (`next.config.js`)

```javascript
{
  reactStrictMode: true,
  transpilePackages: ['framer-motion'], // Necessário para Next.js 14
  images: {
    remotePatterns: [...] // Domínios permitidos para imagens
  }
}
```

### Tailwind (`tailwind.config.js`)

- Configuração completa de cores customizadas
- Fontes personalizadas
- Border radius variáveis
- Suporte a dark mode (preparado)

### TypeScript (`tsconfig.json`)

- Strict mode habilitado
- Path aliases configurados (`@/*`)
- Suporte a JSX e módulos ES

## 🔧 Desenvolvimento

### Adicionar Novo Componente shadcn/ui

```bash
npx shadcn-ui@latest add [component-name]
```

### Adicionar Nova Tradução

1. Edite `lib/translations.ts`
2. Adicione a chave na interface `Translations`
3. Adicione as traduções para cada idioma (pt, en, es)
4. Use no componente com `useTranslations()`

### Estrutura de Tradução

```typescript
// lib/translations.ts
export interface Translations {
  novaSecao: {
    titulo: string
    descricao: string
  }
}

const translations: Record<Language, Translations> = {
  pt: {
    novaSecao: {
      titulo: 'Título em Português',
      descricao: 'Descrição...'
    }
  },
  en: { /* ... */ },
  es: { /* ... */ }
}
```

### Adicionar Nova Seção

1. Crie o componente em `components/NovaSecao.tsx`
2. Importe e adicione em `app/page.tsx`
3. Adicione link no Header se necessário
4. Adicione traduções em `lib/translations.ts`

### Boas Práticas

- ✅ Use TypeScript para type safety
- ✅ Mantenha componentes pequenos e focados
- ✅ Utilize o sistema de traduções para todos os textos
- ✅ Siga os padrões de design estabelecidos
- ✅ Teste em diferentes tamanhos de tela
- ✅ Verifique acessibilidade (ARIA, keyboard nav)
- ✅ Otimize imagens com `next/image`

## 📱 Responsividade

O projeto segue abordagem **mobile-first**:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Breakpoints Tailwind

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🚀 Deploy

### Build de Produção

```bash
npm run build
npm start
```

### Variáveis de Ambiente

Atualmente não há variáveis de ambiente necessárias. Se precisar adicionar:

1. Crie `.env.local` para desenvolvimento
2. Crie `.env.production` para produção
3. Acesse com `process.env.NEXT_PUBLIC_*`

### Otimizações

- ✅ Imagens otimizadas com `next/image`
- ✅ Code splitting automático
- ✅ CSS minificado
- ✅ JavaScript tree-shaking
- ✅ Lazy loading de componentes pesados

## 📚 Recursos Adicionais

### Documentação das Tecnologias

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Design References

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://material.io/design)
- [Nubank Design System](https://nubank.design/)

## 🤝 Contribuindo

Este é um projeto privado da Workdemy. Para contribuições internas:

1. Crie uma branch para sua feature
2. Siga os padrões de código estabelecidos
3. Teste em diferentes dispositivos
4. Verifique acessibilidade
5. Submeta para revisão

## 📄 Licença

Este projeto é privado e de uso exclusivo da Workdemy.

---

**Desenvolvido com ❤️ seguindo princípios de design moderno e engenharia de qualidade.**
