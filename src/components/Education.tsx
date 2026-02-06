"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/data/resume-data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <GlassCard key={edu.degree} delay={i * 0.2}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-primary-500 flex items-center justify-center text-xl shrink-0">
                  🎓
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-sm text-gray-400 mb-1">{edu.institution}</p>
              <p className="text-xs text-gray-500 mb-4">{edu.location}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold gradient-text">
                  {edu.score}
                </span>
                <span className="text-sm text-gray-400">{edu.scoreLabel}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
