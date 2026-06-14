import { ReactNode } from "react";

interface ImageZoomProps {
  children: ReactNode;
  className?: string;
}

export default function ImageZoom({
  children,
  className = "",
}: ImageZoomProps) {
  return (
    <div
      className={`group overflow-hidden ${className}`}
    >
      <div className="transition duration-700 group-hover:scale-110">
        {children}
      </div>
    </div>
  );
}