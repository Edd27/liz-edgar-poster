"use client";

import { formatTime } from "@/lib/utils";
import { MutableRefObject } from "react";
import { Slider } from "./ui/slider";

interface Props {
  progressBarRef: MutableRefObject<HTMLSpanElement | null>;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  timeProgress: number;
  duration: number;
}

export default function ProgressBar({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}: Props) {
  const handleProgressChange = (e: number[]) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = e[0];
    }
  };

  return (
    <section className="space-y-2">
      <Slider
        ref={progressBarRef}
        defaultValue={[0]}
        value={[timeProgress]}
        max={duration}
        min={0}
        onValueChange={handleProgressChange}
        className="w-full cursor-pointer"
      />
      <div className="flex justify-between text-sm font-medium tabular-nums leading-6">
        <div className="transition-all duration-500">
          {formatTime(timeProgress)}
        </div>
        <div className="transition-all duration-500">
          {formatTime(duration)}
        </div>
      </div>
    </section>
  );
}
