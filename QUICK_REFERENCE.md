# Guia Rápido de Referência - Workdemy

Referência rápida para desenvolvedores trabalhando no projeto.

## 🚀 Comandos Essenciais

```bash
# Desenvolvimento
npm run dev              # Inicia com Turbo (mais rápido)
npm run dev:standard     # Inicia modo padrão

# Build e Produção
npm run build            # Build para produção
npm start                # Executa build de produção

# Utilitários
npm run lint             # Executa ESLint
npm run clean            # Remove pasta .next
```

## 📁 Estrutura de Arquivos

```
app/
  ├── page.tsx          # Página principal
  └── layout.tsx        # Layout raiz

components/
  ├── ui/               # Componentes base (shadcn/ui)
  └── *.tsx             # Componentes de seção

lib/
  ├── translations.ts   # Sistema de i18n
  └── utils.ts          # Utilitários

hooks/
  └── useTranslations.ts # Hook de traduções
```

## 🎯 Padrões de Código

### Criar Novo Componente

```tsx
'use client'

import { useTranslations } from '@/hooks/useTranslations'

export function NovoComponente() {
  const t = useTranslations()
  
  return (
    <section className="py-20">
      <h2>{t.novaSecao.titulo}</h2>
    </section>
  )
}
```

### Usar Traduções

```tsx
const t = useTranslations()
// Acessa: t.hero.title, t.nav.inicio, etc.
```

### Adicionar Nova Tradução

1. Edite `lib/translations.ts`
2. Adicione na interface `Translations`
3. Adicione traduções para pt, en, es

```typescript
// lib/translations.ts
novaSecao: {
  titulo: string
  descricao: string
}

// Em cada idioma:
pt: {
  novaSecao: {
    titulo: 'Título',
    descricao: 'Descrição'
  }
}
```

## 🎨 Classes Tailwind Comuns

### Layout
```tsx
className="container mx-auto px-4"        // Container centralizado
className="flex items-center gap-4"      // Flexbox
className="grid grid-cols-1 md:grid-cols-2" // Grid responsivo
```

### Espaçamento
```tsx
className="py-20"        // Padding vertical
className="mb-8"         // Margin bottom
className="gap-6"        // Gap entre itens
```

### Tipografia
```tsx
className="text-6xl font-bold"           // Título grande
className="text-2xl"                      // Subtítulo
className="text-base text-muted-foreground" // Texto secundário
```

### Cores
```tsx
className="bg-background"                 // Background padrão
className="text-foreground"               // Texto padrão
className="bg-primary text-primary-foreground" // Botão primário
className="border border-border"         // Borda padrão
```

### Responsividade
```tsx
className="text-sm md:text-base lg:text-lg"     // Texto responsivo
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grid responsivo
className="hidden md:block"                      // Ocultar/mostrar
```

## 🧩 Componentes UI Comuns

### Button
```tsx
import { Button } from '@/components/ui/button'

<Button variant="default">Clique aqui</Button>
<Button variant="outline">Outro botão</Button>
<Button variant="ghost">Botão ghost</Button>
```

### Card
```tsx
import { Card } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo
  </CardContent>
</Card>
```

### Badge
```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="default">Novo</Badge>
<Badge variant="secondary">Popular</Badge>
```

## 🎬 Animações

### Framer Motion
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

### CSS Animations
```tsx
<div className="animate-appear delay-300">
  Aparece com delay
</div>
```

## 🌍 Internacionalização

### Trocar Idioma
```tsx
import { useLanguage } from '@/contexts/LanguageContext'

const { setCurrentLanguage } = useLanguage()
setCurrentLanguage('en') // 'pt' | 'en' | 'es'
```

### Idioma Atual
```tsx
const { currentLanguage } = useLanguage()
// 'pt' | 'en' | 'es'
```

## 📱 Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

## 🎨 Cores Principais

```css
/* Background */
bg-background        /* #F8F7F4 (bege claro) */

/* Texto */
text-foreground      /* #000000 (preto) */

/* Primária */
bg-primary           /* Laranja */
text-primary-foreground

/* Bege */
bg-beige-50          /* #FAF8F5 */
bg-beige-100         /* #F5F0EA */
bg-beige-DEFAULT     /* #F0EBE3 */
```

## 🔗 Imports Comuns

```tsx
// Hooks
import { useTranslations } from '@/hooks/useTranslations'
import { useLanguage } from '@/contexts/LanguageContext'

// Componentes UI
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Utilitários
import { cn } from '@/lib/utils'

// Animações
import { motion } from 'framer-motion'

// Ícones
import { ChevronRight, ArrowRight } from 'lucide-react'
```

## 📝 Checklist de Desenvolvimento

### Antes de Commitar
- [ ] Código funciona em desenvolvimento
- [ ] Traduções adicionadas (pt, en, es)
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Acessibilidade verificada
- [ ] Sem erros de TypeScript
- [ ] Sem warnings do ESLint
- [ ] Testado em navegador

### Ao Criar Nova Seção
- [ ] Componente criado em `components/`
- [ ] Importado em `app/page.tsx`
- [ ] Traduções adicionadas
- [ ] Link no Header (se necessário)
- [ ] ID para navegação por âncora

### Ao Adicionar Componente shadcn/ui
```bash
npx shadcn-ui@latest add [component-name]
```

## 🐛 Debugging Rápido

### Erro de Build
```bash
npm run clean
npm install
npm run build
```

### Problemas com Turbo
```bash
npm run dev:standard
```

### TypeScript Errors
```bash
# Verificar erros
npx tsc --noEmit
```

### Lint Errors
```bash
npm run lint
```

## 📚 Links Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)

## 💡 Dicas Rápidas

### Performance
- Use `next/image` para imagens
- Lazy load componentes pesados
- Evite re-renders desnecessários

### Acessibilidade
- Sempre adicione `alt` em imagens
- Use `aria-label` em botões sem texto
- Teste navegação por teclado

### Responsividade
- Teste em diferentes tamanhos
- Use breakpoints do Tailwind
- Mobile-first approach

### Traduções
- Nunca hardcode textos
- Use `useTranslations()` sempre
- Mantenha consistência nas chaves

---

**Última atualização**: 2024

