import { ReactNode } from "react";

type Variant = "warm" | "deep" | "soft" | "sage";

const palettes: Record<Variant, string> = {
  warm: "from-tan/80 to-tan-deep/90",
  deep: "from-cocoa-soft/90 to-cocoa",
  soft: "from-cream-deep to-tan/60",
  sage: "from-sage/80 to-cocoa-soft/70",
};

export function Placeholder({
  ratio = "4/3",
  label,
  variant = "warm",
  children,
  className = "",
}: {
  ratio?: "4/3" | "3/4" | "16/9" | "1/1" | "5/7";
  label?: string;
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2px] bg-gradient-to-br ${palettes[variant]} ${className}`}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 75% 70%, rgba(0,0,0,0.4), transparent 60%)",
        }}
      />
      {label && (
        <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] text-cream/80 font-medium">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
