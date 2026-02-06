"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/resume-data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 via-primary-500 to-warm-400 transform -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              location={exp.location}
              projects={exp.projects}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
