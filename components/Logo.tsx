type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className }: LogoProps) {
  const ink = variant === "light" ? "#FFFFFF" : "#0F172A";
  const accent = variant === "light" ? "#FFFFFF" : "#6000CD";

  return (
    <svg
      role="img"
      aria-label="Fuel1st"
      viewBox="0 0 200 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(0, 6)" aria-hidden="true">
        <path
          d="M2 18 L19 13 L19 3 L23 3 L27 13 L36 13 L33 8 L37 8 L43 13 L46 13 L46 17 L36 17 L36 19 L46 19 L46 23 L43 23 L37 28 L33 28 L36 23 L27 23 L23 33 L19 33 L19 23 L2 18 Z"
          fill={accent}
        />
      </g>
      <text
        x="56"
        y="33"
        fontFamily="'Libre Franklin', system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
        fill={ink}
      >
        Fuel<tspan fill={accent}>1</tspan>st
      </text>
    </svg>
  );
}
