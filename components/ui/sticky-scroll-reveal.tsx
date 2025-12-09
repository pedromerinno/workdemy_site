"use client";

import React, { useEffect, useRef, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const StickyScroll = ({

  content,

  contentClassName,

  onActiveCardChange,

  sectionRef,

}: {

  content: {

    title: string;

    description: string;

    content?: React.ReactNode | any;

  }[];

  contentClassName?: string;

  onActiveCardChange?: (index: number) => void;

  sectionRef?: React.RefObject<HTMLElement>;

}) => {

  const [activeCard, setActiveCard] = React.useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cardLength = content.length;

  useEffect(() => {

    const handleScroll = () => {

      if (!ref.current) return;

      const viewportCenter = window.innerHeight / 2;

      const distances = contentRefs.current.map((element) => {

        if (!element) return Infinity;

        const rect = element.getBoundingClientRect();

        const elementCenter = rect.top + rect.height / 2;

        return Math.abs(viewportCenter - elementCenter);

      });

      const closestIndex = distances.reduce((closest, distance, index) => {

        return distance < distances[closest] ? index : closest;

      }, 0);

      if (distances[closestIndex] !== Infinity) {

        setActiveCard((prev) => {

          if (prev !== closestIndex) {

            if (onActiveCardChange) {

              onActiveCardChange(closestIndex);

            }

            return closestIndex;

          }

          return prev;

        });

      }

    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {

      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);

    };

  }, [onActiveCardChange]);

  const linearGradients = [

    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500

    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500

    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500

    "linear-gradient(to bottom right, rgb(168 85 247), rgb(236 72 153))", // purple-500 to pink-500

  ];

  const [backgroundGradient, setBackgroundGradient] = useState(

    linearGradients[0]

  );

  useEffect(() => {

    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);

  }, [activeCard]);

  return (

    <div

      ref={ref}

      className="flex justify-center relative space-x-10 p-10 lg:p-16"

    >

      <div className="relative flex items-start px-4 lg:px-8 z-10">

        <div className="max-w-2xl lg:max-w-3xl">

          {content.map((item, index) => (

            <div 

              key={item.title + index} 

              ref={(el) => { contentRefs.current[index] = el; }}

              className="py-8 lg:py-16 min-h-[40vh] flex flex-col justify-center"

            >

              <h2

                className={cn(

                  "text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight",

                  activeCard === index ? "opacity-100" : "opacity-40"

                )}

              >

                {item.title}

              </h2>

              <p

                className={cn(

                  "text-base sm:text-lg lg:text-xl text-gray-600 max-w-md lg:max-w-lg mt-6 lg:mt-8 leading-relaxed",

                  activeCard === index ? "opacity-100" : "opacity-40"

                )}

              >

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

      <div

        className={cn(

          "hidden lg:block h-[40rem] w-[36rem] sticky top-[calc(50vh-20rem)]",

          contentClassName

        )}

      >

        <div

          style={{ background: backgroundGradient }}

          className="h-full w-full rounded-[3rem] bg-white overflow-hidden relative"

        >

          {content.map((item, index) => (

            <div

              key={`card-content-${index}`}

              className={cn(

                "absolute inset-0 h-full w-full",

                activeCard === index ? "opacity-100" : "opacity-0 pointer-events-none"

              )}

            >

              {item.content ?? null}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};



