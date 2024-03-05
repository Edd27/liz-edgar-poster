import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("@/components/audio-player"), { ssr: false });

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center md:justify-center p-4 pt-6 md:pt-4">
      <AudioPlayer />
    </div>
  );
}
