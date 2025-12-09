'use client'

import { useEffect, useState } from 'react'
import { Upload, Sparkles, Zap, TrendingUp } from 'lucide-react'

import DottedMap from 'dotted-map'

import { Area, AreaChart, CartesianGrid } from 'recharts'

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { SectionTitle } from './ui/section-title'
import { useTranslations } from '@/hooks/useTranslations'

export default function ComoFunciona() {
    const t = useTranslations()
    return (
        <section 
            id="como-funciona"
            className="w-full py-12 md:py-20"
            style={{ backgroundColor: '#F8F7F4' }}
        >
            <div className="mx-auto max-w-3xl px-4">
                <SectionTitle
                    as="h2"
                    size="sm"
                    align="center"
                    subtitle={t.comoFunciona.subtitle}
                    subtitleClassName="text-gray-600"
                >
                    {t.comoFunciona.title}
                </SectionTitle>
            </div>

            <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="w-full grid border border-gray-200/60 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-white">
                        <div className="p-6 sm:p-12">
                            <span className="text-gray-600 flex items-center gap-2 text-sm font-medium">
                                <Upload className="size-4" />
                                {t.comoFunciona.importeConteudos.label}
                            </span>

                            <p className="mt-6 text-lg lg:text-xl font-semibold text-black">
                                {t.comoFunciona.importeConteudos.description}
                            </p>
                        </div>

                        <div aria-hidden className="relative">
                            <div className="absolute inset-0 z-10 m-auto size-fit">
                                <div className="rounded-lg bg-white z-[1] relative flex size-fit w-fit items-center gap-2 border border-gray-200 px-3 py-1 text-xs font-medium shadow-sm">
                                    <span className="text-lg">📄</span> {t.comoFunciona.importeConteudos.documentoProcessado}
                                </div>
                                <div className="rounded-lg bg-white absolute inset-2 -bottom-2 mx-auto border border-gray-200 px-3 py-4 text-xs font-medium shadow-sm"></div>
                            </div>

                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-[1]"></div>
                                <Map />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden border-t border-gray-200/60 bg-white p-6 sm:p-12 md:border-0 md:border-l">
                        <div className="relative z-10">
                            <span className="text-gray-600 flex items-center gap-2 text-sm font-medium">
                                <Sparkles className="size-4" />
                                {t.comoFunciona.iaAnalisa.label}
                            </span>

                            <p className="my-6 text-lg lg:text-xl font-semibold text-black">
                                {t.comoFunciona.iaAnalisa.description}
                            </p>
                        </div>
                        <div aria-hidden className="flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex justify-center items-center size-5 rounded-full border border-gray-300">
                                        <span className="size-3 rounded-full bg-[#BF7529]"/>
                                    </span>
                                    <span className="text-gray-500 text-xs">{t.comoFunciona.iaAnalisa.agora}</span>
                                </div>
                                <div className="rounded-lg bg-gray-50 mt-1.5 w-3/5 border border-gray-200 p-3 text-xs text-gray-700">
                                    {t.comoFunciona.iaAnalisa.analisando}
                                </div>
                            </div>

                            <div>
                                <div className="rounded-lg mb-1 ml-auto w-3/5 bg-[#BF7529] p-3 text-xs text-white shadow-sm">
                                    {t.comoFunciona.iaAnalisa.trilhaCriada}
                                </div>
                                <span className="text-gray-500 block text-right text-xs">{t.comoFunciona.iaAnalisa.agora}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative col-span-full border-t border-gray-200/60">
                        <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                            <span className="text-gray-600 flex items-center gap-2 text-sm font-medium">
                                <TrendingUp className="size-4" />
                                {t.comoFunciona.metricas.label}
                            </span>

                            <p className="my-6 text-lg lg:text-xl font-semibold text-black">
                                {t.comoFunciona.metricas.title} <span className="text-gray-600"> {t.comoFunciona.metricas.subtitle}</span>
                            </p>
                        </div>
                        <MonitoringChart />
                    </div>
                </div>
            </div>
        </section>
    )
}

const svgOptions = {
    backgroundColor: 'hsl(var(--background))',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const [points, setPoints] = useState<Array<{ x: number; y: number }>>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            if (typeof window !== 'undefined') {
                const map = new DottedMap({ height: 55, grid: 'diagonal' })
                setPoints(map.getPoints())
            }
        } catch (error) {
            console.error('Error initializing DottedMap:', error)
        }
    }, [])

    const viewBox = `0 0 120 60`
    
    if (!mounted || points.length === 0) {
        return (
            <div className="w-full h-full min-h-[200px] flex items-center justify-center">
                <svg viewBox={viewBox} className="w-full h-full" style={{ background: svgOptions.backgroundColor }}>
                    {/* Loading state - empty map */}
                </svg>
            </div>
        )
    }

    return (
        <svg viewBox={viewBox} className="w-full h-full" style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const getChartConfig = (t: ReturnType<typeof useTranslations>) => ({
    concluidos: {
        label: t.comoFunciona.chart.concluidos,
        color: '#BF7529',
    },
    emAndamento: {
        label: t.comoFunciona.chart.emAndamento,
        color: '#D4A574',
    },
}) satisfies ChartConfig

const chartData = [
    { mes: 'Jan', concluidos: 120, emAndamento: 45 },
    { mes: 'Fev', concluidos: 180, emAndamento: 60 },
    { mes: 'Mar', concluidos: 250, emAndamento: 80 },
    { mes: 'Abr', concluidos: 320, emAndamento: 95 },
    { mes: 'Mai', concluidos: 400, emAndamento: 120 },
    { mes: 'Jun', concluidos: 480, emAndamento: 150 },
]

const MonitoringChart = () => {
    const t = useTranslations()
    const chartConfig = getChartConfig(t)
    return (
        <ChartContainer className="h-[360px] w-full min-h-[280px] md:h-80" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 20,
                }}>
                <defs>
                    <linearGradient id="fillConcluidos" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-concluidos)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-concluidos)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillEmAndamento" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-emAndamento)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-emAndamento)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="emAndamento" type="stepBefore" fill="url(#fillEmAndamento)" fillOpacity={0.1} stroke="var(--color-emAndamento)" stackId="a" />
                <Area strokeWidth={2} dataKey="concluidos" type="stepBefore" fill="url(#fillConcluidos)" fillOpacity={0.1} stroke="var(--color-concluidos)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}
