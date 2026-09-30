import { useState, type CSSProperties, type ReactNode } from "react";

interface ProductLogoProps {
  /**
   * Path of the logo inside `client/public/products`, e.g. `/products/agent-aier.svg`.
   * Drop the matching SVG there and it is picked up automatically.
   */
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** Shown while the local SVG does not exist yet (legacy remote logo or icon tile). */
  fallback: ReactNode;
}

/**
 * Product logo served from `client/public/products/<slug>.svg`.
 * If that file is missing, the provided fallback is rendered instead, so the
 * site keeps looking right before the official asset is uploaded.
 */
export default function ProductLogo({ src, alt, className, style, fallback }: ProductLogoProps) {
  const [missing, setMissing] = useState(false);

  if (missing) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setMissing(true)}
    />
  );
}
