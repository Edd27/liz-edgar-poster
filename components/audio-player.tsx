"use client";

import { tracks } from "@/lib/data";
import Atropos from "atropos/react";
import {
  useRef, useState,
} from "react";
import Controls from "./controls";
import DisplayTrack from "./display-track";
import ProgressBar from "./progress-bar";

export default function AudioPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLSpanElement | null>(null);

  const skipForward = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex(prev => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <Atropos rotateXMax={5} rotateYMax={5} className="shadow-2xl">
      <div className="bg-[url('/assets/images/cover.jpg')] bg-cover bg-right rounded-lg h-[calc(100vh-134px)] md:h-[565px] w-[calc(100vw-48px)] md:w-[375px] flex flex-col justify-end overflow-hidden border text-white">
        <div className="bg-gradient-to-t from-black p-6">
          <DisplayTrack {...{
            currentTrack,
            audioRef,
            setDuration,
            skipForward,
          }}/>
          <ProgressBar {...{
            progressBarRef,
            audioRef,
            timeProgress,
            duration,
          }}/>
          <Controls {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            skipForward,
          }}/>
        </div>
      </div>
    </Atropos>
  );
}
