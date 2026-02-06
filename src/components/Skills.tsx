"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { skills } from "@/data/resume-data";
import type { SkillCategory } from "@/lib/types";

const categories: SkillCategory[] = [
  "Languages & Frameworks",
  "Databases & Caching",
  "Cloud & DevOps",
  "Testing & Security",
  "AI Tools",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-primary-950 to-primary-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {categories.map((category) => (
            <AnimateOnScroll key={category} direction="up">
              <div className="flex flex-col md:flex-row gap-5">
                {/* Category label */}
                <div className="md:w-64 shrink-0">
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                    {category}
                  </h3>
                </div>

                {/* Inline skills */}
                <div className="flex flex-wrap gap-x-10 gap-y-6">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3"
                        >
                          {/* Bigger icon */}
                          <Icon className="text-3xl text-primary-400 shrink-0" />

                          {/* Slightly clearer text */}
                          <span className="text-sm text-white">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
