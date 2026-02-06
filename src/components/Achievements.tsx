"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { achievements } from "@/data/resume-data";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-gradient-to-b from-primary-950 to-primary-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements & Awards" />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <GlassCard key={a.title} delay={i * 0.15}>
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{a.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-2">
                    {a.description}
                  </p>
                  {a.year && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-warm-400/10 text-warm-400 border border-warm-400/20">
                      {a.year}
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
