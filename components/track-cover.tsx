"use client";

import { Track } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  track: Track;
  className?: string;
  width?: number;
  height?: number;
}

export default function TrackCover({
  track,
  className,
  width = 847,
  height = 1536,
}: Props) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.remove("animate-slide-in");
      void imageRef.current.offsetWidth;
      imageRef.current.classList.add("animate-slide-in");
    }
  }, [track]);

  return (
    <Image
      ref={imageRef}
      src={`/assets/images/${track.cover}`}
      alt={`Portada de ${track.title}`}
      width={width}
      height={height}
      className={cn(
        "absolute -z-10 h-full w-full animate-slide-in rounded-lg bg-current object-cover opacity-0",
        className,
      )}
    />
  );
}
