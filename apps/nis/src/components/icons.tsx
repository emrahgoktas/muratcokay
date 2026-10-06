type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string> = {
  Activity: "M22 12h-4l-3 7-6-14-3 7H2",
  Scale: "M12 3v18M3 7h18M7 7l-4 7h8zm10 0l-4 7h8z",
  BatteryLow: "M22 14v-4M2 10v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm4 1h2",
  Bone: "M17 10c.5-1.5 2.5-2 3.5-1s.5 3-1 3.5M7 14c-.5 1.5-2.5 2-3.5 1s-.5-3 1-3.5M8 8l8 8M8 16l8-8",
  HeartPulse: "M2 12h4l2-5 3 10 2-5h5",
  Gauge: "M12 14v-4M5 19a9 9 0 1 1 14 0",
  GitBranch: "M6 3v12M18 9a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM6 21a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-6h6a4 4 0 0 0 4-4",
  CircleDot: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
  CircleDashed: "M12 3a9 9 0 0 1 6.7 3M21 12a9 9 0 0 1-3 6.7M12 21a9 9 0 0 1-6.7-3M3 12a9 9 0 0 1 3-6.7",
  Waves: "M2 8c2 2 4 2 6 0s4-2 6 0 4 2 6 0M2 14c2 2 4 2 6 0s4-2 6 0 4 2 6 0",
  Crosshair: "M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  Wind: "M4 12h12a3 3 0 1 0-3-3M4 18h8a3 3 0 1 0-3-3M4 6h10a3 3 0 1 1-3 3",
  Droplets: "M7 16a5 5 0 0 0 10 0c0-4-5-9-5-9s-5 5-5 9z",
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.Activity} />
    </svg>
  );
}
