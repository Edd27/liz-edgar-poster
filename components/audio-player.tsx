"use client";

import { tracks } from "@/lib/data";
import Atropos from "atropos/react";
import { useRef, useState } from "react";
import Controls from "./controls";
import DisplayTrack from "./display-track";
import ProgressBar from "./progress-bar";
import VolumeControl from "@/components/volume-control";

export default function AudioPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(30);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLSpanElement | null>(null);

  const skipForward = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <Atropos
        rotateXMax={5}
        rotateYMax={5}
        className="shadow-2xl"
      >
        <div className="flex h-[calc(100vh-134px)] w-[calc(100vw-48px)] flex-col justify-end overflow-hidden rounded-lg border bg-[url('/assets/images/cover.jpg')] bg-cover bg-right text-white md:h-[565px] md:w-[375px]">
          <div className="bg-gradient-to-t from-black p-6">
            <DisplayTrack
              {...{
                currentTrack,
                audioRef,
                setDuration,
                skipForward,
              }}
            />
            <ProgressBar
              {...{
                progressBarRef,
                audioRef,
                timeProgress,
                duration,
              }}
            />
            <Controls
              {...{
                audioRef,
                progressBarRef,
                duration,
                setTimeProgress,
                tracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                skipForward,
                volume,
                setVolume,
              }}
            />
          </div>
        </div>
      </Atropos>
      <VolumeControl
        volume={volume}
        setVolume={setVolume}
      />
    </>
  );
}
