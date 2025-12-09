"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import { SectionTitle } from "@/components/ui/section-title";
import { useTranslations } from "@/hooks/useTranslations";
import {
  Calendar,
  HeartPulse,
  Plus,
  Slack,
  Zap,
  BookOpen,
  Users,
  TrendingUp,
} from "lucide-react";

// --- Helper Components for the Demo ---
// These components represent the content for each slot.

const IntegrationsCard = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg">Integrações</CardTitle>
      <CardDescription>
        Integrações fáceis com ferramentas de terceiros.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Calendar className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Slack className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Zap className="h-6 w-6 text-muted-foreground" />
      </div>
    </CardContent>
  </Card>
);

const FeatureTagsCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-center gap-3 p-6">
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-300 py-1.5 px-3 text-purple-700 dark:border-purple-700 dark:text-purple-300"
      >
        Inovador <Plus className="h-3 w-3" />
      </Badge>
      <Badge
        variant="secondary"
        className="w-fit items-center gap-1.5 bg-purple-100 py-1.5 px-3 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900/80"
      >
        Revolucionário
      </Badge>
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-purple-300 py-1.5 px-3 text-purple-700 dark:border-purple-700 dark:text-purple-300"
      >
        Empoderador <Plus className="h-3 w-3" />
      </Badge>
    </CardContent>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <div className="absolute top-6 left-6 z-10 rounded-lg bg-background/50 p-2 backdrop-blur-sm">
      <p className="text-xl font-bold tracking-tighter">Treinamento Sem Fricção.</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
      alt="Pessoas colaborando em treinamento"
      className="h-full w-full object-cover"
    />
  </Card>
);

const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-lime-100/80 p-6 dark:bg-lime-950/80">
    <TrendingUp className="h-8 w-8 text-lime-700 dark:text-lime-300" />
    <div>
      <p className="text-6xl font-bold text-lime-900 dark:text-lime-100">95%</p>
      <p className="text-sm text-lime-800 dark:text-lime-200">
        Taxa de satisfação com nossos treinamentos sem fricção.
      </p>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
      alt="Equipe aprendendo juntos"
      className="h-60 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#BF7529]/30 via-transparent to-transparent dark:from-[#BF7529]/40" />
    <p className="absolute bottom-6 left-6 z-10 max-w-[80%] text-xl font-bold text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]">
      Pequenas mudanças, grande impacto no caminho!
    </p>
  </Card>
);

const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6">
    <CardTitle className="text-lg">Jornada Semanal</CardTitle>
    <CardDescription>
      Mapeamento de fluxo e jornada de aprendizado em 02-03 semanas.
    </CardDescription>
    {/* Avatar constellation */}
    <div className="absolute -right-4 -bottom-4 h-48 w-48">
      <div className="absolute top-8 left-20">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute top-24 left-8">
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </Card>
);

// --- The Main Component ---
export default function TreinamentoSemFriccao() {
  const t = useTranslations()
  return (
    <section
      id="treinamento"
      className="w-full py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F8F7F4' }}
    >
      <div className="container mx-auto">
        <SectionTitle
          as="h2"
          size="md"
          align="center"
          weight="bold"
          subtitle={t.treinamentoSemFriccao.subtitle}
          subtitleClassName="text-black/70"
        >
          {t.treinamentoSemFriccao.title}
        </SectionTitle>

        <BentoGridShowcase
          integrations={<IntegrationsCard />}
          featureTags={<FeatureTagsCard />}
          mainFeature={<MainFeatureCard />}
          secondaryFeature={<SecondaryFeatureCard />}
          statistic={<StatCard />}
          journey={<JourneyCard />}
        />
      </div>
    </section>
  );
}



