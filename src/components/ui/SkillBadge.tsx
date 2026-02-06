"use client";

import { motion } from "motion/react";

export default function SkillBadge({
  name,
  delay = 0,
}: {
  name: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="inline-block px-4 py-2 text-sm font-medium text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full hover:bg-accent-400/20 hover:border-accent-400/40 transition-colors duration-300 cursor-default"
    >
      {name}
    </motion.span>
  );
}
