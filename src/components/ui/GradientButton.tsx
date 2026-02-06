export default function GradientButton({
  children,
  href,
  variant = "filled",
  download,
  target,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "filled" | "outlined";
  download?: boolean;
  target?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg";

  const filled =
    "bg-gradient-to-r from-accent-400 to-primary-500 text-white hover:shadow-accent-400/25";

  const outlined =
    "border-2 border-accent-400/50 text-accent-400 hover:bg-accent-400/10 hover:border-accent-400";

  return (
    <a
      href={href}
      download={download || undefined}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${variant === "filled" ? filled : outlined}`}
    >
      {children}
    </a>
  );
}
