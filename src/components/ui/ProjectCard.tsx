"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/types";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="glass-card p-6 md:p-8 flex flex-col h-full hover:border-accent-400/20 hover:shadow-accent-400/10 hover:shadow-2xl transition-all duration-300"
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full border ${
            project.category === "enterprise"
              ? "bg-primary-500/10 text-primary-300 border-primary-400/20"
              : "bg-warm-400/10 text-warm-400 border-warm-400/20"
          }`}
        >
          {project.category === "enterprise" ? "Enterprise" : "Mobile App"}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent-400 hover:text-accent-300 transition-colors"
          >
            View App &rarr;
          </a>
        )}
      </div>

      {/* Title & client */}
      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
      {project.client && (
        <p className="text-sm text-accent-400 font-medium mb-1">{project.client}</p>
      )}
      <p className="text-xs text-gray-400 mb-3">{project.company}</p>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-gray-200 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
