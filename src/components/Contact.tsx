"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { personalInfo } from "@/data/resume-data";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: "🌍",
    label: "Location",
    value: "Chennai, India",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/nithya-alagupandian",
    href: personalInfo.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-primary-900/50 to-primary-950"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out for collaborations or opportunities"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <GlassCard
                delay={i * 0.15}
                className="text-center group cursor-pointer"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-accent-400 group-hover:text-accent-300 transition-colors break-all">
                  {item.value}
                </p>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Want a copy of my resume?</p>
          <GradientButton
            href={personalInfo.resumeUrl}
            variant="filled"
            download
          >
            Download Resume
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
