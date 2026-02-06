import { personalInfo } from "@/data/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary-950 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
          >
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-600">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
