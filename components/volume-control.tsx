"use client";

import { Slider } from "@/components/ui/slider";
import { Volume1, Volume2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}
export default function VolumeControl({ volume, setVolume }: Props) {
  function incrementVolume() {
    setVolume((prev) => (prev === 100 ? prev : prev + 1));
  }
  function decrementVolume() {
    setVolume((prev) => (prev === 0 ? prev : prev - 1));
  }

  function handleVolumeChange(e: number[]) {
    setVolume(e[0]);
  }

  return (
    <div className="fixed right-16 top-4 hidden w-52 items-center justify-center gap-1 rounded-lg bg-foreground text-accent md:flex">
      <button
        className="py-2 pl-3"
        onClick={decrementVolume}
      >
        <Volume1 />
      </button>
      <Slider
        className="w-full cursor-pointer"
        defaultValue={[volume]}
        value={[volume]}
        max={100}
        min={0}
        step={1}
        onValueChange={handleVolumeChange}
      />
      <button
        className="pl-1 pr-3"
        onClick={incrementVolume}
      >
        <Volume2 />
      </button>
    </div>
  );
}
