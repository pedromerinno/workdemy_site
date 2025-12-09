# Workdemy - Site Institucional Moderno

Site moderno e responsivo para a plataforma de educação online Workdemy, desenvolvido com Next.js 14, React, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes UI modernos
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos
- **Radix UI** - Componentes acessíveis

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

O site estará disponível em `http://localhost:3000`

## 🎨 Design

O design segue princípios modernos inspirados em:
- **Nubank** - Minimalismo, clareza e organização
- **Airbnb** - Elegância funcional e espaçamento generoso
- **Apple** - Simplicidade e polimento
- **Google Material Design** - Sistemas escaláveis

### Paleta de Cores

- **Primária**: Preto (#000000)
- **Background**: Bege claro (#f3f1ea)
- **Texto**: Preto com variações de opacidade
- **Bordas**: Preto com baixa opacidade (border-black/5)

### Tipografia

- **Fontes**: Inter (sans-serif) como padrão
- **Hierarquia**: Títulos grandes (text-6xl), subtítulos médios, corpo de texto legível
- **Tracking**: Títulos com tracking-tight para visual mais moderno

## 📱 Estrutura

O site é composto por 10 seções principais:

1. **Header** - Menu fixo minimalista com navegação por âncoras
2. **Hero** - Seção inicial moderna com animações e mockup
3. **Sobre** - Apresentação da marca e diferenciais
4. **Como Funciona** - Processo em 4 passos
5. **Benefícios** - Features para usuários e empresas
6. **Depoimentos** - Prova social com avaliações
7. **Planos** - Opções de assinatura
8. **FAQ** - Perguntas frequentes em acordeão
9. **CTA Final** - Chamada para ação
10. **Footer** - Links, contato e redes sociais

## ✨ Features

- ✅ Design moderno estilo startup (Nubank/Airbnb)
- ✅ Componentes shadcn/ui integrados
- ✅ Animações suaves com Framer Motion e CSS
- ✅ Navegação suave por âncoras
- ✅ Menu mobile com animação
- ✅ Acessibilidade (ARIA, keyboard navigation)
- ✅ Performance otimizada
- ✅ SEO friendly
- ✅ Responsivo (mobile-first)

## 🏗️ Estrutura de Componentes

```
components/
├── ui/              # Componentes shadcn/ui base
│   ├── button.tsx
│   ├── hero.tsx
│   └── mockup.tsx
├── Header.tsx       # Menu de navegação
├── HeroModern.tsx   # Hero section moderna
├── Sobre.tsx
├── ComoFunciona.tsx
├── Beneficios.tsx
├── Depoimentos.tsx
├── Planos.tsx
├── FAQ.tsx
├── CTAFinal.tsx
└── Footer.tsx
```

## 🔧 Customização

### Cores

Edite as cores no arquivo `tailwind.config.js` e `app/globals.css`:

```js
colors: {
  primary: { DEFAULT: "hsl(var(--primary))" },
  accent: { DEFAULT: "hsl(var(--accent))" },
  background: { DEFAULT: "hsl(var(--background))" },
}
```

### Componentes shadcn/ui

Para adicionar mais componentes shadcn/ui:

```bash
npx shadcn-ui@latest add [component-name]
```

### Conteúdo

Cada componente está em `components/` e pode ser editado diretamente. Os textos e dados estão hardcoded nos componentes para fácil customização.

## 📦 Dependências Principais

- `@radix-ui/react-slot` - Slot component do Radix
- `class-variance-authority` - Variantes de componentes
- `clsx` e `tailwind-merge` - Utilitários de classes
- `framer-motion` - Animações
- `lucide-react` - Ícones

## 🎯 Próximos Passos

1. Adicionar mais componentes shadcn/ui conforme necessário
2. Integrar formulários de contato
3. Adicionar analytics
4. Otimizar imagens com next/image
5. Implementar dark mode (se necessário)

## 📄 Licença

Este projeto é privado e de uso exclusivo da Workdemy.
