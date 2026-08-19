"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Envolve qualquer seção para que ela apareça com fade-in + slide-up
 * sutil quando entra na tela. Usado em todas as seções do site
 * (O que é, Sintomas, Diagnóstico, etc.) para manter consistência.
 */
export default function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
