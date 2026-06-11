"use client";

import Image from "next/image";

export default function ProtectedImage({
  alt,
  src,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  ...props
}) {
  const handleContextMenu = (e) => e.preventDefault();
  const handleDragStart = (e) => e.preventDefault();

  return (
    <Image
      alt={alt}
      src={src}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      draggable={false}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      style={{ userSelect: "none" }}
      {...props}
    />
  );
}
