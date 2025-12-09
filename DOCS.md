# Documentação Técnica - Workdemy Site

Documentação técnica detalhada para desenvolvedores trabalhando no projeto Workdemy.

## 📐 Arquitetura

### Next.js App Router

O projeto utiliza o **App Router** do Next.js 14, que oferece:

- **Server Components por padrão** - Melhor performance e SEO
- **Client Components quando necessário** - Para interatividade
- **Layouts aninhados** - Estrutura flexível
- **Metadata API** - SEO otimizado

### Estrutura de Roteamento

```
app/
├── layout.tsx    # Layout raiz (providers, metadata)
└── page.tsx      # Página principal (landing page)
```

Atualmente, o site é uma **Single Page Application (SPA)** com navegação por âncoras.

## 🧩 Sistema de Componentes

### Hierarquia de Componentes

```
Page (app/page.tsx)
  └── HeroSection
  └── OProblema
  └── IAProcessos
  └── ComoFunciona
  └── RecursosPrincipais
  └── ParaQuem
  └── ResultadosEsperados
  └── Depoimentos
  └── Planos
  └── FAQ
  └── CTAFinal
  └── Footer
```

### Tipos de Componentes

#### 1. Componentes de Seção
Localizados em `components/*.tsx`:
- Representam seções completas da página
- Geralmente são Client Components (precisam de hooks)
- Utilizam `useTranslations()` para i18n
- Podem conter sub-componentes

#### 2. Componentes UI Base
Localizados em `components/ui/*.tsx`:
- Componentes reutilizáveis do shadcn/ui
- Altamente customizáveis via props
- Acessíveis por padrão (Radix UI)
- Podem ser Server ou Client Components

#### 3. Componentes de Bloco
Localizados em `components/blocks/*.tsx`:
- Componentes composáveis
- Reutilizáveis em diferentes contextos
- Exemplos: `demo-features.tsx`, `features-9.tsx`

## 🌐 Sistema de Internacionalização (i18n)

### Arquitetura

```
LanguageContext (Provider)
    ↓
useLanguage() hook
    ↓
useTranslations() hook
    ↓
getTranslations(language)
    ↓
translations[language]
```

### Fluxo de Dados

1. **LanguageContext** gerencia o estado do idioma
2. **localStorage** persiste a preferência do usuário
3. **useTranslations** retorna traduções baseadas no idioma atual
4. Componentes consomem traduções via hook

### Adicionar Novo Idioma

1. Adicione o código do idioma em `Language` type:
```typescript
type Language = 'pt' | 'en' | 'es' | 'fr' // novo idioma
```

2. Adicione traduções em `lib/translations.ts`:
```typescript
const translations: Record<Language, Translations> = {
  // ... idiomas existentes
  fr: {
    // traduções em francês
  }
}
```

3. Atualize o seletor de idioma no Header (se necessário)

### Estrutura de Traduções

As traduções são organizadas por **seção da página**:

```typescript
interface Translations {
  nav: { ... }           // Navegação
  hero: { ... }          // Hero section
  problema: { ... }      // Seção "O Problema"
  iaProcessos: { ... }  // Seção IA
  // ... outras seções
}
```

Isso facilita:
- Manutenção organizada
- Type safety
- Autocomplete no IDE
- Refatoração segura

## 🎨 Sistema de Estilos

### Tailwind CSS

O projeto utiliza **Tailwind CSS** com configuração customizada:

#### Variáveis CSS

Definidas em `app/globals.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 30 66% 46%;
  /* ... */
}
```

#### Cores Customizadas

Em `tailwind.config.js`:
```javascript
colors: {
  beige: {
    50: "#FAF8F5",
    // ... escala completa
    DEFAULT: "#F0EBE3"
  }
}
```

### Padrões de Estilização

#### Utility-First
Prefira classes Tailwind sobre CSS customizado:
```tsx
// ✅ Bom
<div className="flex items-center gap-4 p-6">

// ❌ Evite
<div className="custom-container">
```

#### Variantes Responsivas
```tsx
<div className="text-sm md:text-base lg:text-lg">
```

#### Estados Interativos
```tsx
<button className="hover:bg-primary/90 active:scale-95 transition-all">
```

### Animações

#### Framer Motion
Para animações complexas:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

#### CSS Animations
Para animações simples (definidas em `globals.css`):
```tsx
<div className="animate-appear delay-300">
```

## 🔧 Configurações Detalhadas

### Next.js Config

#### Transpilação
```javascript
transpilePackages: ['framer-motion']
```
Necessário porque framer-motion usa ESM e precisa ser transpilado.

#### Imagens
```javascript
images: {
  remotePatterns: [
    { hostname: 'images.unsplash.com' },
    { hostname: 'res.cloudinary.com' }
  ]
}
```

#### Webpack
Configurações para melhorar desenvolvimento:
- Fallback para `fs` no cliente
- Watch mode otimizado
- Polling para detectar mudanças

### TypeScript

#### Path Aliases
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

Permite imports como:
```typescript
import { Button } from '@/components/ui/button'
```

#### Strict Mode
Habilitado para:
- Type safety máximo
- Detecção precoce de erros
- Melhor experiência de desenvolvimento

## 📦 Dependências Principais

### Core
- **next**: Framework React
- **react/react-dom**: Biblioteca UI
- **typescript**: Type safety

### UI & Estilização
- **tailwindcss**: Framework CSS
- **@radix-ui/react-***: Primitivos acessíveis
- **lucide-react**: Ícones

### Animações
- **framer-motion**: Animações performáticas

### Utilitários
- **clsx**: Construção de classes
- **tailwind-merge**: Merge inteligente de classes
- **class-variance-authority**: Variantes de componentes

### Visualizações
- **recharts**: Gráficos e charts
- **dotted-map**: Mapas (se usado)

## 🎯 Padrões de Código

### Nomenclatura

#### Arquivos
- Componentes: `PascalCase.tsx` (ex: `HeroSection.tsx`)
- Hooks: `camelCase.ts` com prefixo `use` (ex: `useTranslations.ts`)
- Utilitários: `camelCase.ts` (ex: `utils.ts`)
- Tipos: `PascalCase.ts` ou inline

#### Componentes
```tsx
// ✅ Bom
export function HeroSection() { }

// ❌ Evite
export function heroSection() { }
export const HeroSection = () => { } // Use function declarations
```

#### Variáveis e Funções
```tsx
// ✅ camelCase
const currentLanguage = 'pt'
function getTranslations() { }
```

### Estrutura de Componentes

```tsx
'use client' // Se necessário

import { ... } from '...'

// Types/interfaces (se necessário)
interface Props {
  title: string
}

// Componente
export function ComponentName({ title }: Props) {
  // Hooks
  const t = useTranslations()
  
  // Estado local (se necessário)
  const [state, setState] = useState()
  
  // Effects
  useEffect(() => { }, [])
  
  // Handlers
  const handleClick = () => { }
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### Imports

Ordem recomendada:
1. React/Next.js
2. Bibliotecas externas
3. Componentes internos
4. Hooks
5. Utilitários
6. Tipos
7. Estilos

```tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useTranslations } from '@/hooks/useTranslations'
import { cn } from '@/lib/utils'
import type { Translations } from '@/lib/translations'
```

## 🧪 Performance

### Otimizações Implementadas

#### Next.js
- **Server Components** por padrão
- **Code splitting** automático
- **Image optimization** com `next/image`
- **Font optimization** com `next/font`

#### React
- **Lazy loading** de componentes pesados
- **Memoization** quando necessário
- **Event handlers** otimizados

#### CSS
- **Tailwind purging** - Remove CSS não utilizado
- **CSS minification** em produção

### Métricas Recomendadas

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Ferramentas de Análise

- **Lighthouse** (Chrome DevTools)
- **Next.js Analytics** (se configurado)
- **Web Vitals** (se configurado)

## ♿ Acessibilidade

### Implementações

#### ARIA Labels
```tsx
<button aria-label="Fechar menu">
  <X />
</button>
```

#### Roles Semânticos
```tsx
<nav role="navigation">
<main role="main">
```

#### Keyboard Navigation
- Todos os elementos interativos são focáveis
- Navegação por Tab funciona corretamente
- Atalhos de teclado quando aplicável

#### Contraste
- Cores seguem WCAG AA (mínimo)
- Texto legível em todos os backgrounds

### Checklist

- [ ] Todos os botões têm labels descritivos
- [ ] Imagens têm alt text
- [ ] Formulários têm labels associados
- [ ] Navegação por teclado funciona
- [ ] Contraste de cores adequado
- [ ] Atributo `lang` correto no HTML
- [ ] Foco visível em elementos interativos

## 🔒 Segurança

### Boas Práticas

#### Sanitização
- Não renderize HTML não sanitizado
- Use bibliotecas como `DOMPurify` se necessário

#### Cookies
- Banner de consentimento implementado
- Respeita preferências do usuário

#### Dados Sensíveis
- Não commite credenciais
- Use variáveis de ambiente quando necessário

## 🐛 Debugging

### Ferramentas

#### React DevTools
- Inspecionar componentes
- Ver estado e props
- Profiling de performance

#### Next.js DevTools
- Analisar rotas
- Verificar Server Components
- Debug de build

#### Browser DevTools
- Console para logs
- Network para requisições
- Performance para profiling

### Logs

```typescript
// Desenvolvimento
console.log('Debug info')

// Produção
// Remover ou usar serviço de logging
```

## 📱 Responsividade

### Breakpoints

```css
/* Tailwind defaults */
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Estratégia

1. **Mobile-first**: Estilize para mobile primeiro
2. **Progressive enhancement**: Adicione features para telas maiores
3. **Teste em dispositivos reais** quando possível

### Exemplo

```tsx
<div className="
  grid 
  grid-cols-1        // Mobile: 1 coluna
  md:grid-cols-2     // Tablet: 2 colunas
  lg:grid-cols-3     // Desktop: 3 colunas
">
```

## 🚀 Deploy

### Build

```bash
npm run build
```

Verifica:
- TypeScript errors
- Lint errors
- Otimizações
- Gera `.next/` com assets otimizados

### Produção

```bash
npm start
```

Inicia servidor de produção na porta 3000 (padrão).

### Variáveis de Ambiente

Se necessário, crie `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Acesse com `process.env.NEXT_PUBLIC_*`

### Plataformas Recomendadas

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** (Node.js server)

## 📚 Recursos de Aprendizado

### Next.js
- [Documentação Oficial](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### React
- [React Docs](https://react.dev)
- [Hooks Reference](https://react.dev/reference/react)

### Tailwind CSS
- [Documentação](https://tailwindcss.com/docs)
- [Utility-First CSS](https://tailwindcss.com/docs/utility-first)

### TypeScript
- [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

**Última atualização**: 2024



