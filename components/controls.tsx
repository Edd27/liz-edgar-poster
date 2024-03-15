"use client";

import { Track } from "@/lib/types";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import PlayButton from "./play-button";
import RepeatButton from "./repeat-button";
import ShuffleButton from "./shuffle-button";
import SkipBackwardButton from "./skip-backward-button";
import SkipForwardButton from "./skip-forward-button";

interface Props {
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  progressBarRef: MutableRefObject<HTMLSpanElement | null>;
  duration: number;
  setTimeProgress: Dispatch<SetStateAction<number>>;
  tracks: Track[];
  trackIndex: number;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  setCurrentTrack: Dispatch<SetStateAction<Track>>;
  skipForward: () => void;
  volume: number;
  setVolume: Dispatch<SetStateAction<number>>;
}

export default function Controls({
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
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef<number | null>(null);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const skipBackward = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const repeat = useCallback(() => {
    if (audioRef?.current && progressBarRef?.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.ariaValueNow = currentTime.toString();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat, duration]);

  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <section className="flex w-full items-center justify-between">
      <ShuffleButton disabled={true} />
      <SkipBackwardButton onClick={skipBackward} />
      <PlayButton
        isPlaying={isPlaying}
        onClick={togglePlayPause}
      />
      <SkipForwardButton onClick={skipForward} />
      <RepeatButton disabled={true} />
    </section>
  );
}
