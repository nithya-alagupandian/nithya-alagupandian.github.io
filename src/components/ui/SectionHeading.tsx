"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-accent-400 via-primary-400 to-warm-400" />
      {subtitle && (
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
