"use client";

import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/resume-data";

const filters = ["All", "Enterprise", "Mobile App"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Enterprise") return p.category === "enterprise";
    return p.category === "mobile";
  });

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-primary-900/50 to-primary-950"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Key projects I've worked on"
        />

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                filter === f
                  ? "bg-accent-400/20 text-accent-400 border-accent-400/40"
                  : "text-gray-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
