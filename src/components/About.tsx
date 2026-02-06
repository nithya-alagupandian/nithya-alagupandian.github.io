"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { aboutText } from "@/data/resume-data";

const stats = [
  { value: "6.5+", label: "Years Experience" },
  { value: "6", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {aboutText}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} delay={i * 0.15} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
