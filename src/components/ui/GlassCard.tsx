"use client";

import { motion } from "motion/react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={`glass-card p-6 md:p-8 transition-all duration-300 ${
        hover ? "hover:border-accent-400/20 hover:shadow-accent-400/10 hover:shadow-2xl" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
