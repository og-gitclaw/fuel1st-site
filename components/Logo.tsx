import Image from "next/image";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

// Source: brand wordmark sharpened from the original at 3x via LANCZOS + unsharp mask.
// Two variants exist:
//   - logo-fuel-first.png       — original colors, for light backgrounds
//   - logo-fuel-first-white.png — alpha preserved, RGB forced to white, for dark backgrounds
export function Logo({ variant = "default", className }: LogoProps) {
  const src =
    variant === "light"
      ? "/images/logo-fuel-first-white.png"
      : "/images/logo-fuel-first.png";
  return (
    <Image
      src={src}
      alt="Fuel First"
      width={600}
      height={186}
      priority
      unoptimized
      className={className}
    />
  );
}
