"use client";

import React, { useState, useRef } from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import Image from "next/image";

import { motion } from "framer-motion";

import { AnimatedTitle } from "@/components/ui/animated-title";
import { useTranslations } from "@/hooks/useTranslations";

export default function IAProcessos() {
  const t = useTranslations()
  
  const content = [
    {
      title: t.iaProcessos.aprendeDocumentos.title,
      description: t.iaProcessos.aprendeDocumentos.description,
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/features/features_01.jpg"
            width={448}
            height={384}
            className="h-full w-full object-cover rounded-3xl"
            alt={t.iaProcessos.aprendeDocumentos.title}
          />
        </div>
      ),
    },
    {
      title: t.iaProcessos.estruturaConhecimento.title,
      description: t.iaProcessos.estruturaConhecimento.description,
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/features/features_04.jpg"
            width={448}
            height={384}
            className="h-full w-full object-cover rounded-3xl"
            alt={t.iaProcessos.estruturaConhecimento.title}
          />
        </div>
      ),
    },
    {
      title: t.iaProcessos.ensinaInstrutor.title,
      description: t.iaProcessos.ensinaInstrutor.description,
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/features/features_02.jpg"
            width={448}
            height={384}
            className="h-full w-full object-cover rounded-3xl"
            alt={t.iaProcessos.ensinaInstrutor.title}
          />
        </div>
      ),
    },
    {
      title: t.iaProcessos.evoluiEmpresa.title,
      description: t.iaProcessos.evoluiEmpresa.description,
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/assets/features/features_03.jpg"
            width={448}
            height={384}
            className="h-full w-full object-cover rounded-3xl"
            alt={t.iaProcessos.evoluiEmpresa.title}
          />
        </div>
      ),
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);

  const handleActiveCardChange = (index: number) => {

    // Background stays consistent now

  };

  return (

    <motion.section

      ref={sectionRef}

      id="ia-processos"

      className="w-full py-20 lg:py-32"

      style={{ backgroundColor: '#F8F7F4' }}

    >

      <div className="px-4 sm:px-6 lg:px-8">
        <AnimatedTitle
          as="h2"
          size="sm"
          align="center"
          animated
          subtitle={t.iaProcessos.subtitle}
          subtitleClassName="text-gray-600"
        >
          {t.iaProcessos.title}
        </AnimatedTitle>
      </div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{ duration: 0.6, delay: 0.2 }}

        className="w-full"

      >

        <StickyScroll 

          content={content} 

          onActiveCardChange={handleActiveCardChange}

          sectionRef={sectionRef}

        />

      </motion.div>

    </motion.section>

  );

}



