"use client";

import { motion } from "motion/react";
import type { ProjectDetail } from "@/lib/types";

export default function TimelineItem({
  company,
  role,
  period,
  location,
  projects,
  index,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ProjectDetail[];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-8 mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-400 rounded-full border-4 border-primary-950 transform -translate-x-1/2 mt-8 z-10 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

      {/* Spacer for desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="glass-card p-6 md:p-8 w-full md:w-1/2 ml-8 md:ml-0 hover:border-accent-400/20 transition-all duration-300"
      >
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
            {period}
          </span>
          <span className="text-xs text-gray-400">{location}</span>
        </div>
        <h3 className="text-xl font-bold text-white mt-3">{company}</h3>
        <p className="text-accent-400 font-medium text-sm mb-4">{role}</p>

        {projects.map((project) => (
          <div key={project.name} className="mb-4 last:mb-0">
            <h4 className="text-sm font-semibold text-warm-400 mb-2">
              {project.name}
            </h4>
            <ul className="space-y-1 mb-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm text-gray-300 flex items-start gap-2"
                >
                  <span className="text-accent-400 mt-1 shrink-0">&#9656;</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-primary-800/80 text-gray-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
