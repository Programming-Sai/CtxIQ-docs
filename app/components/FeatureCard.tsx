import { Calculator, Layers3, Plug, Plus } from "lucide-react";

export default function FeatureCard({
  icon,
  color,
  label,
}: {
  icon: string;
  color: string;
  label: string;
}) {
  const colors = {
    purple: {
      bg: "bg-[rgba(146,129,247,0.2)]",
      shadow: "shadow-[0px_0px_15px_0px_rgba(146,129,247,0.3)]",
      fill: "#9281F7",
    },
    teal: {
      bg: "bg-[rgba(79,219,200,0.2)]",
      shadow: "shadow-[0px_0px_15px_0px_rgba(79,219,200,0.3)]",
      fill: "#4FDBC8",
    },
    blue: {
      bg: "bg-[rgba(92,124,255,0.2)]",
      shadow: "shadow-[0px_0px_15px_0px_rgba(92,124,255,0.3)]",
      fill: "#5C7CFF",
    },
    white: {
      bg: "bg-[rgba(255,255,255,0.1)]",
      shadow: "shadow-[0px_0px_15px_0px_rgba(255,255,255,0.1)]",
      fill: "white",
    },
  };

  const colorScheme = colors[color as keyof typeof colors];
  const Icon =
    {
      plus: Plus,
      plugs: Plug,
      layers: Layers3,
      calculator: Calculator,
    }[icon] ?? Plus;

  return (
    <div className="bg-[rgba(17,17,17,0.5)] border border-white/5 rounded-xl p-4 flex items-center gap-4">
      <div
        className={`${colorScheme?.bg} ${colorScheme.shadow} rounded-lg w-10 h-10 flex items-center justify-center`}
      >
        <Icon
          className="h-4 w-4"
          style={{ color: colorScheme.fill }}
        />
      </div>
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  );
}
