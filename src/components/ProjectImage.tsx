"use client";

import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProjectImageProps = {
  src: string | StaticImageData;
  alt?: string;
};

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  return (
    <div className="w-full h-full relative">
      {!hasError && (
        <Image
          src={src}
          alt={alt ?? ""}
          className="object-cover"
          fill
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
