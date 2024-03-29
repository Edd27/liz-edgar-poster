import { Track } from "@/lib/types";
import { MutableRefObject } from "react";

interface Props {
  currentTrack: Track;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  setDuration: (duration: number) => void;
  skipForward: () => void;
}

export default function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  skipForward,
}: Props) {
  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration;
    if (seconds) {
      setDuration(seconds);
    }
  };

  return (
    <section className="mb-4">
      <header className="flex w-full items-center justify-between gap-2">
        <div>
          <h1 className="font-bold">{currentTrack.title}</h1>
          <h2 className="text-sm opacity-85">{currentTrack.author}</h2>
        </div>
        <span>
          <svg
            className="h-7 w-7 fill-[#1DB954]"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00b341"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
              stroke-width="0"
            />
          </svg>
        </span>
      </header>
      <audio
        src={`/assets/audio/${currentTrack.src}`}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={skipForward}
      />
    </section>
  );
}
